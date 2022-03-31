# Template para Projeto Nodejs

## Principais Tecnologias usadas

- Node.js
- Express
- Typeorm
- Typescript
- Babel

#

## Configuração do typeorm

Criar um arquivo .env e substituir valores com suas credenciais do banco de dados.

```bash
JWT_KEY=your_key
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

CLI do typeorm

```bash
$ yarn typeorm
```

# Comandos básicos

## Iniciar desenvolvimento

```bash
$ yarn dev
```

## Criar uma build

```bash
$ yarn build
```

## Iniciar projeto

```bash
$ yarn start
```
