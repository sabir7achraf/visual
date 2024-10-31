import { BackgroundLinesDemo } from "@/components/BackgroundLinesDemo";
import { CompareDemo } from "@/components/CompareDemo";
import { LampDemo } from "@/components/Conclusion";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import { StickyScrollRevealDemo } from "@/components/Sticky";
import { TabsDemo } from "@/components/TabsDemo";

import Image from "next/image";

export default function Home() {
  return (
    <>
    <BackgroundLinesDemo/>
    <StickyScrollRevealDemo/>
    <TabsDemo />
    <CompareDemo />
      <InfiniteMovingCardsDemo/>
      
      <LampDemo/>
    </>
  );
}
