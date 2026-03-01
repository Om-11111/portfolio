import { motion } from "framer-motion";

function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6">
      
      <div className="max-w-6xl w-full">
        
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white text-center mb-16"
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Project Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Anime Quiz App
            </h3>

            <p className="text-gray-300 mb-6">
              A Flutter-based quiz app with category selection,
              score tracking and sound effects.
            </p>

            <div className="flex gap-4">
              <button className="bg-indigo-600 hover:bg-indigo-700 transition px-5 py-2 rounded-lg text-white">
                Live Demo
              </button>
              <button className="border border-white/30 hover:bg-white/10 transition px-5 py-2 rounded-lg text-white">
                GitHub
              </button>
            </div>
          </motion.div>

          {/* Project Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              AI Chatbot
            </h3>

            <p className="text-gray-300 mb-6">
              A conversational AI chatbot built for learning and
              automation experiments.
            </p>

            <div className="flex gap-4">
              <button className="bg-indigo-600 hover:bg-indigo-700 transition px-5 py-2 rounded-lg text-white">
                Live Demo
              </button>
              <button className="border border-white/30 hover:bg-white/10 transition px-5 py-2 rounded-lg text-white">
                GitHub
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Projects;