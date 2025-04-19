import { motion } from "framer-motion";
type inputIn = {
  type:string,
  heading?:string,
  footer?:string
}
const Bar = ({ type , heading,footer}: inputIn) => {
  if (type === "header") {
    return (
      <header className="py-6 bg-black border-b border-gray-800 shadow-md shadow-purple-900/20">
        <motion.h1
          className="text-2xl md:text-3xl font-semibold text-center tracking-wide font-poppins text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500 drop-shadow-[0_2px_10px_rgba(139,92,246,0.6)]"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
         {heading}
        </motion.h1>
        <p className="mt-2 text-center text-xs md:text-sm text-gray-400">
          {footer}
        </p>
      </header>
    );
  }

  if (type === "footer") {
    return (
      <footer className="py-4 bg-black border-t border-gray-800 text-center text-gray-500 text-xs">
        {footer}
      </footer>
    );
  }

  return null; // Default if type doesn't match
};

export default Bar;
