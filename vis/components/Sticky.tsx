/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
        title: "Visual aids",
        description:
            "Visual aids can strongly improve how effective a speech is. Many speeches are better when they include objects, images, important quotes, or data shown clearly and in an exciting way. Visual aids can be different types, but there are similar benefits and tips for using any extra material shown to the audience.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/images/zak.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "History",
        description:
            "  Visual aids go back thousands of years. In ancient civilizations like Egypt and Greece, people used symbols, drawings, and carvings on walls to communicate important messages, stories, and instructions. These visuals helped people understand complex ideas, much like today.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/images/farina.jpeg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "The Middle Ages",
        description:
            "  During this period, religious institutions used stained glass windows, paintings, and tapestries to teach people, many of whom couldn’t read. These visuals conveyed religious stories and moral lessons effectively.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/images/lihoud.jpeg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "The 20th Century – Technology Expands",
        description:
            "In the 1980s and 90s, PowerPoint software emerged, changing visual aids forever. With PowerPoint, people could easily create slides with text, images, charts, and animations, making presentations more dynamic and engaging.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/images/ppt.jpeg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "The 21st Century – Digital Revolution",
        description:
            "Today, visual aids have advanced with technology. Presenters use digital projectors, interactive whiteboards, tablets, and screens to display high-quality visuals"+
    "Online tools and apps allow for animations, video streaming, and interactive charts, making it possible to create highly engaging presentations even remotely.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/images/canva.jpeg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
];
export function StickyScrollRevealDemo() {
    return (
        <div className="p-10">
            <div className="flex justify-center">
                <h1 className="text-7xl font-bold mb-24">
                        Introduction
                </h1>
            </div>
            <StickyScroll content={content} />
        </div>
    );
}
