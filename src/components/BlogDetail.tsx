import { useBlog } from '@/hooks/useBlog';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { formatDate } from '@/lib/utils';
import { AlertCircle, FileText } from 'lucide-react';

interface BlogDetailProps {
  blogId: number | null;
}

export function BlogDetail({ blogId }: BlogDetailProps) {
  const { data: blog, isLoading, isError, error } = useBlog(blogId);

  if (!blogId) {
    return (
      <div className="flex flex-col items-center justify-center h-full space-y-4 text-muted-foreground">
        <FileText className="h-16 w-16 opacity-50" />
        <p className="text-center">Select a blog to view details</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-64 w-full rounded-xl" />
        <div className="space-y-3">
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </div>
    );
  }

  if (isError || !blog) {
    return (
      <div className="flex flex-col items-center justify-center h-full space-y-4">
        <AlertCircle className="h-12 w-12 text-destructive" />
        <p className="text-muted-foreground text-center">
          {error instanceof Error ? error.message : 'Failed to load blog'}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Cover Image */}
      <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>

      {/* Blog Content */}
      <div className="space-y-4">
        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {blog.category.map((cat) => (
            <Badge key={cat} variant="default">
              {cat}
            </Badge>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          {blog.title}
        </h1>

        {/* Date */}
        <p className="text-sm text-muted-foreground">
          Published on {formatDate(blog.date)}
        </p>

        {/* Description */}
        <p className="text-lg text-muted-foreground italic border-l-4 border-primary pl-4">
          {blog.description}
        </p>

        {/* Content */}
        <div className="prose prose-invert max-w-none pt-6">
          <p className="text-foreground whitespace-pre-wrap leading-relaxed">
            {blog.content}
          </p>
        </div>
      </div>
    </div>
  );
}
