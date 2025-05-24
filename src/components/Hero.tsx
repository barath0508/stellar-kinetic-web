
import { motion } from "framer-motion";
import Scene3D from "./Scene3D";
import ParticlesBackground from "./ParticlesBackground";

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, delay: 0.8, ease: "easeOut" }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground />
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 via-transparent to-electric-purple/10 z-10" />
      
      <div className="container mx-auto px-6 z-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          className="text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={textVariants}>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">John Doe</span>
            </h1>
          </motion.div>
          
          <motion.div variants={textVariants}>
            <p className="text-xl lg:text-2xl text-gray-300 mb-4 font-mono">
              Full Stack Developer
            </p>
          </motion.div>
          
          <motion.div variants={textVariants}>
            <p className="text-lg text-gray-400 mb-8 max-w-lg">
              Crafting immersive digital experiences with cutting-edge technology. 
              Passionate about creating innovative solutions that push the boundaries of web development.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            variants={buttonVariants}
          >
            <button className="glass-button group relative overflow-hidden">
              <span className="relative z-10">Download Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-electric-purple opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </button>
            
            <button className="glass-button group relative overflow-hidden">
              <span className="relative z-10">Explore Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-electric-purple to-electric-blue opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </button>
          </motion.div>
        </motion.div>
        
        {/* 3D Scene */}
        <motion.div 
          className="h-96 lg:h-[500px] relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-electric-purple/20 rounded-3xl blur-3xl" />
          <Scene3D />
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-electric-blue to-electric-purple rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
