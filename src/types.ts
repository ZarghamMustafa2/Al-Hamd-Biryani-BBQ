export interface ExtractedComponent {
  id: string;
  name: string;
  category: 'Typography' | 'Layout & Background' | 'Main Hero Asset' | 'Floating Decor' | 'Interactive CTA' | 'Footer Badge';
  description: string;
  colors: string[];
  dimensions: string;
  fontSpec?: string;
  position: string;
  zIndex: number;
}

export interface BiryaniOrderItem {
  size: 'Single' | 'Double' | 'Family Bucket';
  spiceLevel: 'Mild' | 'Medium' | 'Hot & Spicy' | 'Extra Fiery';
  type: 'Chicken Dum Biryani' | 'Special Drumstick Biryani' | 'Hyderabadi Mutton Biryani' | 'Paneer Dum Biryani';
  extraDrumsticks: number;
  addRaita: boolean;
  addSalan: boolean;
  addGulabJamun: boolean;
  quantity: number;
  instructions: string;
}

export type ViewMode = 'scroll-animation' | 'banner' | 'inspector' | 'components-grid';
