export type Option = {
  id: number;
  name: string;
  alias: string;
};

export type Question = {
  id: number;
  question: string;
  options: Option[];
};
