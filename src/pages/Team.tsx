import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Linkedin, Twitter, Github, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const teamMembers = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'CEO & Founder',
    department: 'Leadership',
    location: 'San Francisco, CA',
    bio: 'Visionary leader with 15+ years in AI and technology innovation.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    role: 'CTO',
    department: 'Engineering',
    location: 'Austin, TX',
    bio: 'Technology architect specializing in scalable AI systems.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  {
    id: 3,
    name: 'Emily Johnson',
    role: 'Head of AI Research',
    department: 'Research',
    location: 'Boston, MA',
    bio: 'Leading researcher in machine learning and neural networks.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  {
    id: 4,
    name: 'David Park',
    role: 'VP of Product',
    department: 'Product',
    location: 'Seattle, WA',
    bio: 'Product strategist focused on user-centered AI solutions.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'Head of Design',
    department: 'Design',
    location: 'New York, NY',
    bio: 'Creative director crafting beautiful, intuitive user experiences.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  {
    id: 6,
    name: 'Alex Kumar',
    role: 'Head of Security',
    department: 'Security',
    location: 'London, UK',
    bio: 'Cybersecurity expert ensuring enterprise-grade protection.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
];

const departments = ['All', 'Leadership', 'Engineering', 'Research', 'Product', 'Design', 'Security'];

export default function Team() {
  const [selectedDepartment, setSelectedDepartment] = React.useState('All');

  const filteredMembers = selectedDepartment === 'All' 
    ? teamMembers 
    : teamMembers.filter(member => member.department === selectedDepartment);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-brand font-bold mb-6">
            Meet Our <span className="gradient-text">Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The brilliant minds behind REVO's revolutionary AI solutions. 
            Our diverse team of experts is dedicated to shaping the future of technology.
          </p>
        </div>
      </section>

      {/* Department Filter */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {departments.map((department) => (
              <Button
                key={department}
                variant={selectedDepartment === department ? 'gradient' : 'glass'}
                onClick={() => setSelectedDepartment(department)}
                className="min-w-0"
              >
                {department}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member) => (
              <Card key={member.id} className="glass-card hover-glow group">
                <CardHeader className="text-center">
                  <div className="relative mx-auto mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-primary/20 group-hover:border-primary/50 transition-colors duration-300"
                    />
                    <div className="absolute inset-0 w-24 h-24 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <div className="text-primary font-medium">{member.role}</div>
                  <div className="flex items-center justify-center space-x-1 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{member.location}</span>
                  </div>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <CardDescription>{member.bio}</CardDescription>
                  
                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    <a
                      href={member.social.linkedin}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={member.social.github}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                  
                  <Button variant="glass" size="sm" asChild className="w-full">
                    <Link to={`/team/${member.id}`} className="flex items-center justify-center space-x-2">
                      <span>View Profile</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-brand font-bold mb-6">
              Team <span className="gradient-text">Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Our team's collective expertise drives innovation
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-brand font-bold gradient-text">150+</div>
              <div className="text-muted-foreground mt-2">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-brand font-bold gradient-text">25+</div>
              <div className="text-muted-foreground mt-2">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-brand font-bold gradient-text">500+</div>
              <div className="text-muted-foreground mt-2">Years Combined Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-brand font-bold gradient-text">98%</div>
              <div className="text-muted-foreground mt-2">Retention Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-brand font-bold mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're always looking for talented individuals who share our passion 
              for innovation and want to shape the future of AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg">
                View Open Positions
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}