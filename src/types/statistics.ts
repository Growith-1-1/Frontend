export interface GetStatResponse {
  category: string;
  sum: number;
}

export interface GetStatCategoryResponse {
  totalPage: number;
  totalElement: number;
  number: number;
  accountBookSpendResponseList: StatCategory[];
}

export interface StatCategory {
  id: number;
  title: string;
  category: string;
  amount: number;
  updatedAt: string;
  memo: string;
  endDate: string | null;
  occurredAt: string;
  repeat: Repeat | null;
}

export interface Repeat {
  frequency: string;
  month: number | null;
  day: number | null;
}

export interface GetStatConsumeResponse {
  change: number;
  consume: number;
}

export type Category = {
  name: string;
  value: number;
  color: string;
};
