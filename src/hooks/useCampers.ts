'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { getCampers } from '@/services/campers';

export const useCampers = () => {
  return useInfiniteQuery({
    queryKey: ['campers'],

    queryFn: ({ pageParam }) =>
      getCampers({
        pageParam,
      }),

    initialPageParam: 1,

    getNextPageParam: lastPage => {
      if (lastPage.page >= lastPage.totalPages) {
        return undefined;
      }

      return lastPage.page + 1;
    },
  });
};