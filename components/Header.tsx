'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Home, Briefcase, FileText, Mail } from 'lucide-react';

export function Header() {
  const [open, setOpen] = useState(false);
  
  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Experience', href: '/experience', icon: Briefcase },
    { name: 'Work', href: '/work', icon: FileText },
    { name: 'Publications', href: '/publications', icon: FileText },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200/60 shadow-sm">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 p-0.5 shadow-lg group-hover:shadow-xl transition-all duration-200">
              <div className="w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/photo.png"
                  alt="Prabhu Narayan"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <span className="hidden sm:block font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
              Portfolio
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 px-4 py-2 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 focus-ring"
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <button 
            aria-expanded={open} 
            aria-controls="mobile-menu" 
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-xl border border-gray-200 hover:bg-gray-50 focus-ring transition-colors duration-200"
          >
            {open ? (
              <X className="w-5 h-5 text-gray-600" />
            ) : (
              <Menu className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {open && (
          <nav id="mobile-menu" className="md:hidden py-4 border-t border-gray-200/60">
            <div className="space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 focus-ring"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
