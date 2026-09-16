export interface StudentActivation {
  studentName: string;
  normalizedName: string;
  code: string;
  activatedAt: number; // timestamp
  expiresAt: number; // timestamp (180 days)
  deviceId: string;
  isActive: boolean;
}

export interface GeneratedCodeRecord {
  id: string;
  studentName: string;
  normalizedName: string;
  code: string;
  generatedAt: number;
  notes?: string;
}

export interface CurriculumWorksheet {
  id: number;
  unit: string;
  title: string;
  titleAr: string;
  pageNumber: number;
  category: 'listening' | 'reading' | 'vocabulary' | 'grammar' | 'writing' | 'speaking' | 'full';
  summary: string;
  sections: WorksheetSection[];
}

export interface WorksheetSection {
  title: string;
  titleAr: string;
  instructions: string;
  instructionsAr?: string;
  type: 'qa' | 'mcq' | 'true_false' | 'matching' | 'fill_blanks' | 'grammar_rules' | 'paragraph';
  items: any[];
}

export interface QuizQuestion {
  id: string | number;
  question: string;
  questionAr?: string;
  options?: string[];
  optionsAr?: string[];
  correctAnswer: string | number | boolean;
  explanation?: string;
  explanationAr?: string;
}

export interface VocabularyWord {
  id: string;
  word: string;
  translation: string;
  definition: string;
  definitionAr?: string;
  example?: string;
  exampleAr?: string;
  partOfSpeech?: string;
}

export type ActiveTab = 
  | 'speaking' 
  | 'reading' 
  | 'vocabulary' 
  | 'grammar' 
  | 'listening' 
  | 'writing' 
  | 'worksheets';
