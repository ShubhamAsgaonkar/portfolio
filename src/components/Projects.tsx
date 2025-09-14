import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Cloud, Shield, Zap } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Production MLOps Pipeline for ML Inference System",
      description: "Deployed a large-scale ML inference system with 15 models grouped into Docker containers, each served via FastAPI.",
      details: [
        "Initially considered deploying all models to SageMaker, but due to cost inefficiency (15 endpoints), the system was moved to Amazon EKS.",
        "Implemented model retraining workflows with a team member.",
        "Designed a CI/CD pipeline to automate model retraining, containerization, and deployment to EKS.",
        "Later enhanced the workflow by triggering the pipeline using AWS Lambda, making it a fully automated MLOps solution.",
        "Deployed the solution across dev, UAT, and prod environments using AWS CodeCommit and CodePipeline.",
        "Currently extending support for the same pipeline using GitLab CI/CD."
      ],
      tags: ["AWS EKS", "Docker", "FastAPI", "MLOps", "CI/CD", "Lambda"],
      icon: <Zap className="w-6 h-6" />,
      status: "Live Project"
    },
    {
      title: "DevSecOps for Web App using GitLab",
      description: "Implemented a secure CI/CD pipeline on GitLab for a 3-tier web app (React, Node.js, MongoDB).",
      details: [
        "Provisioned AWS infrastructure with Terraform (EKS, WAF, ALB, ECR)",
        "Integrated SAST, DAST, and container scanning tools (SonarCloud, OWASP Dependency-Check, Trivy, OWASP ZAP)",
        "Automated deployment to EKS"
      ],
      tags: ["GitLab CI/CD", "Terraform", "AWS EKS", "SonarCloud", "OWASP", "Security"],
      icon: <Shield className="w-6 h-6" />,
      status: "PoC"
    },
    {
      title: "Mobile App DevSecOps using Jenkins",
      description: "Developed a Jenkins pipeline for a Flutter mobile app with integrated security testing at all stages.",
      details: [
        "Used SonarCloud (SAST), OWASP Dependency-Check, MobSF (static + dynamic), and Trivy for APK security assurance",
        "Generated consolidated security reports throughout the pipeline"
      ],
      tags: ["Jenkins", "Flutter", "MobSF", "Security Testing", "Mobile DevOps"],
      icon: <Shield className="w-6 h-6" />,
      status: "PoC"
    },
    {
      title: "Containerized Amazon Q CLI with MCP Server Integration",
      description: "Created a custom Docker image integrating Amazon Q CLI with MCP servers to automate AWS architecture generation.",
      details: [
        "Enabled easy deployment via container startup, AWS Q login, and prompt-based generation of infrastructure and CloudFormation templates"
      ],
      tags: ["Docker", "AWS Q", "MCP", "CloudFormation", "Automation"],
      icon: <Cloud className="w-6 h-6" />,
      status: "Completed"
    },
    {
      title: "Final Year Project - Reddit Clone on Azure",
      description: "Built a Reddit clone on Azure that scales well and deploys automatically using DevOps practices.",
      details: [
        "Used Azure DevOps (for CI/CD pipeline), Docker (for containerization)",
        "SonarQube & Trivy (for security scanning), OWASP Dependency Checker (for secure dependencies)",
        "Azure App Service (to host the app), Azure App Insights & Monitor (for monitoring)"
      ],
      tags: ["Azure", "DevOps", "Docker", "SonarQube", "Monitoring"],
      icon: <Code className="w-6 h-6" />,
      status: "Academic Project"
    }
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground">Showcasing cloud infrastructure and DevSecOps implementations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {project.status}
                      </Badge>
                    </div>
                    <CardDescription className="text-sm">
                      {project.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 mb-4">
                  {project.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <span className="text-xs text-muted-foreground leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};