import { getProfile, getProjects, getPublications, getStats } from "@/lib/content";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, ExternalLink, TrendingUp, Users, Award, Briefcase, Github, Monitor, Smartphone, Globe, CheckCircle, Calendar } from "lucide-react";

export default async function Page() {
  const profile = await getProfile();
  const projects = await getProjects();
  const publications = await getPublications();
  const stats = await getStats();

  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero-section section">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 animate-pulse shadow-lg"></div>
                <span className="text-sm font-bold text-glass uppercase tracking-wider">Available for collaboration</span>
              </div>
              
              <h1 className="h1 gradient-text mb-8">{profile.name}</h1>
              
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                <div className="icon-wrapper">
                  <Briefcase className="w-6 h-6" />
                </div>
                <p className="text-xl sm:text-2xl font-bold text-glass">{profile.title}</p>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
                <div className="icon-wrapper">
                  <MapPin className="w-5 h-5" />
                </div>
                <p className="text-lg text-contrast">{profile.location}</p>
              </div>
              
              <div className="glass-card p-6 mb-8 max-w-3xl mx-auto lg:mx-0">
                <p className="text-lg leading-relaxed text-glass">{profile.summary}</p>
              </div>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
                {profile.badges?.map((badge: string) => (
                  <span key={badge} className="badge">{badge}</span>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link className="btn-primary group" href="/experience">
                  <TrendingUp className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  View Experience
                </Link>
                <Link className="btn-secondary group" href="/contact">
                  <Mail className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  Get in Touch
                </Link>
              </div>
            </div>
            
            {/* Professional Profile Photo */}
            <div className="flex-shrink-0 order-first lg:order-last">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
                <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden bg-gradient-to-br from-purple-400 to-pink-500 p-1">
                  <div className="w-full h-full rounded-3xl overflow-hidden">
                    <Image
                      src="/photo.png"
                      alt="Prabhu Narayan - Director & CISO"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-2xl group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-white font-bold text-sm">🏆</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="section-alt container py-16">
          <div className="text-center mb-12">
            <h2 className="h2 gradient-text-accent">Career Achievements</h2>
            <p className="text-lg text-contrast max-w-2xl mx-auto">
              Two decades of excellence in cybersecurity and IT leadership
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => {
              const icons = [TrendingUp, Users, Award, Briefcase];
              const Icon = icons[index % icons.length];
              const gradients = [
                'from-purple-400 to-pink-400',
                'from-blue-400 to-purple-500',
                'from-emerald-400 to-teal-500',
                'from-orange-400 to-red-500'
              ];
              const gradient = gradients[index % gradients.length];
              
              return (
                <div key={stat.label} className="stats-card group">
                  <div className={`icon-wrapper mb-6 mx-auto bg-gradient-to-br ${gradient}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="stats-value">{stat.value}</div>
                  <div className="stats-label">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="h2 mb-6">Project Highlights</h2>
            <p className="text-xl text-contrast max-w-3xl mx-auto leading-relaxed">
              Key initiatives and projects that showcase impact in cybersecurity and financial sector governance
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project, index) => {
              const colors = [
                'from-blue-500 to-purple-600',
                'from-emerald-500 to-teal-600', 
                'from-pink-500 to-red-600'
              ];
              const iconColors = [
                'from-blue-400 to-purple-500',
                'from-emerald-400 to-teal-500',
                'from-pink-400 to-red-500'
              ];
              
              return (
                <article key={project.title} className="card card-highlight group">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`icon-wrapper bg-gradient-to-br ${iconColors[index % iconColors.length]}`}>
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    {project.link && (
                      <a 
                        href={project.link} 
                        className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 text-white hover:text-yellow-300"
                        aria-label="Learn more"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white group-hover:text-yellow-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-white/20 to-white/10 text-white border border-white/20">
                      {project.role}
                    </span>
                  </div>
                  
                  <p className="text-white/90 leading-relaxed mb-6 text-sm sm:text-base">
                    {project.impact}
                  </p>
                  
                  {project.link && (
                    <a 
                      href={project.link} 
                      className="inline-flex items-center text-white hover:text-yellow-300 font-semibold transition-all duration-300 group-hover:translate-x-2"
                    >
                      Learn more
                      <ExternalLink className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:rotate-12" />
                    </a>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="section">
        <div className="section-alt container py-16">
          <div className="text-center mb-16">
            <h2 className="h2 gradient-text-accent mb-6">Latest Publications</h2>
            <p className="text-xl text-contrast max-w-3xl mx-auto leading-relaxed">
              Recent publications and thought leadership in cybersecurity and financial technology
            </p>
          </div>
          
          <div className="space-y-6">
            {publications.slice(0, 3).map((pub, index) => (
              <div key={pub.title} className="glass-card p-8 group hover:scale-[1.02] transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 animate-pulse"></div>
                      <span className="text-xs font-bold text-white/80 uppercase tracking-wider">Publication</span>
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors duration-300 leading-tight">
                      {pub.title}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-white/80 mb-4">
                      <span className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-white/60"></div>
                        <span className="font-semibold">{pub.venue}</span>
                      </span>
                      <span className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-white/60"></div>
                        <span>{pub.date}</span>
                      </span>
                    </div>
                  </div>
                  
                  {pub.link && (
                    <div className="flex-shrink-0">
                      <a 
                        href={pub.link} 
                        className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-white/20 to-white/10 border border-white/20 text-white hover:text-yellow-300 hover:scale-110 transition-all duration-300"
                        aria-label="View publication"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  )}
                </div>
                
                {pub.link && (
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <a 
                      href={pub.link} 
                      className="inline-flex items-center text-white hover:text-yellow-300 font-semibold transition-all duration-300 group-hover:translate-x-2"
                    >
                      Read publication
                      <ExternalLink className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:rotate-12" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/publications" className="btn-secondary text-lg px-10 py-4">
              View All Publications
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
