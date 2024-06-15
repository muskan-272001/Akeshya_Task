"use client";

import React from "react";
import styles from "@/components/HomePage/homePage.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

function HomePage() {
  return (
    <>
    <div>
      <div className={styles.mainHomeContainer}>
        <div className={styles.homeLeft}>
          <div className={styles.homeLeftHeading}>
            Grow your business with Akeshya
          </div>
          <div className={styles.homeLeftSubheading}>
            We are team of talented website designers, developers & digital
            marketeers
          </div>
          <div className={styles.homeLeftButton}>
            <button>Get Started</button>
          </div>
        </div>
        <div className={styles.homeRight}>
          <motion.img
            src="/Home.png"
            alt=""
            initial={{ y: 0 }}
            animate={{ y: [0, -20, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2,
            }}
            style={{ width: "578px", height: "430px" }}
          />
        </div>
      </div>

    </div>

    
      <div className={styles.imageParent}>
        <div className={styles.imageStack}>
          <motion.img
            src="/Stack1.png"
            alt=""
            className="pointer"
            whileHover={{ filter: "grayscale(0%)" }}
            initial={{ filter: "grayscale(100%)"}}
            transition={{ duration: 0.2 }}
            style={{ width: "90px", height: "80px", cursor: "pointer" }}
           
          />
          <motion.img
            src="/Stack2.png"
            alt=""
            className="pointer"
            whileHover={{ filter: "grayscale(0%)" }}
            initial={{ filter: "grayscale(100%)" }}
            transition={{ duration: 0.1 }}
            style={{ width: "90px", height: "70px", cursor: "pointer" }}
          />
          <motion.img
            src="/Stack3.png"
            alt=""
            className="pointer"
            whileHover={{ filter: "grayscale(0%)" }}
            initial={{ filter: "grayscale(100%)" }}
            transition={{ duration: 0.1 }}
            style={{ width: "90px", height: "50px", cursor: "pointer" }}
          />
          <motion.img
            src="/Stack4.png"
            alt=""
            className="pointer"
            whileHover={{ filter: "grayscale(0%)" }}
            initial={{ filter: "grayscale(100%)" }}
            transition={{ duration: 0.1 }}
            style={{ width: "90px", height: "70px", cursor: "pointer" }}
          />
          <motion.img
            src="/Stack5.png"
            alt=""
            className="pointer"
            whileHover={{ filter: "grayscale(0%)" }}
            initial={{ filter: "grayscale(100%)" }}
            transition={{ duration: 0.1 }}
            style={{ width: "90px", height: "25px", cursor: "pointer" }}
          />
          <motion.img
            src="/Stack6.png"
            alt=""
            className="pointer"
            whileHover={{ filter: "grayscale(0%)" }}
            initial={{ filter: "grayscale(100%)" }}
            transition={{ duration: 0.1 }}
            style={{ width: "90px", height: "70px", cursor: "pointer" }}
          />
        </div>
      </div>
    
    </>
  );
}

export default HomePage;
