import { BookOpen, Target, Users, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
          About CA Monk Blog
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Your premier destination for insights on accounting, finance, technology, and career development.
        </p>
      </div>

      {/* Mission Section */}
      <Card className="glass">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/20">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-2xl">Our Mission</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            CA Monk Blog is dedicated to empowering accounting and finance professionals with cutting-edge knowledge, 
            practical insights, and career guidance. We bridge the gap between traditional accounting practices and 
            modern technology-driven solutions.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our content covers everything from fintech innovations and tax reforms to exam preparation strategies 
            and work-life balance tips, ensuring our readers stay ahead in their professional journey.
          </p>
        </CardContent>
      </Card>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="glass glass-hover cursor-pointer">
          <CardHeader>
            <div className="p-3 rounded-lg bg-primary/20 w-fit mb-3">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Expert Content</CardTitle>
            <CardDescription>
              In-depth articles written by industry professionals and subject matter experts
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="glass glass-hover cursor-pointer">
          <CardHeader>
            <div className="p-3 rounded-lg bg-primary/20 w-fit mb-3">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Latest Updates</CardTitle>
            <CardDescription>
              Stay current with the latest trends in fintech, regulations, and accounting technology
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="glass glass-hover cursor-pointer">
          <CardHeader>
            <div className="p-3 rounded-lg bg-primary/20 w-fit mb-3">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Community Driven</CardTitle>
            <CardDescription>
              Join a growing community of professionals sharing knowledge and experiences
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Topics Covered */}
      <Card className="glass">
        <CardHeader>
          <CardTitle className="text-2xl">Topics We Cover</CardTitle>
          <CardDescription>
            Comprehensive coverage across multiple domains
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="font-semibold text-primary">Finance & Technology</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Fintech innovations and trends</li>
                <li>• AI in auditing and accounting</li>
                <li>• Digital transformation strategies</li>
                <li>• Cloud-based accounting solutions</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-primary">Career & Education</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• CA exam preparation tips</li>
                <li>• Career development guidance</li>
                <li>• Work-life balance strategies</li>
                <li>• Professional skill building</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-primary">Regulations & Compliance</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Tax reforms and updates</li>
                <li>• GST compliance simplified</li>
                <li>• Regulatory changes</li>
                <li>• Ethics in finance</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-primary">Lifestyle & Growth</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Personal finance management</li>
                <li>• Investment strategies</li>
                <li>• Mental health and wellness</li>
                <li>• Productivity tips</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tech Stack */}
      <Card className="glass">
        <CardHeader>
          <CardTitle className="text-2xl">Built With Modern Technology</CardTitle>
          <CardDescription>
            This platform is built using cutting-edge web technologies
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {['React 19', 'TypeScript', 'TanStack Query', 'Tailwind CSS', 'shadcn/ui', 'Vite'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
