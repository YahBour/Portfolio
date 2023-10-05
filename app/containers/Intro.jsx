"use client";

import { motion } from "framer-motion";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import DisplayLottie from "./DisplayLottie";
import BackgroundCircle from "./BackgroundCircle";

const Intro = () => {
  const first = ["H", "a", "l", "l", "o", ","];
  const second = ["I", "c", "h", "b", "i", "n", "Y", "a", "h", "y", "a"];
  const third = [
    "W",
    "e",
    "b",
    "E",
    "n",
    "t",
    "w",
    "i",
    "c",
    "k",
    "l",
    "e",
    "r",
  ];
  return (
    <div className="flex flex-col items-center justify-center lg:grid lg:grid-cols-2 gap-20 p-10 relative w-full h-full overflow-hidden">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="col-span-1 flex flex-col justify-center">
        <div className="">
          <BackgroundCircle />
        </div>

        <div className="flex mb-5">
          {first.map((f, index) => (
            <h3
              key={index}
              className="text-3xl sm:text-7xl font-extralight hover:animate-bounce transition duration-500 delay-200 sm:tracking-wider hover:mytext">
              {f}
            </h3>
          ))}
        </div>
        <div className="flex mb-5">
          {second.slice(0, 3).map((f, index) => (
            <h3
              className="text-3xl sm:text-7xl font-extralight hover:animate-bounce transition duration-500 delay-200 sm:tracking-wider hover:mytext"
              key={index}>
              {f}
            </h3>
          ))}
          <div className="flex ml-2 sm:ml-5">
            {second.slice(3, 6).map((f, index) => (
              <h3
                className="text-3xl sm:text-7xl font-extralight hover:animate-bounce transition duration-500 delay-200 sm:tracking-wider hover:mytext"
                key={index}>
                {f}
              </h3>
            ))}
          </div>
          <div className="flex ml-2 sm:ml-5">
            {second.slice(6, second.length).map((f, index) => (
              <h3
                className="text-3xl sm:text-7xl font-extralight hover:animate-bounce transition duration-500 delay-200 sm:tracking-wider hover:mytext"
                key={index}>
                {f}
              </h3>
            ))}
          </div>
        </div>
        <div className="flex">
          {third.slice(0, 3).map((f, index) => (
            <h3
              className="text-3xl sm:text-7xl font-extralight hover:animate-bounce transition duration-500 delay-200 sm:tracking-wider hover:mytext"
              key={index}>
              {f}
            </h3>
          ))}
          <div className="flex ml-2 sm:ml-5">
            {third.slice(3, third.length).map((f, index) => (
              <h3
                className="text-3xl sm:text-7xl font-extralight hover:animate-bounce transition duration-500 delay-200 sm:tracking-wider hover:mytext"
                key={index}>
                {f}
              </h3>
            ))}
          </div>
        </div>
        <div className="pt-5">
          <p className="text-slate-600 italic text-xl sm:text-md">
            {
              "Ich bin ein leidenschaftlicher Full-Stack-Webentwickler der jeden Tech Stack erkunden möchte. Ich habe Erfahrung in Webentwicklungen mit Python, Django, React.js, Next.js und React Native."
            }
          </p>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="col-span-1 flex flex-col justify-center items-center h-full">
        <div className="">
          <DisplayLottie />
        </div>

        <h1 className="text-xl lg:text-3xl font-semibold mt-2">
          <span className="px-4 mytext text-xl lg:text-3xl text-center">
            <Typewriter
              words={[
                "Weiter unten findest du meine aktuellen Projekte",
                "Du findest mich unter anderem auf...",
                "GitHub  <>YahBour</> ",
                "LinkedIn  <>...</>",
              ]}
              loop={0}
              delaySpeed={700}
            />
          </span>
        </h1>
      </motion.div>
    </div>
  );
};

export default Intro;
