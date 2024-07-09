import Loader from "@/components/Loader";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Orbitron } from "next/font/google";
import { useEffect, useState } from "react";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 3000);
  }, []);
  return (
    <div className={orbitron.className}>
      <AnimatePresence mode="wait">{isLoading && <Loader />}</AnimatePresence>
      <Component {...pageProps} />
    </div>
  );
}
