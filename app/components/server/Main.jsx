"use client";
import React, { useState } from "react";
import Image from "next/image";

import { Check } from "@/app/api/Check";
import Button from "../client/Button";

export default function Main() {
  // Function to extract video ID from YouTube URL

  const [name, setuse] = useState("");
  const [yurl, setyUrl] = useState("");

  const [open, setopen] = useState(false);
  function getYouTubeVideoId(url) {
    const match = url.match(/[?&]v=([^&]+)/);
    console.log(match[1]);
    return match[1];
  }

  async function newmeal() {
    const getmeal = await Check();
    const finalmeal = await getmeal.meals;
    const fmeal = await finalmeal[0];
    console.log(fmeal);
    setuse(fmeal);
    setyUrl(getYouTubeVideoId(fmeal.strYoutube));
    setopen(true);

    return fmeal;
  }

  return (
    <div>
      <div className=" px-[250px]">
        <div
          className={`${
            open ? "h-[20vw]" : "h-[50vw]"
          } flex w-full font-Inter flex-col justify-center text-center`}
        >
          <p className="text-[36px]">Feeling Hungry </p>
          <p className=" text-[24px]">Get a random meal by clicking below</p>
          <div>
            <button
              className=" bg-[#33C3F0] w-[150px] rounded-xl px-4 mt-2  py-2 text-center justify-center"
              onClick={async () => newmeal()}
            >
              {" "}
              Get Meal 🍔{" "}
            </button>
          </div>
        </div>
        {open ? (
          <div className=" flex gap-8">
            <div className=" flex w-1/2 flex-col">
              <div>
                <Image
                  src={name.strMealThumb}
                  alt=""
                  width={400}
                  height={400}
                  className=" w-full h-auto"
                />
              </div>
              <div>
                <p> Category : {name.strCategory} </p>
                <p> Area L Russian : {name.strArea}</p>
                <p> Tags : {name.strTags}</p>
              </div>

              <div className=" mt-5">
                <p className=" text-[24px]">Ingredients :</p>
                <ul className=" ml-5 space-y-3 mt-3 list-disc  ">
                  {Object.keys(name)
                    .filter((key) => key.startsWith("strMeasure"))
                    .map((key) => name[key] && <li key={key}>{name[key]}</li>)}
                </ul>
              </div>
            </div>

            <div className=" flex flex-col w-1/2">
              <p className=" text-[32px]"> {name.strMeal}</p>

              <p className=" text-justify mt-5"> {name.strInstructions}</p>
            </div>
          </div>
        ) : null}

        {open ? (
          <div className=" w-full">
            {" "}
            <p className="text-[24px] mt-5 mb-5"> Video Pecipe</p>
            <iframe
              className=" w-full"
              height="315"
              src={`https://www.youtube.com/embed/${yurl}?si=xFhXGcvlpx_zkKnr`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        ) : null}
      </div>
    </div>
  );
}
