import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Github, Globe } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const projects = [
  {
    title: '3D Product Configurator',
    description: 'Interactive 3D product visualization tool built with Three.js',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
    video: 'https://videos.pexels.com/video-files/29676917/12765203_1920_1080_25fps.mp4',
    tags: ['Three.js', 'React', 'WebGL'],
    details: 'A sophisticated 3D product configurator that allows users to customize and visualize products in real-time. Features include dynamic texture mapping, realistic lighting, and export capabilities.',
    demoUrl: 'https://example.com/demo',
    githubUrl: 'https://github.com/example/project'
  },
  {
    title: 'AI Image Generator',
    description: 'Deep learning-powered image generation system',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    video: 'https://videos.pexels.com/video-files/29676917/12765203_1920_1080_25fps.mp4',
    tags: ['Python', 'TensorFlow', 'React'],
    details: 'An advanced AI system that generates unique images based on text descriptions. Utilizes state-of-the-art machine learning models for creative and accurate image synthesis.',
    demoUrl: 'https://example.com/demo',
    githubUrl: 'https://github.com/example/project'
  },
  {
    title: 'Smart Home Controller',
    description: 'IoT system for home automation using embedded systems',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800',
    video: 'https://videos.pexels.com/video-files/29676917/12765203_1920_1080_25fps.mp4',
    tags: ['C++', 'IoT', 'Embedded'],
    details: 'A comprehensive smart home solution that integrates various IoT devices and sensors. Features include automated climate control, security monitoring, and energy optimization.',
    demoUrl: 'https://example.com/demo',
    githubUrl: 'https://github.com/example/project'
  },
  {
    title: 'Motion Graphics Portfolio',
    description: 'Showcase of video editing and motion design work',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800',
    video: 'https://videos.pexels.com/video-files/29676917/12765203_1920_1080_25fps.mp4',
    tags: ['After Effects', 'Premier Pro', 'Motion'],
    details: 'A collection of creative motion graphics projects showcasing expertise in animation, visual effects, and video editing. Includes commercial work and personal experiments.',
    demoUrl: 'https://example.com/demo',
    githubUrl: 'https://github.com/example/project'
  },
  {
    title: 'Real-time Analytics Dashboard',
    description: 'Data visualization platform for business metrics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    video: 'https://videos.pexels.com/video-files/29676917/12765203_1920_1080_25fps.mp4',
    tags: ['D3.js', 'Node.js', 'MongoDB'],
    details: 'A dynamic dashboard that visualizes real-time business metrics and analytics. Features interactive charts, customizable widgets, and automated reporting capabilities.',
    demoUrl: 'https://example.com/demo',
    githubUrl: 'https://github.com/example/project'
  },
  {
    title: 'Autonomous Robot Control',
    description: 'Software for controlling autonomous robots',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
    video: 'https://videos.pexels.com/video-files/29676917/12765203_1920_1080_25fps.mp4',
    tags: ['C++', 'ROS', 'Computer Vision'],
    details: 'Advanced robotics control system implementing autonomous navigation, object recognition, and path planning algorithms. Includes simulation capabilities and real-world testing.',
    demoUrl: 'https://example.com/demo',
    githubUrl: 'https://github.com/example/project'
  },
  {
    title: 'Blockchain Voting System',
    description: 'Decentralized voting platform with blockchain security',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    video: 'https://videos.pexels.com/video-files/29676917/12765203_1920_1080_25fps.mp4',
    tags: ['Blockchain', 'Solidity', 'React'],
    details: 'A secure and transparent decentralized voting system built on blockchain technology. Ensures tamper-proof results and anonymity using smart contracts.',
    demoUrl: 'https://example.com/demo',
    githubUrl: 'https://github.com/example/project'
  },
  {
    title: 'AI Chatbot Framework',
    description: 'Conversational AI framework for creating intelligent chatbots',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    video: 'https://videos.pexels.com/video-files/29676917/12765203_1920_1080_25fps.mp4',
    tags: ['Python', 'NLU', 'Flask'],
    details: 'An AI-driven chatbot framework that leverages natural language understanding to build interactive and intelligent conversational agents for various industries.',
    demoUrl: 'https://example.com/demo',
    githubUrl: 'https://github.com/example/project'
  },
  {
    title: 'Mobile Learning Platform',
    description: 'E-learning platform for mobile devices',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    video: 'https://videos.pexels.com/video-files/29676917/12765203_1920_1080_25fps.mp4',
    tags: ['React Native', 'Node.js', 'Firebase'],
    details: 'A mobile learning application designed to deliver educational content seamlessly on Android and iOS. Features include quizzes, video lessons, and real-time feedback.',
    demoUrl: 'https://example.com/demo',
    githubUrl: 'https://github.com/example/project'
  }
]; 



const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-b from-black to-purple-900/20 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            A diverse portfolio showcasing my expertise across multiple domains.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl bg-purple-900/20 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <video
                  src={project.video}
                  muted
                  loop
                  autoPlay
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center justify-between">
                  {project.title}
                  <ExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-sm px-3 py-1 rounded-full bg-purple-500/20 text-purple-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
                className="bg-purple-900/30 backdrop-blur-md rounded-2xl p-8 max-w-4xl w-full border border-purple-500/20"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="overflow-hidden rounded-xl relative">
                      {isPlaying ? (
                        <video
                          src={selectedProject.video}
                          controls
                          onEnded={handleVideoEnd}
                          className="w-full h-full object-cover"
                          autoPlay
                        />
                      ) : (
                        <img
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                      {!isPlaying && (
                        <button
                          onClick={() => setIsPlaying(true)}
                          className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-2xl font-bold"
                        >
                          ▶
                        </button>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map(tag => (
                        <span
                          key={tag}
                          className="text-sm px-3 py-1 rounded-full bg-purple-500/20 text-purple-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <p className="text-gray-300 leading-relaxed">
                      {selectedProject.details}
                    </p>
                    <div className="flex gap-4">
                      <a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500 hover:bg-purple-600 text-white transition-colors"
                      >
                        <Globe size={20} />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition-colors"
                      >
                        <Github size={20} />
                        <span>View Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;