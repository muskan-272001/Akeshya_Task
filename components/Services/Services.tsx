"use client"

import React from 'react'
import styles from "@/components/Services/services.module.css"
import { motion } from 'framer-motion'
import SectionHeading from '../section-heading'
import Image from 'next/image'

function Services() {
    return (
        <motion.section
     
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Services</SectionHeading>
    <div className="subSection">Akeshya will serve as your consultant and development partner to help you turn your idea into a reality.</div>
    
    <div className="boxContainer">
        <div className="box">
            <div className="boxlogo">logo</div>
            <div className="boxtitle">Design</div>
            <div className="boxtext">
                Design
                Our web design services can assist you in reclaiming your company's online image. Your business will flourish on the Internet thanks to the combination of style and technology we provide, as well as our experience.</div>
            
        </div>
        <div className="box">
            <div className="boxlogo">logo</div>
            <div className="boxtitle">Design</div>
            <div className="boxtext">
                Design
                Our web design services can assist you in reclaiming your company's online image. Your business will flourish on the Internet thanks to the combination of style and technology we provide, as well as our experience.</div>
            
        </div>
        <div className="box">
            <div className="boxlogo">logo</div>
            <div className="boxtitle">Design</div>
            <div className="boxtext">
                Design
                Our web design services can assist you in reclaiming your company's online image. Your business will flourish on the Internet thanks to the combination of style and technology we provide, as well as our experience.</div>
            
        </div>
        <div className="box">
            <div className="boxlogo">logo</div>
            <div className="boxtitle">Design</div>
            <div className="boxtext">
                Design
                Our web design services can assist you in reclaiming your company's online image. Your business will flourish on the Internet thanks to the combination of style and technology we provide, as well as our experience.</div>
            
        </div>
    </div>


    </motion.section>
      )
}

export default Services