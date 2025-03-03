"use client";
import { signup } from "@/services/auth";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";

export default function SignupForm() {
  const [state, formAction] = useFormState<any, FormData>(signup, undefined);
  const handle = () => {
    toast.success("loged in successfully");
  };
  return (
    <form
      action={formAction}
      className="flex flex-col w-[350px] h-fit p-4 gap-8 items-center bg-light dark:bg-darker"
    >
      <h1 className="text-size-3 capitalize">sign up</h1>
      <div className="flex flex-col items-center w-full gap-2">
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="input-invert w-[80%]"
          required
        />
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
      <button className="btn-accent capitalize" onClick={() => handle}>
        sing up
      </button>
      {state && <p className="text-danger text-size-6 mt-2">{state}</p>}
    </form>
  );
}
