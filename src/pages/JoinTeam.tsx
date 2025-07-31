import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { ArrowLeft, Users, MapPin, Linkedin, Twitter, Github, Instagram, GraduationCap } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import { ImageUpload } from "../components/ImageUpload";
import { uploadImg } from "../services/imageUpload";
// import { uploadImg } from "../services/imageUpload";

const JoinTeam = () => {
  const [formData, setFormData] = useState({
    role: "",
    location: "",
    linkedin: "",
    twitter: "",
    github: "",
    instagram: "",
    shortBio: "",
    education1: "",
    education2: "",
  });
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [isImgURL, setIsImgURL] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Form submitted:", );
    // uploadImg()
    
    toast({
      title: "Application submitted!",
      description: "We'll review your application and get back to you soon.",
    });
    
    setIsLoading(false);
  };

  useEffect(() => {
    handleImageChange()
  }, [profileImage])

  const handleImageChange = () => {
    // setProfileImage(file);
    // setIsImgURL(!!file);
    if (profileImage) {
      console.log("Image selected:", profileImage.name);
      uploadImg(profileImage).then((response) => {
        // @ts-ignore
        if(response.error) {
          // @ts-ignore
          console.log(response.error)
        } else {
          console.log("Image uploaded successfully:", response.data.publicUrl);
          setIsImgURL(true);
        }
      }).catch((error) => {
        console.error("Error uploading image:", error);
        toast({
          title: "Image upload failed",
          description: "Please try again.",
          variant: "destructive",
        });
      })

    } else {
      console.log("No image selected");
    }
  }
  
    console.log("Form submitted:", profileImage);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen hero-animated glass-surface flex items-center justify-center p-4">
      <div className="hero-content w-full max-w-2xl">
        <Card className="glass-card">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-brand">Join Our Team</CardTitle>
            <CardDescription>
              Ready to shape the future of AI? Tell us about yourself and let's build something amazing together.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <ImageUpload onImageChange={setProfileImage} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="role">Role *</Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="role"
                      placeholder="e.g. Frontend Developer, Product Manager"
                      value={formData.role}
                      onChange={(e) => handleChange('role', e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="location">Location *</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="location"
                      placeholder="e.g. San Francisco, CA"
                      value={formData.location}
                      onChange={(e) => handleChange('location', e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn *</Label>
                  <div className="relative">
                    <Linkedin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="linkedin"
                      placeholder="https://linkedin.com/in/yourprofile"
                      value={formData.linkedin}
                      onChange={(e) => handleChange('linkedin', e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="twitter">Twitter/X</Label>
                  <div className="relative">
                    <Twitter className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="twitter"
                      placeholder="https://twitter.com/yourhandle"
                      value={formData.twitter}
                      onChange={(e) => handleChange('twitter', e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="github">GitHub</Label>
                  <div className="relative">
                    <Github className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="github"
                      placeholder="https://github.com/yourusername"
                      value={formData.github}
                      onChange={(e) => handleChange('github', e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="instagram">Instagram</Label>
                  <div className="relative">
                    <Instagram className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="instagram"
                      placeholder="https://instagram.com/yourhandle"
                      value={formData.instagram}
                      onChange={(e) => handleChange('instagram', e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="shortBio">Short Bio *</Label>
                <Textarea
                  id="shortBio"
                  placeholder="Tell us about yourself, your experience, and what excites you about joining REVO..."
                  value={formData.shortBio}
                  onChange={(e) => handleChange('shortBio', e.target.value)}
                  className="min-h-[100px]"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="education1">Education *</Label>
                  <div className="relative">
                    <GraduationCap className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="education1"
                      placeholder="e.g. BS Computer Science, Stanford University"
                      value={formData.education1}
                      onChange={(e) => handleChange('education1', e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="education2">Additional Education</Label>
                  <div className="relative">
                    <GraduationCap className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="education2"
                      placeholder="e.g. MS AI, MIT (optional)"
                      value={formData.education2}
                      onChange={(e) => handleChange('education2', e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              <Button 
                type="submit" 
                variant="gradient" 
                className="w-full" 
                disabled={isLoading}
              >
                {isLoading ? "Submitting Application..." : "Submit Application"}
              </Button>
              
              <div className="text-center">
                <Link 
                  to="/careers" 
                  className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Open Positions
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JoinTeam;