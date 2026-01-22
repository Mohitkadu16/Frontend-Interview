import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { BlogList } from './components/BlogList';
import { BlogDetail } from './components/BlogDetail';
import { AboutPage } from './components/AboutPage';
import { ProfilePage } from './components/ProfilePage';
import type { Blog } from './types/blog';

type PageView = 'home' | 'about' | 'profile';

function App() {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [currentPage, setCurrentPage] = useState<PageView>('home');

  const handleNavigation = (section: string) => {
    setCurrentPage(section as PageView);
    // Reset selected blog when navigating away from home
    if (section !== 'home') {
      setSelectedBlog(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Enhanced Navbar */}
      <Navbar onNavigate={handleNavigation} />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {currentPage === 'home' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Panel - Blog List */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">All Blogs</h2>
              </div>
              <div className="max-h-[calc(100vh-200px)] overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                <BlogList
                  selectedBlogId={selectedBlog?.id ?? null}
                  onSelectBlog={setSelectedBlog}
                />
              </div>
            </div>

            {/* Right Panel - Blog Detail */}
            <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-120px)]">
              <div className="glass rounded-xl p-6 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                <BlogDetail blogId={selectedBlog?.id ?? null} />
              </div>
            </div>
          </div>
        )}

        {currentPage === 'about' && <AboutPage />}
        
        {currentPage === 'profile' && <ProfilePage />}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-16">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Built with React, TanStack Query, Tailwind CSS, and shadcn/ui
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <button
                onClick={() => handleNavigation('about')}
                className="hover:text-primary transition-colors"
              >
                About
              </button>
              <span>•</span>
              <button
                onClick={() => handleNavigation('profile')}
                className="hover:text-primary transition-colors"
              >
                Profile
              </button>
              <span>•</span>
              <a href="mailto:developer@camonk.com" className="hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
