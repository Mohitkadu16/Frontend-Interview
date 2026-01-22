import { Mail, MapPin, Briefcase, Calendar, Github, Linkedin, Twitter } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
      {/* Profile Header */}
      <Card className="glass">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Avatar */}
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center text-4xl font-bold text-white">
                CM
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-green-500 border-4 border-background" />
            </div>

            {/* Profile Info */}
            <div className="flex-1 space-y-4">
              <div>
                <h1 className="text-3xl font-bold">CA Monk User</h1>
                <p className="text-muted-foreground">Chartered Accountant & Finance Professional</p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="gap-1">
                  <Briefcase className="h-3 w-3" />
                  Senior Accountant
                </Badge>
                <Badge variant="secondary" className="gap-1">
                  <MapPin className="h-3 w-3" />
                  Mumbai, India
                </Badge>
                <Badge variant="secondary" className="gap-1">
                  <Calendar className="h-3 w-3" />
                  Joined Jan 2026
                </Badge>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Passionate about leveraging technology in accounting and finance. Experienced in financial 
                analysis, audit, and compliance. Always learning and sharing knowledge with the community.
              </p>

              {/* Social Links */}
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Mail className="h-4 w-4" />
                  Contact
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="glass">
          <CardHeader>
            <CardDescription>Blogs Read</CardDescription>
            <CardTitle className="text-3xl">47</CardTitle>
          </CardHeader>
        </Card>
        <Card className="glass">
          <CardHeader>
            <CardDescription>Blogs Created</CardDescription>
            <CardTitle className="text-3xl">12</CardTitle>
          </CardHeader>
        </Card>
        <Card className="glass">
          <CardHeader>
            <CardDescription>Reading Streak</CardDescription>
            <CardTitle className="text-3xl">15 days</CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* Interests */}
      <Card className="glass">
        <CardHeader>
          <CardTitle>Interests & Expertise</CardTitle>
          <CardDescription>Topics you're passionate about</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {[
              'Fintech',
              'Tax Planning',
              'Financial Analysis',
              'Audit & Compliance',
              'AI in Accounting',
              'GST',
              'Investment Strategy',
              'Career Development',
              'Digital Transformation',
              'Personal Finance'
            ].map((interest) => (
              <Badge key={interest} variant="outline" className="px-3 py-1">
                {interest}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card className="glass">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your latest interactions on the platform</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3 pb-3 border-b border-white/10">
            <div className="w-2 h-2 rounded-full bg-primary mt-2" />
            <div className="flex-1">
              <p className="text-sm">Created blog: <span className="text-primary">Testing the Blog Application</span></p>
              <p className="text-xs text-muted-foreground">2 hours ago</p>
            </div>
          </div>
          <div className="flex items-start gap-3 pb-3 border-b border-white/10">
            <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
            <div className="flex-1">
              <p className="text-sm">Read: <span className="text-primary">Future of Fintech</span></p>
              <p className="text-xs text-muted-foreground">5 hours ago</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
            <div className="flex-1">
              <p className="text-sm">Read: <span className="text-primary">AI in Auditing</span></p>
              <p className="text-xs text-muted-foreground">1 day ago</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Settings */}
      <Card className="glass">
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
          <CardDescription>Manage your account preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" className="w-full justify-start">
            Edit Profile
          </Button>
          <Button variant="outline" className="w-full justify-start">
            Notification Preferences
          </Button>
          <Button variant="outline" className="w-full justify-start">
            Privacy Settings
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
