export default {
  type: "postgres",
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,

  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },

  migrations: ["./src/shared/infra/typeorm/migrations/*.ts"],

  cli: {
    migrationsDir: "./src/shared/infra/typeorm/migrations",
  },

  entities: [
    "./src/modules/accounts/infra/typeorm/entities/*.ts",
    "./src/modules/features/infra/typeorm/entities/*.ts",
  ],
};
