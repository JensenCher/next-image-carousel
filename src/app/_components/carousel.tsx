"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "./icons";
import { useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";

const collapseAspectRatio = 1 / 3;
const fullAspectRatio = 3 / 2;
const margin = 12;
const gap = 2;

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  let [index, setIndex] = useState(0);

  return (
    <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
      <div className="h-full">
        <div className="mx-auto flex h-full max-w-5xl flex-col justify-center">
          <div className="relative overflow-hidden">
            <motion.div
              animate={{ x: `${-index * 100 - index * gap}%` }}
              style={{
                gap: `${gap}%`,
              }}
              className="flex"
            >
              {images.map((image) => (
                <div className="w-full aspect-[3/2] shrink-0" key={image}>
                  <img src={image} className="w-full h-full object-contain" />
                </div>
              ))}
            </motion.div>
            <AnimatePresence initial={false}>
              {index > 0 && (
                <div
                  className="absolute bg-transparent px-6 z-20 inset-y-0 flex items-center justify-center cursor-pointer select-none"
                  onClick={() => setIndex(index - 1)}
                >
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    exit={{ opacity: 0, pointerEvents: "none" }}
                    whileHover={{ opacity: 1 }}
                    className="flex h-8 w-8 mt-4 items-center justify-center rounded-full bg-white"
                    // className="absolute left-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white"
                    onClick={() => setIndex(index - 1)}
                  >
                    <ChevronLeftIcon className="h-6 w-6" />
                  </motion.button>
                </div>
              )}
            </AnimatePresence>

            <AnimatePresence initial={false}>
              {/* {index + 1 < images.length && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0, pointerEvents: "none" }}
                  whileHover={{ opacity: 1 }}
                  className="absolute right-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white"
                  onClick={() => setIndex(index + 1)}
                >
                  <ChevronRightIcon className="h-6 w-6" />
                </motion.button>
              )} */}
              {index + 1 < images.length && (
                <div
                  className="absolute bg-transparent px-6 z-20 inset-y-0 right-0 flex items-center justify-center cursor-pointer select-none"
                  onClick={() => setIndex(index + 1)}
                >
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    exit={{ opacity: 0, pointerEvents: "none" }}
                    whileHover={{ opacity: 1 }}
                    className="flex h-8 w-8 mt-4 items-center justify-center rounded-full bg-white"
                    // className="absolute left-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white"
                    onClick={() => setIndex(index + 1)}
                  >
                    <ChevronRightIcon className="h-6 w-6" />
                  </motion.button>
                </div>
              )}
            </AnimatePresence>
          </div>
          <div className="flex h-14 absolute bottom-6 justify-center inset-x-0 overflow-hidden">
            <motion.div
              initial={false}
              animate={{
                x: `${-(
                  index * 100 * (collapseAspectRatio / fullAspectRatio) +
                  margin +
                  index * gap
                )}%`,
              }}
              style={{
                aspectRatio: fullAspectRatio,
                gap: `${gap}%`,
              }}
              className="flex"
            >
              {images.map((image, i) => (
                <motion.button
                  type="button"
                  key={image}
                  initial={false}
                  animate={i === index ? "active" : "inactive"}
                  whileHover={{
                    opacity: 1,
                  }}
                  variants={{
                    active: {
                      aspectRatio: fullAspectRatio,
                      marginLeft: `${margin}%`,
                      marginRight: `${margin}%`,
                      opacity: 1,
                    },
                    inactive: {
                      aspectRatio: collapseAspectRatio,
                      marginLeft: 0,
                      marginRight: 0,
                      opacity: 0.5,
                    },
                  }}
                  className="shrink-0"
                  onClick={() => setIndex(i)}
                >
                  <img
                    src={image}
                    alt={image}
                    className="aspect-[3/2] h-full object-cover"
                  />
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}
