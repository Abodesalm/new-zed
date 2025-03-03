"use client";

import Icon from "../layout/Icon";

function ReviewsSearch({ setForm, form, setSearch }) {
  return (
    <section className="w-full flex flex-row items-center justify-center gap-12">
      <input
        type="search"
        disabled
        className="input w-1/3 md:w-2/3"
        placeholder="search...   (not working now)"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex flex-row gap-1">
        <button
          className={` w-[30px] h-[30px] flex-center rounded-md  ${
            form ? "btn-ui-radio" : "btn-ui-radio-active"
          } `}
          onClick={() => setForm(false)}
        >
          <Icon i={`normal-form`} />
        </button>
        <button
          className={` w-[30px] h-[30px] flex-center rounded-md  ${
            form ? "btn-ui-radio-active" : "btn-ui-radio"
          } `}
          onClick={() => setForm(true)}
        >
          <Icon i={`table-form`} />
        </button>
      </div>
    </section>
  );
}

export default ReviewsSearch;
