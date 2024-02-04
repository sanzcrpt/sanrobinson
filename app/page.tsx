import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Image from 'next/image'; // Import the Image component

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-cyan-500 hover:text-emerald-400"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <h1 className="animate-title">
        <Image
          src="/og.png" // Correct path to your image in the public folder
          alt="San Robinson"
          width={400} // Adjust the width based on your design
          height={100} // Adjust the height based on your design
        />
      </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-cyan-500 ">
          I'm building a few interesting things under the hood like{" "}
          <Link
            target="_blank"
            href="wetapin.com"
            className="underline duration-500 hover:text-emerald-300"
          >
            Tap In
          </Link> and helping decode some complex problems.I believe in using
           my technical skills not just to build cool things, but to address 
           real-world challenges and empower communities. 
           
        </h2>
      </div>
    </div>
  );
}
