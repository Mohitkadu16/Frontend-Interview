import { BookOpen, Home, Info, User } from 'lucide-react';
import { Button } from './ui/button';
import { CreateBlogDialog } from './CreateBlogDialog';

interface NavbarProps {
  onNavigate?: (section: string) => void;
}

export function Navbar({ onNavigate }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 glass backdrop-blur-xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/20 hover:bg-primary/30 transition-colors cursor-pointer">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                CA Monk Blog
              </h1>
              <p className="text-xs text-muted-foreground">
                Discover amazing stories
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="gap-2"
              onClick={() => onNavigate?.('home')}
            >
              <Home className="h-4 w-4" />
              Home
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="gap-2"
              onClick={() => onNavigate?.('about')}
            >
              <Info className="h-4 w-4" />
              About
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="gap-2"
              onClick={() => onNavigate?.('profile')}
            >
              <User className="h-4 w-4" />
              Profile
            </Button>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <CreateBlogDialog />
            
            {/* Mobile Profile Icon */}
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              onClick={() => onNavigate?.('profile')}
            >
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex items-center gap-2 mt-4 pt-4 border-t border-white/10">
          <Button
            variant="ghost"
            size="sm"
            className="gap-2 flex-1"
            onClick={() => onNavigate?.('home')}
          >
            <Home className="h-4 w-4" />
            Home
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="gap-2 flex-1"
            onClick={() => onNavigate?.('about')}
          >
            <Info className="h-4 w-4" />
            About
          </Button>
        </nav>
      </div>
    </header>
  );
}
