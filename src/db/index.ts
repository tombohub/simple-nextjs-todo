import { Kysely, SqliteDialect } from "kysely";
import Database from "better-sqlite3";
import { DB } from "kysely-codegen";

const sqlite = new Database(
  "D:/PROJEKTI/prototypes/simple-nextjs-todo/db.sqlite"
);
export const db = new Kysely<DB>({
  dialect: new SqliteDialect({
    database: sqlite,
  }),
});
