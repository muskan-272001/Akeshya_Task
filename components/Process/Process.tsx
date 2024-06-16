"use client"

import React from "react";
import styles from "@/components/Process/process.module.css"
import { motion } from "framer-motion";
import SectionHeading from "../section-heading";

function Process() {
    return (

   


    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">OUR PROCESS</h2>
      <p className="text-center mb-16">
        Over the years we've evolved a tested method for attaining achievement for each one of our clients.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-40 gap-x-20">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">1. Planning</h3>
          <p>
            We help you turn all of your ideas into a digital product that meets all of
            your requirements. We begin each project by determining its scope and
            needs. This is done by collaborating closely with you to ensure that
            we're all on the same page.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">2. Design</h3>
          <p>
            We build our websites carefully through a series of workshops, wire-
            framing, and user experience (UX) sessions, resulting in a site that
            reinforces trust, conveys important brand messaging, and provides a
            return on innovation.
          </p>
        </div>
        {/* <div className={styles.dummy}>
          hello
        </div> */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">3. Development</h3>
          <p>
            We provide extensive front-end and back-end development that allows
            your idea to stand alone. Our in-house developers work side-by-side
            with the artistic team to seek out natural breakpoints inside the content
            and order practicality based on acknowledged statistics.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">4. Marketing</h3>
          <p>
            We come up with ideas and campaigns to help your business prosper
            online. Our campaigns and virtual approach have a verified tune report
            of accomplishing brilliant results, gathering new leads and site visitors
            in your website and assist them convert.
          </p>
        </div>
      </div>
    </div>
  );
};



export default Process;

