import express from "express";
import compression from "compression";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";

import { checkEnv } from "./utils/env";

import healtz from "./api/healthz";
import users from "./api/users";
import auth from "./api/auth";

checkEnv();

const app = express();
app.use(compression());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/healthz", healtz);
app.use("/users", users);
app.use("/auth", auth);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
