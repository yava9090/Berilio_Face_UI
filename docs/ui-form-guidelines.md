# UI Form Guidelines for Berilio Face Dashboard

> Basado en el tema Fuse y en los requisitos de los formularios de compañías, sedes y empleados.

## 1. Estructura General
- **Reactive Forms**: usar `FormBuilder` y `FormGroup` como en `auth/sign-in`. Planear migración a typed forms cuando Angular 18 sea el mínimo.
- **Diseño responsivo**: utilidades Tailwind (`flex`, `grid`, `sm:w-1/2`) y contenedores `bg-card`/`rounded-2xl`. Formularios extensos = tabs o `mat-accordion`.
- **Separación de secciones**: encabezados claros, `mat-divider` o steps ligeros para flujos largos (ej. compañía → datos generales, facturación, sedes).

## 2. Estados y Experiencia de Usuario
- Deshabilitar el formulario al enviar (`form.disable()`), reactivarlo en `finalize()` del observable.
- Mostrar `mat-progress-spinner` en el botón primario durante el envío.
- Feedback con `FuseAlert` o snackbar (`MatSnackBar`), diferenciando mensajes de éxito/error.
- Confirmaciones (`MatDialog`) para archivar/eliminar, mostrando nombre o identificador clave.

## 3. Validaciones
- Validadores sincrónicos declarados en el `FormGroup` (requeridos, longitud, patrones).
- Validaciones asíncronas (ej. identificación duplicada) mediante servicios que devuelvan observables y usen `setErrors`.
- Mostrar `mat-error` sólo cuando el control esté inválido y tocado (`invalid && (dirty || touched)`).
- Centralizar textos de error comunes en un helper (`FormErrorsService`) para consistencia.

## 4. Componentes Comunes
- **Dirección**: `app-address-form` con `FormGroup` hijo (`street`, `city`, `state`, `country`, `postalCode`, `additionalInfo`).
- **Horarios**: componente con `FormArray` de entradas `{ day, start, end }`, usando `MatSelect` para día y `input type="time"` o picker.
- **Coordenadas**: controles para latitud/longitud con validaciones de rango y posibilidad de mapa futuro.
- **Listas**: `MatTable` con filtros y paginación manual hasta que el backend soporte `skip/take`.

## 5. Accesibilidad y Localización
- Incluir `mat-label` y `aria-label` descriptivos; evitar usar solo placeholders.
- Botones con texto + icono (o tooltip si son solo icono).
- Textos preparados para Transloco (reemplazar strings literales por claves una vez aprobado el copy).

## 6. Flujo CRUD sugerido
1. **Listado**: tabla con acciones contextuales, filtros y estado vacío claro.
2. **Crear/Editar**: formulario en drawer o vista dedicada, con validaciones en vivo.
3. **Detalle**: tabs para información general, sedes, empleados, historial.
4. **Archivar/Eliminar**: diálogo de confirmación y feedback inmediato.

## 7. Servicios y Estado
- Servicios Angular (`CompanyService`, `LocationService`, `EmployeeService`) en `core` para encapsular las llamadas REST.
- Estado compartido con signals/store ligero para listas y selección actual (ej. `CompanyStore`).
- Interceptores actuales cubren auth; evaluar interceptor de errores global para mapear mensajes a `FuseAlert`.

## 8. Pruebas y Documentación
- Unit tests: asegurarse de que los formularios crean controles requeridos y validaciones (ej. `expect(form.get('name')?.errors?.['required']).toBeTrue()`).
- E2E/manual: escenarios felices + negativos (campos obligatorios, validaciones de horario).
- Mantener actualizado este documento con nuevos componentes compartidos o cambios en UX.

---

Estas directrices dan una base común para implementar los formularios de Compañías, Locations y Empleados con una experiencia consistente en el dashboard.

