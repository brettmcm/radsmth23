"use client";

import Link from 'next/link';
import { motion, useScroll, useTransform, MotionValue } from "framer-motion"

// import HeaderNav from './components/header';
import HeroBanner from './components/hero-banner';
import CaseCover from './components/case-cover';


function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [0, distance]);
}
function useZoom(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [1, distance]);
}

export default function Home() {

  const { scrollYProgress } = useScroll();
  const y = useParallax(scrollYProgress, -1000);

  return (
    <div>
        <motion.div style={{ y }} className="headline">
          <h1><div>Rad</div><div>smth</div></h1>
        </motion.div>
        <main>
          <Link href="/work/canary">
              <CaseCover
              title="Canary"
              services="Branding, Visual Identity"
              cover="/covers/canary-cover.png"
            />
          </Link>
          <Link href="/work/islanddwell">
            <CaseCover
              title="Island Dwell"
              services="Branding, Visual Identity"
              cover="/covers/islanddwell-hero.jpg"
            />
          </Link>
          <CaseCover
            title="Apeak"
            services="Brand Naming, Visual Identity"
            cover="/covers/apeak.jpg"
          />
          <CaseCover
            title="Mosaic"
            services="Visual Identity"
            cover="/covers/mosaic.png"
          />
        </main>
      <HeroBanner />
    </div>
  )
}
