// components/ClientRootLayout.js

"use client";

import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import StarsCanvas from "@/components/StarBackground";
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import Transition from "@/components/Transition";

const ClientRootLayout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <StarsCanvas />
      <Nav />
      <Header />
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default ClientRootLayout;
