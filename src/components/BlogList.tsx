import { useBlogs } from '@/hooks/useBlogs';
import { BlogCard } from './BlogCard';
import { Skeleton } from '@/components/ui/skeleton';
import { AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Blog } from '@/types/blog';

interface BlogListProps {
  selectedBlogId: number | null;
  onSelectBlog: (blog: Blog) => void;
}

export function BlogList({ selectedBlogId, onSelectBlog }: BlogListProps) {
  const { data: blogs, isLoading, isError, error, refetch } = useBlogs();

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-20 w-full" />
          </div>
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center h-64 space-y-4">
        <AlertCircle className="h-12 w-12 text-destructive" />
        <p className="text-muted-foreground text-center">
          {error instanceof Error ? error.message : 'Failed to load blogs'}
        </p>
        <Button onClick={() => refetch()} variant="outline">
          Try Again
        </Button>
      </div>
    );
  }

  if (!blogs || blogs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 space-y-4">
        <p className="text-muted-foreground text-center">
          No blogs found. Create your first blog to get started!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
          onClick={() => onSelectBlog(blog)}
          isSelected={selectedBlogId === blog.id}
        />
      ))}
    </div>
  );
}
