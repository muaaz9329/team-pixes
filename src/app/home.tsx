"use client";

import Bg from "@/components/bg";

import { dosis } from "./layout";
import { useEffect, useMemo, useState } from "react";
import SVGIMG from "@/app/plant.svg";
import Image from "next/image";

export default function Home() {
  const messages = useMemo(
    () => [
      ["Design", "Emotion"],
      ["CRAFT", "STORIES"],
      ["CODE", "DREAMS"],
      ["CRAFT", "STORIES"],
    ],
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (messages.length === 0) return;

    const timer = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % messages.length);
        setIsVisible(true);
      }, 500); // Wait for fade out animation to complete
    }, 6000); // Change message every 2 seconds

    return () => clearInterval(timer);
  }, [messages.length]);

  return (
    <Bg>
      <section>
        <div className=" bounce-animation absolute -left-52 opacity-20 text-black">
          <Image src={SVGIMG} alt="" className="w-18 " />
        </div>

        <div className="flex flex-row justify-between items-center ">
          <h1
            style={{
              letterSpacing: "4px",
            }}
            className="text-base font-normal text-gray-700"
          >
            team PIXES
          </h1>
        </div>

        <div className="mt-52 ml-24">
          <h2 className="text-lg  font-normal text-gray-800">
            DESIGN & DEVELOPMENT STUDIO
          </h2>
          <p className="text-[200px] -mt-14 font-sans font-semibold ">WE</p>

          <p
            style={{
              lineHeight: "0.8",
            }}
            className={`text-[200px] -mt-14 font-sans font-semibold 
            
            
            transition-all duration-500 ease-in-out
            transform
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            }
          `}
          >
            {messages[currentIndex][0]}
          </p>
          <p
            className={`text-[250px] -mt-14 font-sans font-semibold ${
              dosis.className
            } transition-all duration-500 ease-in-out
            transform
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            } `}
          >
            {messages[currentIndex][1]}
          </p>
        </div>
      </section>
    </Bg>
  );
}
