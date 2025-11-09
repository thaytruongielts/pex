export interface GapFillingExercise {
  question: string; // "She has green ___."
  answer: string;   // "eyes"
}

export interface MultipleChoiceExercise {
  question: string; // "Which word rhymes with 'team'?"
  options: string[]; // ["dream", "time", "tame"]
  answer: string;    // "dream"
}

export interface Rule {
  title: string;
  phoneme?: string;
  description: string;
  spellings?: string[];
  examples: string[];
  notes?: string;
  exceptions?: string;
  gapFillingExercises?: GapFillingExercise[];
  multipleChoiceExercises?: MultipleChoiceExercise[];
}

export interface RuleGroup {
  id: string;
  title: string;
  description?: string;
  rules: Rule[];
}

export interface RuleSection {
  id: string;
  title: string;
  description?: string;
  groups: RuleGroup[];
}
