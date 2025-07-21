import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Users, Package, BookOpen, Mail, LogIn, UserPlus, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '../lib/utils';

// Headings

const navItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'About', path: '/about', icon: Sparkles },
  { name: 'Products', path: '/products', icon: Package },
  { name: 'Team', path: '/team', icon: Users },
  { name: 'Blog', path: '/blog', icon: BookOpen },
  { name: 'Contact', path: '/contact', icon: Mail },
];

const authItems = [
  { name: 'Sign In', path: '/signin', icon: LogIn },
  { name: 'Sign Up', path: '/signup', icon: UserPlus },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Desktop Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 z-60">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-brand font-bold text-lg">R</span>
              </div>
              <span className="font-brand text-2xl font-bold gradient-text">REVO</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "relative flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300",
                    location.pathname === item.path
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/5"
                  )}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              {authItems.map((item) => (
                <Button
                  key={item.path}
                  variant={item.name === 'Sign Up' ? 'gradient' : 'glass'}
                  size="sm"
                  asChild
                >
                  <Link to={item.path} className="flex items-center space-x-2">
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                </Button>
              ))}
            </div>
            

            {/* Mobile Menu Button */}
            <Button
              variant="glass"
              size="icon"
              onClick={toggleNav}
              className="lg:hidden z-60"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-300",
          isOpen ? "visible" : "invisible"
        )}
      >
        {/* Overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity duration-300",
            isOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={toggleNav}
        />

        {/* Sidebar */}
        <div
          className={cn(
            "absolute left-0 top-0 h-full w-80 glass-card border-r border-white/10 transition-transform duration-300 flex flex-col",
            isOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <Link to="/" className="flex items-center space-x-2" onClick={toggleNav}>
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-brand font-bold text-lg">R</span>
              </div>
              <span className="font-brand text-2xl font-bold gradient-text">REVO</span>
            </Link>
          </div>

          {/* Navigation Items */}
          <div className="flex-1 p-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={toggleNav}
                className={cn(
                  "flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300",
                  location.pathname === item.path
                    ? "text-primary bg-primary/10 border border-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/5"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="p-6 border-t border-white/10 space-y-3">
            {authItems.map((item) => (
              <Button
                key={item.path}
                variant={item.name === 'Sign Up' ? 'gradient' : 'glass'}
                className="w-full justify-start"
                asChild
              >
                <Link to={item.path} onClick={toggleNav} className="flex items-center space-x-2">
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}