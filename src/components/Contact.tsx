import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Github, Download } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Get In Touch</h2>
          <p className="text-muted-foreground">Let's discuss how I can help with your DevSecOps and MLOps needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Contact Information</CardTitle>
              <CardDescription>Feel free to reach out through any of these channels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:asgaonkarshubham70@gmail.com" className="text-foreground hover:text-primary transition-colors">
                    asgaonkarshubham70@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:+919619739602" className="text-foreground hover:text-primary transition-colors">
                    (+91) 9619739602
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground">Mumbai, India</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/shubham-asgaonkar/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Quick Actions</CardTitle>
              <CardDescription>Download my resume or connect with me directly</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full" size="lg">
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </Button>
              
              <Button variant="outline" className="w-full" size="lg">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>

              <Button variant="outline" className="w-full" size="lg">
                <Linkedin className="w-4 h-4 mr-2" />
                Connect on LinkedIn
              </Button>

              <div className="pt-4 text-center">
                <p className="text-sm text-muted-foreground">
                  Available for freelance projects and full-time opportunities
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};