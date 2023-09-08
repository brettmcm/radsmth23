import Image from 'next/image'
import { motion, useScroll, useTransform, MotionValue } from "framer-motion"

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [0, distance]);
}
function useZoom(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [1, distance]);
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

export default HeroBanner;