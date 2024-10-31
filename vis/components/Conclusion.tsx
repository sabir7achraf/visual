/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lampt";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
    initial={{ opacity: 0.5, y: 100}} // Start just below the normal position
    whileInView={{ opacity: 1, y: 50}} // End at the normal position

        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=" bg-gradient-to-br from-black to-black  py-4 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-7xl"
      >
        Conclusion
      </motion.h1>
      <div className="flex flex-row">
      <motion.h1
  initial={{ opacity: 0.5, y: 200 }}
  whileInView={{ opacity: 1, y: 150 }}
  transition={{
    delay: 0.3,
    duration: 0.8,
    ease: "easeInOut",
  }}
  className="mt-8 bg-gradient-to-br py-4 pr-28 rounded-2xl bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
>
  <img
    src="/images/conc.jpeg"
    alt=""
    width={500}
    height={600}
    className="rounded-3xl" // Ajoutez cette classe ici
  />
</motion.h1>

      <motion.div
        initial={{ opacity: 0.5, y: 200 }}
        whileInView={{ opacity: 1, y: 150 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 max-w-[700px] bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text  text-lg font-semibold tracking-tight text-transparent "
      >
        Visual aids play a crucial role in enhancing communication by making information clearer, more engaging, and easier to remember. They can simplify complex ideas, support key points, and capture the audience's attention, making any presentation or message more impactful. Visual aids, such as charts, images, and diagrams, help break down information into more digestible parts, which aids in comprehension and retention. However, it is essential to use visual aids thoughtfully and effectively. Overloading visuals can lead to distraction and reduce their effectiveness, so each aid should directly support the message, be easy to understand, and add genuine value. By leveraging visual aids with intention and simplicity, communicators can significantly improve the clarity and effectiveness of their message.
      </motion.div>
      </div>
    </LampContainer>
  );
}
