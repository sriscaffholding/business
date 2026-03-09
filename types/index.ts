export type ScaffoldingType = 'wheel-ladder' | 'single-scaffolding' | 'double-scaffolding';

export interface ScaffoldingItem {
  id: string;
  type: ScaffoldingType;
  description: string;
  image: string; // filename stored in /public/uploads/
  createdAt: string;
}

export const TYPE_LABELS: Record<ScaffoldingType, string> = {
  'wheel-ladder': 'Wheel Ladder',
  'single-scaffolding': 'Single Scaffolding',
  'double-scaffolding': 'Double Scaffolding',
};

export const ALL_TYPES: ScaffoldingType[] = [
  'wheel-ladder',
  'single-scaffolding',
  'double-scaffolding',
];
