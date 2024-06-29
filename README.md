# API para "MICRO" MVP de agendamentos

## Users Table Schema

| Campo      | Tipo     |
|------------|----------|
| `id`       | Int      |
| `name`     | String   |
| `email`    | String   |
| `password` | String   |
| `phone`    | String   |
| `city`     | String   |
| `isActive` | Boolean  |
| `role`     | Int      |
| `createdAt`| DateTime |
| `updateAt` | DateTime |

O campo `role` na tabela `Users` indica o papel ou função do usuário no sistema. Os valores possíveis são:

- **1 (Client)**: Cliente comum.
- **2 (Employee)**: Funcionário ou colaborador.
- **3 (Admin)**: Administrador com permissões ampliadas no sistema.
