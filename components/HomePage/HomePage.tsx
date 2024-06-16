"use client";

import React, { useState } from "react";
import styles from "@/components/HomePage/homePage.module.css";
import Image from "next/image";
import { Variants, motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

const imageEntryVariants: Variants = {
  initial: { x: 578, opacity: 0 }, // Start off screen to the right
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 2, ease: "easeInOut" }, // Adjust the duration here (e.g., 3 seconds) and ease
  },
};

const imageBounceVariants: Variants = {
  initial: { y: 0 },
  bounce: {
    y: [0, -20, 0],
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 3, // Adjust the duration of each bounce cycle here (e.g., 2 seconds)
    },
  },
};

const images = [
  '/Stack1.png',
  '/Stack2.png',
  '/Stack3.png',
  '/Stack4.png',
  '/Stack5.png',
  '/Stack6.png',
];

const HomePage: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);


  return (
    <>
    <div className={styles.mainHomeContainer}>
      <div className={styles.homeLeft}>
        <motion.div
          className={styles.homeLeftHeading}
          initial="hidden"
          animate="visible"
          custom={0}
          variants={textVariants}
        >
          Grow your business with Akeshya
        </motion.div>
        <motion.div
          className={styles.homeLeftSubheading}
          initial="hidden"
          animate="visible"
          custom={1}
          variants={textVariants}
        >
          We are team of talented website designers, developers & digital marketeers
        </motion.div>
        <motion.div
          className={styles.homeLeftButton}
          initial="hidden"
          animate="visible"
          custom={2}
          variants={textVariants}
        >
          <button>Get Started</button>
        </motion.div>
      </div>
      <div className={styles.homeRight}>
        <motion.img
          src="/Home.png"
          alt=""
          initial="initial"
          animate={imageLoaded ? "bounce" : "animate"}
          variants={imageLoaded ? imageBounceVariants : imageEntryVariants}
          onAnimationComplete={() => setImageLoaded(true)}
          style={{ width: "578px", height: "430px" }}
        />
      </div>
    </div>

    {/* <div className={styles.imageParent}>
      <div className={styles.imageStack}>
        {["/Stack1.png", "/Stack2.png", "/Stack3.png", "/Stack4.png", "/Stack5.png", "/Stack6.png"].map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt=""
            className="pointer"
            whileHover={{ filter: "grayscale(0%)" }}
            initial={{ filter: "grayscale(100%)" }}
            transition={{ duration: 0.2 }}
            style={{ width: "90px", height: "70px", cursor: "pointer" }}
          />
        ))}
      </div>
    </div> */}


<div className={styles.imageParent}>
      <div className={styles.imageStack}>
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt=""
            className="pointer"
            whileHover={{ filter: 'grayscale(0%)' }}
            initial={{ scale: 0, filter: 'grayscale(100%)' }}
            animate={{ scale: 1 }}
            transition={{duration: 1 }}
            // transition={{ delay: index * 0.2, duration: 0.5 }}
            style={{ width: '90px', height: '70px' }}
          />
        ))}
      </div>
    </div>


  </>
  );
}

export default HomePage;
