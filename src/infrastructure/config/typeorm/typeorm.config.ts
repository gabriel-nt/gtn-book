import * as dotenv from 'dotenv';
import { ConnectionOptions } from 'typeorm';

if (process.env.NODE_ENV === 'local') {
  dotenv.config({ path: '../../../../local.env"' });
}

const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  schema: process.env.DATABASE_SCHEMA,
  entities: [__dirname + '../../../domain/modules/**/*.entity{.ts,.js}'],
  migrations: ['../../typeorm//migrations/*.ts'],
  cli: {
    migrationsDir: '../../typeorm/typeorm/migrations',
  },
  // ssl: {
  //   rejectUnauthorized: false,
  // },
};

export default config;
