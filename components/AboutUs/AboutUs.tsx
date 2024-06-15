"use client"

import React, { useEffect } from 'react'
import styles from "@/components/aboutUs/aboutUs.module.css"
import SectionHeading from '../section-heading'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion';
import AnimatedNumber from '@/components/AnimatedNumber';




const AboutUs = () => {

  return (

    <div>
      <div className={styles.container}>
        <SectionHeading>ABOUT US</SectionHeading>
        <div className={styles.content}>
          <div className={styles.left}>
            <p>We are Akeshya, a firm that specializes in web design and marketing. We help transform ideas into reality with a team of passionate graphic designers, web developers, and seasoned marketing advisors.</p>

            <ul className={styles.leftList}>
              <li className={styles.liList}>We started with a simple idea: do what is best for the client.</li>
              <li className={styles.liList}>Our methodical and individual approach to each project delivers the finest possible results for your media.</li>
              <li className={styles.liList}>Our day-to-day work is to solve your problems utilizing the most up-to-date, practical adaptive technology, and we have a lot of fun doing it.</li>
            </ul>

          </div>
          <div className={styles.right}>
            <p>We're professional, but we're also friendly, and we'll always pay attention to your concerns. We expect to work with innovative people that have an open mind and are dedicated to making every idea a reality. We want to hear from you if you're interested in SEO, have Web Development ideas, or require a graphic designer who can match your goals.</p>
            <button className={styles.button}>Learn More</button>
          </div>
        </div>
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