import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-3xl w-full">
        
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white text-center mb-12"
        >
          Contact Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 shadow-xl"
        >
          <form className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500"
            ></textarea>

            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 transition px-6 py-3 rounded-xl text-white font-semibold"
            >
              Send Message
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;