import { Question } from './question';

export type QuizData = {
  title: string;
  questions: Question[];
  results: Record<string, string>;
};
