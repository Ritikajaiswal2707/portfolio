"use client";

import { skills } from "@/data";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "💻 Frontend Development",
      skills: skills.frontend,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "⚙️ Backend Development", 
      skills: skills.backend,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "🤖 AI & Machine Learning",
      skills: skills.ai,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "🌐 DevOps & Cloud",
      skills: skills.devops,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "🧩 Tools & Workflow",
      skills: skills.tools,
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <div className="py-20" id="skills">
      <h1 className="heading">
        My <span className="text-purple">Skills & Technologies</span>
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-black-200 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <h3 className="text-xl font-bold mb-4 text-white">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${category.color} text-white`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-6">
          🎯 Specializations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/30"
          >
            <p className="text-white-100">
              Building real-time web platforms with live data sync and scalable architecture
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl p-6 border border-blue-500/30"
          >
            <p className="text-white-100">
              Developing AI-powered interfaces using GPT, voice, and conversational APIs
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-6 border border-green-500/30"
          >
            <p className="text-white-100">
              Creating visually engaging frontend experiences with advanced motion and animation libraries
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl p-6 border border-orange-500/30"
          >
            <p className="text-white-100">
              End-to-end product engineering — from idea validation to deployment
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
