"use client";

import Image from 'next/image'
import Link from 'next/link';
import { motion, useScroll, useTransform, MotionValue } from "framer-motion"

import CaseStudy from '../pages/casestudy';

type CaseType = {
  title: string;
  services: string;
  cover: string;
};


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
  return useTransform(value, [0, 0.15], [1, distance]);
}

export default function Home() {

  const { scrollYProgress } = useScroll();
  const y = useParallax(scrollYProgress, -1500);
  const o = useOpacity(scrollYProgress, 0);

  return (
    <div>
      <HeaderNav />
        <motion.div style={{ y, opacity: o }} className="headline">
          <h1><div>Rad</div><div>smth</div></h1>
        </motion.div>
        <main>
          <Link href="/casestudy">
              <CaseCover
              title="Canary"
              services="Branding, Visual Identity"
              cover="/covers/canary-cover.png"
            />
          </Link>
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
        </main>
      <HeroBanner />
      {/* <CaseStudy /> */}
    </div>
  )
}







function HeaderNav() {

  const { scrollYProgress } = useScroll();
  const y = useParallaxHeader(scrollYProgress, 100);

  return (
    <motion.header style={{ y }} >
      <h1>Radsmth—</h1>
      <a href="mailto:brett@radsmth.com">Contact</a>
    </motion.header>
  )
}







function HeroBanner() {

  const { scrollYProgress } = useScroll();
  const y = useParallax(scrollYProgress, 500);
  const s = useZoom(scrollYProgress, 4);

  const filter = useTransform(scrollYProgress, v => `brightnes(${v})`);

  return (
    <div className="hero-banner">
        <motion.div
          style={{ y, scale: s, filter }}
          className="heroFGcontainer"
          whileInView="visible"
        >
          <Image fill
          src="/hero-fg.png"
          alt=""
          className="heroFG"
        />
        </motion.div>
        <div className="viewfinder"></div>
    </div>
  )
}







const CaseCover = (props: CaseType) => {

  const { title, services, cover } = props;

  return (
    <div className="case-study">
      <Image
        fill
        src={cover}
        alt="Canary branding image"
        className="img"
      />
      <div className="meta">
        <h2 data-replace={title}><span>{title}</span></h2>
        <p>{services}</p>
      </div>
    </div>
  )
}


