/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { SetStateAction, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs } from "./ui/tabs";
import ds1 from "./../public/images/ds1.png";
import ds2 from "./../public/images/ds2.png";
import img from"./../public/images/img.png";
import grp2 from "./../public/images/graph2.jpg";
import diag from "./../public/images/diag2.png";
import charts from"./../public/images/chart_types.png";

export function TabsDemo() {
  const tabs = [
    {
      title: "Digital slides",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <DummyContent />
        </div>
      ),
    },
    {
      title: "  Images and graphs",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
         
          <DummyContent2 />
        </div>
      ),
    },
    {
      title: "Charts and Diagrams",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          
          <DummyContent3 />
        </div>
      ),
    },
    {
      title: "Videos",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
         
          <DummyContent4 />
        </div>
      ),
    },
    {
      title: "Building a Website",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          
          <DummyContent5 />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[25rem] md:h-[50rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40">
      <div className="flex justify-center">
        <h1 className="text-center text-5xl text-white font-bold mb-12">Types of visual aids</h1>
      </div>
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  const [maximizedImage, setMaximizedImage] = useState(null);

  const openImage = (src: SetStateAction<null> | StaticImageData) => setMaximizedImage(src);
  const closeImage = () => setMaximizedImage(null);

  return (
    <div className="relative text-center space-y-4">
      {/* Description en haut */}
      <p className="text-lg text-white font-base mb-6">
        Digital slides are a popular type of visual aid used in presentations to effectively communicate key points to an audience. Typically created with tools like PowerPoint, Google Slides, or specialized web applications, digital slides allow presenters to combine text, images, graphs, and animations on sequential slides. This format is highly customizable and supports a structured flow of information, helping audiences to follow along easily. Additionally, digital slides are convenient for incorporating multimedia elements such as videos or audio, which can enhance engagement and reinforce the message.
      </p>

      {/* Deux images côte à côte avec effet de zoom */}
      <div className="flex justify-center gap-4">
        <Image
          src={ds1}
          alt="dummy image 1"
          width="500"
          height="500"
          className="object-cover object-top h-[60%] md:h-[90%] w-[45%] rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
          onClick={() => openImage(ds1)}
        />
        <Image
          src={ds2}
          alt="dummy image 2"
          width="500"
          height="500"
          className="object-cover object-top h-[60%] md:h-[90%] w-[45%] rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
          onClick={() => openImage(ds2)}
        />
      </div>

      {/* Modal d'image maximisée */}
      <AnimatePresence>
        {maximizedImage && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImage}
          >
            <motion.div
              className="relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <Image
                src={maximizedImage}
                alt="Maximized"
                width="800"
                height="800"
                className="object-contain rounded-lg cursor-pointer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const DummyContent2 = () => {
    const [maximizedImage, setMaximizedImage] = useState(null);
  
    const openImage = (src: SetStateAction<null> | StaticImageData) => setMaximizedImage(src);
    const closeImage = () => setMaximizedImage(null);
  
    return (
      <div className="relative text-center space-y-4">
        {/* Description en haut */}
        <p className="text-lg text-white font-base mb-6">
        Images and graphics are powerful elements in a presentation because they capture attention and make information easier to understand. Illustrations and photos help to make concepts more tangible and memorable by adding visual context. Graphics, whether pie charts, bar charts, or line graphs, provide a visual representation of data, making numbers and statistics more accessible and intuitive. With their strong visual impact, images and graphics help the audience retain information more effectively, enhancing engagement and comprehension.
        </p>
  
        <div className="flex flex-col items-center gap-2">
  {/* Ligne supérieure avec deux images encore plus petites */}
  <div className="flex justify-center gap-4">
        <Image
          src={img}
          alt="dummy image 1"
          width="500"
          height="500"
          className="object-cover object-top h-[60%] md:h-[90%] w-[45%] rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
          onClick={() => openImage(img)}
        />
        <Image
          src={grp2}
          alt="dummy image 2"
          width="500"
          height="500"
          className="object-cover object-top h-[60%] md:h-[90%] w-[45%] rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
          onClick={() => openImage(grp2)}
        />
      </div>
  
  {/* Image du bas avec largeur presque complète et bien centrée */}
  <div className="flex justify-center w-full">
   
  </div>
</div>


  
        {/* Modal d'image maximisée */}
        <AnimatePresence>
          {maximizedImage && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeImage}
            >
              <motion.div
                className="relative"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              >
                <Image
                  src={maximizedImage}
                  alt="Maximized"
                  width="800"
                  height="800"
                  className="object-contain rounded-lg cursor-pointer"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const DummyContent3 = () => {
    const [maximizedImage, setMaximizedImage] = useState(null);
  
    const openImage = (src: SetStateAction<null> | StaticImageData) => setMaximizedImage(src);
    const closeImage = () => setMaximizedImage(null);
  
    return (
      <div className="relative text-center space-y-4">
        {/* Description en haut */}
        <p className="text-lg text-white font-base mb-6">
        These visual aids are essential for representing data and illustrating relationships among various elements. Charts, such as bar graphs, pie charts, and line graphs, provide a clear and concise way to present numerical information, making it easier for audiences to grasp complex data at a glance. Diagrams, on the other hand, can depict processes, hierarchies, or relationships, helping viewers understand connections and flow between different components. Together, charts and diagrams enhance comprehension, allowing presenters to convey their messages more effectively.
        <br></br>
        <span className="text-red-900">NB:all graphs can be considered charts, but not all charts are graphs.</span>
        </p>
  
        <div className="flex flex-col items-center gap-2">
  {/* Ligne supérieure avec deux images encore plus petites */}
  <div className="flex justify-center gap-4">
        <Image
          src={charts}
          alt="dummy image 1"
          width="500"
          height="500"
          className="object-cover object-top h-[60%] md:h-[90%] w-[45%] rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
          onClick={() => openImage(charts)}
        />
        <Image
  src={diag}
  alt="dummy image 2"
  width="400" // Decrease width
  height="400" // Decrease height
  className="object-cover object-top h-[50%] md:h-[60%] w-[35%] rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
  onClick={() => openImage(diag)}
/>

      </div>
  
  {/* Image du bas avec largeur presque complète et bien centrée */}
  <div className="flex justify-center w-full">
   
  </div>
</div>


  
        {/* Modal d'image maximisée */}
        <AnimatePresence>
          {maximizedImage && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeImage}
            >
              <motion.div
                className="relative"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              >
                <Image
                  src={maximizedImage}
                  alt="Maximized"
                  width="800"
                  height="800"
                  className="object-contain rounded-lg cursor-pointer"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };


  const DummyContent4 = () => {
    const [maximizedVideo, setMaximizedVideo] = useState(false);
  
    const openVideo = () => setMaximizedVideo(true);
    const closeVideo = () => setMaximizedVideo(false);
  
    return (
      <div className="relative text-center space-y-4">
        {/* Description en haut */}
        <p className="text-lg text-white font-base mb-6">
          Videos significantly enhance engagement and understanding in presentations by combining visual and auditory elements. They capture the audience&apos;s attention more effectively than static images or text alone. Through storytelling, animations, or demonstrations, videos can convey complex concepts in a clear and relatable manner. This multimedia format not only holds viewers interest but also facilitates better retention of information. By illustrating key points and providing real-life examples, videos serve as powerful tools to reinforce messages and foster a deeper connection with the audience.
        </p>
  
        {/* Single centered video */}
        <div className="flex justify-center w-full">
          <video
            src="/images/vid.mp4" // Path to your video
            className="object-cover h-[400px] w-full rounded-xl transition-transform duration-300 ease-in-out cursor-pointer"
            onClick={openVideo}
            controls // Optional: to show video controls
          />
        </div>
  
        {/* Modal for maximized video */}
        <AnimatePresence>
          {maximizedVideo && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeVideo}
            >
              <motion.div
                className="relative"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              >
                <video
                  src="/images/vid.mp4" // Path to your video
                  controls
                  className="object-contain rounded-lg"
                  style={{ width: "80vw", height: "80vh" }} // Adjust size for maximized view
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const DummyContent5 = () => {

  
    return (
        <div className="relative text-center space-y-4 py-6">
        {/* Description at the top */}
        <p className="text-2xl text-white font-base my-auto">
          Think of building a website as the next-gen visual aid! It’s not just about static slides; it’s about crafting an immersive experience that keeps your audience engaged. With a website, you can seamlessly blend videos, animations, and interactive graphics, making your presentation come alive. For this presentation, I ditched the old-school PowerPoint for a sleek website that lets viewers dive into the content at their own pace. It&apos;s a fresh, dynamic way to connect with your audience and make those key concepts stick!
        </p>
      </div>
      );
    };