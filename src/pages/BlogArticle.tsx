import { useParams, Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { ArrowLeft, Clock, User, Calendar, Share2, Bookmark } from "lucide-react";

const BlogArticle = () => {
  const { id } = useParams();

  // Mock article data - in real app, this would be fetched based on id
  const article = {
    id: 1,
    title: "The Future of AI in Business Automation",
    content: `
      <p>Artificial Intelligence is fundamentally transforming how businesses operate, offering unprecedented opportunities for automation and efficiency. As we move into 2024, the integration of AI technologies has become not just a competitive advantage, but a necessity for organizations looking to thrive in the digital landscape.</p>

      <h2>The Current State of AI in Business</h2>
      <p>Today's AI applications in business span across various domains, from customer service chatbots to predictive analytics and supply chain optimization. Companies are leveraging machine learning algorithms to gain insights from vast amounts of data, automate repetitive tasks, and enhance decision-making processes.</p>

      <h2>Key Areas of AI Implementation</h2>
      <h3>1. Customer Service Automation</h3>
      <p>AI-powered chatbots and virtual assistants are revolutionizing customer support by providing 24/7 availability, instant responses, and personalized interactions. These systems can handle routine inquiries, freeing up human agents to focus on complex issues that require empathy and creative problem-solving.</p>

      <h3>2. Predictive Analytics</h3>
      <p>Machine learning models analyze historical data to predict future trends, customer behavior, and market changes. This capability enables businesses to make proactive decisions, optimize inventory management, and develop targeted marketing strategies.</p>

      <h3>3. Process Automation</h3>
      <p>Robotic Process Automation (RPA) combined with AI is streamlining workflows across industries. From invoice processing to data entry, AI-driven automation is reducing errors, improving speed, and cutting operational costs.</p>

      <h2>Challenges and Considerations</h2>
      <p>While the benefits of AI automation are substantial, organizations must navigate several challenges including data privacy concerns, the need for skilled personnel, and the importance of maintaining human oversight in critical decision-making processes.</p>

      <h2>Looking Ahead</h2>
      <p>The future of AI in business automation promises even more sophisticated applications, including autonomous decision-making systems, advanced natural language processing, and seamless integration across all business functions. Organizations that invest in AI capabilities today will be best positioned to capitalize on these emerging opportunities.</p>

      <p>As we continue to advance in this field, the key to success lies in finding the right balance between automation and human expertise, ensuring that AI enhances rather than replaces the human element that drives innovation and creativity in business.</p>
    `,
    author: "Sarah Johnson",
    date: "Dec 15, 2024",
    category: "Technology",
    readTime: "8 min read",
    image: "/api/placeholder/800/400"
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/blog">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>
      </div>

      {/* Article Header */}
      <article className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Hero Image */}
          <div className="aspect-video bg-gradient-subtle rounded-lg mb-8"></div>
          
          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Badge variant="secondary">{article.category}</Badge>
            <span className="text-sm text-muted-foreground flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {article.readTime}
            </span>
            <span className="text-sm text-muted-foreground flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {article.date}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-brand font-bold mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Author and Actions */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-medium">{article.author}</p>
                <p className="text-sm text-muted-foreground">Technical Writer</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="ghost" size="sm">
                <Bookmark className="w-4 h-4 mr-2" />
                Save
              </Button>
            </div>
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:font-brand prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <Separator className="my-12" />

          {/* Article Footer */}
          <div className="text-center">
            <h3 className="text-2xl font-brand font-bold mb-4">
              Enjoyed this article?
            </h3>
            <p className="text-muted-foreground mb-6">
              Share it with your network or explore more insights from our blog.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient">
                <Share2 className="w-4 h-4 mr-2" />
                Share Article
              </Button>
              <Link to="/blog">
                <Button variant="outline">
                  Read More Articles
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogArticle;