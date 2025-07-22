import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Users, Brain, Rocket, Shield, Globe, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Solutions',
    description: 'Cutting-edge artificial intelligence to solve complex problems and drive innovation.',
  },
  {
    icon: Users,
    title: 'Connect People',
    description: 'Building bridges between individuals, teams, and organizations worldwide.',
  },
  {
    icon: Zap,
    title: 'Simplify & Ease',
    description: 'Making complex processes simple and intuitive for everyone.',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with 99.9% uptime guarantee.',
  },
  {
    icon: Rocket,
    title: 'Innovation First',
    description: 'Leading the future with breakthrough technologies and research.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Serving clients and communities across the globe.',
  },
];

const stats = [
  { number: '1M+', label: 'Users Connected' },
  { number: '500+', label: 'AI Solutions' },
  { number: '150+', label: 'Countries' },
  { number: '99.9%', label: 'Uptime' },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Gradient Glass Background */}
        <div className="absolute inset-0 hero-glass-animated">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/40 animate-gradient-shift"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-accent/25 via-transparent to-primary/30 animate-gradient-shift-reverse"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-shimmer"></div>
          <div className="absolute inset-0 backdrop-blur-3xl bg-background/20 glass-surface"></div>
          
          {/* Floating Glass Morphism Elements */}
          <div className="absolute top-20 left-20 w-40 h-40 glass-orb bg-primary/25 rounded-full animate-float"></div>
          <div className="absolute top-60 right-32 w-32 h-32 glass-orb bg-accent/35 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-40 left-1/4 w-56 h-56 glass-orb bg-primary/20 rounded-full animate-float-slow"></div>
          <div className="absolute bottom-20 right-20 w-36 h-36 glass-orb bg-accent/30 rounded-full animate-float"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 glass-orb bg-gradient-primary/40 rounded-full animate-pulse-slow"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-20 container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto space-y-10">
            <h1 className="text-5xl sm:text-7xl lg:text-9xl font-brand font-bold leading-tight">
              <span className="gradient-text animate-pulse">REVO</span>
              <br />
              <span className="text-foreground text-4xl sm:text-6xl lg:text-7xl">The Future</span>
              <br />
              <span className="text-accent text-4xl sm:text-6xl lg:text-7xl">is Now</span>
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Connecting people, powering research, and delivering AI-based solutions that 
              simplify complexity and accelerate human potential.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Button variant="hero" size="lg" className="text-base sm:text-lg" asChild>
                <Link to="/products" className="flex items-center space-x-2">
                  <span>Explore Products</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              
              <Button variant="glass" size="lg" className="text-base sm:text-lg" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center glass">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-background/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-brand font-bold gradient-text">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-muted-foreground mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-brand font-bold mb-6">
              Why Choose <span className="gradient-text">REVO</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the power of next-generation technology designed to transform 
              how we connect, create, and innovate.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card hover-glow group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm sm:text-base text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-background/10" />
        <div className="relative container mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-brand font-bold text-white mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Join thousands of innovators who trust REVO to power their next breakthrough.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="secondary" size="lg" className="text-base sm:text-lg" asChild>
              <Link to="/signup" className="flex items-center space-x-2">
                <span>Get Started Free</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-base sm:text-lg border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden">
        {/* Footer Glass Background */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/80 backdrop-blur-2xl"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        
        <div className="relative container mx-auto px-6 py-16 lg:py-20">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-3xl lg:text-4xl font-brand font-bold gradient-text mb-4">REVO</h3>
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                  Connecting people, powering research, and delivering AI-based solutions 
                  that simplify complexity and accelerate human potential.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <Button variant="glass" size="icon" className="glass-button">
                  <Mail className="w-5 h-5" />
                </Button>
                <Button variant="glass" size="icon" className="glass-button">
                  <Phone className="w-5 h-5" />
                </Button>
                <Button variant="glass" size="icon" className="glass-button">
                  <MapPin className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Links Grid */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
              {/* Products */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground mb-6">Products</h4>
                <ul className="space-y-3">
                  <li><Link to="/products" className="footer-link">AI Solutions</Link></li>
                  <li><Link to="/products" className="footer-link">Research Tools</Link></li>
                  <li><Link to="/products" className="footer-link">Connect Platform</Link></li>
                  <li><Link to="/products" className="footer-link">Enterprise</Link></li>
                </ul>
              </div>

              {/* Company */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground mb-6">Company</h4>
                <ul className="space-y-3">
                  <li><Link to="/about" className="footer-link">About Us</Link></li>
                  <li><Link to="/team" className="footer-link">Team</Link></li>
                  <li><Link to="/blog" className="footer-link">Blog</Link></li>
                  <li><Link to="/contact" className="footer-link">Contact</Link></li>
                </ul>
              </div>

              {/* Support */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground mb-6">Support</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="footer-link">Documentation</a></li>
                  <li><a href="#" className="footer-link">Help Center</a></li>
                  <li><a href="#" className="footer-link">Privacy Policy</a></li>
                  <li><a href="#" className="footer-link">Terms of Service</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-gradient-to-r from-transparent via-primary/30 to-transparent">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-muted-foreground">
                © 2024 REVO. All rights reserved. Building the future, one innovation at a time.
              </p>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <span>Powered by</span>
                <span className="gradient-text font-semibold">Revo System</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}