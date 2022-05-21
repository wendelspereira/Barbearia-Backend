module.exports = {
  type: "postgres",
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  port: process.env.DATABASE_PORT,
  host: process.env.DATABASE_HOST,

  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },

  migrations: ["./dist/src/shared/infra/typeorm/migrations/*.ts"],

  cli: {
    migrationsDir: "./dist/src/shared/infra/typeorm/migrations",
  },

  entities: [
    "./dist/src/modules/accounts/infra/typeorm/entities/*.ts",
    "./dist/src/modules/features/infra/typeorm/entities/*.ts",
  ],
};
