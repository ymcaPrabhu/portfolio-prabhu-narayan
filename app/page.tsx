import { getProfile, getProjects, getPublications, getStats } from "@/lib/content";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, ExternalLink, TrendingUp, Users, Award, Briefcase } from "lucide-react";

export default async function Page() {
  const profile = await getProfile();
  const projects = await getProjects();
  const publications = await getPublications();
  const stats = await getStats();

  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
        </div>
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm font-medium text-green-700">Available for collaboration</span>
              </div>
              <h1 className="h1 mb-6">{profile.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="w-5 h-5 text-blue-600" />
                <p className="text-xl font-semibold text-gray-700">{profile.title}</p>
              </div>
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="w-4 h-4 text-gray-500" />
                <p className="text-gray-600">{profile.location}</p>
              </div>
              <p className="text-lg leading-relaxed text-gray-700 mb-8 max-w-2xl">{profile.summary}</p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {profile.badges?.map((badge: string) => (
                  <span key={badge} className="badge">{badge}</span>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link className="btn-primary" href="/experience">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  View Experience
                </Link>
                <Link className="btn-secondary" href="/contact">
                  <Mail className="w-5 h-5 mr-2" />
                  Get in Touch
                </Link>
              </div>
            </div>
            
            {/* Professional Profile Photo */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-3xl bg-gradient-to-br from-blue-500 to-emerald-500 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-3xl overflow-hidden bg-white">
                    <Image
                      src="/photo.png"
                      alt="Prabhu Narayan - Director & CISO"
                      width={256}
                      height={256}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, index) => {
            const icons = [TrendingUp, Users, Award, Briefcase];
            const Icon = icons[index % icons.length];
            return (
              <div key={stat.label} className="stats-card group">
                <div className="icon-wrapper mb-4 mx-auto">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="stats-value">{stat.value}</div>
                <div className="muted mt-2">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section">
        <div className="text-center mb-12">
          <h2 className="h2 mb-4">Project Highlights</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Key initiatives and projects that showcase impact in cybersecurity and financial sector governance
          </p>
        </div>
        <div className="grid gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project, index) => (
            <article key={project.title} className="card card-highlight p-6 group">
              <div className="flex items-start justify-between mb-4">
                <div className="icon-wrapper">
                  <Briefcase className="w-5 h-5" />
                </div>
                {project.link && (
                  <a 
                    href={project.link} 
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-blue-600 hover:text-blue-800"
                    aria-label="Learn more"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
              <h3 className="h3 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                {project.title}
              </h3>
              <p className="muted mb-3">{project.role}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{project.impact}</p>
              {project.link && (
                <a 
                  href={project.link} 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                  Learn more
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Publications Section */}
      <section className="section">
        <div className="text-center mb-12">
          <h2 className="h2 mb-4">Latest Publications</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Recent publications and thought leadership in cybersecurity and financial technology
          </p>
        </div>
        <div className="space-y-4">
          {publications.slice(0, 3).map((pub, index) => (
            <div key={pub.title} className="card p-6 group hover:border-blue-200 transition-all duration-200">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-2">
                    {pub.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <span className="font-medium">{pub.venue}</span>
                    <span>•</span>
                    <span>{pub.date}</span>
                  </div>
                </div>
                {pub.link && (
                  <a 
                    href={pub.link} 
                    className="ml-4 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    aria-label="View publication"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
              {pub.link && (
                <a 
                  href={pub.link} 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                  Read publication
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link href="/publications" className="btn-secondary">
            View All Publications
          </Link>
        </div>
      </section>
    </div>
  );
}
