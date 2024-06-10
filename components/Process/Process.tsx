"use client"

import React from "react";
import styles from "@/components/Process/process.module.css"
import { motion } from "framer-motion";
import SectionHeading from "../section-heading";

function Process() {
    return (
        <motion.section
     
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Process</SectionHeading>
        <div className="subSection">Over the years we’ve evolved a tested method for attaining achievement for each one of our clients.</div>
    <div className="container6">
        <div className="container6-subsection">
            <div className="card">
                <div className="cardtitle">
                    1. Planning
                </div>
                <div className="cardtext">
                    We help you turn all of your ideas into a digital product that meets all of your requirements. We begin each project by determining its scope and needs. This is done by collaborating closely with you to ensure that we're all on the same page.
                </div>
            </div>
            <div className="card">
                <div className="cardtitle">
                    1. Planning
                </div>
                <div className="cardtext">
                    We help you turn all of your ideas into a digital product that meets all of your requirements. We begin each project by determining its scope and needs. This is done by collaborating closely with you to ensure that we're all on the same page.
                </div>
            </div>
        </div>
        <div className="container6-subsection">
            <div className="card">
                <div className="cardtitle">
                    1. Planning
                </div>
                <div className="cardtext">
                    We help you turn all of your ideas into a digital product that meets all of your requirements. We begin each project by determining its scope and needs. This is done by collaborating closely with you to ensure that we're all on the same page.
                </div>
            </div>
            <div className="card">
                <div className="cardtitle">
                    1. Planning
                </div>
                <div className="cardtext">
                    We help you turn all of your ideas into a digital product that meets all of your requirements. We begin each project by determining its scope and needs. This is done by collaborating closely with you to ensure that we're all on the same page.
                </div>
            </div>
        </div>
    </div>
    </motion.section>
    )
}

export default Process;

