import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";

export const Certifications = () => {
  const certifications = [
    {
      name: "AWS Solutions Architect Associate",
      provider: "Amazon Web Services",
      description: "Validates expertise in designing distributed systems and architectures on AWS platform",
      level: "Associate",
      date: "September 2024",
      color: "bg-orange-500/10 text-orange-700 dark:text-orange-300"
    },
    {
      name: "AZ-900: Azure Fundamentals",
      provider: "Microsoft",
      description: "Demonstrates foundational knowledge of cloud concepts and Azure services",
      level: "Fundamentals",
      date: "May 2022",
      color: "bg-blue-500/10 text-blue-700 dark:text-blue-300"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Certifications</h2>
          <p className="text-muted-foreground">Industry-recognized cloud and technology certifications</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:shadow-primary/20"
              style={{
                boxShadow: 'var(--shadow-elegant)',
              }}
            >
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div 
                    className="p-2 rounded-lg"
                    style={{
                      background: 'var(--gradient-primary)',
                    }}
                  >
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-1">{cert.name}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <span>{cert.provider}</span>
                      <ExternalLink className="w-3 h-3" />
                    </CardDescription>
                    <div className="text-xs text-muted-foreground mt-1">
                      Earned: {cert.date}
                    </div>
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={cert.color}
                  >
                    {cert.level}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {cert.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Continuously pursuing additional certifications to stay current with evolving cloud and ML technologies
          </p>
        </div>
      </div>
    </section>
  );
};