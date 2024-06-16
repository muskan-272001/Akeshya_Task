"use client"

import React, { useEffect } from 'react'
import styles from "@/components/aboutUs/aboutUs.module.css"
import SectionHeading from '../section-heading'
import Image from 'next/image'
import { motion } from 'framer-motion';
import AnimatedNumber from '@/components/AnimatedNumber';



const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.1, // Reduce the delay between children animations
        staggerChildren: 0.1, // Reduce the stagger duration for faster animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Reduce the duration of individual items
  };

  return (

    <div>
      <div className={styles.container}>
        <SectionHeading>ABOUT US</SectionHeading>
        <motion.div
          className={styles.content}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className={styles.left} variants={itemVariants}>
            <p>We are Akeshya, a firm that specializes in web design and marketing. We help transform ideas into reality with a team of passionate graphic designers, web developers, and seasoned marketing advisors.</p>
            <ul className={styles.leftList}>

              <li className={styles.liList}>We started with a simple idea: do what is best for the client.</li>
              <li className={styles.liList}>Our methodical and individual approach to each project delivers the finest possible results for your media.</li>
              <li className={styles.liList}>Our day-to-day work is to solve your problems utilizing the most up-to-date, practical adaptive technology, and we have a lot of fun doing it.</li>
            </ul>
          </motion.div>
          <motion.div className={styles.right} variants={itemVariants}>
            <p>We're professional, but we're also friendly, and we'll always pay attention to your concerns. We expect to work with innovative people that have an open mind and are dedicated to making every idea a reality. We want to hear from you if you're interested in SEO, have Web Development ideas, or require a graphic designer who can match your goals.</p>
            <button className={styles.button}>Learn More</button>
          </motion.div>
        </motion.div>
      </div>

      <div className={styles.rightContainer}>
        <div className={styles.imageContainer}>
          <Image src="./aboutUs.svg" alt="Trophy" height={1144} width={653} />
        </div>
        <div className={styles.statsContainer}>
          <div className={styles.statItem}>
            <AnimatedNumber value={3835039} animate={true} />
            <p className={styles.statLabel}>Organic Reach <span> (Global)</span></p>
          </div>
          <div className={styles.statItem}>
            <AnimatedNumber value={85} animate={false} />
            <p className={styles.statLabel}>Campaigns</p>
          </div>

        </div>

        <div className={styles.statsContainer}>
          <div className={styles.statItem}>
            <AnimatedNumber value={14081} animate={true} />
            <p className={styles.statLabel}>Watch Hours <span>(Asia)</span></p>
          </div>
          <div className={styles.statItem}>
            <AnimatedNumber value={17} animate={false} />
            <p className={styles.statLabel}>Excellent CTR <span>% (Asia)</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs