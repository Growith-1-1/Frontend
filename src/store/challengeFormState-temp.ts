import { create } from 'zustand';

interface ChallengeFormState {
  title: string;
  description: string;
  targetAmount: string;
  startDate: string;
  endDate: string;
  isPublic: boolean;
  capacity: string;
  setCapacity: (capacity: string) => void;
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  setTargetAmount: (amount: string) => void;
  setStartDate: (date: string) => void;
  setEndDate: (date: string) => void;
  setIsPublic: (isPublic: boolean) => void;
  resetForm: () => void;
}

export const useChallengeFormStore = create<ChallengeFormState>((set) => ({
  title: '',
  description: '',
  targetAmount: '',
  startDate: '',
  endDate: '',
  isPublic: true,
  capacity: '',
  setCapacity: (capacity) => set({ capacity }),
  setTitle: (title) => set({ title }),
  setDescription: (description) => set({ description }),
  setTargetAmount: (amount) => set({ targetAmount: amount }),
  setStartDate: (startDate) => set({ startDate }),
  setEndDate: (endDate) => set({ endDate }),
  setIsPublic: (isPublic) => set({ isPublic }),
  resetForm: () =>
    set({
      title: '',
      description: '',
      targetAmount: '',
      startDate: '',
      endDate: '',
      isPublic: true,
    }),
}));
