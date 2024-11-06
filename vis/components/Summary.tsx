/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Introduction",
      content: (
        
        <div>
          <h1 className="text-white dark:text-neutral-200 text-4xl md:text-2xl font-bold mb-8">
            1- Definition of the visual aids
          </h1>
            <div className="relative w-full h-[200px] md:h-[200px] lg:h-[400px] mb-24"> {/* Contrôle de la hauteur */}
                <Image
                src="https://i.ytimg.com/vi/X_-muhBhzso/maxresdefault.jpg"
                alt="startup template"
                layout="fill" // Remplit le conteneur parent
                objectFit="cover" // S'assure que l'image reste bien cadrée
                className="rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
            </div>
            <h1 className="text-white dark:text-neutral-200 text-4xl md:text-2xl font-bold mb-8">
            2- History of visual Aids
          </h1>
            <div className="relative w-full h-[200px] md:h-[200px] lg:h-[400px]"> {/* Contrôle de la hauteur */}
                <Image
                src="https://avatars.mds.yandex.net/i?id=2e7ae81a735309d1093145d617892ae5ff607d83-6234058-images-thumbs&ref=rim&n=33&w=356&h=200"
                alt="startup template"
                layout="fill" // Remplit le conteneur parent
                objectFit="cover" // S'assure que l'image reste bien cadrée
                className="rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
            </div>
        </div>

        
      ),
    },
    {
      title: "Types Of Visual Aids",
      content: (
        <div>
          <h1 className="text-white dark:text-neutral-200 text-4xl md:text-2xl font-bold mb-8">
            1- Digital Slides
          </h1>
          <h1 className="text-white dark:text-neutral-200 text-4xl md:text-2xl font-bold mb-8">
            2- Images and Graphs
          </h1>
          <h1 className="text-white dark:text-neutral-200 text-4xl md:text-2xl font-bold mb-8">
            3- Charts and Diagrams
          </h1>
          <h1 className="text-white dark:text-neutral-200 text-4xl md:text-2xl font-bold mb-8">
            4- Videos
          </h1>
          <h1 className="text-white dark:text-neutral-200 text-4xl md:text-2xl font-bold mb-8">
            5- Building a Website
          </h1>
        </div>
      ),
    },
    {
      title: "Errors To Avoid",
      content: (
        <div>
          <h1 className="text-white dark:text-neutral-200 text-4xl md:text-2xl font-bold mb-8">
            1- Error 1: Too Much Information on One Slide
          </h1>
          <h1 className="text-white dark:text-neutral-200 text-4xl md:text-2xl font-bold mb-8">
            2- Error 2: Poor-Quality Fonts or Images
          </h1>
          <h1 className="text-white dark:text-neutral-200 text-4xl md:text-2xl font-bold mb-8">
            3- Error 3: Poorly Chosen Colors and Contrasts
          </h1>
         
        </div>
      ),
    },
    {
        title: "Principles for visual aids",
        content: (
          <div>
           <h1 className="text-white dark:text-neutral-200 text-4xl md:text-2xl font-bold mb-8">
            1- Clarity
          </h1>
          <h1 className="text-white dark:text-neutral-200 text-4xl md:text-2xl font-bold mb-8">
            2- Simplicity
          </h1>
          <h1 className="text-white dark:text-neutral-200 text-4xl md:text-2xl font-bold mb-8">
            3- Emphasis
          </h1>
          <h1 className="text-white dark:text-neutral-200 text-4xl md:text-2xl font-bold mb-8">
            4- Consistency
          </h1>
          <h1 className="text-white dark:text-neutral-200 text-4xl md:text-2xl font-bold mb-8">
            5- Relevance
          </h1>
           
          </div>
        ),
      },
      {
        title: "Conclusion",
        content: (
          <div className="">
          
          <h1 className="text-white dark:text-neutral-200 text-4xl md:text-2xl font-bold mb-64">
          Summarize All The Topics
          </h1>
          </div>
        ),
      },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
