# Backend Entities & Endpoints Inventory

> Última actualización: `2025-11-03`

Este documento resume los contratos expuestos actualmente por el backend de Berilio Face para las entidades principales. El objetivo es tener una referencia versionada que respalde el diseño de formularios y flujos en el dashboard.

## Módulo Companies

### Compañías
- **GET `/companies`** → `Result<IReadOnlyCollection<CompanyResponse>>`
  - `CompanyResponse`: `{ id, name, ownerUserId, isArchived }`
- **GET `/companies/{id}`** → `CompanyResponse`
- **POST `/companies`**
  - Body: `{ name, ownerUserId }`
  - Respuesta `201 Created` con `Guid` de la compañía.
- **PUT `/companies/{id}`**
  - Body: `{ name }`
  - Respuesta `204 NoContent`.
- **DELETE `/companies/{id}`** (`ArchiveCompany`)
  - Respuesta `204 NoContent`.
- **POST `/companies/{id}/restore`** (`RestoreCompany`)
  - Respuesta `204 NoContent`.
- **Permisos**: `Permissions.GetCompanies`, `Permissions.ModifyCompanies`

### Locations (Sedes)
- **GET `/companies/{companyId}/locations`**
  - Devuelve `LocationResponse[]`
- **GET `/companies/{companyId}/locations/{locationId}`**
  - `LocationResponse` → se proyecta a `LocationViewModel` en presentación:
    ```json
    {
      "id": "guid",
      "companyId": "guid",
      "name": "string",
      "address": {
        "street": "string",
        "additionalInfo": "string?",
        "city": "string",
        "state": "string",
        "country": "string",
        "postalCode": "string"
      },
      "coordinate": {
        "latitude": decimal,
        "longitude": decimal
      },
      "schedule": [
        { "day": "Monday", "start": "08:00", "end": "17:00" }
      ]
    }
    ```
- **POST `/companies/{companyId}/locations`**
  - Body:
    ```json
    {
      "name": "string",
      "address": { ... },
      "coordinate": { ... },
      "schedule": [
        { "day": "Monday", "start": "HH:mm", "end": "HH:mm" }
      ]
    }
    ```
  - Horas se parsean con `TimeOnly.ParseExact("HH:mm")`.
  - Respuesta `201 Created` con `{ locationId }`.
- **PUT `/companies/{companyId}/locations/{locationId}`**
  - Body igual que POST.
  - Respuesta `204 NoContent`.
- **DELETE `/companies/{companyId}/locations/{locationId}`**
  - Respuesta `204 NoContent`.
- **Permisos**: lectura `GetCompanies`, escritura `ModifyCompanies`.

### Employees
- **GET `/locations/{locationId}/employees`**
  - Devuelve `EmployeeResponse[]`.
- **GET `/employees/{employeeId}`**
  - `EmployeeResponse`: `{ id, locationId, firstName, lastName, identificationNumber, phone }`
- **POST `/companies/{companyId}/locations/{locationId}/employees`**
  - Body: `{ firstName, lastName, identificationNumber, phone }`
  - Respuesta `201 Created` con `{ employeeId }`.
- **PUT `/employees/{employeeId}`**
  - Body igual que POST.
  - Respuesta `204 NoContent`.
- **DELETE `/employees/{employeeId}`**
  - Respuesta `204 NoContent`.
- **Permisos**: lectura `GetCompanies`, escritura `ModifyCompanies`.

### Relaciones y Consideraciones
- Jerarquía: `Company -> Location -> Employee`.
- Para crear un empleado se requieren `companyId` y `locationId` válidos.
- No hay paginación ni filtros aún; los listados devuelven colecciones completas.
- No existen más atributos (por ejemplo, credenciales o roles específicos) en los DTO actuales.
- Se utilizan DTOs específicos para direcciones, coordenadas y horarios; conviene modelar componentes UI reutilizables para esas estructuras.

## Módulos pendientes
- **Employees module (standalone)**: actualmente sin contenido; toda la gestión de personal vive dentro del módulo Companies.
- **Attendance**: no revisado en este documento (pendiente si los formularios requieren asistencia/fichajes).

---

Este inventario se debe mantener actualizado cuando se agreguen campos o endpoints nuevos. Cualquier cambio en el backend que impacte formularios debe reflejarse aquí antes de planificar la implementación en el frontend.

