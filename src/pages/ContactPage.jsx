import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Zap, CheckCircle, AlertCircle } from 'lucide-react';

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  });
  const [formStatus, setFormStatus] = useState('');
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '', type: 'general' });
      setTimeout(() => setFormStatus(''), 3000);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us an email and we\'ll respond within 24 hours',
      contact: 'devarcoder789@gmail.com',
      color: 'blue',
      bgGradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Available everytime just dm',
      contact: '+92 3070925248',
      color: 'green',
      bgGradient: 'from-green-500 to-green-600'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Chat with our team in real-time',
      contact: 'Available 24/7',
      color: 'purple',
      bgGradient: 'from-purple-500 to-purple-600'
    }
  ];

  const contactReasons = [
    { value: 'general', label: 'General Inquiry', icon: MessageSquare },
    { value: 'collaboration', label: 'Collaboration', icon: Users },
    { value: 'technical', label: 'Technical Support', icon: Zap },
    { value: 'feedback', label: 'Feedback', icon: CheckCircle }
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM PST' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM PST' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  return (
    <div className="min-h-screen bg-[#222]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#222]"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-14 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-t from-white/10 to-white bg-clip-text text-transparent mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-white/50 mb-8 max-w-3xl mx-auto leading-relaxed">
              Have a question, suggestion, or just want to say hello? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={method.title}
                className={`group relative bg-black/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-100 transition-all duration-500 cursor-pointer ${
                  hoveredCard === index ? 'ring-1 ring-offset-4 ring-black' : ''
                } delay-${index * 200}`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: `translateY(${isVisible ? 0 : 40}px)`,
                  transitionDelay: `${index * 200}ms`
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${method.bgGradient} rounded-lg mb-6 shadow-lg`}>
                  <method.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{method.title}</h3>
                <p className="text-white/50 mb-4 leading-relaxed">{method.description}</p>
                <p className={`font-semibold text-white/50 group-hover:text-white/60 transition-colors duration-300`}>
                  {method.contact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-[#222] backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className={`bg-black/30 rounded-3xl p-8 shadow-xl transition-all duration-1000 delay-600 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}>
                <h2 className="text-3xl font-bold text-white mb-2">Send us a message</h2>
                <p className="text-white/70 mb-8">We'll get back to you as soon as possible.</p>

                {formStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-white/80">Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Contact Reason */}
                  <div>
                    <label className="block text-sm font-semibold text-white mb-3">What can we help you with?</label>
                    <div className="grid grid-cols-2 gap-3">
                      {contactReasons.map((reason) => (
                        <label
                          key={reason.value}
                          className={`relative flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                            formData.type === reason.value
                              ? 'border-white bg-black/40'
                              : 'border-white/20 hover:border-white/30 bg-black/20'
                          }`}
                        >
                          <input
                            type="radio"
                            name="type"
                            value={reason.value}
                            checked={formData.type === reason.value}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <reason.icon className={`w-5 h-5 ${
                            formData.type === reason.value ? 'text-green-600' : 'text-white'
                          }`} />
                          <span className={`text-sm font-medium ${
                            formData.type === reason.value ? 'text-white' : 'text-white'
                          }`}>
                            {reason.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Name and Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border text-white/80 border-white/20 rounded-xl focus:ring-1 focus:ring-white/30 focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 text-white/80 border border-white/20 rounded-xl focus:ring-1 focus:ring-white/30 focus:border-transparent transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-white mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 text-white/80 border border-white/20 rounded-xl focus:ring-1 focus:ring-white/30 focus:border-transparent transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 text-white/80 border border-white/20 rounded-xl focus:ring-1 focus:ring-white/30 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={formStatus === 'sending'}
                    className={`w-full flex items-center justify-center gap-3 border-none text-gray-100 cursor-pointer focus:outline-none bg-[#222] rounded-full px-7 py-4 inset-shadow-sm inset-shadow-white 
  shadow-[inset_0_-12px_9px_rgba(0,0,0,0.6)] hover:shadow-[inset_0_-12px_9px_rgba(0,0,0,0.8)] transform transition-transform duration-800 ease-in-out ${
                      formStatus === 'sending' ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {formStatus === 'sending' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-8">
              {/* Office Hours */}
              <div className={`bg-black/30 rounded-2xl p-6 shadow-lg transition-all duration-1000 delay-800 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-white" />
                  <h3 className="text-lg font-bold text-white">Office Hours</h3>
                </div>
                <div className="space-y-3">
                  {officeHours.map((schedule) => (
                    <div key={schedule.day} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <span className="text-white/80 font-medium">{schedule.day}</span>
                      <span className="text-white/80">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className={`bg-black/30 rounded-2xl p-6 text-white shadow-lg transition-all duration-1000 delay-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6" />
                  <h3 className="text-lg font-bold">Visit Our Office</h3>
                </div>
                <address className="not-italic text-white/80 leading-relaxed">
                  123 Blog Street<br />
                  Creative District<br />
                  San Francisco, CA 94105<br />
                  United States
                </address>
                <button className="mt-4 border-none text-gray-100 cursor-pointer focus:outline-none bg-[#222] rounded-full px-7 py-2 inset-shadow-sm inset-shadow-white 
  shadow-[inset_0_-12px_9px_rgba(0,0,0,0.6)] hover:shadow-[inset_0_-12px_9px_rgba(0,0,0,0.8)] transform transition-transform duration-800 ease-in-out font-medium transition-colors duration-300">
                  Get Directions
                </button>
              </div>

              {/* Quick Response */}
              <div className={`bg-black/30 border border-white/40 rounded-2xl p-6 transition-all duration-1000 delay-1200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-white" />
                  <h3 className="text-lg font-bold text-white">Quick Response</h3>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  We typically respond to emails within 2-4 hours during business hours and within 24 hours on weekends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-16 bg-[#222]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 delay-1400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl font-bold text-white mb-4">Need Quick Answers?</h2>
            <p className="text-lg text-white/50 mb-8">
              Check out our frequently asked questions for instant solutions to common inquiries.
            </p>
            <button className="inline-flex items-center gap-3 border-none text-gray-100 cursor-pointer focus:outline-none bg-[#222] rounded-full px-7 py-4 inset-shadow-sm inset-shadow-white 
  shadow-[inset_0_-12px_9px_rgba(0,0,0,0.6)] hover:shadow-[inset_0_-12px_9px_rgba(0,0,0,0.8)] transform transition-transform duration-800 ease-in-out">
              <MessageSquare className="w-5 h-5" />
              View FAQ
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
export default ContactPage