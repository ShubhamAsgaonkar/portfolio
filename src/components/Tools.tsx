import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cloud, 
  Container, 
  Shield, 
  Monitor, 
  GitBranch, 
  Server,
  Database,
  Zap
} from "lucide-react";

export const Tools = () => {
  const toolCategories = [
    {
      title: "Cloud Platforms",
      icon: <Cloud className="w-6 h-6" />,
      tools: ["AWS", "Azure", "Google Cloud"],
      color: "bg-blue-500/10 text-blue-400"
    },
    {
      title: "Container & Orchestration",
      icon: <Container className="w-6 h-6" />,
      tools: ["Docker", "Kubernetes", "EKS", "AKS"],
      color: "bg-cyan-500/10 text-cyan-400"
    },
    {
      title: "CI/CD & Version Control",
      icon: <GitBranch className="w-6 h-6" />,
      tools: ["Jenkins", "GitLab CI/CD", "GitHub Actions", "Azure DevOps"],
      color: "bg-green-500/10 text-green-400"
    },
    {
      title: "Infrastructure as Code",
      icon: <Server className="w-6 h-6" />,
      tools: ["Terraform", "ARM Templates", "CloudFormation"],
      color: "bg-purple-500/10 text-purple-400"
    },
    {
      title: "Security & Monitoring",
      icon: <Shield className="w-6 h-6" />,
      tools: ["SonarCloud", "Trivy", "OWASP ZAP", "Prometheus", "Grafana"],
      color: "bg-red-500/10 text-red-400"
    },
    {
      title: "MLOps & AI",
      icon: <Zap className="w-6 h-6" />,
      tools: ["MLflow", "Kubeflow", "TensorFlow", "PyTorch", "FastAPI"],
      color: "bg-yellow-500/10 text-yellow-400"
    }
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Tools & Technologies</h2>
          <p className="text-muted-foreground">Technologies I work with to build scalable and secure solutions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${category.color}`}>
                    {category.icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tool}
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