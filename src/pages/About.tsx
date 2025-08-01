import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Award, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const values = [
  {
    icon: Target,
    title: 'Innovation',
    description: 'We push the boundaries of what\'s possible with cutting-edge technology.',
  },
  {
    icon: Heart,
    title: 'Connection',
    description: 'Building meaningful relationships between people and technology.',
  },
  {
    icon: Eye,
    title: 'Vision',
    description: 'Looking ahead to create solutions for tomorrow\'s challenges.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Delivering the highest quality in everything we do.',
  },
];

const milestones = [
  { year: '2024', title: 'REVO Founded', description: 'Started with a vision to revolutionize AI solutions' },
  { year: '2024', title: '100+ Users', description: 'Reached our first major user milestone' },
  { year: '2025', title: 'Global Expansion', description: 'Expanded operations to 1+ countries' },
  { year: '2025', title: 'AI Breakthrough', description: 'Launched revolutionary AI platform (In progress)' },
  { year: '2025', title: '100+ Connected', description: 'Connected over 1 hundred users worldwide' },
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 hero-animated glass-surface">
        <div className="hero-content container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-brand font-bold mb-6">
            About <span className="gradient-text">REVO</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are a forward-thinking organization dedicated to connecting people, 
            advancing research, and creating AI-based solutions that simplify complexity 
            and empower human potential.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-brand font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                To revolutionize how people connect, collaborate, and create by providing 
                innovative AI-powered solutions that break down barriers and unlock new possibilities.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We believe in the power of technology to bring people together, simplify 
                complex processes, and create a more connected, efficient world.
              </p>
              <Button variant="gradient" asChild>
                <Link to="/team" className="flex items-center space-x-2">
                  <span>Meet Our Team</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="glass-card hover-glow">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-sm">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-brand font-bold mb-6">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in our mission to transform the future
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary rounded-full" />
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />
                  
                  {/* Content Card */}
                  <Card className={`glass-card w-full max-w-md ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                    <CardHeader>
                      <div className="text-2xl font-brand font-bold gradient-text">
                        {milestone.year}
                      </div>
                      <CardTitle>{milestone.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{milestone.description}</CardDescription>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-brand font-bold mb-6">
              Join Our Revolution
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Be part of the future we're building. Join our team and see how 
              REVO can transform your world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" asChild>
                <Link to="/team">View Team</Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to={`/join-team`}>Join Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}