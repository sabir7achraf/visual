import React from "react";
import { Compare } from "@/components/ui/compare";
import {CanvasRevealEffectDemo} from"./Approach";
import bad from "./../public/images/bad_present.png";
import good from "./../public/images/good_presentation.webp";
export function CompareDemo() {
  return (
  <>
    <div className="flex justify-center">
            <h1 className="text-4xl font-bold mt-12">
                Some Errors To avoid
            </h1>

        </div>
       <CanvasRevealEffectDemo/>
    <div className="p-4 flex justify-center  border-neutral-200 dark:border-neutral-800 px-4">  
      <Compare
        firstImage="https://i2.wp.com/www.slideteam.net/media/catalog/product/cache/1/thumbnail/543x403/7bdaa8c8f4730ca595245b6188ae0994/a/b/about_me_powerpoint_presentation_examples_Slide01.jpg"
        secondImage="https://i.imgur.com/3gIlEgH.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-[200px] md:h-[1000px] md:w-[1300px]"
        slideMode="hover"
      />
    </div>
    </>);
}
