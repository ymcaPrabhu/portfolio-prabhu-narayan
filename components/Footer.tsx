import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const lastUpdated = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 to-gray-100 border-t border-gray-200/60">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 p-0.5 shadow-lg">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src="/photo.png"
                    alt="Prabhu Narayan"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <span className="font-bold text-xl text-gray-900">Prabhu Narayan</span>
            </div>
            <p className="text-gray-600 max-w-md">
              Director & CISO at Department of Economic Affairs, Ministry of Finance, Government of India. Specializing in financial-sector cybersecurity and resilience governance.
            </p>
            <div className="flex items-center space-x-4">
              <a href="mailto:pnarayan1@gmail.com" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/prabhunarayan" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/experience" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Experience</a></li>
              <li><a href="/work" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Work</a></li>
              <li><a href="/publications" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Publications</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Professional Focus */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Focus Areas</h3>
            <ul className="space-y-3">
              <li className="text-gray-600">Enterprise Architecture</li>
              <li className="text-gray-600">IT Operations Management</li>
              <li className="text-gray-600">Execution Excellence</li>
              <li className="text-gray-600">Financial Cybersecurity</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>© {currentYear} Prabhu Narayan. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for public service.</span>
            </div>
            <div className="text-sm text-gray-500">
              Last updated: {lastUpdated}
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              This is a personal website. Views expressed are personal and do not represent official positions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
