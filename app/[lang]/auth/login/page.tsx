import LoginForm from "@/sections/auth/LoginForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="pad w-full h-[70vh] flex-center flex-col">
      <LoginForm />
      <Link href={`/auth/signup`} className="mt-4 underline text-accent/70">
        Do not have an account ? Sign up!
      </Link>
    </div>
  );
}
