import { create } from 'zustand';
import { Payment } from '../types/payment';
import { Challenge } from '../types/challenges';

interface ChallengeState {
  challenges: Challenge[];
  selectedChallenge: Challenge | null;
  payments: Payment[];
  addChallenge: (challenge: Challenge) => void;
  selectChallenge: (challengeId: string) => void;
  addPayment: (payment: Payment) => void;
  updateChallengePublic: (challengeId: string, isPublic: boolean) => void;
  updateChallengeStatus: (
    challengeId: string,
    status: 'active' | 'completed' | 'failed'
  ) => void;
  updateChallengeProgress: (challengeId: string, progress: number) => void;
}

const initialChallenges: Challenge[] = [
  {
    id: '1',
    title: '30일 커피 줄이기 챌린지',
    description: '매일 사 먹는 커피를 줄이고 집에서 텀블러에 커피를 어쩌고',
    currentParticipants: 5,
    maxParticipants: 10,
    daysLeft: 7,
    progress: 42,
    goal: 150000,
    status: 'active',
    isNew: true,
  },
];

const initialPayments: Payment[] = [
  {
    id: '1',
    amount: 4500,
    date: '2024년 4월 9일',
    description: '커피 대신 사무실 시머를 마셨습니다.',
  },
  {
    id: '2',
    amount: 4500,
    date: '2024년 4월 10일',
    description: '커피 대신 사무실 시머를 마셨습니다.',
  },
  {
    id: '3',
    amount: 4500,
    date: '2024년 4월 11일',
    description: '커피 대신 사무실 시머를 마셨습니다.',
  },
];

export const useChallengeStore = create<ChallengeState>((set) => ({
  challenges: initialChallenges,
  selectedChallenge: null,
  payments: initialPayments,

  addChallenge: (challenge) =>
    set((state) => ({
      challenges: [...state.challenges, challenge],
    })),

  selectChallenge: (challengeId) =>
    set((state) => ({
      selectedChallenge:
        state.challenges.find((c) => c.id === challengeId) || null,
    })),

  addPayment: (payment) =>
    set((state) => ({
      payments: [...state.payments, payment],
    })),

  updateChallengePublic: (challengeId, isPublic) =>
    set((state) => ({
      challenges: state.challenges.map((challenge) =>
        challenge.id === challengeId ? { ...challenge, isPublic } : challenge
      ),
      selectedChallenge:
        state.selectedChallenge?.id === challengeId
          ? { ...state.selectedChallenge, isPublic }
          : state.selectedChallenge,
    })),

  updateChallengeStatus: (challengeId, status) =>
    set((state) => ({
      challenges: state.challenges.map((challenge) =>
        challenge.id === challengeId
          ? {
              ...challenge,
              status,
              isCompleted: status === 'completed',
              isFailed: status === 'failed',
            }
          : challenge
      ),
      selectedChallenge:
        state.selectedChallenge?.id === challengeId
          ? {
              ...state.selectedChallenge,
              status,
              isCompleted: status === 'completed',
              isFailed: status === 'failed',
            }
          : state.selectedChallenge,
    })),

  updateChallengeProgress: (challengeId, progress) =>
    set((state) => ({
      challenges: state.challenges.map((challenge) =>
        challenge.id === challengeId ? { ...challenge, progress } : challenge
      ),
      selectedChallenge:
        state.selectedChallenge?.id === challengeId
          ? { ...state.selectedChallenge, progress }
          : state.selectedChallenge,
    })),
}));
