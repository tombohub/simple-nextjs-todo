import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function Home() {
  async function createTodo(formData: FormData) {
    "use server";
    const title = formData.get("title");
    const status = "Not Done";
    await db.insertInto("todos").values({ title, status }).execute();
    // revalidatePath("/");
    redirect("/");
  }

  async function getTodos() {
    const data = await db
      .selectFrom("todos")
      .select(["title", "status", "id"])
      .execute();
    return data;
  }

  const todos = await getTodos();
  return (
    <>
      <form action={createTodo}>
        <input name="title" />
        <button>Add</button>
      </form>

      {todos.map(todo => (
        <li key={todo.id}>
          {todo.title} | {todo.status} |
        </li>
      ))}
    </>
  );
}
