"use client";

import { addReview } from "@/services/games";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";

export default function AddReview({ id }) {
  const [state, formAction] = useFormState<any, FormData>(addReview, undefined);
  const path = usePathname();
  //const router = useRouter();

  return (
    <form
      action={formAction}
      onSuspendCapture={() => toast.success("Added Successfully")}
      className="w-full h-fit p-2 rounded-lg bg-light dark:bg-middark drop-shadow-md"
    >
      <div className="flex flex-row justify-between">
        <h3 className="text-size-5 self-center capitalize">add your review</h3>
        <div className="flex flex-row items-center justify-evenly gap-2 w-1/2 md:w-2/3">
          <Rate req={false} title={`story`} />
          <Rate req={false} title={`beauty`} />
          <Rate req={false} title={`gameplay`} />
          <Rate req={true} title={`general`} />
        </div>
      </div>
      <textarea
        className="text-size-6 mt-2 w-full min-h-[50px] input-invert"
        name="shortText"
        placeholder="write here..."
        required
      ></textarea>
      <input type="text" name="gameId" defaultValue={id} hidden />
      <div className="w-full flex flex-row items-center justify-around">
        <Link
          href={`${path}/review-form`}
          className="text-accent text-size-6 underline decoration-accent"
        >
          write detailed review
        </Link>
        <button className="btn-accent capitalize">add</button>
      </div>

      {state && <p className="text-danger text-size-6 mt-2 w-full">{state}</p>}
    </form>
  );
}

const Rate = ({ title, req }) => {
  return (
    <div className="flex flex-col items-center">
      <p className={`capitalize text-size-6`}>{title}</p>
      <input
        type="number"
        name={`${title}`}
        required={req}
        className="w-[40px] input-invert p-[0rem_!important] text-size-6"
      />
    </div>
  );
};
