
# Prepare
1. install npm 
2. install typescript cli
    ```bash
    $ sudo npm i typescript -g
    ```

__typescript config init__
```bash
$ tsc --init
```


__uncomment the below content__

1. `outDir` && `rootDir` (line 17, 18)
    ```
    "outDir": "./dist",
    "rootDir": "./src"
    ```

2. `moduleResolution` (line 44)
3. `experimentalDecorators` && `emitDecoratorMetadata` (line 62, 63)


__Init project__
```bash
$ npm init -y
```

__Install Package__

```bash
$ npm i bcrypt dotenv express express-graphql graphql pg reflect-metadata typeorm uuid
$ npm i -D @types/bcryptjs @types/dotenv @types/express @types/express-graphql @types/graphql @types/node @types/pg @types/uuid
$ npm i -D nodemon ts-node typescript
```

__Change Script__
```bash
# package.json
  "scripts": {
    "start": "node dist/app.js",
    "dev": "nodemon src/app.ts",
    "build": "tsc -p ."
  },
```