"use client";

import { signUp, test } from "@/actions/auth";
import { SignUpSchema } from "@/schemas/sign-up.schema";
import { ActionResponse } from "@/types/actions";
import { getCsrfToken } from "next-auth/react";
import { useActionState } from "react";

const initialState: ActionResponse<SignUpSchema> = {
  success: false,
  message: "",
};

export const SignUpForm = () => {
  const [state, action, isPending] = useActionState(signUp, initialState);
  const csrf = getCsrfToken();
  console.log(csrf);
  console.log(state);
  return (
    <form action={action} className="flex flex-col gap-4">
      <label>
        Email
        <input type="email" name="email" defaultValue={state.inputs?.email} />
        {state?.errors?.email && <p>{state?.errors.email[0]}</p>}
      </label>
      <label>
        Name
        <input type="text" name="name" defaultValue={state.inputs?.name} />
        {state?.errors?.name && <p>{state?.errors.name[0]}</p>}
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          defaultValue={state.inputs?.password}
        />
        {state?.errors?.password && <p>{state?.errors.password[0]}</p>}
      </label>
      <button>{isPending ? "Signing up..." : "Sign up"}</button>
      <button
        type="button"
        onClick={async () => {
          test();
        }}
      >
        123123
      </button>
    </form>
  );
};
