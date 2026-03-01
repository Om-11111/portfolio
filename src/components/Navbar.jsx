import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-6 left-0 right-0 mx-auto w-fit z-50 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-8 py-3 flex gap-8 text-white shadow-lg"
    >
      <a href="#home" className="hover:text-indigo-400 hover:scale-110 transition-all duration-300">
  Home
</a>

<a href="#about" className="hover:text-indigo-400 hover:scale-110 transition-all duration-300">
  About
</a>

<a href="#projects" className="hover:text-indigo-400 hover:scale-110 transition-all duration-300">
  Projects
</a>

<a href="#contact" className="hover:text-indigo-400 hover:scale-110 transition-all duration-300">
  Contact
</a>
    </motion.nav>
  );
}

export default Navbar;