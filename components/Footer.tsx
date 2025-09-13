import { Heart, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const lastUpdated = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <footer className="relative glass-footer">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-0.5 shadow-xl">
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-black/10 backdrop-blur-sm">
                    <Image
                      src="/photo.png"
                      alt="Prabhu Narayan"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20"></div>
              </div>
              <div>
                <div className="font-bold text-2xl gradient-text">Prabhu Narayan</div>
                <div className="text-white/60 font-medium">CISO & Director</div>
              </div>
            </div>
            <p className="text-white/80 max-w-md leading-relaxed">
              Director & CISO at Department of Economic Affairs, Ministry of Finance, Government of India. Specializing in financial-sector cybersecurity and resilience governance.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="mailto:pnarayan1@gmail.com" 
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-white/20 to-white/10 border border-white/20 text-white hover:text-yellow-300 hover:scale-110 transition-all duration-300 backdrop-blur-sm"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/prabhunarayan" 
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-white/20 to-white/10 border border-white/20 text-white hover:text-blue-300 hover:scale-110 transition-all duration-300 backdrop-blur-sm"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-bold text-xl text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="/experience" className="flex items-center text-white/80 hover:text-white transition-all duration-300 group">
                  <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Experience
                </a>
              </li>
              <li>
                <a href="/work" className="flex items-center text-white/80 hover:text-white transition-all duration-300 group">
                  <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Work
                </a>
              </li>
              <li>
                <a href="/publications" className="flex items-center text-white/80 hover:text-white transition-all duration-300 group">
                  <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Publications
                </a>
              </li>
              <li>
                <a href="/contact" className="flex items-center text-white/80 hover:text-white transition-all duration-300 group">
                  <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Professional Focus */}
          <div className="space-y-6">
            <h3 className="font-bold text-xl text-white">Focus Areas</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-white/80">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 mr-3"></div>
                Enterprise Architecture
              </li>
              <li className="flex items-center text-white/80">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500 mr-3"></div>
                IT Operations Management
              </li>
              <li className="flex items-center text-white/80">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 mr-3"></div>
                Execution Excellence
              </li>
              <li className="flex items-center text-white/80">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-red-500 mr-3"></div>
                Financial Cybersecurity
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center text-white/60">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-400 fill-current animate-pulse" />
              <span>by Prabhu Narayan</span>
            </div>
            <div className="text-white/60 text-sm">
              © {currentYear} Prabhu Narayan. Last updated {lastUpdated}.
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-xs text-white/40">
              This is a personal website. Views expressed are personal and do not represent official positions.
            </p>
          </div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>
      </div>
    </footer>
  );
}
