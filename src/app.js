import express from "express";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";
import searchRoutes from "./routes/searchRoutes.js";
import typeDefs from "./graphql/schema.js";
import resolvers from "./graphql/resolvers.js";
import apiLimiter from "./middleware/rateLimiter.js";
dotenv.config();

const app = express();
app.use(express.json());

// REST API Routes
app.use("/api", apiLimiter, searchRoutes);

// GraphQL Server
const server = new ApolloServer({ typeDefs, resolvers });

const startServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(
      `📡 GraphQL available at http://localhost:${PORT}${server.graphqlPath}`
    );
  });
};

startServer();
