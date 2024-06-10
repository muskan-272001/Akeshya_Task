"use client"

import React from 'react'
import styles from "@/components/aboutUs/aboutUs.module.css"
import { motion } from 'framer-motion'
import SectionHeading from '../section-heading'
import Image from 'next/image'

function Header() {
    return (
//         <motion.section
     
//       className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
//       initial={{ opacity: 0, y: 100 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.175 }}
//       id="about"
//     >
//       <SectionHeading>About Us</SectionHeading>
//       <div className="container3-left">
//             We are Akeshya, a firm that specializes in web design and marketing. We help transform ideas into reality with a team of passionate graphic designers, web developers, and seasoned marketing advisors.

// We started with a simple idea: do what is best for the client.
// Our methodical and individual approach to each project delivers the finest possible results for your media.
// Our day-to-day work is to solve your problems utilising the most up-to-date, practical adaptive technology, and we have a lot of fun doing it.
//         </div>

//         <div className="container3-right">
//             We're professional, but we're also friendly, and we'll always pay attention to your concerns. We expect to work with innovative people that have an open mind and are dedicated to making every idea a reality. We want to hear from you if you're interested in SEO, have Web Development ideas, or require a graphic designer who can match your goals.
//             <button className="aboutUsButton"> Learn More</button>

//         </div>
//         <Image src="/aboutUs.svg" alt='aboutUsimage' height={700} width={700}/>

//     </motion.section>

<div>
<div className={styles.container}>
      <h1 className={styles.title}>ABOUT US</h1>
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



<div className={styles.container}>
<div className={styles.imageContainer}>
  <Image src="./aboutUs.svg" alt="Trophy" height={1144} width={653} />
</div>
<div className={styles.statsContainer}>
  <div className={styles.statItem}>
    <span className={styles.statNumber}>3835039</span>
    <span className={styles.statLabel}>Organic Reach (Global)</span>
  </div>
  <div className={styles.statItem}>
    <span className={styles.statNumber}>85</span>
    <span className={styles.statLabel}>Campaigns</span>
  </div>
  <div className={styles.statItem}>
    <span className={styles.statNumber}>14081</span>
    <span className={styles.statLabel}>Watch Hours (Asia)</span>
  </div>
  <div className={styles.statItem}>
    <span className={styles.statNumber}>17</span>
    <span className={styles.statLabel}>Excellent CTR % (Asia)</span>
  </div>
</div>
</div>
</div>

      )
}

export default Header