import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Users, Brain, Rocket, Shield, Globe, Mail, Github, Twitter, Linkedin, Instagram } from 'lucide-react';
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
  { number: '1K+', label: 'Users Connected' },
  { number: '50+', label: 'AI Solutions' },
  { number: '5+', label: 'Countries' },
  { number: '89.9%', label: 'Uptime' },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-animated glass-surface">        
        {/* Content */}
        <div className="hero-content container mx-auto px-6 text-center">
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
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center py-4">
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
      <section className="py-20 hero-animated glass-surface">
        <div className="hero-content container mx-auto px-4 text-center">
          <div className="glass-card max-w-2xl mx-auto p-12">
            <h2 className="text-4xl md:text-5xl font-brand font-bold mb-6">
              Ready to Transform Your <span className="gradient-text">Future?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of innovators who trust REVO to power their next breakthrough.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="gradient" size="lg" className="text-base sm:text-lg" asChild>
                <Link to="/signup" className="flex items-center space-x-2">
                  <span>Get Started Free</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="glass" size="lg" className="text-base sm:text-lg" asChild>
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background/50 border-t border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center space-y-8">
            {/* Social Media Links */}
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-lg">
                <Github className="w-6 h-6" />
              </a>
              <a href="mailto:hello@revo.com" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-lg">
                <Mail className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-lg">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-lg">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-lg">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            
            {/* Copyright */}
            <p className="text-muted-foreground text-center">
              © 2024 REVO. All rights reserved. Building the future, one innovation at a time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}