const dotenv = require('dotenv');

module.exports = [
    {
        name: 'default',
        type: process.env.DB_DIALECT,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 5433,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        schema: 'public',
        synchronize: false,
        entities: ['./src/modules/**/infra/database/typeorm/entities/*.ts'],
        migrations: ['./src/shared/infra/database/typeorm/migrations/*.ts'],
        cli: {
            migrationsDir: './src/shared/infra/database/typeorm/migrations',
        },
    }
];
