import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="py-10 bg-black">
      <motion.h1
        className="text-4xl md:text-5xl font-semibold text-center tracking-wide font-poppins text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500 drop-shadow-[0_2px_10px_rgba(139,92,246,0.6)]"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 18,
        }}
      >
        EV Application Dashboard

      </motion.h1>
      <p className="mt-4 text-center text-sm md:text-base text-gray-400">
        Charting the Electric Revolution — Past, Present, and Beyond
      </p>
    </header>
  );
};

export default Header;
