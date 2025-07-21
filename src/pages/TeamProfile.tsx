import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Linkedin, Twitter, Github, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

// Sample team member data (in a real app, this would come from an API)
const teamMemberData = {
  1: {
    name: 'Sarah Chen',
    role: 'CEO & Founder',
    department: 'Leadership',
    location: 'San Francisco, CA',
    joinDate: 'January 2020',
    email: 'sarah.chen@revo.com',
    bio: 'Sarah is a visionary leader with over 15 years of experience in AI and technology innovation. She founded REVO with the mission to create AI solutions that truly connect people and simplify complex processes. Prior to REVO, Sarah led AI initiatives at several Fortune 500 companies and holds a PhD in Computer Science from Stanford University.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
    skills: ['AI Strategy', 'Leadership', 'Product Vision', 'Business Development', 'Public Speaking'],
    achievements: [
      'Led REVO to $100M+ valuation',
      'Featured in Forbes 30 Under 30',
      'Published 15+ research papers on AI',
      'Keynote speaker at AI Summit 2023',
    ],
    education: [
      { degree: 'PhD Computer Science', school: 'Stanford University', year: '2015' },
      { degree: 'MS Artificial Intelligence', school: 'MIT', year: '2012' },
      { degree: 'BS Computer Engineering', school: 'UC Berkeley', year: '2010' },
    ],
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  // Add more team members as needed
};

export default function TeamProfile() {
  const { id } = useParams();
  const member = id && teamMemberData[parseInt(id) as keyof typeof teamMemberData];

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Team Member Not Found</h1>
          <Button variant="gradient" asChild>
            <Link to="/team">Back to Team</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <Button variant="glass" asChild className="mb-6">
            <Link to="/team" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Team</span>
            </Link>
          </Button>
        </div>
      </section>

      {/* Profile Hero */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
              {/* Profile Image */}
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-2xl object-cover border-4 border-primary/20"
                />
                <div className="absolute inset-0 w-48 h-48 rounded-2xl bg-gradient-primary opacity-20" />
              </div>

              {/* Profile Info */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-brand font-bold mb-4">
                  {member.name}
                </h1>
                <div className="text-2xl text-primary font-semibold mb-4">
                  {member.role}
                </div>
                <Badge className="mb-6 bg-accent/20 text-accent-foreground">
                  {member.department}
                </Badge>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center justify-center md:justify-start space-x-2 text-muted-foreground">
                    <MapPin className="w-5 h-5" />
                    <span>{member.location}</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start space-x-2 text-muted-foreground">
                    <Calendar className="w-5 h-5" />
                    <span>Joined {member.joinDate}</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start space-x-2 text-muted-foreground">
                    <Mail className="w-5 h-5" />
                    <span>{member.email}</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center md:justify-start space-x-4">
                  <a
                    href={member.social.linkedin}
                    className="p-3 rounded-lg glass-card hover-glow transition-all duration-300"
                  >
                    <Linkedin className="w-6 h-6 text-muted-foreground hover:text-primary" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="p-3 rounded-lg glass-card hover-glow transition-all duration-300"
                  >
                    <Twitter className="w-6 h-6 text-muted-foreground hover:text-primary" />
                  </a>
                  <a
                    href={member.social.github}
                    className="p-3 rounded-lg glass-card hover-glow transition-all duration-300"
                  >
                    <Github className="w-6 h-6 text-muted-foreground hover:text-primary" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Bio */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>About {member.name.split(' ')[0]}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Key Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {member.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Education */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {member.education.map((edu, index) => (
                      <div key={index} className="border-l-2 border-primary/20 pl-4">
                        <div className="font-semibold">{edu.degree}</div>
                        <div className="text-muted-foreground">{edu.school}</div>
                        <div className="text-sm text-muted-foreground">{edu.year}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Skills */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Skills & Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Interested in connecting or learning more about {member.name.split(' ')[0]}'s work?
                  </CardDescription>
                  <Button variant="gradient" className="w-full">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}