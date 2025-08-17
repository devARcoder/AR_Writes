import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Calendar, BookOpen, Heart, Github, Linkedin, Camera, Code, Palette, Link } from 'lucide-react';

const  About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'Writing', icon: BookOpen, color: 'text-blue-500', bg: 'bg-black/30' },
    { name: 'Photography', icon: Camera, color: 'text-purple-500', bg: 'bg-black/30' },
    { name: 'Web Development', icon: Code, color: 'text-green-500', bg: 'bg-black/30' },
    { name: 'Design', icon: Palette, color: 'text-pink-500', bg: 'bg-black/30' }
  ];

  const stats = [
    { number: '30', label: 'Articles Published' },
    { number: '5K', label: 'Monthly Readers' },
    { number: '1', label: 'Years Blogging' },
    { number: '40', label: 'Sites Repo' }
  ];

  return (
    <div className="min-h-screen bg-[#222]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#222]"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-14 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <div className="relative inline-block mb-8">
                <div className="w-32 h-32 mx-auto rounded-full bg-green-500 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-[rgba(0,0,0,0.9)] flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">ARB</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-0 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-t from-white/10 to-white bg-clip-text text-transparent mb-6">
                AR BlOGS
              </h1>
              <p className="text-xl md:text-2xl text-white/50 mb-8 max-w-3xl mx-auto leading-relaxed">
                Digital storyteller, coffee enthusiast, and code whisperer sharing insights about tech, life, and everything in between.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-white/40">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Pakistan, Peshawar</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Blogging since 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  <span>Powered by devARcoder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#222] backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className={`text-center transform transition-all duration-700 delay-${index * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/50 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="prose prose-lg text-white/40 leading-relaxed space-y-4">
                <p>
                  What started as a simple journal documenting my journey into tech has evolved into a platform where I share insights, tutorials, and stories that resonate with fellow developers and curious minds.
                </p>
                <p>
                  I believe in the power of sharing knowledge and building communities through authentic storytelling. Whether I'm breaking down complex coding concepts or sharing personal experiences, my goal is to make technology more accessible and human.
                </p>
                <p>
                  When I'm not writing or coding, you'll find me exploring coffee shops around the city, experimenting with photography, or diving into the latest tech trends.
                </p>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-gradient-to-b from-black/20 to-[#222] rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">What We Do</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`${skill.bg} rounded-xl p-4 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-md  ${
                        hoveredSkill === skill.name ? 'ring-2 ring-offset-2 ring-gray-800' : ''
                      }`}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <skill.icon className={`w-8 h-8 ${skill.color} mb-2`} />
                      <div className="font-semibold text-white text-sm">{skill.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-t from-black/50 to-[#222]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Heart className="w-12 h-12 text-red-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              My Mission
            </h2>
            <p className="text-xl text-white/40 leading-relaxed max-w-3xl mx-auto">
              To bridge the gap between complex technology and everyday understanding, creating content that educates, inspires, and empowers others to embrace the digital world with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-white mb-3">Meet ARB Creator</h2>
            <h2 className="text-3xl font-bold text-white mb-6">dev<span className='text-green-500'>AR</span>coder</h2>
            <p className="text-lg text-white/40 mb-12 max-w-2xl mx-auto">
              I’m Abdur Razzaq, a Frontend Developer skilled in React.js, Tailwind CSS, and JavaScript, building modern, responsive, and interactive web applications.
            </p>
            
            <div className="flex justify-center space-x-9 mb-12">
              
              <a 
                href="https://devarcoder.vercel.app/" target='_blank'
                className="group animate-bounce inset-shadow-sm inset-shadow-green-500 
  shadow-[inset_0_-12px_9px_rgba(0,0,0,0.6)] hover:shadow-[inset_0_-12px_9px_rgba(0,0,0,0.8)] p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
              >
                <Link className="w-6 h-6 text-white group-hover:text-green-600 transition-colors duration-300" />
              </a>
              <a 
                href="https://github.com/devARcoder" target='_blank'
                className="group animate-bounce inset-shadow-sm inset-shadow-green-500 
  shadow-[inset_0_-12px_9px_rgba(0,0,0,0.6)] hover:shadow-[inset_0_-12px_9px_rgba(0,0,0,0.8)] p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
              >
                <Github className="w-6 h-6 text-white group-hover:text-green-600 transition-colors duration-300" />
              </a>
              <a 
                href="https://www.linkedin.com/in/abdur-razzaq-8b569a335/" target='_blank' 
                className="group animate-bounce inset-shadow-sm inset-shadow-green-500 
  shadow-[inset_0_-12px_9px_rgba(0,0,0,0.6)] hover:shadow-[inset_0_-12px_9px_rgba(0,0,0,0.8)] p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="w-6 h-6 text-white group-hover:text-green-600 transition-colors duration-300" />
              </a>
            </div>
            
            <div className="border-none text-white cursor-pointer focus:outline-none bg-[#222] rounded-full px-7 py-6 inset-shadow-sm inset-shadow-white 
  shadow-[inset_0_-12px_9px_rgba(0,0,0,0.6)] hover:shadow-[inset_0_-12px_9px_rgba(0,0,0,0.8)] transform transition-transform duration-800 ease-in-out inline-block">
              <div className="flex items-center gap-3 text-white">
                <Mail className="w-5 h-5" />
                <span className="text-lg">devarcoder789@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default About