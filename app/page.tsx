import { getDB } from "@/db";
import { users } from "@/db/schemas";

export const dynamic = "force-dynamic";

export default async function Home() {
  const db = await getDB();
  const found = await db.query.users.findMany();

  console.log(found);

  async function handleClick() {
    "use server";
    const db = await getDB();
    const result = await db
      .insert(users)
      .values({ email: "test@example.com", password: "123456" })
      .returning();
    console.log(result);
  }

  return (
    <div>
      <form action={handleClick}>
        <button>Click me</button>
      </form>
    </div>
  );
}
