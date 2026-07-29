import { ExtractedComponent } from '../types';

export const EXTRACTED_COMPONENTS: ExtractedComponent[] = [
  {
    id: 'ochre-card-bg',
    name: 'Ochre Golden Card Canvas',
    category: 'Layout & Background',
    description: 'Rounded rectangular container with warm mustard/ochre color palette.',
    colors: ['#CD8A2E', '#D18B2C'],
    dimensions: 'Aspect Ratio ~ 3:4.2 (Rounded 32px)',
    position: 'Base Container (Relative frame)',
    zIndex: 0
  },
  {
    id: 'red-vertical-stripe',
    name: 'Red Center Ribbon Banner',
    category: 'Layout & Background',
    description: 'Top-down centered vertical red stripe framing the title and top section of the biryani bowl.',
    colors: ['#D31212', '#C81010'],
    dimensions: 'Width: 52%, Height: ~60% of poster',
    position: 'Top Center (X: 24%, Y: 0%)',
    zIndex: 1
  },
  {
    id: 'biryani-heading',
    name: 'Main Title "BIRYANI"',
    category: 'Typography',
    description: 'Bold uppercase display heading in pristine white.',
    colors: ['#FFFFFF'],
    dimensions: 'Height: ~48px',
    fontSpec: 'Montserrat / Poppins Black (All Caps, Tracking 1.5px)',
    position: 'Top Center (Y: 6%)',
    zIndex: 3
  },
  {
    id: 'spicy-yummy-subtitle',
    name: 'Script Subtitle "Spicy & Yummy"',
    category: 'Typography',
    description: 'Handwritten cursive script text overlapping the main title.',
    colors: ['#FFFFFF'],
    dimensions: 'Height: ~40px',
    fontSpec: 'Satisfy / Caveat Cursive (Handwritten script)',
    position: 'Top Center (Y: 14%)',
    zIndex: 4
  },
  {
    id: 'coriander-top-left',
    name: 'Top-Left Floating Mint/Coriander',
    category: 'Floating Decor',
    description: 'Scattered fresh green coriander and mint leaves in top left quadrant.',
    colors: ['#65A30D', '#84CC16'],
    dimensions: '60px x 60px',
    position: 'Top Left (X: 6%, Y: 5%)',
    zIndex: 2
  },
  {
    id: 'coriander-top-right',
    name: 'Top-Right Floating Herb Sprigs',
    category: 'Floating Decor',
    description: 'Scattered fresh green leaf sprigs in top right quadrant.',
    colors: ['#65A30D', '#4ADE80'],
    dimensions: '50px x 50px',
    position: 'Top Right (X: 82%, Y: 6%)',
    zIndex: 2
  },
  {
    id: 'floating-tomato',
    name: 'Floating Fresh Tomato',
    category: 'Floating Decor',
    description: 'Fresh ripe red tomato floating near middle right boundary.',
    colors: ['#EF4444', '#15803D'],
    dimensions: '42px x 42px',
    position: 'Middle Right (X: 83%, Y: 30%)',
    zIndex: 3
  },
  {
    id: 'floating-chili',
    name: 'Floating Red Chili & Swirls',
    category: 'Floating Decor',
    description: 'Vibrant red chili pepper with green stem and motion swirl stroke lines.',
    colors: ['#DC2626', '#16A34A', '#FFFFFF'],
    dimensions: '45px x 50px',
    position: 'Middle Left (X: 10%, Y: 39%)',
    zIndex: 3
  },
  {
    id: 'main-biryani-bowl',
    name: 'Center Biryani Bowl',
    category: 'Main Hero Asset',
    description: 'Round white ceramic bowl filled with fragrant spiced rice, roasted drumsticks, coriander and green peas.',
    colors: ['#D97706', '#92400E', '#FFFFFF', '#15803D'],
    dimensions: '260px x 260px',
    position: 'Center (X: 18%, Y: 28%)',
    zIndex: 2
  },
  {
    id: 'doodle-sparkles',
    name: 'Doodle Sparkles & Radiation Lines',
    category: 'Floating Decor',
    description: 'White hand-drawn radial lines surrounding the biryani bowl.',
    colors: ['#FFFFFF'],
    dimensions: 'Surrounding Bowl Radius',
    position: 'Center Overlay',
    zIndex: 2
  },
  {
    id: 'order-now-cta',
    name: 'Capsule Button "ORDER NOW"',
    category: 'Interactive CTA',
    description: 'Vibrant red rounded pill button with bold white text.',
    colors: ['#D31212', '#FFFFFF'],
    dimensions: '160px x 44px',
    position: 'Center Bottom (X: 28%, Y: 77%)',
    zIndex: 5
  },
  {
    id: 'doodle-arrow',
    name: 'Curved Arrow Indicator',
    category: 'Floating Decor',
    description: 'White hand-drawn curved arrow originating from bottom left and pointing upwards towards ORDER NOW.',
    colors: ['#FFFFFF'],
    dimensions: '80px x 70px',
    position: 'Bottom Left Curve (X: 18%, Y: 60%)',
    zIndex: 3
  },
  {
    id: 'delivery-scooter-badge',
    name: 'Delivery Rider Scooter Badge',
    category: 'Footer Badge',
    description: 'Red delivery scooter graphic with delivery person and hotline code 12799.',
    colors: ['#DC2626', '#FFFFFF', '#FACC15'],
    dimensions: '55px x 50px',
    position: 'Bottom Left (X: 8%, Y: 84%)',
    zIndex: 4
  },
  {
    id: 'chef-mascot-badge',
    name: 'Chef Mascot Badge',
    category: 'Footer Badge',
    description: 'Mascot chef character wearing white chef hat and holding a serving tray.',
    colors: ['#EF4444', '#FFFFFF', '#0EA5E9'],
    dimensions: '48px x 48px',
    position: 'Bottom Right (X: 80%, Y: 84%)',
    zIndex: 4
  }
];
