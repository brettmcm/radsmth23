"use client";

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from "framer-motion"

type CaseType = {
  title: string;
  services: string;
  cover: string;
};

export default function Home() {
  return (
    <div>
      <HeaderNav />
      <main>
        <HeroBanner />
        <div className="work">
          <CaseCover
            title="Canary"
            services="Branding, Visual Identity"
            cover="/covers/canary-cover.png"
          />
          <CaseCover
            title="Island Dwell"
            services="Branding, Visual Identity"
            cover="/covers/islanddwell-hero.jpg"
          />

          <CaseCover
            title="Apeak"
            services="Brand Naming, Visual Identity"
            cover="/covers/apeak.jpg"
          />
        </div>
      </main>
    </div>
  )
}

function HeaderNav() {

  const { scrollYProgress } = useScroll();
  const y = useParallaxHeader(scrollYProgress, 100);

  return (
    <motion.header
      style={{ y }}
    >
      <h1>Radsmth—</h1>
      <a href="mailto:brett@radsmth.com">Contact</a>
    </motion.header>
  )
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [0, distance]);
}
function useParallaxHeader(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 0.25], [-distance, 0]);
}
function useZoom(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [1, distance]);
}
function useOpacity(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [1, distance]);
}

function HeroBanner() {

  const { scrollYProgress } = useScroll();
  const y = useParallax(scrollYProgress, 3000);
  const s = useZoom(scrollYProgress, 3);
  const o = useOpacity(scrollYProgress, 0);

  return (
    <div className="hero-banner">
        <motion.h1 style={{ opacity: o }}>Radsmth</motion.h1>
        <motion.div
          style={{ y, scale: s }}
          className="heroFGcontainer"
          whileInView="visible"
        >
          <Image fill
          src="/hero-fg.png"
          alt=""
          className="heroFG"
        />
        </motion.div>
    </div>
  )
}

const CaseCover = (props: CaseType) => {

  const { title, services, cover } = props;

  return (
    <div className="case-study">
      <div className="img">
        <Image
          fill
          src={cover}
          alt="Canary branding image"
          className="imgimg"
        />
      </div>
      <h2>{title}</h2>
      <p>{services}</p>
    </div>
  )
}


