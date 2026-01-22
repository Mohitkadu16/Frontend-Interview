import { useMutation, useQueryClient } from '@tanstack/react-query';
import { blogApi } from '@/lib/api';
import type { CreateBlogInput } from '@/types/blog';

export function useCreateBlog() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (blog: CreateBlogInput) => blogApi.create(blog),
    onSuccess: () => {
      // Invalidate and refetch blogs query
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
    },
  });
}
