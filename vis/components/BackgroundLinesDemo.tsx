/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import Container from "@mui/material/Container";
import Image from "next/image";
import img1 from "./../public/fst.png";
import img2 from "./../public/logo-uae.png";
import { FlipWordsDemo } from "./flipwords";

export function BackgroundLinesDemo() {
    return (
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">

            <Container maxWidth="xl" sx={{
                marginTop: "0",
                padding: "20px",
                paddingTop: "0px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <div>
                    <Image src={img1} alt="Logo fst" width={400} height={400}/>
                </div>
                <div>
                    <Image src={img2} alt="Logo uae" width={400} height={400}/>
                </div>
            </Container>
            <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-white dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                VISUAL AIDS
            </h1>
            <h4 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-white dark:from-neutral-600 dark:to-white font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
               LSI 2024/2025
            </h4>
            <Container sx={{
                padding: "20px",
                paddingTop: "0px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <div>
                    <p className="max-w-xl mx-auto text-sm md:text-lg text-white dark:text-neutral-400 text-center font-bold pb-12">REALIZED BY  </p>
                    <FlipWordsDemo/>
                </div>
                <div>
                    <p className="max-w-xl mx-auto text-sm md:text-lg text-white dark:text-neutral-400 text-center font-bold pb-12">SUPERVISED BY </p>
                   <h1 className="text-2xl font-semibold">Zineb M&apos;barki</h1> 
                </div>
            </Container>
        </BackgroundLines>
    );
}