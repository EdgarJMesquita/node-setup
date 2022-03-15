# Instalação

```bash
$ yarn init
$ yarn add -D typescript
$ npx tsc --init
$ yarn add ts-node-dev -D
$ yarn add -D tsconfig-paths
$ yarn add -D @babel/cli @babel/core @babel/node @babel/preset-env @babel/preset-typescript label-plugin-module-resolver
```

```bash
KEY=your_key
TYPEORM_CONNECTION=database_type
TYPEORM_HOST=database_host
TYPEORM_PORT=database_port
TYPEORM_USERNAME=database_username
TYPEORM_PASSWORD=database_password
TYPEORM_DATABASE=database_name
TYPEORM_MIGRATIONS=src/database/migrations/*.ts
TYPEORM_MIGRATIONS_DIR=src/database/migrations
TYPEORM_ENTITIES=src/entities/*.ts
TYPEORM_ENTITIES_DIR=src/entities
```
