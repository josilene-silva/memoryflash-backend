import "dotenv/config";
import { Client } from "pg";

const client = new Client({
  user: `${process.env.DB_USER}`,
  host: `${process.env.DB_HOST}`,
  database: `${process.env.DB_NAME}`,
  password: `${process.env.DB_PASS}`,
  port: Number(`${process.env.DB_PORT}`),
});

async function createCategories() {
  await client.connect();
  await client.query(
    `
     INSERT INTO categories (name) VALUES('Português');
     INSERT INTO categories (name) VALUES('Matemática');
     INSERT INTO categories (name) VALUES('Ciências Naturais');
     INSERT INTO categories (name) VALUES('Inglês');
     INSERT INTO categories (name) VALUES('Espanhol');
     INSERT INTO categories (name) VALUES('Geografia');
     INSERT INTO categories (name) VALUES('Sociologia');
     INSERT INTO categories (name) VALUES('História');
    `
  );
  await client.end();
}

createCategories().then(() => console.log("Categorias criadas"));
