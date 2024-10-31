import React from "react";
import { FlipWords } from "./ui/flip";

export function FlipWordsDemo() {
  const words = ["Ait Said Ayoub", "Sabir Achraf", "Rguibi Mohamed Mouad"];

  return (
    <div className="h-[2rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-white ">
        
        <FlipWords words={words} /> <br />

      </div>
    </div>
  );
}
