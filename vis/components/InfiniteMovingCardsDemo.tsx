/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

import { TextGenerateEffect } from "./ui/text-generate-effect";
const words = `THE FIVE DESIGN PRINCIPLES FOR VISUAL AIDS
`;
export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <div className="mb-12 text-7xl"> 
        <TextGenerateEffect words={words} />
      </div>
     
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="fast"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Visual aids should be easy to understand and free from clutter. Use simple, concise language and clear visuals that don’t overwhelm the viewer.",
    name: "",
    title: "Clarity",
  },
  {
    quote:
      "Make sure each visual aid directly supports the message or key points. Avoid unnecessary images or information that could distract from the main focus.",
    name: "",
    title: "Relevance",
  },
  {
    quote: "Maintain a consistent style throughout all visuals, including font, color, and layout. This helps to create a cohesive experience and reinforces the main message.",
    name: "",
    title: "Consistency",
  },
  {
    quote:
      "Highlight key elements to guide the audience’s attention to the most important information. Use contrast, size, or color to make these elements stand out.",
    name: "",
    title: "Emphasis",
  },
  {
    quote:
      "Keep visual aids as simple as possible. Avoid overly complex graphics or information that might confuse the viewer.",
    name: "",
    title: "Simplicity",
  },
];
