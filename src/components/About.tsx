
import { motion } from "framer-motion";

const About = () => {
  const timelineData = [
    {
      year: "2024",
      title: "Senior Full Stack Developer",
      company: "Tech Innovation Inc.",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies."
    },
    {
      year: "2022",
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      description: "Developed and maintained multiple client projects, focusing on performance optimization and user experience."
    },
    {
      year: "2020",
      title: "Frontend Developer",
      company: "Creative Agency",
      description: "Specialized in creating interactive user interfaces and implementing modern design systems."
    },
    {
      year: "2019",
      title: "Computer Science Graduate",
      company: "University of Technology",
      description: "Bachelor's degree in Computer Science with focus on software engineering and web technologies."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-electric-purple/5 via-transparent to-electric-blue/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a passionate full stack developer with over 5 years of experience creating 
            innovative digital solutions. I love turning complex problems into simple, 
            beautiful, and intuitive solutions.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Info */}
          <motion.div 
            className="glass-card p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-32 h-32 bg-gradient-to-br from-electric-blue to-electric-purple rounded-full mx-auto lg:mx-0 mb-6 flex items-center justify-center text-4xl font-bold">
              JD
            </div>
            <h3 className="text-2xl font-bold mb-4">John Doe</h3>
            <p className="text-gray-300 mb-6">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open source projects, or sharing knowledge through 
              technical blogs and community events.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-electric-blue font-semibold">Location:</span>
                <p className="text-gray-300">San Francisco, CA</p>
              </div>
              <div>
                <span className="text-electric-blue font-semibold">Experience:</span>
                <p className="text-gray-300">5+ Years</p>
              </div>
              <div>
                <span className="text-electric-blue font-semibold">Email:</span>
                <p className="text-gray-300">john@example.com</p>
              </div>
              <div>
                <span className="text-electric-blue font-semibold">Status:</span>
                <p className="text-green-400">Available</p>
              </div>
            </div>
          </motion.div>
          
          {/* Timeline */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {timelineData.map((item, index) => (
              <motion.div 
                key={index}
                className="relative pl-8 border-l-2 border-electric-blue/30"
                variants={itemVariants}
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-electric-blue to-electric-purple rounded-full" />
                <div className="glass-card p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-xl font-bold text-white">{item.title}</h4>
                    <span className="text-electric-blue font-mono text-sm">{item.year}</span>
                  </div>
                  <p className="text-electric-purple font-semibold mb-2">{item.company}</p>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
