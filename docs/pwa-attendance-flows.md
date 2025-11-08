# PWA de Asistencia para Empleados

Documenta los flujos que debe cubrir la aplicación PWA instalada en los dispositivos de las obras (celular/tablet controlado por un encargado).

## Contexto

- Los empleados **no tienen teléfono propio** para registrar asistencia.
- Al llegar a la obra, el encargado les entrega un dispositivo con cámara (celular o computador).
- El empleado ingresa su **cédula** y se valida contra `companies.employees`.
- Cada registro de asistencia debe asociarse a una **selfie** tomada en el momento.
- Si el empleado nunca ha cargado una selfie base, el sistema debe forzar un flujo de **enrolamiento** antes de permitir registros.

---

## Flujos principales

### 1. Enrolamiento de selfie base

Escenario: el empleado existe en la tabla `companies.employees`, pero no tiene una foto de referencia en MinIO.

1. El encargado abre el PWA y entrega el dispositivo al empleado.
2. El empleado ingresa su cédula.
3. El sistema verifica si hay un empleado con esa identificación:
   - **Si no existe**: se muestra mensaje de error (“No encontramos un empleado con esa cédula. Verifique y vuelva a intentarlo.”).
   - **Si existe pero está inactivo**: mensaje informativo (“Empleado deshabilitado. Contacta al supervisor.”).
4. Al detectar que **no hay selfie base**:
   - Se muestra una UI explicativa (“Necesitamos registrar tu foto de referencia”).
   - Se abre la cámara para capturar una o varias fotos iniciales en buenas condiciones de luz.
   - El encargado puede anular/repetir la foto si salió mal.
5. El PWA sube la(s) foto(s) a MinIO usando un endpoint dedicado (por ejemplo `POST employees/{employeeId}/image/base`), guardando la URL/objeto en la tabla correspondiente.
6. El sistema confirma que la selfie base fue registrada y notifica que ya puede marcar asistencia normalmente.

### 2. Marcaje de asistencia diario

Escenario: el empleado ya tiene selfie base.

1. El empleado ingresa su cédula en el dispositivo.
2. El PWA recupera su ficha (nombre, foto base, estado) y confirma que está habilitado.
3. Se solicita al empleado que se tome la selfie del momento:
   - Muestra vista previa de la cámara.
   - Permite repetir si la foto salió borrosa u oscura.
4. Una vez aceptada la foto:
   - (Futuro) Comparar automáticamente con la selfie base para validar identidad.
   - Por ahora, se adjunta la selfie al registro para auditoría manual.
5. El PWA pregunta si se trataba de **entrada** o **salida** (o lo deduce según el último registro del día).
6. Se envía la marca al backend (`POST /employees/{employeeId}/attendance`) con:
   - Tipo de marca (entrada/salida),
   - Timestamp,
   - Sede actual (derivada del dispositivo o seleccionada),
   - URL de la selfie del momento.
7. El backend responde con confirmación y el PWA muestra un mensaje del tipo “Asistencia registrada a las 07:05 AM”.

---

## Consideraciones técnicas pendientes

- **Usuarios/credenciales**: los empleados importados via Excel no tienen usuario en el módulo Identity. El PWA plantea un flujo sin contraseña (cédula + selfie). Si en algún momento se requiere autenticación fuerte para el empleado, deberemos crear usuarios Identity automáticamente y definir cómo entregamos las credenciales.
- **Selección de sede**: si un mismo dispositivo sirve para varias obras, el PWA debe permitir escoger la sede activa antes de registrar asistencias.
- **Comparación biométrica**: inicialmente solo almacenamos selfies como evidencia. En el futuro se puede integrar un servicio de reconocimiento facial que compare la selfie del momento con la base.
- **Respaldo y auditoría**: todas las selfies se almacenan en MinIO y se relacionan con cada marca de asistencia para auditorías posteriores.
- **Conectividad**: si la obra no tiene internet todo el tiempo, el PWA deberá soportar cola local y reintentos.

Este documento sirve de guía para implementar los componentes del PWA (`apps/employee-pwa`) y los endpoints de backend necesarios (captura base, registro de asistencia, etc.).
