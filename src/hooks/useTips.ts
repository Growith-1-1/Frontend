import { getTips, postTip } from '@/api/tipsApi';
import { PostTipsRequest } from '@/types/tips';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useGetTip = () => {
  return useQuery({
    queryKey: ['tips'],
    queryFn: () => getTips(),
  });
};

export const usePostTip = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (params: PostTipsRequest) => postTip(params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tips'] });
    },
  });
};
