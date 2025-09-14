import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export const Education = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground">Academic foundation in computer science and cloud technology</p>
        </div>

        <Card className="border-l-4 border-l-primary">
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-xl mb-2">
                  BSc Computer Science (Cloud Technology & Information Security)
                </CardTitle>
                <CardDescription className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Nagindas Khandwala College (Mumbai University), Mumbai</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <Badge variant="secondary">September 2021 - April 2024</Badge>
                  </div>
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Specialized degree focusing on cloud technologies and information security, 
              providing a strong foundation in modern cloud computing practices, cybersecurity principles, 
              and hands-on experience with industry-standard tools and methodologies.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};