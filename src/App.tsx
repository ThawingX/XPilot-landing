import React, { useState } from 'react';
import { Twitter, MessageCircle, Zap, Users, Check, ArrowRight, Mail, Menu, X, Play, Star, Clock, Target, TrendingUp, Search, User, CheckCircle, Heart } from 'lucide-react';

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
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 5px rgba(71, 146, 230, 0.3); }
          50% { box-shadow: 0 0 20px rgba(71, 146, 230, 0.6), 0 0 30px rgba(71, 146, 230, 0.4); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes bounce-in {
          0% { transform: scale(0.3) rotate(-10deg); opacity: 0; }
          50% { transform: scale(1.05) rotate(5deg); }
          70% { transform: scale(0.9) rotate(-2deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        
        .float-animation { animation: float 3s ease-in-out infinite; }
        .pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .shimmer-bg {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        .bounce-in { animation: bounce-in 0.6s ease-out; }
        
        .gradient-text {
          background: linear-gradient(135deg, #4792E6, #3a7bc8, #2563eb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
      `}</style>
      <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-[#4792E6] p-2 rounded-lg">
                <Twitter className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">X Pilot</span>
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
                  Join 50+ others now
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Meet <span className="text-[#4792E6]">X Pilot</span>, your<br />
                AI <span className="text-[#4792E6]">X growth</span> expert
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                Experience Vibe Operation - just chat with our AI to complete your X account management. Built for creators, businesses, and marketers to organically grow their brand with intelligent engagement.
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
                <span className="text-sm text-gray-600">Join 50+ others now</span>
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
                  <span className="text-sm text-gray-500">X Pilot Dashboard</span>
                  <div className="w-16"></div>
                </div>

                <div className="p-6">

                  {/* Inspiration Accounts Section */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-gray-900">Inspiration Accounts</h3>
                      <div className="flex space-x-2">
                        <button className="px-2 py-1 text-xs text-gray-600 bg-gray-100 rounded-full">Starred</button>
                        <button className="px-2 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">Outreach</button>
                      </div>
                    </div>
                    
                    <div className="relative mb-3">
                      <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400" />
                      <input 
                        type="text" 
                        placeholder="Search accounts..." 
                        className="w-full pl-7 pr-3 py-1.5 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div className="flex items-center text-xs text-gray-600 mb-3">
                      <Users className="w-3 h-3 mr-1" />
                      6 accounts
                    </div>
                  </div>

                  <div className="space-y-2">
                    {/* Naval Ravikant - Selected */}
                    <div className="card-hover pulse-glow flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 border-2 border-blue-300 rounded-xl transition-all duration-300 hover:shadow-lg cursor-pointer group transform hover:scale-[1.02] relative overflow-hidden">
                      <div className="absolute inset-0 shimmer-bg opacity-30"></div>
                      <div className="flex items-center space-x-3 relative z-10">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md float-animation">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-semibold text-gray-900 text-sm gradient-text">Naval Ravikant</span>
                            <CheckCircle className="w-3 h-3 text-blue-500 bounce-in" />
                            <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full font-medium">Small</span>
                            <div className="px-2 py-0.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs rounded-full font-medium animate-pulse shadow-sm bounce-in">
                              ✓ Selected
                            </div>
                          </div>
                          <p className="text-xs text-gray-600 font-medium">@naval</p>
                          <p className="text-xs text-gray-700 mt-1">Entrepreneur, investor, and philosopher. Sharing insights on wealth, happiness, ...</p>
                          <div className="flex items-center space-x-3 text-xs text-gray-500 mt-2">
                            <span className="flex items-center"><Users className="w-2.5 h-2.5 mr-1" />2.1M</span>
                            <span className="flex items-center"><Heart className="w-2.5 h-2.5 mr-1" />890.0K</span>
                            <span className="text-blue-600 font-medium flex items-center bounce-in">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-1 animate-pulse"></div>
                              AI Learning Style
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 relative z-10">
                        <Star className="w-4 h-4 text-yellow-400 fill-current float-animation" />
                        <div className="w-8 h-4 bg-blue-500 rounded-full relative shadow-sm pulse-glow">
                          <div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5 shadow-sm transition-transform duration-200 group-hover:scale-110"></div>
                        </div>
                      </div>
                    </div>

                    {/* Tim Cook - Hover state */}
                    <div className="card-hover flex items-center justify-between p-3 hover:bg-gradient-to-r hover:from-gray-50 hover:via-blue-50 hover:to-gray-50 rounded-xl transition-all duration-300 hover:shadow-md cursor-pointer group transform hover:scale-[1.01] border border-transparent hover:border-blue-200 relative overflow-hidden">
                      <div className="absolute inset-0 shimmer-bg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      <div className="flex items-center space-x-3 relative z-10">
                        <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-500 group-hover:from-blue-400 group-hover:to-blue-500 rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:float-animation">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-semibold text-gray-900 text-sm group-hover:gradient-text transition-all duration-300">Tim Cook</span>
                            <CheckCircle className="w-3 h-3 text-blue-500 group-hover:bounce-in" />
                            <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs rounded-full font-medium group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors duration-300">Medium</span>
                          </div>
                          <p className="text-xs text-gray-600 font-medium">@tim_cook</p>
                          <p className="text-xs text-gray-700 mt-1">CEO of Apple. Passionate about technology, privacy, and human rights.</p>
                          <div className="flex items-center space-x-3 text-xs text-gray-500 mt-2">
                            <span className="flex items-center"><Users className="w-2.5 h-2.5 mr-1" />13.5M</span>
                            <span className="flex items-center"><Heart className="w-2.5 h-2.5 mr-1" />2.1M</span>
                            <span className="text-gray-400 group-hover:text-blue-600 transition-colors duration-300 font-medium opacity-0 group-hover:opacity-100 bounce-in">Click to select</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 relative z-10">
                        <Star className="w-4 h-4 text-gray-300 group-hover:text-yellow-400 transition-colors duration-300 group-hover:float-animation" />
                        <div className="w-8 h-4 bg-gray-300 group-hover:bg-blue-200 rounded-full relative shadow-sm transition-colors duration-300 group-hover:pulse-glow">
                          <div className="w-3 h-3 bg-white rounded-full absolute left-0.5 top-0.5 shadow-sm transition-transform duration-200 group-hover:translate-x-3 group-hover:bg-blue-500"></div>
                        </div>
                      </div>
                    </div>

                    {/* Marc Benioff */}
                    <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                          <User className="w-3 h-3 text-gray-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-1">
                            <span className="font-medium text-gray-900 text-xs">Marc Benioff</span>
                            <CheckCircle className="w-2.5 h-2.5 text-blue-500" />
                            <span className="px-1.5 py-0.5 bg-green-100 text-green-800 text-xs rounded-full">Small</span>
                          </div>
                          <p className="text-xs text-gray-600">@benioff</p>
                          <p className="text-xs text-gray-700">Chairman and CEO of Salesforce. Philanthropist and advocate for equality.</p>
                          <div className="flex items-center space-x-2 text-xs text-gray-500">
                            <span className="flex items-center"><Users className="w-2 h-2 mr-0.5" />1.9M</span>
                            <span className="flex items-center"><Heart className="w-2 h-2 mr-0.5" />780.0K</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 text-gray-400" />
                        <div className="w-6 h-3 bg-gray-300 rounded-full relative">
                          <div className="w-2.5 h-2.5 bg-white rounded-full absolute left-0.5 top-0.5"></div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center py-4 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 rounded-xl border-2 border-blue-200 mt-4 relative overflow-hidden pulse-glow">
                      <div className="absolute inset-0 shimmer-bg opacity-40"></div>
                      <div className="relative z-10">
                        <div className="flex items-center justify-center gap-3 text-gray-600 text-sm mb-2">
                          <div className="flex gap-1">
                            <div className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-bounce float-animation"></div>
                            <div className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-bounce float-animation" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-bounce float-animation" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                          <span className="font-semibold gradient-text">Analyzing inspiration accounts</span>
                          <div className="text-xs bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full font-medium shadow-md animate-pulse bounce-in">
                            🤖 AI Learning
                          </div>
                        </div>
                        <div className="text-xs text-blue-600 font-semibold bounce-in">
                          🎯 Customizing content generation based on Naval's style
                        </div>
                        <div className="text-xs text-purple-600 font-medium mt-1 bounce-in" style={{ animationDelay: '0.3s' }}>
                          ✨ Adapting tone, topics, and engagement patterns
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            

              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3 border border-gray-200">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <span className="text-gray-600">Discover inspiration accounts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Demo Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              X Pilot Dashboard
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Watch X Pilot find relevant posts and generate personalized replies in real-time
            </p>
          </div>

          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 p-6">
            <div className="flex gap-6 h-[600px]">
              {/* Left Side - Engagement Queue (75% width) */}
              <div className="flex-[3] flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold text-gray-900">Engagement Queue</h3>
                    <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm text-green-700 font-medium">AI actively monitoring</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 bg-blue-50 px-3 py-1 rounded-full opacity-0 animate-fade-in" style={{ animationDelay: '3s', animationFillMode: 'forwards' }}>
                    2 new opportunities found
                  </div>
                </div>

                <div className="space-y-4 flex-1 overflow-y-auto">
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 relative opacity-0 animate-fade-in" style={{ animationDelay: '4s', animationFillMode: 'forwards' }}>
                    {/* AI Found Indicator */}
                    <div className="absolute top-2 right-2">
                      <div className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded-full text-xs text-green-600 opacity-0 animate-fade-in" style={{ animationDelay: '4.5s', animationFillMode: 'forwards' }}>
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                        <span>AI Found</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white text-sm font-medium">
                        AS
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="text-sm font-medium text-gray-900">Alex Smith</div>
                          <div className="text-sm text-gray-500">@alexbuilds</div>
                          <div className="text-sm text-gray-500">2:45 PM · Mar 27, 2025</div>
                        </div>
                        <div className="text-sm text-gray-900 mb-2">Building in public is harder than I thought 😅</div>
                        <div className="text-sm text-gray-700 mb-3">
                          The pressure to constantly share progress can sometimes feel overwhelming.
                          Anyone else struggling with this balance?
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>💬 12</span>
                          <span>🔄 8</span>
                          <span>❤️ 45</span>
                          <span>📊 1.2K</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 border border-gray-200 relative opacity-0 animate-fade-in" style={{ animationDelay: '6s', animationFillMode: 'forwards' }}>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="text-xs text-blue-600 flex items-center gap-1 opacity-0 animate-fade-in" style={{ animationDelay: '6.5s', animationFillMode: 'forwards' }}>
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
                              <span>AI GENERATED REPLY</span>
                            </div>
                          </div>
                          <div className="text-xs text-gray-400 opacity-0 animate-fade-in" style={{ animationDelay: '6.5s', animationFillMode: 'forwards' }}>via Chat Analysis</div>
                        </div>

                        {/* Typing Animation Container */}
                        <div className="text-sm text-gray-900 mb-3 relative">
                          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '7s', animationFillMode: 'forwards' }}>
                            So true. The biggest paradox of building in public is that the transparency meant to liberate often becomes another source of pressure. At XPilot we remind ourselves daily that progress isn't linear - and that's perfectly fine.
                          </div>
                          {/* Typing Cursor */}
                          <span className="inline-block w-0.5 h-4 bg-blue-500 ml-1 animate-blink opacity-0" style={{ animationDelay: '7s', animationFillMode: 'forwards' }}></span>
                        </div>

                        <div className="flex items-center justify-between opacity-0 animate-fade-in" style={{ animationDelay: '8s', animationFillMode: 'forwards' }}>
                          <div className="flex gap-2">
                            <button className="bg-red-50 text-red-600 px-3 py-1 rounded text-xs border border-red-200 hover:bg-red-100 transition-all duration-200 hover:scale-105">
                              ✕ Reject
                            </button>
                            <button className="bg-green-500 text-white px-4 py-1 rounded text-xs hover:bg-green-600 transition-all duration-200 hover:scale-105 shadow-sm">
                              ✓ Post reply
                            </button>
                          </div>
                          <div className="text-xs text-gray-400 flex items-center gap-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                            <span>95% match</span>
                          </div>
                        </div>

                        {/* Loading Animation Overlay (initially hidden) */}
                        <div className="absolute inset-0 bg-white/90 rounded-lg flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300" id="loading-overlay">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="flex gap-1">
                              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                            </div>
                            <span>AI generating reply...</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 relative overflow-hidden opacity-0 animate-fade-in" style={{ animationDelay: '9s', animationFillMode: 'forwards' }}>
                    {/* AI Analysis Animation */}
                    <div className="absolute top-2 right-2">
                      <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-full text-xs text-yellow-600 opacity-0 animate-fade-in" style={{ animationDelay: '9.5s', animationFillMode: 'forwards' }}>
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"></div>
                        <span>Analyzing</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center text-white text-sm font-medium">
                        ET
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="text-sm font-medium text-gray-900">Emma Thompson</div>
                          <div className="text-sm text-gray-500">@emmabuild</div>
                          <div className="text-sm text-gray-500">3:22 PM · Mar 27, 2025</div>
                        </div>
                        <div className="text-sm text-gray-900 mb-2">Just launched our new AI-powered analytics dashboard! 🚀</div>
                        <div className="text-sm text-gray-700 mb-3">
                          Real-time insights, predictive modeling, and automated reporting all in one place.
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>💬 15</span>
                          <span>🔄 23</span>
                          <span>❤️ 89</span>
                          <span>📊 2.1K</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-50 to-transparent"></div>
                  </div>

                  <div className="text-center py-2 opacity-0 animate-fade-in" style={{ animationDelay: '10s', animationFillMode: 'forwards' }}>
                    <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                      <div className="flex gap-1">
                        <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse"></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                      </div>
                      <span className="ml-2">3 more posts in queue</span>
                      <div className="ml-2 text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
                        AI Processing
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Live Chat with AI (25% width) */}
              <div className="flex-[1] bg-gray-50 rounded-xl border border-gray-200 p-4 flex flex-col h-full">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-700 font-semibold">Live Chat with AI</span>
                  <div className="ml-auto bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                    Active
                  </div>
                </div>

                <div className="space-y-3 text-sm flex-1 overflow-y-auto mb-4">
                  <div className="flex items-start gap-2 justify-end">
                    <div className="bg-blue-50 text-blue-800 px-3 py-2 rounded-lg max-w-[85%] border border-blue-200">
                      <div className="font-medium mb-1 text-blue-600">You:</div>
                      <div>"Find posts about building in public and suggest thoughtful replies"</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                    <div className="bg-white text-gray-800 px-3 py-2 rounded-lg max-w-[85%] border border-gray-200 shadow-sm">
                      <div className="font-medium mb-1 text-[#4792E6]">X Pilot AI:</div>
                      <div>
                        "Searching for relevant posts... 🔍"
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 opacity-0 animate-fade-in" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
                    <div className="bg-white text-gray-800 px-3 py-2 rounded-lg max-w-[85%] border border-gray-200 shadow-sm">
                      <div className="font-medium mb-1 text-[#4792E6]">X Pilot AI:</div>
                      <div>
                        "Found 2 relevant posts! Generating personalized replies based on your brand voice... ✨"
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 justify-end opacity-0 animate-fade-in" style={{ animationDelay: '8.5s', animationFillMode: 'forwards' }}>
                    <div className="bg-blue-50 text-blue-800 px-3 py-2 rounded-lg max-w-[85%] border border-blue-200">
                      <div className="font-medium mb-1 text-blue-600">You:</div>
                      <div>"Great! Show me the engagement queue"</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 opacity-0 animate-fade-in" style={{ animationDelay: '9s', animationFillMode: 'forwards' }}>
                    <div className="bg-white text-gray-800 px-3 py-2 rounded-lg max-w-[85%] border border-gray-200 shadow-sm">
                      <div className="font-medium mb-1 text-[#4792E6]">X Pilot AI:</div>
                      <div>
                        "Here's your engagement queue → Check the posts on the left. I've prioritized them by engagement potential!"
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 justify-end opacity-0 animate-fade-in" style={{ animationDelay: '10.5s', animationFillMode: 'forwards' }}>
                    <div className="bg-blue-50 text-blue-800 px-3 py-2 rounded-lg max-w-[85%] border border-blue-200">
                      <div className="font-medium mb-1 text-blue-600">You:</div>
                      <div>"Perfect! The first reply looks great. Can you find more posts like this?"</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 opacity-0 animate-fade-in" style={{ animationDelay: '11s', animationFillMode: 'forwards' }}>
                    <div className="bg-white text-gray-800 px-3 py-2 rounded-lg max-w-[85%] border border-gray-200 shadow-sm">
                      <div className="font-medium mb-1 text-[#4792E6]">X Pilot AI:</div>
                      <div>
                        "Absolutely! I'm continuously monitoring for similar opportunities. I'll notify you when I find more posts about building in public 🎯"
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-3">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Ask X Pilot anything..."
                      className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4792E6] focus:border-transparent bg-white"
                    />
                    <button className="bg-[#4792E6] text-white p-2 rounded-lg hover:bg-[#3a7bc8] transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Call to Action */}
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Ready to get started?</p>
            <button className="bg-[#4792E6] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3a7bc8] transition-colors shadow-lg">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Introducing <span className="text-[#4792E6]">X Pilot</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              X Pilot is built on a network of AI browser agents specialized in social media,
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
                  <div className="bg-[#4792E6] h-2 rounded-full" style={{ width: '85%' }}></div>
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

          <div className="grid md:grid-cols-2 gap-8">
            {/* Starter Plan */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">$19<span className="text-lg text-gray-600 font-normal">/month</span></div>
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

            {/* Enterprise Plan */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#4792E6] hover:shadow-xl transition-shadow relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#4792E6] text-white px-4 py-2 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">Contact Sales</div>
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
              <button className="w-full bg-[#4792E6] text-white py-3 rounded-full font-semibold hover:bg-[#3a7bc8] transition-colors">
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
              Have questions or need support? We're here to help you succeed with X Pilot.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Get in touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 justify-center">
                    <div className="bg-[#4792E6]/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-[#4792E6]" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Email</div>
                      <div className="text-gray-600">xDylanLong@gmail.com</div>
                      <div className="text-gray-600">linyanxu5@gmail.com</div>
                    </div>
                  </div>
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
                <span className="text-xl font-bold">X Pilot</span>
              </div>
              <p className="text-gray-400 mb-4">
                AI-powered X account management through intelligent chat operations.
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
            <p>&copy; 2025 X Pilot. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}

export default App;