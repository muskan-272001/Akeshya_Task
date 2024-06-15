"use client"

import React from 'react'
import styles from "@/components/Services/services.module.css"
import { motion } from 'framer-motion'
import SectionHeading from '../section-heading'
import Image from 'next/image'

import marketingIcon from "@/public/marketing-icon.png"

const services = [
  {
    title: "Design",
    description: "Our web design services can assist you in reclaiming your company's online image. Your business will flourish on the Internet thanks to the combination of style and technology we provide, as well as our experience.",
    //   icon: designIcon,
    icon: marketingIcon
  },
  {
    title: "Development",
    description: "Our development team can construct platforms to help your business thrive by creating powerful customised solutions tailored to your particular requirements. Akeshya makes use of established and effective web development tools.",
    //   icon: developmentIcon,
    icon: marketingIcon
  },
  {
    title: "Marketing",
    description: "A beautiful website is the foundation of effective marketing. Our customers achieve success where it counts—in the real world—by combining our proven approach with our passion for improving conversions and increasing ROI.",
    icon: marketingIcon,
  },
  {
    title: "Support",
    description: "Since the beginning, we at Akeshya have specialised in website maintenance. We recognise the significance of having your business online 24 hours a day, seven days a week, and we've created a system to ensure that we're always available.",
    //   icon: supportIcon,
    icon: marketingIcon
  }
];


function Services() {
  return (


    <div className={styles.container}>
      <SectionHeading>SERVICES</SectionHeading>
      <p className={styles.subtitle}>Akeshya will serve as your consultant and development partner to help you turn your idea into a reality.</p>
      <div className={styles.servicesContainer}>
        {services.map((service, index) => (
          <div className={styles.serviceCard} key={index}>
            <Image src={service.icon} alt={`${service.title} Icon`} width={50} height={50} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Services