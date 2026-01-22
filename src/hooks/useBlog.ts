import { useQuery } from '@tanstack/react-query';
import { blogApi } from '@/lib/api';

export function useBlog(id: number | null) {
  return useQuery({
    queryKey: ['blog', id],
    queryFn: () => blogApi.getById(id!),
    enabled: id !== null,
  });
}
