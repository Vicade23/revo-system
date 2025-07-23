import React from 'react';
// import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Enterprise Solutions',
    excerpt: 'Exploring how artificial intelligence is reshaping business operations and creating new opportunities for growth.',
    author: 'Sarah Chen',
    date: '2024-03-15',
    readTime: '8 min read',
    category: 'AI & Technology',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop',
    featured: true,
  },
  {
    id: 2,
    title: 'Building Secure AI Systems: Best Practices',
    excerpt: 'Essential security considerations when developing and deploying AI-powered applications.',
    author: 'Alex Kumar',
    date: '2024-03-12',
    readTime: '12 min read',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop',
    featured: false,
  },
  {
    id: 3,
    title: 'How REVO Connect Transformed Remote Work',
    excerpt: 'Case study: How our AI-powered communication platform helped companies adapt to the future of work.',
    author: 'David Park',
    date: '2024-03-10',
    readTime: '6 min read',
    category: 'Case Study',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop',
    featured: false,
  },
  {
    id: 4,
    title: 'Machine Learning Trends to Watch in 2024',
    excerpt: 'Our research team shares insights on the most promising ML developments shaping the industry.',
    author: 'Emily Johnson',
    date: '2024-03-08',
    readTime: '10 min read',
    category: 'Research',
    image: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=800&h=400&fit=crop',
    featured: false,
  },
  {
    id: 5,
    title: 'Designing Intuitive AI Interfaces',
    excerpt: 'The art and science of creating user-friendly interfaces for complex AI systems.',
    author: 'Lisa Thompson',
    date: '2024-03-05',
    readTime: '7 min read',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=400&fit=crop',
    featured: false,
  },
  {
    id: 6,
    title: 'The Ethics of AI: Responsible Development',
    excerpt: 'Exploring the ethical considerations that guide our approach to AI development and deployment.',
    author: 'Marcus Rodriguez',
    date: '2024-03-01',
    readTime: '9 min read',
    category: 'Ethics',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    featured: false,
  },
];

const categories = ['All', 'AI & Technology', 'Security', 'Case Study', 'Research', 'Design', 'Ethics'];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 hero-animated glass-surface">
        <div className="hero-content container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-brand font-bold mb-6">
            REVO <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Insights, innovations, and industry perspectives from the minds shaping the future of AI technology.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-brand font-bold mb-4">Featured Article</h2>
            </div>
            
            <Card className="glass-card hover-glow max-w-4xl mx-auto overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div 
                  className="h-64 lg:h-auto bg-cover bg-center"
                  style={{ backgroundImage: `url(${featuredPost.image})` }}
                />
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge className="mb-4 w-fit bg-primary/20 text-primary border-primary/30">
                    {featuredPost.category}
                  </Badge>
                  <CardTitle className="text-2xl mb-4">{featuredPost.title}</CardTitle>
                  <CardDescription className="text-base mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </CardDescription>
                  
                  <div className="flex items-center justify-between mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="gradient" className="w-fit">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

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

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured).map((post) => (
              <Card key={post.id} className="glass-card hover-glow overflow-hidden group">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <Button variant="glass" size="sm">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 hero-animated glass-surface">
        <div className="hero-content container mx-auto px-4 text-center">
          <div className="glass-card max-w-2xl mx-auto p-12">
            <h2 className="text-4xl font-brand font-bold mb-6">
              Stay Updated with <span className="gradient-text">REVO Insights</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get the latest articles, research findings, and industry insights delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-background/50 border border-primary/20 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 backdrop-blur-sm"
              />
              <Button variant="gradient" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}