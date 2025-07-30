import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { MapPin, Clock, DollarSign, Users, Briefcase, ArrowRight } from "lucide-react";

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const departments = ["All", "Engineering", "Design", "Product", "Marketing", "Sales"];

  const openPositions = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote / San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $180k",
      experience: "5+ years",
      description: "Join our engineering team to build scalable web applications and APIs that power our platform.",
      requirements: ["React, Node.js, TypeScript", "AWS/Cloud experience", "Agile methodology"]
    },
    {
      id: 2,
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote / New York, NY",
      type: "Full-time",
      salary: "$90k - $130k",
      experience: "3+ years",
      description: "Create beautiful and intuitive user experiences for our growing platform.",
      requirements: ["Figma, Sketch", "User research", "Design systems"]
    },
    {
      id: 3,
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$130k - $170k",
      experience: "4+ years",
      description: "Drive product strategy and roadmap for our core platform features.",
      requirements: ["Product strategy", "Data analysis", "Stakeholder management"]
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$110k - $160k",
      experience: "4+ years",
      description: "Build and maintain our cloud infrastructure and deployment pipelines.",
      requirements: ["Kubernetes, Docker", "CI/CD pipelines", "Monitoring tools"]
    },
    {
      id: 5,
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Remote / Austin, TX",
      type: "Full-time",
      salary: "$60k - $90k",
      experience: "2+ years",
      description: "Develop and execute marketing campaigns to drive growth and brand awareness.",
      requirements: ["Digital marketing", "Content creation", "Analytics tools"]
    },
    {
      id: 6,
      title: "Sales Development Representative",
      department: "Sales",
      location: "Remote",
      type: "Full-time",
      salary: "$50k - $80k + Commission",
      experience: "1+ years",
      description: "Generate new business opportunities and nurture leads through the sales funnel.",
      requirements: ["Sales experience", "CRM tools", "Communication skills"]
    }
  ];

  const filteredPositions = selectedDepartment === "All" 
    ? openPositions 
    : openPositions.filter(position => position.department === selectedDepartment);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-animated glass-surface py-20">
        <div className="hero-content container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-brand font-bold mb-6">
              Join Our <span className="gradient-text">Innovation Team</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be part of a team that's building the future. Discover exciting career opportunities and help us shape tomorrow's technology.
            </p>
            <Button variant="gradient" size="lg">
              <Users className="w-5 h-5 mr-2" />
              View Open Positions
            </Button>
          </div>
        </div>
      </section>

      {/* Department Filter */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {departments.map((dept) => (
              <Button
                key={dept}
                variant={selectedDepartment === dept ? "default" : "ghost"}
                onClick={() => setSelectedDepartment(dept)}
                className="mb-2"
              >
                {dept}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-brand font-bold mb-4">
                Open Positions
              </h2>
              <p className="text-muted-foreground">
                {filteredPositions.length} open position{filteredPositions.length !== 1 ? 's' : ''} 
                {selectedDepartment !== "All" && ` in ${selectedDepartment}`}
              </p>
            </div>

            <div className="grid gap-6">
              {filteredPositions.map((position) => (
                <Card key={position.id} className="glass-card hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl font-semibold mb-2">
                          {position.title}
                        </CardTitle>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Briefcase className="w-4 h-4 mr-1" />
                            {position.department}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {position.location}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {position.type}
                          </span>
                          <span className="flex items-center">
                            <DollarSign className="w-4 h-4 mr-1" />
                            {position.salary}
                          </span>
                        </div>
                      </div>
                      <Badge variant="secondary">{position.experience}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {position.description}
                    </p>
                    <div className="mb-6">
                      <h4 className="font-medium mb-2">Key Requirements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {position.requirements.map((req, index) => (
                          <Badge key={index} variant="outline">
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link to={`/careers/${position.id}`} className="flex-1">
                        <Button variant="gradient" className="w-full">
                          View Details
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                      <Button variant="outline" className="flex-1">
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 hero-animated glass-surface">
        <div className="hero-content container mx-auto px-4 text-center">
          <div className="glass-card max-w-4xl mx-auto p-12">
            <h2 className="text-3xl md:text-4xl font-brand font-bold mb-6">
              Why Work at <span className="gradient-text">REVO?</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Great Team</h3>
                <p className="text-muted-foreground">Work with talented individuals who share your passion for innovation.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
                <p className="text-muted-foreground">Advance your career with learning opportunities and mentorship programs.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Competitive Benefits</h3>
                <p className="text-muted-foreground">Comprehensive benefits package including health, retirement, and equity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;