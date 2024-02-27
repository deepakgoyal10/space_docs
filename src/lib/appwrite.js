import { Client, Databases, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65d2f094df3a4838812b");
export const account = new Account(client);
export const databases = new Databases(client);
