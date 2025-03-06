"use client";
import { login } from "@/services/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";

export default function LoginForm() {
  const [state, formAction] = useFormState<any, FormData>(login, undefined);
  const router = useRouter();

  useEffect(() => {
    if (state) {
      if (state === "success") {
        toast.success("Loged In!");
        router.push("/");
      } else {
        toast.error(state);
      }
    }
  }, [state]);

  return (
    <form
      action={formAction}
      className="flex flex-col w-[350px] h-fit p-4 gap-8 items-center bg-light dark:bg-darker"
    >
      <h1 className="text-size-3 capitalize">login</h1>
      <div className="flex flex-col items-center w-full gap-2">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input-invert w-[80%]"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input-invert w-[80%]"
          required
        />
      </div>
      <button className="btn-accent capitalize">login</button>
      {state && <p className="text-danger text-size-6 mt-2">{state}</p>}
    </form>
  );
}
