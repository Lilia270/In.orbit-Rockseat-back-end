import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./.migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://metas-db_owner:R3pFBUGLOv2u@ep-square-shadow-a596tvpr.us-east-2.aws.neon.tech/metas-db?sslmode=require",
  },
});
