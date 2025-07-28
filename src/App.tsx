import React, { useState } from 'react';
import { Twitter, MessageCircle, Zap, Users, Check, ArrowRight, Mail, Phone, MapPin, Menu, X, Play, Star, Clock, Target, TrendingUp } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-[#4792E6] p-2 rounded-lg">
                <Twitter className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">TwitterVibe</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className={`text-sm font-medium transition-colors ${activeSection === 'home' ? 'text-[#4792E6]' : 'text-gray-600 hover:text-[#4792E6]'}`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className={`text-sm font-medium transition-colors ${activeSection === 'pricing' ? 'text-[#4792E6]' : 'text-gray-600 hover:text-[#4792E6]'}`}
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`text-sm font-medium transition-colors ${activeSection === 'contact' ? 'text-[#4792E6]' : 'text-gray-600 hover:text-[#4792E6]'}`}
              >
                Contact us
              </button>
              <button className="bg-[#4792E6] text-white px-6 py-2 rounded-full font-medium hover:bg-[#3a7bc8] transition-colors">
                Try now
              </button>
            </nav>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left text-gray-600 hover:text-[#4792E6] font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="block w-full text-left text-gray-600 hover:text-[#4792E6] font-medium"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-gray-600 hover:text-[#4792E6] font-medium"
              >
                Contact us
              </button>
              <button className="w-full bg-[#4792E6] text-white px-6 py-2 rounded-full font-medium hover:bg-[#3a7bc8] transition-colors">
                Try now
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#4792E6]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-indigo-200/30 to-transparent rounded-full blur-2xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#4792E6]/10 text-[#4792E6] border border-[#4792E6]/20">
                  <Star className="h-4 w-4 mr-2" />
                  Join 10K+ others now
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Meet <span className="text-[#4792E6]">TwitterVibe</span>, your<br />
                AI <span className="text-[#4792E6]">Twitter growth</span> expert
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                Built for creators, businesses, and marketers to organically grow their brand with intelligent reply suggestions and automated posting.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-[#4792E6] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#3a7bc8] transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                  Get started <ArrowRight className="h-5 w-5" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-[#4792E6] hover:text-[#4792E6] transition-all flex items-center justify-center gap-2">
                  <Play className="h-5 w-5" /> Get a demo
                </button>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-green-600 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 border-2 border-white"></div>
                </div>
                <span className="text-sm text-gray-600">Join 10K+ others now</span>
              </div>
            </div>

            <div className="relative">
              {/* Mock Twitter Interface */}
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <span className="text-sm text-gray-500">TwitterVibe Dashboard</span>
                  <div className="w-16"></div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Engagement Queue</h3>
                    <div className="text-sm text-gray-500">Recent Overview</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium">
                          JD
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-gray-600 mb-1">@john_doe</div>
                          <div className="text-sm text-gray-900 mb-2">Just launched my new project! Excited to share it with everyone.</div>
                          <div className="bg-white rounded-lg p-3 border border-green-200">
                            <div className="text-sm text-gray-700 mb-2">✨ AI Suggested Reply:</div>
                            <div className="text-sm text-gray-900">"Congratulations on the launch! The interface looks incredibly clean and user-friendly. Can't wait to try it out!"</div>
                            <button className="mt-2 bg-[#4792E6] text-white px-4 py-1 rounded-full text-xs hover:bg-[#3a7bc8] transition-colors">
                              Post Reply
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm font-medium">
                          SM
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-gray-600 mb-1">@sarah_m</div>
                          <div className="text-sm text-gray-900 mb-2">Looking for recommendations on productivity tools...</div>
                          <div className="bg-white rounded-lg p-3 border border-green-200">
                            <div className="text-sm text-gray-700 mb-2">✨ AI Suggested Reply:</div>
                            <div className="text-sm text-gray-900">"I've been using Notion for project management and it's been a game-changer! The templates save so much time."</div>
                            <button className="mt-2 bg-[#4792E6] text-white px-4 py-1 rounded-full text-xs hover:bg-[#3a7bc8] transition-colors">
                              Post Reply
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Daily Limit</span>
                      <span className="text-gray-900 font-medium">47 / 50</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3 border border-gray-200">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <span className="text-gray-600">Watch the full tutorial</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Introducing <span className="text-[#4792E6]">TwitterVibe</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              TwitterVibe is built on a network of AI browser agents specialized in social media, 
              executing proven growth strategies tailored to your brand that get better over time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-[#4792E6]/10 p-4 rounded-lg w-fit mb-6">
                <MessageCircle className="h-8 w-8 text-[#4792E6]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Reply Generation</h3>
              <p className="text-gray-600 leading-relaxed">
                Build the best content strategy by deeply understanding your audience and generating contextual replies.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-[#4792E6]/10 p-4 rounded-lg w-fit mb-6">
                <Target className="h-8 w-8 text-[#4792E6]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Targeted Engagement</h3>
              <p className="text-gray-600 leading-relaxed">
                Reach the right audience through intelligent audience analysis and strategic engagement timing.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-[#4792E6]/10 p-4 rounded-lg w-fit mb-6">
                <TrendingUp className="h-8 w-8 text-[#4792E6]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Continuous Learning</h3>
              <p className="text-gray-600 leading-relaxed">
                Improve targeting and content in real-time based on results and feedback from your audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Scale your brand to the<br />
              <span className="text-[#4792E6] italic">next level</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The power of a 10-person marketing team — without the $500K payroll or hours of manual research yourself.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 text-white p-8 rounded-2xl">
              <div className="mb-6">
                <Clock className="h-12 w-12 text-[#4792E6] mb-4" />
                <h3 className="text-xl font-semibold mb-2">⏰ Save Time</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Top creators spend 10-15 hours weekly on manual research and engagement. Let us do all the heavy lifting while you focus more on what you love.
              </p>
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="space-y-2">
                  <div className="bg-[#4792E6] text-white px-3 py-1 rounded text-sm">Researching leads</div>
                  <div className="bg-[#4792E6] text-white px-3 py-1 rounded text-sm">Personalizing outreach</div>
                  <div className="bg-gray-700 text-gray-300 px-3 py-1 rounded text-sm">Manual follow-ups</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <div className="mb-6">
                <Zap className="h-12 w-12 text-[#4792E6] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">⚡ Get Quality Value</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Turn social noise and complex analytics into simple insights and actions. If you're ever confused, we're here to help.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Engagement Rate</span>
                  <span className="text-sm font-medium text-gray-900">+127%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#4792E6] h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
            </div>

            <div className="bg-[#4792E6] text-white p-8 rounded-2xl">
              <div className="mb-6">
                <Users className="h-12 w-12 text-white mb-4" />
                <h3 className="text-xl font-semibold mb-2">🚀 Grow Audience</h3>
              </div>
              <p className="text-blue-100 mb-4">
                Turn your followers into a community that builds you a community that builds you a community that builds you a community.
              </p>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-white/20"></div>
                  <div>
                    <div className="text-sm font-medium">New Follower</div>
                    <div className="text-xs text-blue-200">+47 this week</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4792E6] to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-4">
              Your personal AI-first Twitter and works like magic
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Are you ready to <span className="italic">level up</span>?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-lg font-medium">
              🚀 Get started now
            </div>
            <div className="bg-orange-500 rounded-full px-6 py-3 text-lg font-medium">
              Let's grow! 🔥
            </div>
          </div>
          
          <button className="bg-white text-[#4792E6] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
            Get started now
          </button>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Choose your plan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing plans designed to scale with your Twitter growth journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">$29<span className="text-lg text-gray-600 font-normal">/month</span></div>
                <p className="text-gray-600">Perfect for individuals</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>50 AI replies per day</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Basic content templates</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Email support</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Basic analytics</span>
                </li>
              </ul>
              <button className="w-full border-2 border-[#4792E6] text-[#4792E6] py-3 rounded-full font-semibold hover:bg-[#4792E6] hover:text-white transition-colors">
                Get Started
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#4792E6] hover:shadow-xl transition-shadow relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#4792E6] text-white px-4 py-2 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pro</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">$79<span className="text-lg text-gray-600 font-normal">/month</span></div>
                <p className="text-gray-600">For growing businesses</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>200 AI replies per day</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Advanced content templates</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Custom reply styles</span>
                </li>
              </ul>
              <button className="w-full bg-[#4792E6] text-white py-3 rounded-full font-semibold hover:bg-[#3a7bc8] transition-colors">
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">$199<span className="text-lg text-gray-600 font-normal">/month</span></div>
                <p className="text-gray-600">For large organizations</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Unlimited AI replies</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Custom templates</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>24/7 dedicated support</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Enterprise analytics</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>API integration</span>
                </li>
              </ul>
              <button className="w-full border-2 border-[#4792E6] text-[#4792E6] py-3 rounded-full font-semibold hover:bg-[#4792E6] hover:text-white transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Contact us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions or need support? We're here to help you succeed with TwitterVibe.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4792E6] focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4792E6] focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4792E6] focus:border-transparent"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4792E6] focus:border-transparent"
                    placeholder="Tell us more about your needs..."
                  />
                </div>
                <button className="w-full bg-[#4792E6] text-white py-3 rounded-lg font-semibold hover:bg-[#3a7bc8] transition-colors">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#4792E6]/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-[#4792E6]" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Email</div>
                      <div className="text-gray-600">support@twittervibe.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-[#4792E6]/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-[#4792E6]" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Phone</div>
                      <div className="text-gray-600">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-[#4792E6]/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-[#4792E6]" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Address</div>
                      <div className="text-gray-600">123 Innovation Drive, San Francisco, CA 94105</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#4792E6]/5 p-6 rounded-2xl">
                <h4 className="font-semibold text-gray-900 mb-3">Business Hours</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Quick Links</h4>
                <div className="space-y-2">
                  <a href="#" className="block text-[#4792E6] hover:text-[#3a7bc8] transition-colors">Documentation</a>
                  <a href="#" className="block text-[#4792E6] hover:text-[#3a7bc8] transition-colors">API Reference</a>
                  <a href="#" className="block text-[#4792E6] hover:text-[#3a7bc8] transition-colors">Community Forum</a>
                  <a href="#" className="block text-[#4792E6] hover:text-[#3a7bc8] transition-colors">Status Page</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-[#4792E6] p-2 rounded-lg">
                  <Twitter className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">TwitterVibe</span>
              </div>
              <p className="text-gray-400 mb-4">
                Revolutionary social media growth platform algorithms, bringing dead creative expertise to anyone.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Join Email List</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 TwitterVibe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;