import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async (): Promise<Connection> => {
  const connectionOptions = await getConnectionOptions();

  return createConnection({
    ...connectionOptions,
    name: "default",
  });
};
