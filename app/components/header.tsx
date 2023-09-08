import { motion, useScroll, useTransform, MotionValue } from "framer-motion"


function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 0.25], [-distance, 0]);
}

function HeaderNav() {

  const { scrollYProgress } = useScroll();
  const y = useParallax(scrollYProgress, 100);

  return (
    <motion.header style={{ y }} >
      <h1>Radsmth—</h1>
      <a href="mailto:brett@radsmth.com">Contact</a>
    </motion.header>
  )
}

export default HeaderNav;