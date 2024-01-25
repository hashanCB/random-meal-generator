"use client";
import React from "react";

export default function Button({ getnewmeals }) {
  return (
    <button
      className=" bg-[#33C3F0] w-[150px] rounded-xl px-4 mt-2  py-2 text-center justify-center"
      onClick={getnewmeals}
    >
      {" "}
      Get Meal 🍔{" "}
    </button>
  );
}
