import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, Menu, X, ChevronRight, ExternalLink, Code, Palette, Globe, Award, Briefcase, GraduationCap, Star, Users, Zap } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sectionsRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState('home');
  const horizontalScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionsRef.current) {
        const sections = sectionsRef.current.children;
        for (let i = 0; i < sections.length; i++) {
          const section = sections[i] as HTMLElement;
          const rect = section.getBoundingClientRect();
          if (rect.top >= -100 && rect.top <= 100) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (horizontalScrollRef.current && e.deltaY !== 0) {
      horizontalScrollRef.current.scrollLeft += e.deltaY;
      e.preventDefault();
    }
  };

  const skills = [
    { icon: <Code size={24} />, title: 'Development', items: ['C++', 'Python', 'Java', 'JavaScript', 'React.js', 'Node.js'] },
    { icon: <Palette size={24} />, title: 'Full Stack', items: ['MEAN Stack', 'MongoDB', 'Express.js', 'Spring Boot', 'HTML/CSS'] },
    { icon: <Globe size={24} />, title: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Firebase', 'MySQL'] },
  ];

  const projects = [
    {
      title: 'UniConnect',
      description: 'A web app for exploring and comparing universities with features like 360° views, reviews, and events using HTML, CSS, and JS.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
      tags: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
      stats: [
        { icon: <Star size={16} />, label: 'University Explorer' },
        { icon: <Users size={16} />, label: '360° Views' },
        { icon: <Zap size={16} />, label: 'Reviews & Events' },
      ]
    },
    {
      title: 'Chess Game',
      description: 'A 2D chess game with AI and 1v1 modes built using Pygame and Stockfish, with themes, move hints, and pawn promotion.',
      image: 'https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&w=800&q=80',
      tags: ['Python', 'Pygame', 'AI', 'Game Dev'],
      stats: [
        { icon: <Star size={16} />, label: 'AI Opponent' },
        { icon: <Users size={16} />, label: '1v1 Mode' },
        { icon: <Zap size={16} />, label: 'Move Hints' },
      ]
    },
    {
      title: 'Online Gaming Platform',
      description: 'A browser-based platform simulating games of chance, developed with HTML, CSS, and JS focusing on UI and responsive design.',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80',
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
      stats: [
        { icon: <Star size={16} />, label: 'Multiple Games' },
        { icon: <Users size={16} />, label: 'Responsive UI' },
        { icon: <Zap size={16} />, label: 'Browser-based' },
      ]
    },
  ];

  const experience = [
    {
      icon: <GraduationCap size={24} />,
      title: 'Computer Science and Engineering',
      company: 'Annasaheb Dange College Of Engineering Ashta',
      period: 'Sep 2022 - Oct 2026',
      description: 'Currently pursuing B.Tech in Computer Science and Engineering',
    },
    {
      icon: <Award size={24} />,
      title: 'State-Level Hackathon Finalist',
      company: 'IBM',
      period: '2023',
      description: 'Showcased problem-solving and application development skills in a competitive environment.',
    },
    {
      icon: <Code size={24} />,
      title: 'Competitive Programming',
      company: 'LeetCode',
      period: 'Ongoing',
      description: 'Solved 200+ problems, focusing on Data Structures and Algorithms to improve coding proficiency.',
    },
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-bold gradient-text">Portfolio</a>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
            <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent flex-col md:flex-row gap-4 p-6 md:p-0 border-b md:border-0`}>
              {['home', 'about', 'work', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize ${activeSection === section ? 'text-blue-600 font-semibold' : 'text-gray-600'} hover:text-blue-600 transition-colors`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div ref={sectionsRef} className="pt-20">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-6 py-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in gradient-text">
                Prathamesh Shinde
              </h1>
              <p className="text-2xl md:text-4xl text-gray-600 mb-12 animate-slide-up delay-300">
                Computer Science Student & Developer
              </p>
              <p className="text-xl text-gray-500 mb-12 animate-slide-up delay-500 max-w-2xl mx-auto">
                Skilled in C++, Python, Java, full-stack and game development, with a strong interest in DSA and problem-solving.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-700">
                <button
                  onClick={() => scrollToSection('work')}
                  className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center gap-2 justify-center"
                >
                  View My Work
                  <ChevronRight size={20} />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition-all transform hover:scale-105"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen py-20 relative">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?auto=format&fit=crop&w=800&q=80"
                    alt="Profile"
                    className="rounded-2xl shadow-2xl w-full animate-float"
                  />
                  <div className="absolute inset-0 bg-blue-600/10 rounded-2xl"></div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">About Me</h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  I'm a Computer Science student at Annasaheb Dange College Of Engineering Ashta, passionate about creating innovative solutions through code. My expertise spans across multiple programming languages and frameworks.
                </p>
                <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                  I've solved over 200 problems on LeetCode, constantly improving my problem-solving skills and algorithmic thinking. My projects demonstrate my ability to create practical applications while maintaining clean code practices.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {skills.map((skill, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all transform hover:-translate-y-1">
                      <div className="text-blue-600 mb-4">{skill.icon}</div>
                      <h3 className="text-lg font-semibold mb-4">{skill.title}</h3>
                      <ul className="space-y-2">
                        {skill.items.map((item, i) => (
                          <li key={i} className="text-gray-600">{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="mt-32">
              <h2 className="text-4xl font-bold mb-12 gradient-text text-center">Experience & Education</h2>
              <div className="max-w-3xl mx-auto">
                {experience.map((item, index) => (
                  <div key={index} className="flex gap-6 mb-12">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-blue-600 mb-2">{item.company}</p>
                      <p className="text-gray-500 mb-3">{item.period}</p>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="min-h-screen py-20 bg-gradient">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center">Projects</h2>
            <div
              ref={horizontalScrollRef}
              onWheel={handleWheel}
              className="flex overflow-x-auto horizontal-scroll-container gap-8 pb-12"
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="min-w-[400px] project-card scroll-snap-center"
                >
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4 mb-6">
                        {project.stats.map((stat, i) => (
                          <div key={i} className="flex items-center gap-1 text-sm text-gray-600">
                            {stat.icon}
                            <span>{stat.label}</span>
                          </div>
                        ))}
                      </div>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
                      >
                        View Project <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">Get in Touch</h2>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
                    <p className="text-gray-600 mb-6">
                      Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
                    </p>
                    <div className="space-y-4">
                      <a href="mailto:psss12572@gmail.com" className="flex items-center gap-3 text-gray-600 hover:text-blue-600">
                        <Mail size={20} />
                        <span>psss12572@gmail.com</span>
                      </a>
                      <a href="https://www.linkedin.com/in/prathamesh-shinde-a183432ba/" className="flex items-center gap-3 text-gray-600 hover:text-blue-600">
                        <Linkedin size={20} />
                        <span>LinkedIn Profile</span>
                      </a>
                      <a href="https://github.com/Pathuz21" className="flex items-center gap-3 text-gray-600 hover:text-blue-600">
                        <Github size={20} />
                        <span>GitHub Profile</span>
                      </a>
                    </div>
                  </div>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-100 py-8">
          <div className="container mx-auto px-6 text-center text-gray-600">
            <p>© {new Date().getFullYear()} Prathamesh Shinde. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;