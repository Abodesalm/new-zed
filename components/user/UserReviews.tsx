"use client";
import { useState } from "react";
import ReviewsBody from "./ReviewsBody";
import ReviewsSearch from "./ReviewsSearch";

const data = [
  {
    name: "hue",
    cover: "hue.jpg",
    id: "12yhg1uygd187",
    username: "abodesalm",
    rates: {
      story: 80,
      beauty: 90,
      gameplay: 85,
      general: 85,
    },
  },
  {
    name: "terraria",
    cover: "terraria.jpg",
    id: "12yhg1217fg7",
    username: "abodesalm",
    rates: {
      story: 80,
      beauty: 90,
      gameplay: 85,
      general: 85,
    },
  },
  {
    name: "terraria",
    cover: "terraria.jpg",
    id: "12yhg1217fg7",
    username: "abodesalm",
    rates: {
      story: 80,
      beauty: 90,
      gameplay: 85,
      general: 85,
    },
  },
  {
    name: "terraria",
    cover: "terraria.jpg",
    id: "12yhg1217fg7",
    username: "abodesalm",
    rates: {
      story: 80,
      beauty: 90,
      gameplay: 85,
      general: 85,
    },
  },
  {
    name: "terraria",
    cover: "terraria.jpg",
    id: "12yhg1217fg7",
    username: "abodesalm",
    rates: {
      story: 80,
      beauty: 90,
      gameplay: 85,
      general: 85,
    },
  },
  {
    name: "terraria",
    cover: "terraria.jpg",
    id: "12yhg1217fg7",
    username: "abodesalm",
    rates: {
      story: 80,
      beauty: 90,
      gameplay: 85,
      general: 85,
    },
  },
  {
    name: "terraria",
    cover: "terraria.jpg",
    id: "12yhg1217fg7",
    username: "abodesalm",
    rates: {
      story: 80,
      beauty: 90,
      gameplay: 85,
      general: 85,
    },
  },
  {
    name: "terraria",
    cover: "terraria.jpg",
    id: "12yhg1217fg7",
    username: "abodesalm",
    rates: {
      story: 80,
      beauty: 90,
      gameplay: 85,
      general: 85,
    },
  },
];

export default function UserReviews({ userId }) {
  const [search, setSearch] = useState();
  const [form, setForm] = useState();
  return (
    <>
      <ReviewsSearch setSearch={setSearch} form={form} setForm={setForm} />
      <ReviewsBody id={userId} searching={search} form={form} />
    </>
  );
}
