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
    <header className="sticky top-0 z-50 glass-nav">
      <div className="container">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-0.5 shadow-lg group-hover:shadow-2xl transition-all duration-300 hover:scale-110">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-black/10 backdrop-blur-sm">
                  <Image
                    src="/photo.png"
                    alt="Prabhu Narayan"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-xl gradient-text mb-1">
                Prabhu Narayan
              </div>
              <div className="text-xs text-white/60 font-medium">
                Portfolio
              </div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 px-5 py-3 rounded-2xl text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-white/20 group backdrop-blur-sm"
                >
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
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
            className="md:hidden p-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 focus-ring transition-all duration-300 backdrop-blur-sm"
          >
            {open ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {open && (
          <nav id="mobile-menu" className="md:hidden py-6 border-t border-white/10">
            <div className="space-y-3">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center space-x-3 px-4 py-4 rounded-2xl text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-white/20 backdrop-blur-sm"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium text-lg">{item.name}</span>
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
