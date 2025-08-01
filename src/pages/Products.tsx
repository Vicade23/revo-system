import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, Shield, Globe, ArrowRight, Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const products = [
  // {
  //   name: 'REVO Connect',
  //   category: 'Communication',
  //   description: 'Advanced AI-powered communication platform that connects teams globally.',
  //   features: ['Real-time Translation', 'Smart Scheduling', 'AI Meeting Assistant', 'Global Reach'],
  //   price: 'Starting at $29/month',
  //   icon: Globe,
  //   popular: false,
  // },
  {
    name: 'REVO Intelligence',
    category: 'In Development',
    description: 'Cutting-edge AI platform for learning, research, and analysis.',
    features: ['Machine Learning', 'Predictive Analytics', '95.9% Accuracy'],
    price: 'Free',
    icon: Brain,
    popular: true,
  },
  // {
  //   name: 'REVO Security',
  //   category: 'Cybersecurity',
  //   description: 'Enterprise-grade security solutions powered by AI threat detection.',
  //   features: ['AI Threat Detection', 'Real-time Monitoring', 'Incident Response', 'Compliance Ready'],
  //   price: 'Starting at $149/month',
  //   icon: Shield,
  //   popular: false,
  // },
  // {
  //   name: 'REVO Accelerate',
  //   category: 'Performance',
  //   description: 'Performance optimization platform that accelerates your digital transformation.',
  //   features: ['Performance Monitoring', 'Resource Optimization', 'Scalability Solutions', '24/7 Support'],
  //   price: 'Starting at $79/month',
  //   icon: Zap,
  //   popular: false,
  // },
];

const categories = ['All', 'AI Solutions', 'Communication', 'Cybersecurity', 'Performance'];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 hero-animated glass-surface">
        <div className="hero-content container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-brand font-bold mb-6">
            Our <span className="gradient-text">Products</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our suite of AI-powered solutions designed to connect, 
            simplify, and accelerate your business transformation.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'gradient' : 'glass'}
                onClick={() => setSelectedCategory(category)}
                className="min-w-0"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProducts.map((product, index) => (
              <Card key={index} className="glass-card hover-glow relative overflow-hidden">
                {product.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-primary text-white border-0">
                      In Development
                    </Badge>
                  </div>
                )}
                
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center">
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        {/* <CardTitle className="text-2xl">{product.name}</CardTitle> */}
                      </div>
                      {/* <Badge variant="secondary" className="mb-3">
                        {product.category}
                      </Badge> */}
                      <div className="text-2/l mb-2">{product.name}</div>
                      <CardDescription className="text-base">
                        {product.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold mb-3">Key Features</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {product.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-accent" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Pricing */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div>
                        <div className="text-2xl font-bold gradient-text">{product.price}</div>
                        {/* <div className="text-sm text-muted-foreground">per user</div> */}
                      </div>
                      <div className="space-x-2">
                        {/* <Button variant="glass" size="sm">
                          Learn More
                        </Button> */}
                        <a href={'https://enzol-ai-waitlist.vercel.app/'}>
                          <Button variant="gradient" size="sm" className="flex items-center space-x-1">
                            <span>Try Free</span>
                            <ArrowRight className="w-4 h-4" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-brand font-bold mb-6">
              Why Choose <span className="gradient-text">REVO</span> Products?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built with cutting-edge technology and designed for the future of business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass-card text-center">
              <CardHeader>
                <Brain className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>AI-Powered</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Every product leverages advanced AI to provide intelligent insights and automation.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="glass-card text-center">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Enterprise-Grade</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Built for scale with enterprise-level security, compliance, and reliability.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="glass-card text-center">
              <CardHeader>
                <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Global Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Designed for global deployment with multi-language support and regional compliance.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-brand font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Choose the perfect REVO solution and start your transformation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" asChild>
                <Link to="/contact">View Team</Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/signup">Join Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}