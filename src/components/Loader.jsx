import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const main = {
  initial: {
    clipPath: "inset(0)",
  },
  animate: {
    clipPath: "inset(0)",
  },
  exit: {
    clipPath: "inset(0 0 100% 0)",
    transition: {
      type: "tween",
      delay: 0.45,
      duration: 0.75,
      ease: [0.45, 0, 0.55, 1],
    },
  },
};

const main2 = {
  initial: {
    clipPath: "inset(100% 0 0 0)",
  },
  animate: {
    clipPath: "inset(0)",
    transition: {
      type: "tween",
      duration: 3,
    },
  },
  exit: {
    clipPath: "inset(0)",
  },
};

function Loader() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count >= 100) {
      setCount(100);
      return;
    }

    const timer = setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 20);

    return () => clearTimeout(timer);
  }, [count]);

  return (
    <motion.div
      variants={main}
      initial="initial"
      animate="animate"
      exit="exit"
      className="h-screen w-full flex items-center justify-center fixed z-40 bg-purple-500"
    >
      <motion.div
        variants={main2}
        initial="initial"
        animate="animate"
        exit="exit"
        className="h-full w-full bg-purple-600"
      ></motion.div>
      <motion.span
        exit={{ opacity: 0 }}
        className="absolute bottom-[10%] lg:bottom-0 right-[5%] uppercase text-white text-[10vw] leading-[85%] tracking-tight"
      >
        {count}%
      </motion.span>
    </motion.div>
  );
}

export default Loader;
