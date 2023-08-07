"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import styles from "@/app";
import { fadeIn } from "@/utils/motion";

interface ExploreCardProps {
  id: string;
  imgUrl: string;
  title: string;
  index: number;
  active: string;
  handleClick: (id: string) => void;
}

const ExploreCard = ({
  id,
  imgUrl,
  title,
  index,
  active,
  handleClick,
}: ExploreCardProps) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative ${active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"}
    flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] 
    duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <Image
      src={imgUrl}
      alt={title}
      fill
      className="absolute w-full h-full object-cover rounded-3xl"
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-lg text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-3xl">
        <div
          className={`${styles.flexCenter} w-[60px] h-[60px] rounded-3xl glassmorphism mb-4`}
        >
          <Image
            src="/headset.svg"
            alt="headset"
            width={50}
            height={50}
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
        <p className="font-normal text-base text-white uppercase">
          Enter the Metaverse
        </p>
        <h2 className="mt-6 font-semibold sm:text-[32px] text-2xl text-white">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
