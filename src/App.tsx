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
        <header className="fixed top-0 right-0 left-0 z-50 border-b border-gray-100 backdrop-blur-sm bg-white/95">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <img src="/xpilot-logo-fill-white.jpg" alt="X-Pilot Logo" className="w-10 h-10 rounded-lg" />
                <span className="text-xl font-bold text-gray-900">X-Pilot</span>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden items-center space-x-8 md:flex">
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
                className="p-2 md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="bg-white border-t border-gray-100 md:hidden">
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
        <section id="home" className="overflow-hidden relative pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#4792E6]/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr to-transparent rounded-full blur-2xl from-indigo-200/30"></div>

          <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid gap-12 items-center lg:grid-cols-2">
              <div>

                <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
                  <span className="text-[#4792E6]">Vibe X Growth</span><br />
                  <span className='text-3xl md:text-4xl'>Operation your X <span className="text-[#4792E6]">like Cursor</span></span>
                </h1>

                <p className="mb-8 max-w-lg text-xl leading-relaxed text-gray-600">
                  Experience Vibe Operation - just chat with our AI to complete your X account management. Built for creators, businesses, and marketers to organically grow their brand with intelligent engagement.
                </p>

                <div className="flex flex-col gap-4 mb-8 sm:flex-row">
                  <button className="bg-[#4792E6] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#3a7bc8] transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                    Get started <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-[#4792E6] hover:text-[#4792E6] transition-all flex items-center justify-center gap-2">
                    <Play className="w-5 h-5" /> Get a demo
                  </button>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="text-sm text-gray-600">Join 50+ others now</span>
                </div>
              </div>

              <div className="relative">
                {/* Mock Twitter Interface */}
                <div className="overflow-hidden bg-white rounded-2xl border border-gray-200 shadow-2xl">
                  <div className="flex justify-between items-center px-4 py-3 bg-gray-50 border-b border-gray-200">
                    <div className="flex gap-2 items-center">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-500">X-Pilot Dashboard</span>
                    <div className="w-16"></div>
                  </div>

                  <div className="p-6">

                    {/* Inspiration Accounts Section */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-semibold text-gray-900">Inspiration Accounts</h3>
                        <div className="flex space-x-2">
                          <button className="px-2 py-1 text-xs text-gray-600 bg-gray-100 rounded-full">Starred</button>
                          <button className="px-2 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">Outreach</button>
                        </div>
                      </div>

                      <div className="relative mb-3">
                        <Search className="absolute left-2 top-1/2 w-3 h-3 text-gray-400 transform -translate-y-1/2" />
                        <input
                          type="text"
                          placeholder="Search accounts..."
                          className="w-full pl-7 pr-3 py-1.5 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>

                      <div className="flex items-center mb-3 text-xs text-gray-600">
                        <Users className="mr-1 w-3 h-3" />
                        6 accounts
                      </div>
                    </div>

                    <div className="space-y-2">
                      {/* Naval Ravikant - Selected */}
                      <div className="card-hover pulse-glow flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 border-2 border-blue-300 rounded-xl transition-all duration-300 hover:shadow-lg cursor-pointer group transform hover:scale-[1.02] relative overflow-hidden">
                        <div className="absolute inset-0 opacity-30 shimmer-bg"></div>
                        <div className="flex relative z-10 items-center space-x-3">
                          <div className="flex justify-center items-center w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-md float-animation">
                            <User className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center mb-1 space-x-2">
                              <span className="text-sm font-semibold text-gray-900 gradient-text">Naval Ravikant</span>
                              <CheckCircle className="w-3 h-3 text-blue-500 bounce-in" />
                              <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full font-medium">Small</span>
                              <div className="px-2 py-0.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs rounded-full font-medium animate-pulse shadow-sm bounce-in">
                                ✓ Selected
                              </div>
                            </div>
                            <p className="text-xs font-medium text-gray-600">@naval</p>
                            <p className="mt-1 text-xs text-gray-700">Entrepreneur, investor, and philosopher. Sharing insights on wealth, happiness, ...</p>
                            <div className="flex items-center mt-2 space-x-3 text-xs text-gray-500">
                              <span className="flex items-center"><Users className="w-2.5 h-2.5 mr-1" />2.1M</span>
                              <span className="flex items-center"><Heart className="w-2.5 h-2.5 mr-1" />890.0K</span>
                              <span className="flex items-center font-medium text-blue-600 bounce-in">
                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-1 animate-pulse"></div>
                                AI Learning Style
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex relative z-10 items-center space-x-2">
                          <Star className="w-4 h-4 text-yellow-400 fill-current float-animation" />
                          <div className="relative w-8 h-4 bg-blue-500 rounded-full shadow-sm pulse-glow">
                            <div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5 shadow-sm transition-transform duration-200 group-hover:scale-110"></div>
                          </div>
                        </div>
                      </div>

                      {/* Tim Cook - Hover state */}
                      <div className="card-hover flex items-center justify-between p-3 hover:bg-gradient-to-r hover:from-gray-50 hover:via-blue-50 hover:to-gray-50 rounded-xl transition-all duration-300 hover:shadow-md cursor-pointer group transform hover:scale-[1.01] border border-transparent hover:border-blue-200 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-0 transition-opacity duration-300 shimmer-bg group-hover:opacity-20"></div>
                        <div className="flex relative z-10 items-center space-x-3">
                          <div className="flex justify-center items-center w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full shadow-sm transition-all duration-300 group-hover:from-blue-400 group-hover:to-blue-500 group-hover:shadow-md group-hover:float-animation">
                            <User className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center mb-1 space-x-2">
                              <span className="text-sm font-semibold text-gray-900 transition-all duration-300 group-hover:gradient-text">Tim Cook</span>
                              <CheckCircle className="w-3 h-3 text-blue-500 group-hover:bounce-in" />
                              <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs rounded-full font-medium group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors duration-300">Medium</span>
                            </div>
                            <p className="text-xs font-medium text-gray-600">@tim_cook</p>
                            <p className="mt-1 text-xs text-gray-700">CEO of Apple. Passionate about technology, privacy, and human rights.</p>
                            <div className="flex items-center mt-2 space-x-3 text-xs text-gray-500">
                              <span className="flex items-center"><Users className="w-2.5 h-2.5 mr-1" />13.5M</span>
                              <span className="flex items-center"><Heart className="w-2.5 h-2.5 mr-1" />2.1M</span>
                              <span className="font-medium text-gray-400 opacity-0 transition-colors duration-300 group-hover:text-blue-600 group-hover:opacity-100 bounce-in">Click to select</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex relative z-10 items-center space-x-2">
                          <Star className="w-4 h-4 text-gray-300 transition-colors duration-300 group-hover:text-yellow-400 group-hover:float-animation" />
                          <div className="relative w-8 h-4 bg-gray-300 rounded-full shadow-sm transition-colors duration-300 group-hover:bg-blue-200 group-hover:pulse-glow">
                            <div className="w-3 h-3 bg-white rounded-full absolute left-0.5 top-0.5 shadow-sm transition-transform duration-200 group-hover:translate-x-3 group-hover:bg-blue-500"></div>
                          </div>
                        </div>
                      </div>

                      {/* Marc Benioff */}
                      <div className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50">
                        <div className="flex items-center space-x-2">
                          <div className="flex justify-center items-center w-6 h-6 bg-gray-300 rounded-full">
                            <User className="w-3 h-3 text-gray-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-1">
                              <span className="text-xs font-medium text-gray-900">Marc Benioff</span>
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
                          <div className="relative w-6 h-3 bg-gray-300 rounded-full">
                            <div className="w-2.5 h-2.5 bg-white rounded-full absolute left-0.5 top-0.5"></div>
                          </div>
                        </div>
                      </div>

                      <div className="overflow-hidden relative py-4 mt-4 text-center bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 rounded-xl border-2 border-blue-200 pulse-glow">
                        <div className="absolute inset-0 opacity-40 shimmer-bg"></div>
                        <div className="relative z-10">
                          <div className="flex gap-3 justify-center items-center mb-2 text-sm text-gray-600">
                            <div className="flex gap-1">
                              <div className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-bounce float-animation"></div>
                              <div className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-bounce float-animation" style={{ animationDelay: '0.1s' }}></div>
                              <div className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-bounce float-animation" style={{ animationDelay: '0.2s' }}></div>
                            </div>
                            <span className="font-semibold gradient-text">Analyzing inspiration accounts</span>
                            <div className="px-3 py-1 text-xs font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-md animate-pulse bounce-in">
                              🤖 AI Learning
                            </div>
                          </div>
                          <div className="text-xs font-semibold text-blue-600 bounce-in">
                            🎯 Customizing content generation based on Naval's style
                          </div>
                          <div className="mt-1 text-xs font-medium text-purple-600 bounce-in" style={{ animationDelay: '0.3s' }}>
                            ✨ Adapting tone, topics, and engagement patterns
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>



                <div className="absolute -right-4 -bottom-4 p-3 bg-white rounded-lg border border-gray-200 shadow-lg">
                  <div className="flex gap-2 items-center text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-600">Discover inspiration accounts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Demo Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Auto Enagement In X-Pilot
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Find relevant posts and generate personalized replies in real-time
              </p>
            </div>

            <div className="overflow-hidden relative p-6 bg-white rounded-2xl border border-gray-200 shadow-2xl">
              <div className="flex gap-6 h-[600px]">
                {/* Left Side - Engagement Queue (75% width) */}
                <div className="flex-[3] flex flex-col">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-3 items-center">
                      <h3 className="text-lg font-semibold text-gray-900">Engagement Queue</h3>
                      <div className="flex gap-2 items-center px-3 py-1 bg-green-50 rounded-full">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-green-700">AI actively monitoring</span>
                      </div>
                    </div>
                    <div className="px-3 py-1 text-sm text-gray-500 bg-blue-50 rounded-full opacity-0 animate-fade-in" style={{ animationDelay: '3s', animationFillMode: 'forwards' }}>
                      2 new opportunities found
                    </div>
                  </div>

                  <div className="overflow-y-auto flex-1 space-y-4">
                    <div className="relative p-4 bg-gray-50 rounded-lg border border-gray-200 opacity-0 animate-fade-in" style={{ animationDelay: '4s', animationFillMode: 'forwards' }}>
                      {/* AI Found Indicator */}
                      <div className="absolute top-2 right-2">
                        <div className="flex gap-1 items-center px-2 py-1 text-xs text-green-600 bg-green-100 rounded-full opacity-0 animate-fade-in" style={{ animationDelay: '4.5s', animationFillMode: 'forwards' }}>
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                          <span>AI Found</span>
                        </div>
                      </div>

                      <div className="flex gap-3 items-start mb-4">
                        <div className="flex justify-center items-center w-10 h-10 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-full">
                          AS
                        </div>
                        <div className="flex-1">
                          <div className="flex gap-2 items-center mb-1">
                            <div className="text-sm font-medium text-gray-900">Alex Smith</div>
                            <div className="text-sm text-gray-500">@alexbuilds</div>
                            <div className="text-sm text-gray-500">2:45 PM · Mar 27, 2025</div>
                          </div>
                          <div className="mb-2 text-sm text-gray-900">Building in public is harder than I thought 😅</div>
                          <div className="mb-3 text-sm text-gray-700">
                            The pressure to constantly share progress can sometimes feel overwhelming.
                            Anyone else struggling with this balance?
                          </div>
                          <div className="flex gap-4 items-center text-sm text-gray-500">
                            <span>💬 12</span>
                            <span>🔄 8</span>
                            <span>❤️ 45</span>
                            <span>📊 1.2K</span>
                          </div>
                        </div>
                      </div>

                      <div className="relative p-4 bg-white rounded-lg border border-gray-200 opacity-0 animate-fade-in" style={{ animationDelay: '6s', animationFillMode: 'forwards' }}>
                        <div className="pl-4 border-l-4 border-blue-500">
                          <div className="flex justify-between items-center mb-2">
                            <div className="flex gap-2 items-center">
                              <div className="flex gap-1 items-center text-xs text-blue-600 opacity-0 animate-fade-in" style={{ animationDelay: '6.5s', animationFillMode: 'forwards' }}>
                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
                                <span>AI GENERATED REPLY</span>
                              </div>
                            </div>
                            <div className="text-xs text-gray-400 opacity-0 animate-fade-in" style={{ animationDelay: '6.5s', animationFillMode: 'forwards' }}>via Chat Analysis</div>
                          </div>

                          {/* Typing Animation Container */}
                          <div className="relative mb-3 text-sm text-gray-900">
                            <div className="opacity-0 animate-fade-in" style={{ animationDelay: '7s', animationFillMode: 'forwards' }}>
                              So true. The biggest paradox of building in public is that the transparency meant to liberate often becomes another source of pressure. At XPilot we remind ourselves daily that progress isn't linear - and that's perfectly fine.
                            </div>
                            {/* Typing Cursor */}
                            <span className="inline-block w-0.5 h-4 bg-blue-500 ml-1 animate-blink opacity-0" style={{ animationDelay: '7s', animationFillMode: 'forwards' }}></span>
                          </div>

                          <div className="flex justify-between items-center opacity-0 animate-fade-in" style={{ animationDelay: '8s', animationFillMode: 'forwards' }}>
                            <div className="flex gap-2">
                              <button className="px-3 py-1 text-xs text-red-600 bg-red-50 rounded border border-red-200 transition-all duration-200 hover:bg-red-100 hover:scale-105">
                                ✕ Reject
                              </button>
                              <button className="px-4 py-1 text-xs text-white bg-green-500 rounded shadow-sm transition-all duration-200 hover:bg-green-600 hover:scale-105">
                                ✓ Post reply
                              </button>
                            </div>
                            <div className="flex gap-1 items-center text-xs text-gray-400">
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                              </svg>
                              <span>95% match</span>
                            </div>
                          </div>

                          {/* Loading Animation Overlay (initially hidden) */}
                          <div className="flex absolute inset-0 justify-center items-center rounded-lg opacity-0 transition-opacity duration-300 pointer-events-none bg-white/90" id="loading-overlay">
                            <div className="flex gap-2 items-center text-sm text-gray-600">
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

                    <div className="overflow-hidden relative p-4 bg-gray-50 rounded-lg opacity-0 animate-fade-in" style={{ animationDelay: '9s', animationFillMode: 'forwards' }}>
                      {/* AI Analysis Animation */}
                      <div className="absolute top-2 right-2">
                        <div className="flex gap-1 items-center px-2 py-1 text-xs text-yellow-600 bg-yellow-100 rounded-full opacity-0 animate-fade-in" style={{ animationDelay: '9.5s', animationFillMode: 'forwards' }}>
                          <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"></div>
                          <span>Analyzing</span>
                        </div>
                      </div>

                      <div className="flex gap-3 items-start">
                        <div className="flex justify-center items-center w-10 h-10 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-purple-600 rounded-full">
                          ET
                        </div>
                        <div className="flex-1">
                          <div className="flex gap-2 items-center mb-1">
                            <div className="text-sm font-medium text-gray-900">Emma Thompson</div>
                            <div className="text-sm text-gray-500">@emmabuild</div>
                            <div className="text-sm text-gray-500">3:22 PM · Mar 27, 2025</div>
                          </div>
                          <div className="mb-2 text-sm text-gray-900">Just launched our new AI-powered analytics dashboard! 🚀</div>
                          <div className="mb-3 text-sm text-gray-700">
                            Real-time insights, predictive modeling, and automated reporting all in one place.
                          </div>
                          <div className="flex gap-4 items-center text-sm text-gray-500">
                            <span>💬 15</span>
                            <span>🔄 23</span>
                            <span>❤️ 89</span>
                            <span>📊 2.1K</span>
                          </div>
                        </div>
                      </div>
                      <div className="absolute right-0 bottom-0 left-0 h-8 bg-gradient-to-t from-gray-50 to-transparent"></div>
                    </div>

                    <div className="py-2 text-center opacity-0 animate-fade-in" style={{ animationDelay: '10s', animationFillMode: 'forwards' }}>
                      <div className="flex gap-2 justify-center items-center text-sm text-gray-400">
                        <div className="flex gap-1">
                          <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse"></div>
                          <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                          <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                        </div>
                        <span className="ml-2">3 more posts in queue</span>
                        <div className="px-2 py-1 ml-2 text-xs text-blue-600 bg-blue-50 rounded-full">
                          AI Processing
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Live Chat with AI (25% width) */}
                <div className="flex-[1] bg-gray-50 rounded-xl border border-gray-200 p-4 flex flex-col h-full">
                  <div className="flex gap-2 items-center mb-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-700">Live Chat with AI</span>
                    <div className="px-2 py-1 ml-auto text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
                      Active
                    </div>
                  </div>

                  <div className="overflow-y-auto flex-1 mb-4 space-y-3 text-sm">
                    <div className="flex gap-2 justify-end items-start">
                      <div className="bg-blue-50 text-blue-800 px-3 py-2 rounded-lg max-w-[85%] border border-blue-200">
                        <div className="mb-1 font-medium text-blue-600">You:</div>
                        <div>"Find posts about building in public and suggest thoughtful replies"</div>
                      </div>
                    </div>

                    <div className="flex gap-2 items-start opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                      <div className="bg-white text-gray-800 px-3 py-2 rounded-lg max-w-[85%] border border-gray-200 shadow-sm">
                        <div className="font-medium mb-1 text-[#4792E6]">X-Pilot AI:</div>
                        <div>
                          "Searching for relevant posts... 🔍"
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 items-start opacity-0 animate-fade-in" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
                      <div className="bg-white text-gray-800 px-3 py-2 rounded-lg max-w-[85%] border border-gray-200 shadow-sm">
                        <div className="font-medium mb-1 text-[#4792E6]">X-Pilot AI:</div>
                        <div>
                          "Found 2 relevant posts! Generating personalized replies based on your brand voice... ✨"
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 justify-end items-start opacity-0 animate-fade-in" style={{ animationDelay: '8.5s', animationFillMode: 'forwards' }}>
                      <div className="bg-blue-50 text-blue-800 px-3 py-2 rounded-lg max-w-[85%] border border-blue-200">
                        <div className="mb-1 font-medium text-blue-600">You:</div>
                        <div>"Great! Show me the engagement queue"</div>
                      </div>
                    </div>

                    <div className="flex gap-2 items-start opacity-0 animate-fade-in" style={{ animationDelay: '9s', animationFillMode: 'forwards' }}>
                      <div className="bg-white text-gray-800 px-3 py-2 rounded-lg max-w-[85%] border border-gray-200 shadow-sm">
                        <div className="font-medium mb-1 text-[#4792E6]">X-Pilot AI:</div>
                        <div>
                          "Here's your engagement queue → Check the posts on the left. I've prioritized them by engagement potential!"
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 justify-end items-start opacity-0 animate-fade-in" style={{ animationDelay: '10.5s', animationFillMode: 'forwards' }}>
                      <div className="bg-blue-50 text-blue-800 px-3 py-2 rounded-lg max-w-[85%] border border-blue-200">
                        <div className="mb-1 font-medium text-blue-600">You:</div>
                        <div>"Perfect! The first reply looks great. Can you find more posts like this?"</div>
                      </div>
                    </div>

                    <div className="flex gap-2 items-start opacity-0 animate-fade-in" style={{ animationDelay: '11s', animationFillMode: 'forwards' }}>
                      <div className="bg-white text-gray-800 px-3 py-2 rounded-lg max-w-[85%] border border-gray-200 shadow-sm">
                        <div className="font-medium mb-1 text-[#4792E6]">X-Pilot AI:</div>
                        <div>
                          "Absolutely! I'm continuously monitoring for similar opportunities. I'll notify you when I find more posts about building in public 🎯"
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gray-200">
                    <div className="flex gap-2 items-center">
                      <input
                        type="text"
                        placeholder="Ask X-Pilot anything..."
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
            <div className="mt-8 text-center">
              <p className="mb-4 text-gray-600">Ready to get started?</p>
              <button className="bg-[#4792E6] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3a7bc8] transition-colors shadow-lg">
                Start Free Trial
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-5xl">
                Introducing <span className="text-[#4792E6]">X-Pilot</span>
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600">
                X-Pilot is an AI-powered growth assistant for X (formerly Twitter).<br/>
                It helps <span className="text-[#4792E6]">creators, indie hackers, and operators</span> grow their accounts with automated engagement, content generation, and strategic planning<br/> — <span className="text-[#4792E6]">all without burning out.</span><br/>
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="p-8 bg-gray-50 rounded-2xl transition-shadow hover:shadow-lg">
                <div className="bg-[#4792E6]/10 p-4 rounded-lg w-fit mb-6">
                  <MessageCircle className="h-8 w-8 text-[#4792E6]" />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">Auto Reply Suggestion</h3>
                <p className="leading-relaxed text-gray-600">
                  Talk to AI and instantly generate high-quality comments or replies.
                </p>
              </div>

              <div className="p-8 bg-gray-50 rounded-2xl transition-shadow hover:shadow-lg">
                <div className="bg-[#4792E6]/10 p-4 rounded-lg w-fit mb-6">
                  <Target className="h-8 w-8 text-[#4792E6]" />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">Inspiration from top accounts</h3>
                <p className="leading-relaxed text-gray-600">
                 Pick reference accounts and get AI-curated content in your voice.
                </p>
              </div>

              <div className="p-8 bg-gray-50 rounded-2xl transition-shadow hover:shadow-lg">
                <div className="bg-[#4792E6]/10 p-4 rounded-lg w-fit mb-6">
                  <TrendingUp className="h-8 w-8 text-[#4792E6]" />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">Auto Operation strategy</h3>
                <p className="leading-relaxed text-gray-600">
                  AI-generated content plans, posting schedules, and engagement blueprints.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who is X-Pilot for Section */}
        <section className="py-20 bg-white">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-5xl">
                Who is <span className="text-[#4792E6]">X-Pilot</span> for?
              </h2>
              <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-600">
                You know that growth = value + consistency + interaction
              </p>
            </div>

            <div className="grid gap-8 mb-16 md:grid-cols-3">
              <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 card-hover">
                <div className="bg-[#4792E6]/10 p-4 rounded-lg w-fit mb-6">
                  <User className="h-8 w-8 text-[#4792E6]" />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">Indie Hackers & Creators</h3>
                <p className="leading-relaxed text-gray-600">
                  You're an indie hacker, creator, or solopreneur trying to grow on X. You want to automate the grunt work, not your voice.
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100 card-hover">
                <div className="bg-[#4792E6]/10 p-4 rounded-lg w-fit mb-6">
                  <TrendingUp className="h-8 w-8 text-[#4792E6]" />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">Product Builders</h3>
                <p className="leading-relaxed text-gray-600">
                  You're building a product, and X is your main growth channel. You need consistent engagement without burning out.
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100 card-hover">
                <div className="bg-[#4792E6]/10 p-4 rounded-lg w-fit mb-6">
                  <Target className="h-8 w-8 text-[#4792E6]" />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">Growth-Focused Operators</h3>
                <p className="leading-relaxed text-gray-600">
                  You understand that authentic engagement drives real growth, but manual work doesn't scale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why X-Pilot Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-[#4792E6] bg-blue-100 rounded-full">
                <span>💡</span>
                <span>Why X-Pilot?</span>
              </div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-5xl">
                I was <span className="text-[#4792E6] italic">exhausted</span>
              </h2>
            </div>

            <div className="mx-auto max-w-4xl">
              <div className="p-8 mb-8 bg-white rounded-2xl border border-gray-200 shadow-lg">
                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                  Running my X account meant writing posts, replying to comments, engaging with others, and sending DMs — every day, all day. 
                  The more time I spent, the harder it was to stay consistent and get results.
                </p>
                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                  AI was powerful, but what I needed was:
                </p>
                <div className="p-6 mb-6 bg-gradient-to-r from-[#4792E6]/10 to-blue-100 rounded-xl border-l-4 border-[#4792E6]">
                  <p className="text-lg font-semibold text-gray-900">
                    A tool that connects strategy + content + interaction — all in one loop.
                  </p>
                </div>
                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                  So I built it:
                </p>
                <div className="p-6 mb-6 bg-gradient-to-r from-[#4792E6] to-blue-600 rounded-xl text-white">
                  <p className="text-lg font-semibold text-center">
                    X-Pilot = Content Engine + AI Replies + Scheduling + Growth Strategy
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                    <p className="mb-2 text-sm font-medium text-red-800">❌ It's NOT for "ghostwriting"</p>
                    <p className="text-sm text-red-700">Generic AI content that sounds robotic</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <p className="mb-2 text-sm font-medium text-green-800">✅ It's FOR authentic scaling</p>
                    <p className="text-sm text-green-700">People who want to own their vibe and scale their voice — without doing everything manually</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-[#4792E6] bg-blue-100 rounded-full">
                <span>🚀</span>
                <span>Transform Your Growth</span>
              </div>
              <h2 className="px-6 mx-auto mb-6 max-w-6xl text-3xl font-bold leading-tight text-center text-gray-900 md:text-5xl lg:text-6xl">
                <span className="whitespace-nowrap">Scale your brand to the{' '}</span>
                <span className="text-[#4792E6] italic bg-gradient-to-r from-[#4792E6] to-blue-600 bg-clip-text text-transparent whitespace-nowrap pr-4 md:pr-6 lg:pr-8">
                  next level
                </span>
              </h2>
              <p className="mx-auto max-w-4xl text-xl leading-relaxed text-gray-600">
                Stop spending 15+ hours weekly on manual engagement. Get the power of a dedicated marketing team — 
                <span className="text-[#4792E6] font-semibold"> without the $500K payroll or endless manual work</span>.
              </p>
              
              {/* Key Value Props */}
              <div className="flex flex-wrap gap-3 justify-center items-center mt-8">
                <div className="px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm transition-shadow hover:shadow-md">
                  <span className="text-sm font-medium text-gray-700">🎯 Strategic Growth</span>
                </div>
                <div className="px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm transition-shadow hover:shadow-md">
                  <span className="text-sm font-medium text-gray-700">⚡ Authentic Voice</span>
                </div>
                <div className="px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm transition-shadow hover:shadow-md">
                  <span className="text-sm font-medium text-gray-700">🚀 Scalable Results</span>
                </div>
                <div className="px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm transition-shadow hover:shadow-md">
                  <span className="text-sm font-medium text-gray-700">⏱️ 90% Time Saved</span>
                </div>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Time Efficiency Card */}
              <div className="p-8 text-white bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 card-hover">
                <div className="mb-6">
                  <div className="bg-[#4792E6]/20 p-3 rounded-lg w-fit mb-4">
                    <Clock className="h-10 w-10 text-[#4792E6]" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">⏰ Reclaim Your Time</h3>
                </div>
                <p className="mb-6 leading-relaxed text-gray-300">
                  Top creators spend <span className="text-[#4792E6] font-semibold">10-15 hours weekly</span> on manual research and engagement. 
                  We automate the grunt work so you can focus on what matters.
                </p>
                <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">Manual Research</span>
                      <span className="px-2 py-1 text-xs text-white bg-red-500 rounded">15h/week</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">With X-Pilot</span>
                      <span className="text-xs bg-[#4792E6] text-white px-2 py-1 rounded">1.5h/week</span>
                    </div>
                    <div className="pt-2 border-t border-gray-700">
                      <span className="text-sm font-medium text-[#4792E6]">90% time saved</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quality & Analytics Card */}
              <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-lg card-hover">
                <div className="mb-6">
                  <div className="bg-[#4792E6]/10 p-3 rounded-lg w-fit mb-4">
                    <Zap className="h-10 w-10 text-[#4792E6]" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">⚡ Smart Insights</h3>
                </div>
                <p className="mb-6 leading-relaxed text-gray-600">
                  Transform social noise into <span className="text-[#4792E6] font-semibold">actionable insights</span>. 
                  Our AI analyzes patterns and suggests optimal engagement strategies.
                </p>
                <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Engagement Rate</span>
                      <span className="text-sm font-bold text-green-600">+127%</span>
                    </div>
                    <div className="overflow-hidden w-full h-3 bg-gray-200 rounded-full">
                      <div className="bg-gradient-to-r from-[#4792E6] to-blue-500 h-3 rounded-full transition-all duration-1000" style={{ width: '85%' }}></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Before</span>
                      <span>After X-Pilot</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Community Growth Card */}
              <div className="bg-gradient-to-br from-[#4792E6] to-blue-600 text-white p-8 rounded-2xl shadow-lg card-hover">
                <div className="mb-6">
                  <div className="p-3 mb-4 rounded-lg bg-white/20 w-fit">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">🚀 Build Community</h3>
                </div>
                <p className="mb-6 leading-relaxed text-blue-100">
                  Turn followers into <span className="font-semibold text-white">engaged community members</span> who 
                  amplify your message and drive organic growth.
                </p>
                <div className="p-4 rounded-lg border backdrop-blur-sm bg-white/10 border-white/20">
                  <div className="space-y-3">
                    <div className="flex gap-3 items-center">
                      <div className="flex justify-center items-center w-8 h-8 rounded-full bg-white/30">
                        <span className="text-xs font-bold">+</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">Quality Followers</div>
                        <div className="text-xs text-blue-200">+47 this week</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold">2.3K</div>
                        <div className="text-xs text-blue-200">total</div>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-white/20">
                      <span className="text-xs text-blue-200">Authentic engagement, not vanity metrics</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 text-center">
              <div className="p-8 mx-auto max-w-4xl bg-white rounded-2xl border border-gray-200 shadow-lg">
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  Ready to <span className="text-[#4792E6]">10x your Twitter growth</span>?
                </h3>
                <p className="mb-6 text-lg text-gray-600">
                  Join 50+ creators who've transformed their X presence with AI-powered automation
                </p>
                <div className="flex flex-col gap-4 justify-center items-center sm:flex-row">
                  <button className="bg-[#4792E6] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3a7bc8] transition-colors shadow-lg">
                    Start Free Trial
                  </button>
                  <button className="border-2 border-[#4792E6] text-[#4792E6] px-8 py-3 rounded-lg font-semibold hover:bg-[#4792E6] hover:text-white transition-colors">
                    See Demo
                  </button>
                </div>
                <p className="mt-4 text-sm text-gray-500">No credit card required • 7-day free trial</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#4792E6] to-blue-600 text-white">
          <div className="px-4 mx-auto max-w-7xl text-center sm:px-6 lg:px-8">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-white/20">
                Your personal AI-first Twitter and works like magic
              </span>
            </div>

            <h2 className="mb-8 text-3xl font-bold md:text-5xl">
              Are you ready to <span className="italic">level up</span>?
            </h2>

            <div className="flex flex-col gap-4 justify-center items-center mb-12 sm:flex-row">
              <div className="px-6 py-3 text-lg font-medium rounded-full backdrop-blur-sm bg-white/20">
                🚀 Get started now
              </div>
              <div className="px-6 py-3 text-lg font-medium bg-orange-500 rounded-full">
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
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-5xl">Choose your plan</h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600">
                Flexible pricing plans designed to scale with your Twitter growth journey
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Starter Plan */}
              <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-lg transition-shadow hover:shadow-xl">
                <div className="mb-8 text-center">
                  <h3 className="mb-4 text-2xl font-bold text-gray-900">Starter</h3>
                  <div className="mb-2 text-4xl font-bold text-gray-900">$19<span className="text-lg font-normal text-gray-600">/month</span></div>
                  <p className="text-gray-600">Perfect for individuals</p>
                </div>
                <ul className="mb-8 space-y-4">
                  <li className="flex gap-3 items-center">
                    <Check className="flex-shrink-0 w-5 h-5 text-green-500" />
                    <span>50 AI replies per day</span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <Check className="flex-shrink-0 w-5 h-5 text-green-500" />
                    <span>Basic content templates</span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <Check className="flex-shrink-0 w-5 h-5 text-green-500" />
                    <span>Email support</span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <Check className="flex-shrink-0 w-5 h-5 text-green-500" />
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
                <div className="mb-8 text-center">
                  <h3 className="mb-4 text-2xl font-bold text-gray-900">Enterprise</h3>
                  <div className="mb-2 text-4xl font-bold text-gray-900">Contact Sales</div>
                  <p className="text-gray-600">For large organizations</p>
                </div>
                <ul className="mb-8 space-y-4">
                  <li className="flex gap-3 items-center">
                    <Check className="flex-shrink-0 w-5 h-5 text-green-500" />
                    <span>Unlimited AI replies</span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <Check className="flex-shrink-0 w-5 h-5 text-green-500" />
                    <span>Custom templates</span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <Check className="flex-shrink-0 w-5 h-5 text-green-500" />
                    <span>24/7 dedicated support</span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <Check className="flex-shrink-0 w-5 h-5 text-green-500" />
                    <span>Enterprise analytics</span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <Check className="flex-shrink-0 w-5 h-5 text-green-500" />
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

        {/* Discord Community Section */}
        <section className="py-20 bg-gradient-to-br from-[#5865F2] to-[#4752C4]">
          <div className="px-4 mx-auto max-w-4xl sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mb-8">
                <img src="/snapsnap-discord-logo.png" alt="SnapSnap Discord" className="mx-auto mb-6 w-24 h-24 rounded-2xl shadow-lg" />
                <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
                  Join Our <span className="text-yellow-300">Discord Community</span>
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
                  Connect with fellow creators, get exclusive tips, and be the first to know about new features. Our community is here to help you grow!
                </p>
              </div>
              
              <div className="flex flex-col gap-6 justify-center items-center sm:flex-row">
                <div className="flex gap-4 items-center text-white">
                  <div className="p-3 rounded-full bg-white/20">
                    <Users className="w-6 h-6" />
                  </div>
                  <span className="text-lg font-medium">Many Active Members</span>
                </div>
                <div className="flex gap-4 items-center text-white">
                  <div className="p-3 rounded-full bg-white/20">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <span className="text-lg font-medium">24/7 Support & Tips</span>
                </div>
              </div>
              
              <div className="mt-10">
                <a 
                  href="https://discord.gg/HkQpcXfx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex gap-3 items-center bg-white text-[#5865F2] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  <MessageCircle className="w-6 h-6" />
                  Join Discord Community
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 text-white bg-gray-900">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid gap-8 mb-8 md:grid-cols-4">
              <div>
                <div className="flex items-center mb-4 space-x-2">
                  <img src="/xpilot-logo-fill-white.jpg" alt="X-Pilot Logo" className="w-10 h-10 rounded-lg" />
                  <span className="text-xl font-bold">X-Pilot</span>
                </div>
                <p className="mb-4 text-gray-400">
                  AI-powered X account management through intelligent chat operations.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://x.com/xDylanLong" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <div className="w-5 h-5 flex items-center justify-center font-bold text-lg">
                      𝕏
                    </div>
                  </a>
                  <span className="text-gray-400">
                    <Mail className="w-5 h-5" />
                  </span>
                </div>
              </div>
              <div>
                <h4 className="mb-4 font-semibold">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><span>About</span></li>
                  <li><span>Careers</span></li>
                  <li><span>Join Email List</span></li>
                </ul>
              </div>
              <div>
                <h4 className="mb-4 font-semibold">Legal</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><span>Privacy Policy</span></li>
                  <li><span>Terms of Service</span></li>
                </ul>
              </div>
              <div>
                <h4 className="mb-4 font-semibold">Resources</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><span>Help Center</span></li>
                  <li><span>Documentation</span></li>
                  <li><span>API</span></li>
                </ul>
              </div>
            </div>
            <div className="pt-8 text-center text-gray-400 border-t border-gray-800">
              <p>&copy; 2025 X-Pilot. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;