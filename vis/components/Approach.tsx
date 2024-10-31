/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";



export function CanvasRevealEffectDemo() {
  return (
    <section className="w-full py-20">
        
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center  gap-4 ">
        <Card 
        title="Too Much Information on One Slide" 
        icon={<AceternityIcon order="Error 1"/>}
        description="Overloading a single slide with excessive information can lead to cognitive overload for the audience. When viewers are bombarded with too much content, they struggle to process and retain the key points being presented. It's essential to keep slides clear and concise, focusing on the most important information."
        >
          
        </Card>
        <Card title="Poor-Quality Fonts or Images" 
        icon={<AceternityIcon 
        order="Error 2"/>}
        description="Using low-resolution images or inappropriate fonts can significantly impact your credibility as a presenter. High-quality visuals enhance your presentation's professionalism, while poor-quality elements can distract the audience and diminish the overall impact of your message. Always ensure that your visuals are sharp and your text is easy to read."
        >
          
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card 
        title="Poorly Chosen Colors and Contrasts" 
        icon={<AceternityIcon order="Error  3"
       
        />}
        description=" Inadequate color choices and contrast can make text difficult to read. It's important to select colors that are visually appealing and provide sufficient contrast between text and background. A well-designed color scheme improves readability and keeps the audience focused on the content rather than struggling to decipher the text.
        ">
          
        </Card>
      </div>
    </section>
  );
}

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description:string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (

    <div
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    className="border border-white dark:border-white group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto p-4 relative h-[30rem]"
  >
    <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
    <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
    <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
    <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />
  

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white  opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center text-3xl">
          {title}
        </h2>
        <h2 className="dark:text-white text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center" style={{color: '#e4ecff'}}>
          {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({order}:{order:string}) => {
  return (
    <div>
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-2xl font-bold text-white backdrop-blur-3xl">
                {order}
            </span>
        </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
