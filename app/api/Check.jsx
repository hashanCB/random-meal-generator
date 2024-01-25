"use server";
import "server-only";
import React from "react";

export async function Check() {
  const respons = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php",
    {
      cache: "no-store",
    }
  );
  const result = await respons.json();

  return result;
}
