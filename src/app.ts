import express from "express";
import { graphqlHTTP } from "express-graphql";
import dotenv from "dotenv";
import { schema, root } from "./api/schema";
import { Connection, createConnection } from "typeorm";

dotenv.config();

createConnection()
  .then(async (connection: Connection) => {
    const app = express();

    app.use(express.json());

    const { PORT, GRAPHQL_PATH } = process.env;

    app.use(
      GRAPHQL_PATH!,
      graphqlHTTP((request, response, graphQLParams) => ({
        schema: schema,
        rootValue: root,
        graphiql: true,
        context: {
          req: request,
          res: response
        }
      }))
    );

    app.listen(parseInt(PORT!));
    console.log(
      `Server started at url: http://localhost:${PORT!}${GRAPHQL_PATH}`
    );
  })
  .catch(error => {
    console.log(error);
  });
