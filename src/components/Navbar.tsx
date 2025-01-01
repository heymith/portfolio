import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Palette, Brain, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (href: string) => {
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false); // Close mobile menu if open
  };

  const NavLink = ({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) => (
    <motion.a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        handleScrollToSection(href);
      }}
      className="text-white hover:text-purple-400 transition-colors duration-200 flex items-center space-x-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
      <span>{text}</span>
    </motion.a>
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full px-6 py-4 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`backdrop-blur-md bg-gradient-to-r from-purple-900/30 to-black/30 rounded-2xl px-6 py-3 border border-purple-500/10 shadow-lg transition-all duration-300 ${
            scrolled ? 'shadow-purple-500/5' : ''
          }`}
        >
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white font-bold text-xl"
            >
              Hemith
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="#home" icon={<Palette size={18} />} text="Home" />
              <NavLink href="#about" icon={<Brain size={18} />} text="About" />
              <NavLink href="#projects" icon={<Code size={18} />} text="Projects" />
              <NavLink href="#contact" icon={<Mail size={18} />} text="Contact" />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white hover:text-purple-400 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-4 pt-4 border-t border-purple-500/10"
            >
              <div className="flex flex-col space-y-4">
                <NavLink href="#home" icon={<Palette size={18} />} text="Home" />
                <NavLink href="#about" icon={<Brain size={18} />} text="About" />
                <NavLink href="#projects" icon={<Code size={18} />} text="Projects" />
                <NavLink href="#contact" icon={<Mail size={18} />} text="Contact" />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
