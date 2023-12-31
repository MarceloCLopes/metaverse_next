"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import styles from "@/app";
import { navVariants } from "@/utils/motion";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView={"show"}
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />

    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <Image
        src="/search.svg"
        priority
        alt="search"
        width={24}
        height={24}
        className="object-contain"
      />
      <h2 className="font-extrabold text-2xl leading-[30px] text-white">
        METAVERSUS
      </h2>
      <Image
        src="/menu.svg"
        priority
        alt="menu"
        width={24}
        height={24}
        className="object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;
