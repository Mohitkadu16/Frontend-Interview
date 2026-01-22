import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/lib/utils';
import type { Blog } from '@/types/blog';

interface BlogCardProps {
  blog: Blog;
  onClick: () => void;
  isSelected: boolean;
}

export function BlogCard({ blog, onClick, isSelected }: BlogCardProps) {
  return (
    <Card
      className={`cursor-pointer transition-all duration-300 hover:scale-[1.02] glass glass-hover ${
        isSelected ? 'ring-2 ring-primary' : ''
      }`}
      onClick={onClick}
    >
      <CardHeader>
        <div className="flex flex-wrap gap-2 mb-2">
          {blog.category.map((cat) => (
            <Badge key={cat} variant="secondary">
              {cat}
            </Badge>
          ))}
        </div>
        <CardTitle className="text-xl">{blog.title}</CardTitle>
        <CardDescription className="text-xs text-muted-foreground">
          {formatDate(blog.date)}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {blog.description}
        </p>
      </CardContent>
    </Card>
  );
}
