import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";

const BlogReadMore = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "The Future of AI in Business Automation",
      excerpt: "Discover how artificial intelligence is revolutionizing business processes and creating new opportunities for growth.",
      author: "Sarah Johnson",
      date: "Dec 15, 2024",
      category: "Technology",
      readTime: "8 min read",
      image: "/api/placeholder/600/300"
    },
    {
      id: 2,
      title: "Building Scalable Cloud Infrastructure",
      excerpt: "A comprehensive guide to designing and implementing cloud solutions that grow with your business.",
      author: "Michael Chen",
      date: "Dec 12, 2024",
      category: "Cloud",
      readTime: "12 min read",
      image: "/api/placeholder/600/300"
    },
    {
      id: 3,
      title: "Cybersecurity Best Practices for 2024",
      excerpt: "Essential security measures every organization should implement to protect against modern threats.",
      author: "Emily Rodriguez",
      date: "Dec 10, 2024",
      category: "Security",
      readTime: "10 min read",
      image: "/api/placeholder/600/300"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-animated glass-surface py-20">
        <div className="hero-content container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-brand font-bold mb-6">
              Explore Our <span className="gradient-text">Latest Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Dive deeper into technology trends, innovation strategies, and industry insights from our expert team.
            </p>
            <Link to="/blog">
              <Button variant="glass" size="lg">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-brand font-bold text-center mb-12">
              Featured Articles
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="glass-card group hover:shadow-lg transition-all duration-300">
                  <div className="aspect-video bg-gradient-subtle rounded-t-lg mb-4"></div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-sm text-muted-foreground flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    
                    <Link to={`/blog/article/${post.id}`} className="block mt-4">
                      <Button variant="ghost" className="w-full">
                        Read Full Article
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 hero-animated glass-surface">
        <div className="hero-content container mx-auto px-4 text-center">
          <div className="glass-card max-w-2xl mx-auto p-12">
            <h2 className="text-3xl md:text-4xl font-brand font-bold mb-6">
              Stay Updated with <span className="gradient-text">REVO Insights</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get the latest articles, insights, and updates delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-background/50 border border-border backdrop-blur-sm"
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
};

export default BlogReadMore;