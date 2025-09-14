import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Settings, Shield, Activity, GitBranch, Code, Cpu, Brain } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: <Cloud className="w-5 h-5" />,
      skills: ["AWS", "Azure", "GCP"]
    },
    {
      title: "MLOps & LLMOps", 
      icon: <Brain className="w-5 h-5" />,
      skills: ["ML Pipeline Automation", "GPU Optimization", "Model Serving", "Quantization", "Batching", "LLM Deployment", "GPU Time Slicing"]
    },
    {
      title: "DevSecOps & CI/CD",
      icon: <Settings className="w-5 h-5" />,
      skills: ["Azure DevOps", "GitHub Actions", "Jenkins", "GitLab", "AWS CodePipeline", "Security Scanning"]
    },
    {
      title: "Containers & Orchestration",
      icon: <Activity className="w-5 h-5" />,
      skills: ["Docker", "Kubernetes", "EKS", "AKS", "ECR", "ACR"]
    },
    {
      title: "Infrastructure as Code", 
      icon: <Code className="w-5 h-5" />,
      skills: ["Terraform", "ARM Templates", "CloudFormation"]
    },
    {
      title: "Security & Monitoring",
      icon: <Shield className="w-5 h-5" />,
      skills: ["Trivy", "OWASP ZAP", "SonarQube", "Prometheus", "Grafana", "CloudWatch", "Fluentd", "ELK Stack"]
    },
    {
      title: "Programming & Scripting",
      icon: <Code className="w-5 h-5" />, 
      skills: ["Python", "Java", "Bash", "PowerShell", "YAML", "JavaScript", "HTML/CSS"]
    }
  ];

  const languages = ["English", "Hindi", "Marathi"];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground">Expertise in MLOps, DevSecOps, and cloud infrastructure</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-full">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <div className="p-1 bg-primary/10 rounded">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <div className="p-1 bg-primary/10 rounded">
                <Code className="w-5 h-5" />
              </div>
              Languages
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {languages.map((language, idx) => (
                <Badge key={idx} variant="outline" className="text-sm">
                  {language}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};