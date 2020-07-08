# Prepare

1. install npm
2. install typescript cli
   ```bash
   $ sudo npm i typescript -g
   ```

**typescript config init**

```bash
$ tsc --init
```

**uncomment the below content**

1. `outDir` && `rootDir` (line 17, 18)

   ```
   "outDir": "./dist",
   "rootDir": "./src"
   ```

2. `moduleResolution` (line 44)
3. `experimentalDecorators` && `emitDecoratorMetadata` (line 62, 63)

**Init project**

```bash
$ npm init -y
```

**Install Package**

```bash
$ npm i bcrypt dotenv express express-graphql graphql pg reflect-metadata typeorm uuid
$ npm i -D @types/bcryptjs @types/dotenv @types/express @types/express-graphql @types/graphql @types/node @types/pg @types/uuid
$ npm i -D nodemon ts-node typescript
```

**Change Script**

```bash
# package.json
  "scripts": {
    "start": "node dist/app.js",
    "dev": "nodemon src/app.ts",
    "build": "tsc -p ."
  },
```

**Create postgre database**

```bash
$ sudo -u postgres createdb graphql_jwt_auth_dev
```

**Create typeorm config**

```bash
# ormconfig.json

{
  "type": "postgres",
  "host": "localhost",
  "username": "postgres",
  "password": "",
  "database": "graphql_jwt_auth_dev",
  "synchronize": true,
  "logging": false,
  "entities": ["src/entity/**/*.ts"],
  "migrations": ["src/migration/**/*.ts"],
  "subscribers": ["src/subscriber/**/*.ts"]
}

```
