import React from "react";
import image from "../mount.jpg";

export default function Home() {
    return (
        <main>
            <img src={image} alt="mountain" 
            className="absolute object-cover w-full h-full"
            />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-blue-300 font-bold cursive leading-none lg:leading-snug home-name" >
                     Aloha. i'm shamil abubacker  
                </h1>
            </section>
        </main>
    )
}