import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

// Connect to MongoDB
await client.connect();

const db = client.db(process.env.AUTH_DB);

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,

  emailAndPassword: {
    enabled: true,
  },

  database: mongodbAdapter(db),

  user: {
    additionalFields: {
      role: {
        default: "seeker",
      },
    },
  },
});