import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const [showResume, setShowResume] = useState(false);

  const handleOpenResume = () => setShowResume(true);
  const handleCloseResume = () => setShowResume(false);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 h-full flex items-center justify-center"
      >
        <div className="text-center px-6 backdrop-blur-sm bg-black/20 rounded-2xl p-8 border border-purple-500/10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Creative
            <span className="text-purple-400"> 3D Designer</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Specializing in 3D Web Design, AI Integration, and Python Development
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            onClick={handleOpenResume}
            className="mt-6 bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            View Resume
          </motion.button>
        </div>
      </motion.div>

      {showResume && (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          transition={{ duration: 0.5 }}
          className="bg-black/90 max-w-5xl w-full rounded-xl overflow-hidden border border-purple-500"
        >
          <div className="flex justify-between items-center bg-purple-500 text-white px-4 py-2">
            <h2 className="text-lg font-semibold">My Resume</h2>
            <button
              onClick={handleCloseResume}
              className="text-white hover:text-gray-200 text-lg"
            >
              ✕
            </button>
          </div>
          <div className="p-4">
            <iframe
              src="https://drive.google.com/file/d/1WYdVKkaZSDuotqTC5YHI5Rbampn6ZT4E/view?usp=sharing"
              title="Resume"
              className="w-full h-[80vh] border-0"
            />
          </div>
        </motion.div>
      </motion.div>
      )}
    </section>
  );
};

export default Home;
