import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-12 max-w-3xl w-full text-center"
      >
        <h2 className="text-4xl font-bold text-white mb-6">
          About Me
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          I am a Diploma Computer Engineering student passionate about
          building modern web and mobile applications. I focus on writing
          clean, scalable code and continuously improving my problem-solving
          skills. My goal is to become a professional Software Engineer
          and build impactful digital products.
        </p>
      </motion.div>
    </section>
  );
}

export default About;