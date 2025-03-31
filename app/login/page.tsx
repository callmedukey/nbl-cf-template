import { auth, signIn } from "@/auth";
import { getDB } from "@/db";

const page = async () => {
  const db = await getDB();

  const user = await db.query.users.findFirst();

  const session = await auth();

  console.log(session);
  return (
    <div className="flex items-center justify-center min-h-screen flex-col">
      {`Logged In: ${user?.name}`}
      <form
        action={async (formData) => {
          "use server";
          await signIn("credentials", formData);
        }}
      >
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button>Sign in</button>
      </form>
    </div>
  );
};

export default page;
