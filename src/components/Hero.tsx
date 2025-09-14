import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";
export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16" style={{background: 'var(--gradient-hero)'}}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-relaxed tracking-wider">
              SHUBHAM ASGAONKAR
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-primary font-medium">
              DevSecOps / MLOps Engineer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              DevSecOps & MLOps Engineer specializing in LLM deployment, scaling, and optimization. 
              Expert in building end-to-end MLOps/LLMOps pipelines, deploying GPU-accelerated workloads 
              on Kubernetes, and integrating monitoring & observability solutions.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Mumbai, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>(+91) 9619739602</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => window.open('mailto:asgaonkarshubham70@gmail.com', '_blank')}
            >
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary/10"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Shubham_Asgaonkar_Resume.pdf';
                link.download = 'Shubham_Asgaonkar_Resume.pdf';
                link.click();
              }}
            >
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary/10"
              onClick={() => window.open('https://linkedin.com/in/shubham-asgaonkar', '_blank')}
            >
              <Linkedin className="w-4 h-4 mr-2" />
              Connect on LinkedIn
            </Button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/30">
              <img 
                src={profilePhoto} 
                alt="Shubham Asgaonkar - DevSecOps & MLOps Engineer" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-primary/20 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-accent/20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};