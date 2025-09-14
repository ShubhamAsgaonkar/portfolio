import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Associate Cloud Engineer",
      company: "ONETURE TECHNOLOGIES",
      period: "September 2024 – Present",
      description: [
        "Secured and optimized cloud environments across 4+ AWS accounts, improving security compliance scores from ~20% to over 85% using AWS Config, Inspector, and GuardDuty",
        "Migrated infrastructure from public to private subnets, strengthening network isolation and compliance across environments",
        "Deployed client-specific staging environments with Amazon Linux EC2 and RDS; configured Nginx reverse proxy for React (frontend) and Node.js (backend) apps with MongoDB/PostgreSQL on RDS/EC2",
        "Containerized frontend and backend services using Docker Compose, integrated Fluentd for log scraping, and set up Prometheus + Grafana dashboards for observability and real-time monitoring",
        "Built a production-grade MLOps pipeline for GPU-based image recognition models with automated CI/CD workflows for model retraining and deployment to EKS",
        "Implemented EKS clusters optimization including GPU time slicing, batching, and quantization concepts for efficient LLM serving"
      ]
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
          <p className="text-muted-foreground">Building secure and scalable cloud infrastructure</p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2 text-base">
                      <Building className="w-4 h-4" />
                      {exp.company}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="flex items-center gap-1 w-fit">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};