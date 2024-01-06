import { Question } from './question';

export type QuizData = {
  title: string;
  questions: Question[];
  results: Record<string, QuizResult>;
};
export type QuizResult = {
  text: string;
  image: string;
  id: string;
};
