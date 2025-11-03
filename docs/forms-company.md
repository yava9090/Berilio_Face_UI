# Company Forms Plan

Basado en los contratos backend y las directrices UI.

## Casos de uso
- Listado
- Crear
- Editar
- Archivar / Restaurar
- Detalle con tabs

## Listado
- `MatTable` columnas: Nombre, Propietario, Estado, Acciones.
- Filtros: búsqueda por nombre, filtro de estado.
- Acciones: Ver, Editar, Archivar/Restaurar.

## Crear / Editar
- Campos:
  - `name` (required, min 3, max 120)
  - `ownerUserId` (solo creación; hidden hasta catálogo)
- Layout: drawer/modal.
- Feedback: spinner en botón, alert success/error.

## Detalle
- Cabecera con chip de estado.
- Tabs: General, Sedes, Empleados.
- Acciones principales en cabecera (Editar, Archivar/Restaurar).

## Archivar / Restaurar
- Dialog `MatDialog` confirmando con nombre.
- Archivar: `DELETE /companies/{id}`.
- Restaurar: `POST /companies/{id}/restore`.
- Snackbar con resultado.

## Navegación / Estado
- Crear redirige a detalle o listado según preferencia.
- Store (`CompanyStore`): `companies`, `selectedCompany`, `loading`, `error`.
- Resolvers para cargar compañía antes de entrar al detalle.

## Pendientes
- Catálogo de usuarios para `ownerUserId`.
- Campos adicionales futuros (NIF, logo) → reservar espacio en UI.
