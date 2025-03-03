import SignupForm from "@/sections/auth/SignupForm";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="pad w-full h-[70vh] flex-center flex-col">
      <SignupForm />
      <Link href={`/auth/login`} className="mt-4 underline text-accent/70">
        have an account ? Login!
      </Link>
    </div>
  );
}
