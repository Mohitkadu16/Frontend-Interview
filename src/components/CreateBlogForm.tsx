import { useState } from 'react';
import { useCreateBlog } from '@/hooks/useCreateBlog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Loader2, CheckCircle2 } from 'lucide-react';
import type { CreateBlogInput } from '@/types/blog';

interface CreateBlogFormProps {
  onSuccess?: () => void;
}

export function CreateBlogForm({ onSuccess }: CreateBlogFormProps) {
  const [formData, setFormData] = useState<CreateBlogInput>({
    title: '',
    category: [],
    description: '',
    coverImage: '',
    content: '',
  });
  const [categoryInput, setCategoryInput] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const createBlog = useCreateBlog();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.description || !formData.content || formData.category.length === 0) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      await createBlog.mutateAsync(formData);
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        title: '',
        category: [],
        description: '',
        coverImage: '',
        content: '',
      });
      setCategoryInput('');

      setTimeout(() => {
        setShowSuccess(false);
        onSuccess?.();
      }, 1500);
    } catch (error) {
      console.error('Failed to create blog:', error);
      alert('Failed to create blog. Please try again.');
    }
  };

  const addCategory = () => {
    if (categoryInput.trim() && !formData.category.includes(categoryInput.trim().toUpperCase())) {
      setFormData({
        ...formData,
        category: [...formData.category, categoryInput.trim().toUpperCase()],
      });
      setCategoryInput('');
    }
  };

  const removeCategory = (cat: string) => {
    setFormData({
      ...formData,
      category: formData.category.filter((c) => c !== cat),
    });
  };

  if (showSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-12 space-y-4">
        <CheckCircle2 className="h-16 w-16 text-green-500 animate-in zoom-in duration-300" />
        <p className="text-lg font-semibold">Blog created successfully!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Title */}
      <div className="space-y-2">
        <Label htmlFor="title">
          Title <span className="text-destructive">*</span>
        </Label>
        <Input
          id="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="Enter blog title"
          required
        />
      </div>

      {/* Categories */}
      <div className="space-y-2">
        <Label htmlFor="category">
          Categories <span className="text-destructive">*</span>
        </Label>
        <div className="flex gap-2">
          <Input
            id="category"
            value={categoryInput}
            onChange={(e) => setCategoryInput(e.target.value)}
            placeholder="Add a category (e.g., TECH)"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                addCategory();
              }
            }}
          />
          <Button type="button" onClick={addCategory} variant="outline">
            Add
          </Button>
        </div>
        {formData.category.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {formData.category.map((cat) => (
              <div
                key={cat}
                className="bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm flex items-center gap-2"
              >
                {cat}
                <button
                  type="button"
                  onClick={() => removeCategory(cat)}
                  className="hover:text-destructive"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Description */}
      <div className="space-y-2">
        <Label htmlFor="description">
          Description <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Brief description of your blog"
          rows={3}
          required
        />
      </div>

      {/* Cover Image URL */}
      <div className="space-y-2">
        <Label htmlFor="coverImage">Cover Image URL</Label>
        <Input
          id="coverImage"
          type="url"
          value={formData.coverImage}
          onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
          placeholder="https://example.com/image.jpg"
        />
      </div>

      {/* Content */}
      <div className="space-y-2">
        <Label htmlFor="content">
          Content <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="content"
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          placeholder="Write your blog content here..."
          rows={10}
          required
        />
      </div>

      {/* Submit Button */}
      <Button type="submit" className="w-full" disabled={createBlog.isPending}>
        {createBlog.isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Creating...
          </>
        ) : (
          'Create Blog'
        )}
      </Button>
    </form>
  );
}
