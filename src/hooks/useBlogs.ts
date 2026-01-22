import { useQuery } from '@tanstack/react-query';
import { blogApi } from '@/lib/api';

export function useBlogs() {
  return useQuery({
    queryKey: ['blogs'],
    queryFn: blogApi.getAll,
  });
}
