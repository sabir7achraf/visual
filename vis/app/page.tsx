import { BackgroundLinesDemo } from "@/components/BackgroundLinesDemo";
import { CompareDemo } from "@/components/CompareDemo";
import { LampDemo } from "@/components/Conclusion";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import { StickyScrollRevealDemo } from "@/components/Sticky";
import { TimelineDemo } from "@/components/Summary";
import { TabsDemo } from "@/components/TabsDemo";



export default function Home() {
  return (
    <>
   
    <BackgroundLinesDemo/>
    <TimelineDemo/> 
    <StickyScrollRevealDemo/>
    <TabsDemo />
    <CompareDemo />
      <InfiniteMovingCardsDemo/>
      
      <LampDemo/>
    </>
  );
}
