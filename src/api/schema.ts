import { Request, Response } from "express";
import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Profile {
    ukey: ID
    email: String
  }

  type RegisteredUser {
    ukey: ID
    tmp_confirm_token: ID
  }

  type AccessToken {
    ukey: ID
    access_token: ID
  }

  type Query {
    profile(ukey: String!): Profile
  }

  type Mutation {
    register(email: String!, password: String!, confirmation: String!): RegisteredUser
    login(email: String!, password: String!): AccessToken
    confirm(email: String!): Boolean
  }
`);

const root = {
  profile: async ({}, {}, context: any) => {
    console.log(context);
    context.res.status(200);
    return { ukey: "userKey", email: "email" };
  },

  register: async (
    {
      email,
      password
    }: {
      email: string;
      password: string;
      confirmation: string;
    },
    context: any
  ) => {
    context.res.status(201);
    return { ukey: "userKey", tmp_conform_token: "tmpConfirmToken" };
  },

  confirm: async (
    { email }: { email: string },
    context: any
  ): Promise<Boolean> => {
    context.res.status(200);

    return true;
  },

  login: async (
    { email, password }: { email: string; password: string },
    context: any
  ) => {
    context.res.status(200);
    return { ukey: "userKey", access_token: "accessToken" };
  }
};

export { schema, root };
