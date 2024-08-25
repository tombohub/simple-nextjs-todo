import { db } from "./index";

async function listTodos() {
  const data = await db
    .selectFrom("todos")
    .select(["title", "status"])
    .execute();
  return data;
}

listTodos()
  .then(d => console.dir(d))
  .catch(e => console.error(e));
