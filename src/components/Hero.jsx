import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-24 md:pt-0 overflow-hidden"
    >
      {/* Floating Blob 1 */}
      <motion.div
        className="absolute w-72 h-72 bg-indigo-500 rounded-full blur-3xl opacity-30"
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* Floating Blob 2 */}
      <motion.div
        className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30 right-10 top-20"
        animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      {/* Glass Hero Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8 md:p-12 text-center max-w-lg md:max-w-2xl w-full z-10"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
          Om Pawar
        </h1>

        <p className="text-gray-300 mt-6 text-base sm:text-lg md:text-xl max-w-md mx-auto">
          Aspiring Software Engineer | React & Flutter Developer
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 shadow-md transition-all duration-300 px-6 py-3 rounded-xl text-white font-semibold"
          >
            View Projects
          </button>

          <a
            href="/Om_Pawar_Resume.pdf"
            download
            className="w-full sm:w-auto bg-transparent border border-white/40 hover:bg-white hover:text-indigo-700 transition-all duration-300 px-6 py-3 rounded-xl text-white font-semibold"
          >
            Download Resume
          </a>
        </div>

        {/* Social Icons */}
        <div className="mt-8 flex justify-center gap-6 text-white text-xl">
          <a
            href="https://github.com/Om-11111"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/om-pawar-b955bb356"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:ompawar1630@gmail.com"
            className="hover:text-indigo-400 transition duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;