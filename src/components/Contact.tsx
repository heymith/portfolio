import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_rup5adn", // Your EmailJS Service ID
          "template_mqn3fhe", // Your EmailJS Template ID
          form.current,
          "1xn59x-pmL9RYMVXF" // Your EmailJS Public Key
        )
        .then(
          (result) => {
            console.log("Message sent successfully:", result.text);
            alert("Your message has been sent successfully!");
            form.current.reset();
          },
          (error) => {
            console.error("Error sending message:", error.text);
            alert("There was an error sending your message. Please try again.");
          }
        );
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-black/50 backdrop-blur-sm py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Get in Touch</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Let's collaborate on your next project or discuss opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-purple-900/20 p-4 rounded-lg">
                <Mail className="text-purple-400 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Email</h3>
                <p className="text-gray-300">hemith.ov@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-purple-900/20 p-4 rounded-lg">
                <Github className="text-purple-400 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-semibold">GitHub</h3>
                <p className="text-gray-300">
                  <a
                    href="https://github.com/heymith"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:underline"
                  >
                    github.com/heymith
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-purple-900/20 p-4 rounded-lg">
                <Linkedin className="text-purple-400 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-semibold">LinkedIn</h3>
                <p className="text-gray-300">
                  <a
                    href="https://www.linkedin.com/in/hemith-naag-76b996250/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:underline"
                  >
                    linkedin.com/in/hemith-naag-76b996250
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                required
                className="w-full bg-purple-900/10 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                required
                className="w-full bg-purple-900/10 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
              />
            </div>
            <div>
              <textarea
                name="message"
                rows={4}
                placeholder="Enter Your Message"
                required
                className="w-full bg-purple-900/10 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-200"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
