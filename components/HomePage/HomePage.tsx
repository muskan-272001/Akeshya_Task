"use client"

import React from 'react'
import styles from "@/components/HomePage/homePage.module.css"
import Image from "next/image"
import { motion } from 'framer-motion';

function HomePage() {
  return (
    <div>
        <div className={styles.mainHomeContainer}>
        <div className={styles.homeLeft}>
            <div className={styles.homeLeftHeading}>
                Grow your business with Akeshya
            </div>
            <div className={styles.homeLeftSubheading}>
                We are team of talented website designers, developers & digital marketeers
            </div>
            <div className={styles.homeLeftButton}>
                <button>Get Started</button>
            </div>
        </div>
        <div className={styles.homeRight}>
            <motion.img 
            src="/Home.png" alt="" initial={{ y: 0 }}
            animate={{ y: [0, -20, 0] }} transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
              }}
             style={{width:'578px', height:'430px'}}/>
        </div>
    </div>

    <div className={styles.imageStack}>
        <Image src="/Stack1.png" alt="" width={60} height={60}/>
        <Image src="/Stack2.png" alt="" width={60} height={60}/>
        <Image src="/Stack3.png" alt="" width={60} height={60}/>
        <Image src="/Stack4.png" alt="" width={60} height={60}/>
        <Image src="/Stack5.png" alt="" width={60} height={60}/>
        <Image src="/Stack6.png" alt="" width={60} height={60}/>
    </div>
    </div>
  )
}

export default HomePage