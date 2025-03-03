"use client";
import { editInfo } from "@/services/users";
import { useFormState } from "react-dom";
import AvatarForm from "../AvatarForm";
import { useState } from "react";

export default function EditingForm({ lastData, locale }) {
  const [state, formAction] = useFormState<any, FormData>(editInfo, undefined);
  const [avatar, setAvatar] = useState<any>();
  return (
    <section>
      <form
        action={formAction}
        className="flex flex-col items-start gap-2 w-full"
      >
        <div className="flex flex-col items-start w-full gap-2">
          <div className="flex flex-col gap-1">
            <label>avatar</label>
            <AvatarForm state={avatar} setState={setAvatar} />
            <input
              type="hidden"
              hidden
              name="avatar"
              defaultValue={avatar}
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
            <input type="hidden" hidden name="locale" defaultValue={locale} />
          </div>
          <div className="flex flex-col gap-1 w-1/3 md:w-[90%]">
            <label htmlFor="username">username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              defaultValue={lastData?.username}
              className="input w-[150px]"
            />
          </div>
          <div className="flex flex-col gap-1 w-1/3 md:w-[90%]">
            <label htmlFor="bio">bio</label>
            <textarea
              className="text-size-6 min-h-[50px] input w-[90%]"
              name="bio"
              id="bio"
              placeholder="Bio"
            >
              {lastData?.bio}
            </textarea>
          </div>

          <hr />
          <h2 className="text-size-4">social media username</h2>
          <div className="flex flex-row justify-between items-center w-1/3 md:w-[90%]">
            <label htmlFor="instagram">instagram</label>
            <input
              type="text"
              name="instagram"
              id="instagram"
              placeholder="instagram username"
              defaultValue={lastData?.socials?.instagram}
              className="input w-[150px]"
            />
          </div>
          <div className="flex flex-row justify-between items-center w-1/3 md:w-[90%]">
            <label htmlFor="discord">discord</label>
            <input
              type="text"
              name="discord"
              id="discord"
              placeholder="discord username"
              defaultValue={lastData?.socials?.discord}
              className="input w-[150px]"
            />
          </div>
          <div className="flex flex-row justify-between items-center w-1/3 md:w-[90%]">
            <label htmlFor="steam">steam</label>
            <input
              type="text"
              name="steam"
              id="steam"
              placeholder="steam username"
              defaultValue={lastData?.socials?.steam}
              className="input w-[150px]"
            />
          </div>
        </div>
        <button className="btn-accent capitalize">submit</button>
        {state && <p className="text-danger text-size-6 mt-2">{state}</p>}
      </form>
    </section>
  );
}

// username , Email , socials , bio    , avatar  , Tags
