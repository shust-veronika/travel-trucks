import { api } from './api';
import {
  CampersFilters,
  CampersResponse,
} from '@/types/camper';

interface GetCampersParams extends CampersFilters {
  pageParam?: number;
}

export const getCampers = async ({
  pageParam = 1,
  ...filters
}: GetCampersParams): Promise<CampersResponse> => {
  const { data } = await api.get('/campers', {
    params: {
      page: pageParam,
      perPage: 4,
      ...filters,
    },
  });

  return data;
};