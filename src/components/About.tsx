import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Palette, Brain, Video, Cpu, Globe, Database, Terminal, X } from 'lucide-react';

const skills = [
  { icon: <Palette size={24} />, title: '3D Design', description: 'Creating immersive 3D web experiences', details: 'Specializing in Three.js, WebGL, and Spline for creating interactive 3D experiences that push the boundaries of web design.' },
  { icon: <Brain size={24} />, title: 'AI Integration', description: 'Implementing cutting-edge AI solutions', details: 'Developing sophisticated AI solutions using TensorFlow and PyTorch, with experience in computer vision and natural language processing.' },
  { icon: <Code size={24} />, title: 'Python Development', description: 'Building robust backend systems', details: 'Creating scalable backend systems using Django and FastAPI, with expertise in microservices architecture and API design.' },
  { icon: <Terminal size={24} />, title: 'C/C++ Development', description: 'High-performance system programming', details: 'Developing high-performance applications and system-level software with a focus on optimization and memory management.' },
  { icon: <Video size={24} />, title: 'Video Editing', description: 'Professional video production and effects', details: 'Crafting compelling visual stories using industry-standard tools like Adobe Premiere Pro and After Effects.' },
  { icon: <Cpu size={24} />, title: 'Embedded Systems', description: 'IoT and hardware programming', details: 'Designing and programming embedded systems for IoT applications, with experience in Arduino and Raspberry Pi.' },
  { icon: <Globe size={24} />, title: 'Web Development', description: 'Full-stack web applications', details: 'Building modern web applications using React, Node.js, and TypeScript with a focus on performance and user experience.' },
  { icon: <Database size={24} />, title: 'Database Design', description: 'Scalable data architecture', details: 'Designing and optimizing database schemas for scalability using PostgreSQL, MongoDB, and Redis.' }
];

const About = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <section id="about" className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">About Me</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            I'm a versatile developer and creative professional, combining technical expertise 
            with artistic vision to deliver innovative solutions across multiple domains.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedSkill(skill)}
              className="bg-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 cursor-pointer"
            >
              <div className="text-purple-400 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
              <p className="text-gray-300">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
              onClick={() => setSelectedSkill(null)}
            >
              <motion.div
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                exit={{ y: 50 }}
                className="bg-purple-900/30 backdrop-blur-md rounded-2xl p-8 max-w-2xl w-full border border-purple-500/20"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-purple-400">{selectedSkill.icon}</div>
                    <h3 className="text-2xl font-bold text-white">{selectedSkill.title}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedSkill(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
                <p className="text-gray-300 leading-relaxed">{selectedSkill.details}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default About;