import {
  DeleteBudgetRequest,
  GetBudgetRequest,
  GetBudgetResponse,
  PostBudgetRequest,
  PostBudgetResponse,
  PutBudgetRequest,
  PutBudgetResponse,
} from '@/types/budget';
import { EmptyResponse } from '@/types/common';
import { baseFetch } from './fetchUtils';

export const postBudget = async ({ budget }: PostBudgetRequest) => {
  try {
    return await baseFetch<PostBudgetResponse>(`budget`, {
      method: 'POST',
      data: {
        budget,
      },
    });
  } catch (error) {
    console.error('예산 등록 에러: ', error);
    throw error;
  }
};

export const getBudget = async ({ date }: GetBudgetRequest) => {
  try {
    return await baseFetch<GetBudgetResponse>(`budget?date=${date}`, {
      method: 'GET',
    });
  } catch (error) {
    console.error('예산 조회 에러: ', error);
    throw error;
  }
};

export const putBudget = async ({ id, budget }: PutBudgetRequest) => {
  try {
    return await baseFetch<PutBudgetResponse>(`budget/${id}`, {
      method: 'PUT',
      data: {
        budget,
      },
    });
  } catch (error) {
    console.error('예산 수정 에러: ', error);
    throw error;
  }
};

export const deleteBudget = async ({ id }: DeleteBudgetRequest) => {
  try {
    return await baseFetch<EmptyResponse>(`budget/${id}`, {
      method: 'DELETE',
    });
  } catch (error) {
    console.error('예산 삭제 에러: ', error);
    throw error;
  }
};
