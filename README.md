# Preparation

Before you start the project, please ensure that you have installed the `npm` cli

1. Install typescript cli

   ```bash
   $ sudo npm i typescript -g
   ```

&thinsp;

2. Init the typescipt config file

   ```bash
   $ tsc --init
   ```

&thinsp;

3. uncomment the below content (tsconfig.json)

   - `outDir` && `rootDir` (line 17, 18)

   ```
   "outDir": "./dist",
   "rootDir": "./src"
   ```

   - `moduleResolution` (line 44)

   - `experimentalDecorators` && `emitDecoratorMetadata` (line 62, 63)

&thinsp;

4. Init project

   Use `npm` cli init project

   ```bash
   $ npm init -y
   ```

&thinsp;

5. Install Package

   ```bash
   $ npm i bcrypt dotenv express express-graphql graphql pg reflect-metadata typeorm uuid
   $ npm i -D @types/bcryptjs @types/dotenv @types/express @types/express-graphql @types/graphql @types/node @types/pg @types/uuid
   $ npm i -D nodemon ts-node typescript
   ```

6. Update script (package.json)

   ```bash
   # package.json
     "scripts": {
       "start": "node dist/app.js",
       "dev": "nodemon src/app.ts",
       "build": "tsc -p ."
     },
   ```

7. Create postgre database

   ```bash
   $ sudo -u postgres createdb graphql_jwt_auth_dev
   ```

8. Create typeorm config file

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

### File Structure

```
├── Makefile
├── ormconfig.json
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── api
│   │   └── schema.ts
│   ├── app.ts
│   ├── entity
│   │   └── user.ts
│   ├── model
│   │   └── result.ts
│   └── utils
│       └── database.ts
└── tsconfig.json

```

# How to run

You can use the `make` cli or `npm run` cli to start the project

    $ make run

or

    $ npm run dev
