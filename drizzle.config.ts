import { type Config } from "drizzle-kit";

import { env } from "~/env.mjs";

export default {
  schema: "./src/server/db/schema.ts",
  driver: "pg",
  verbose: true,
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
  tablesFilter: ["copy_hub_t3_*"],
} satisfies Config;
