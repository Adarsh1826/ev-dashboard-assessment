import { motion } from 'framer-motion';
const Header = () => {
    return (
      <header className="py-6">
        <motion.h1
          className="text-4xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400 text-center tracking-wide font-poppins"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 18
          }}
        >
          EV Application Dashboard
        </motion.h1>
      </header>
    );
  };
  
  export default Header;
  