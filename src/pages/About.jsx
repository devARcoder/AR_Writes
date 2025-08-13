import React, { useState } from 'react';
import { 
  Rocket, 
  Globe, 
  Users, 
  Briefcase, 
  Plane, 
  Laptop, 
  TrendingUp, 
  Heart, 
  Zap, 
  Target,
  Newspaper,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  ExternalLink,
  ArrowRight
} from 'lucide-react';

const About = () => {
  const [email, setEmail] = useState('');
  const [hoveredCard, setHoveredCard] = useState(null);

  const whyBlogExists = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "No Fluff, Just Value",
      description: "I share only tested strategies and real-world insights."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Learn From My Journey",
      description: "Failures, wins, and authentic life lessons shared openly."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Future Community Hub",
      description: "Connecting passionate readers and creators worldwide."
    }
  ];

  const blogTopics = [
    { icon: <Briefcase className="w-6 h-6" />, title: "Work", color: "from-blue-500 to-blue-600" },
    { icon: <Plane className="w-6 h-6" />, title: "Travel", color: "from-emerald-500 to-emerald-600" },
    { icon: <Laptop className="w-6 h-6" />, title: "Tech", color: "from-purple-500 to-purple-600" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Finance", color: "from-green-500 to-green-600" },
    { icon: <Heart className="w-6 h-6" />, title: "Health", color: "from-pink-500 to-pink-600" },
    { icon: <Zap className="w-6 h-6" />, title: "Startups", color: "from-orange-500 to-orange-600" },
    { icon: <Newspaper className="w-6 h-6" />, title: "News", color: "from-red-500 to-red-600" },
    { icon: <Target className="w-6 h-6" />, title: "Personal Growth", color: "from-indigo-500 to-indigo-600" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="relative min-h-screen bg-[#222] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:50px_50px]" />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-300/20 rounded-full blur-2xl animate-bounce" style={{animationDuration: '3s'}} />
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-300/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}} />

        <div className="relative z-10 container mx-auto px-6 py-20 flex items-center min-h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <div className="text-white space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold ">
                About
                <span className="block bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  AR Blogs
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-purple-100 font-light">
                Where Work, Travel, Tech, and Life Collide
              </p>
              <div className="flex space-x-4 pt-6">
                <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  Explore Stories
                </button>
                <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105">
                  Get Started
                </button>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-1 bg-none rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <img 
                  src="/images/arb.png"
                  alt="Dev ArCoder"
                  className="relative w-96 h-96 rounded-full object-cover "
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why This Blog Exists Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-['Poppins'] text-gray-900 mb-4">
              Why This Blog Exists
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every story shared here serves a purpose - to inspire, educate, and connect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyBlogExists.map((item, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-200/50"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`text-blue-600 mb-6 transition-transform duration-300 ${hoveredCard === index ? 'scale-110 rotate-12' : ''}`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-['Poppins']">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Meet the Creator Section */}
      <div className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
                  alt="Dev ArCoder"
                  className="relative w-full max-w-md mx-auto rounded-2xl object-cover shadow-2xl"
                />
              </div>
              
              <div className="flex justify-center space-x-6 pt-4">
                {[
                  { icon: <Github className="w-6 h-6" />, href: "#" },
                  { icon: <Linkedin className="w-6 h-6" />, href: "#" },
                  { icon: <Twitter className="w-6 h-6" />, href: "#" },
                  { icon: <Instagram className="w-6 h-6" />, href: "#" }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/10"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold font-['Poppins'] mb-4">
                  Dev ArCoder
                </h2>
                <p className="text-xl text-purple-200 mb-6 italic">
                  "Coding by profession, storytelling by passion."
                </p>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate developer who believes in the power of sharing knowledge. 
                Through my journey in tech, travel, and life, I've learned that the best 
                insights come from real experiences - both successes and failures.
              </p>

              <div className="pt-6">
                <a 
                  href="https://devarcoder.vercel.app"
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105 font-medium"
                >
                  <span>Visit My Portfolio</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Topics Grid */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-['Poppins'] text-gray-900 mb-4">
              Blog Topics
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Exploring diverse subjects that shape our modern world
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {blogTopics.map((topic, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${topic.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10 p-8 text-center">
                  <div className="text-gray-600 group-hover:text-white mb-4 transition-colors duration-300 flex justify-center">
                    {topic.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-white transition-colors duration-300 font-['Poppins']">
                    {topic.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Let's Connect Footer */}
      <div className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold font-['Poppins'] mb-4">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join the community and stay updated with weekly insights
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Email Subscription */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                <Mail className="w-8 h-8 text-emerald-400" />
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-semibold mb-2 font-['Poppins']">Subscribe for Weekly Insights</h3>
                  <p className="text-gray-300">Get the latest stories and tips delivered to your inbox</p>
                </div>
                <div className="flex w-full md:w-auto space-x-3">
                  <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 md:w-64 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-full hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Collaboration */}
            <div className="text-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-12 py-4 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 font-medium text-lg">
                🤝 Collaborate With Me
              </button>
            </div>

            {/* Social Media */}
            <div className="flex justify-center space-x-6 pt-8">
              {[
                { icon: <Github className="w-6 h-6" />, href: "#", name: "GitHub" },
                { icon: <Linkedin className="w-6 h-6" />, href: "#", name: "LinkedIn" },
                { icon: <Twitter className="w-6 h-6" />, href: "#", name: "Twitter" },
                { icon: <Instagram className="w-6 h-6" />, href: "#", name: "Instagram" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  title={social.name}
                  className="p-4 bg-white/5 backdrop-blur-sm rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110 border border-white/10 group"
                >
                  <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;