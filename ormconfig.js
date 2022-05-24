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

  entities: ["src/**/**.entity{.ts,.js}"],

  migrations: ["src/**/migrations/*.ts"],

  cli: {
    migrationsDir: "src/shared/infra/typeorm/migrations",
  },
  synchronize: false,
};
