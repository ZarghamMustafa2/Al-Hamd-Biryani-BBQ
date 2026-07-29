import React from 'react';

// Highly detailed SVG rendering of the Biryani Bowl matching the screenshot
export const BiryaniBowlSVG: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-2xl select-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bowlShadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.4" />
          <stop offset="70%" stopColor="#000000" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="riceGradient" cx="45%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="35%" stopColor="#D97706" />
          <stop offset="70%" stopColor="#B45309" />
          <stop offset="100%" stopColor="#78350F" />
        </radialGradient>
        <linearGradient id="chickenGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="40%" stopColor="#D97706" />
          <stop offset="85%" stopColor="#92400E" />
          <stop offset="100%" stopColor="#451A03" />
        </linearGradient>
        <linearGradient id="boneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FEF3C7" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>

      {/* Bowl Drop Shadow */}
      <ellipse cx="200" cy="210" rx="180" ry="175" fill="url(#bowlShadow)" />

      {/* Outer Ceramic White Bowl Rim */}
      <circle cx="200" cy="200" r="170" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="4" />
      <circle cx="200" cy="200" r="162" fill="#F8FAFC" />
      <circle cx="200" cy="200" r="156" fill="url(#riceGradient)" />

      {/* Rice Texture Grains & Spices */}
      <g opacity="0.9">
        {/* Yellow saffron rice streaks */}
        <path d="M 100 120 Q 140 100 180 130 T 260 110" fill="none" stroke="#FDE047" strokeWidth="8" strokeLinecap="round" opacity="0.6" />
        <path d="M 80 180 Q 130 160 190 200 T 290 170" fill="none" stroke="#FEF08A" strokeWidth="10" strokeLinecap="round" opacity="0.5" />
        <path d="M 120 240 Q 170 210 230 250 T 310 210" fill="none" stroke="#FBBF24" strokeWidth="9" strokeLinecap="round" opacity="0.7" />

        {/* Scattered rice grains */}
        {[
          { cx: 110, cy: 140, r: 3 }, { cx: 130, cy: 160, r: 4 }, { cx: 150, cy: 110, r: 3.5 },
          { cx: 170, cy: 140, r: 3 }, { cx: 210, cy: 120, r: 4 }, { cx: 250, cy: 130, r: 3 },
          { cx: 280, cy: 160, r: 4 }, { cx: 290, cy: 190, r: 3.5 }, { cx: 270, cy: 230, r: 4 },
          { cx: 240, cy: 270, r: 3 }, { cx: 190, cy: 290, r: 4 }, { cx: 140, cy: 270, r: 3.5 },
          { cx: 100, cy: 230, r: 3 }, { cx: 90, cy: 190, r: 4 }, { cx: 220, cy: 170, r: 3 }
        ].map((g, idx) => (
          <ellipse key={idx} cx={g.cx} cy={g.cy} rx={g.r * 1.6} ry={g.r * 0.8} fill="#FEF9C3" transform={`rotate(${idx * 27}, ${g.cx}, ${g.cy})`} />
        ))}

        {/* Dark caramelized onions */}
        <path d="M 115 155 Q 125 175 140 165" stroke="#451A03" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M 230 125 Q 245 135 255 120" stroke="#78350F" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M 150 260 Q 170 270 185 255" stroke="#451A03" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M 270 210 Q 285 230 295 215" stroke="#78350F" strokeWidth="4" fill="none" strokeLinecap="round" />

        {/* Green Peas */}
        {[
          { cx: 140, cy: 125 }, { cx: 260, cy: 145 }, { cx: 285, cy: 175 },
          { cx: 110, cy: 200 }, { cx: 130, cy: 245 }, { cx: 250, cy: 255 },
          { cx: 210, cy: 280 }, { cx: 170, cy: 285 }, { cx: 100, cy: 165 }
        ].map((p, idx) => (
          <g key={idx}>
            <circle cx={p.cx} cy={p.cy} r="6" fill="#15803D" />
            <circle cx={p.cx - 1.5} cy={p.cy - 1.5} r="2" fill="#4ADE80" />
          </g>
        ))}
      </g>

      {/* Roasted Chicken Drumsticks stacked in center */}
      {/* Drumstick 1 - Top Left pointing down */}
      <g transform="translate(145, 120) rotate(-25)">
        <path d="M 0 0 C 20 -20, 50 -10, 60 20 C 70 50, 40 80, 10 60 C -10 40, -20 20, 0 0 Z" fill="url(#chickenGrad1)" />
        <path d="M 50 20 Q 65 35 80 40 Q 85 45 80 50 L 65 35 Z" fill="url(#boneGrad)" />
        {/* Sear marks */}
        <path d="M 10 15 Q 25 20 20 35" stroke="#451A03" strokeWidth="3" fill="none" />
        <path d="M 25 25 Q 40 30 35 45" stroke="#451A03" strokeWidth="3" fill="none" />
        {/* Herbs on drumstick */}
        <circle cx="20" cy="25" r="3" fill="#22C55E" />
        <circle cx="35" cy="30" r="2.5" fill="#166534" />
      </g>

      {/* Drumstick 2 - Top Right pointing down-left */}
      <g transform="translate(200, 125) rotate(35)">
        <path d="M 0 0 C 25 -15, 55 0, 60 30 C 65 60, 30 85, 5 65 C -15 45, -20 15, 0 0 Z" fill="url(#chickenGrad1)" />
        <path d="M 50 30 Q 70 40 85 45 Q 90 50 85 55 L 68 42 Z" fill="url(#boneGrad)" />
        <path d="M 15 20 Q 30 25 25 40" stroke="#451A03" strokeWidth="3" fill="none" />
        <path d="M 30 30 Q 45 35 40 50" stroke="#451A03" strokeWidth="3" fill="none" />
        <circle cx="25" cy="35" r="3" fill="#22C55E" />
      </g>

      {/* Drumstick 3 - Center Primary Large Drumstick */}
      <g transform="translate(170, 175) rotate(15)">
        <path d="M -10 -10 C 20 -30, 65 -15, 75 25 C 85 65, 40 95, 0 70 C -30 45, -30 10, -10 -10 Z" fill="url(#chickenGrad1)" />
        <path d="M 60 25 Q 85 40 105 45 Q 112 52 104 60 L 80 42 Z" fill="url(#boneGrad)" />
        {/* Roast char ring */}
        <path d="M 10 10 Q 35 15 30 40" stroke="#451A03" strokeWidth="4" strokeLinecap="round" fill="none" />
        <path d="M 30 25 Q 55 30 50 55" stroke="#451A03" strokeWidth="4" strokeLinecap="round" fill="none" />
        <circle cx="30" cy="20" r="3.5" fill="#22C55E" />
        <circle cx="45" cy="35" r="3" fill="#15803D" />
        <circle cx="20" cy="40" r="2.5" fill="#86EFAC" />
      </g>

      {/* Drumstick 4 - Bottom Center Drumstick */}
      <g transform="translate(185, 215) rotate(-40)">
        <path d="M -5 -5 C 20 -20, 50 -10, 55 20 C 60 50, 30 75, 5 55 C -15 35, -20 15, -5 -5 Z" fill="url(#chickenGrad1)" />
        <path d="M 45 20 Q 65 30 80 35 L 60 25 Z" fill="url(#boneGrad)" />
        <path d="M 10 15 Q 25 20 20 35" stroke="#451A03" strokeWidth="3" fill="none" />
      </g>

      {/* Fresh Chopped Cilantro Garnish sprinkled on top */}
      {[
        { x: 170, y: 165 }, { x: 210, y: 190 }, { x: 190, y: 235 },
        { x: 150, y: 210 }, { x: 230, y: 165 }, { x: 250, y: 215 },
        { x: 130, y: 180 }, { x: 210, y: 255 }
      ].map((c, idx) => (
        <g key={idx} transform={`translate(${c.x}, ${c.y}) scale(0.8)`}>
          <path d="M0 0 C-4 -6, -10 -4, -8 2 C-12 6, -4 12, 0 6 C4 12, 12 6, 8 2 C10 -4, 4 -6, 0 0 Z" fill="#22C55E" />
          <path d="M0 0 C-2 -3, -5 -2, -4 1" fill="#16A34A" />
        </g>
      ))}
    </svg>
  </div>
);

// Floating Red Chili with Swirl stroke
export const FloatingChiliSVG: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg overflow-visible" xmlns="http://www.w3.org/2000/svg">
      {/* Dynamic white/accent swirl lines behind chili */}
      <path d="M 10 20 Q 55 -10 85 30 T 40 90" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" strokeDasharray="4 2" />
      <path d="M 25 10 Q 75 10 70 65" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.9" />

      {/* Red Chili Pepper Body */}
      <path
        d="M 25 70 C 15 50, 20 30, 45 25 C 60 22, 75 30, 80 45 C 82 55, 65 75, 45 78 C 35 80, 28 78, 25 70 Z"
        fill="url(#chiliGrad)"
      />
      {/* Chili Curved Tip */}
      <path d="M 25 70 C 20 75, 12 78, 8 82 C 10 85, 18 80, 25 75 Z" fill="#DC2626" />

      {/* Chili Shiny Highlight */}
      <path d="M 38 32 C 48 30, 62 35, 68 45" fill="none" stroke="#FFA2A2" strokeWidth="3.5" strokeLinecap="round" opacity="0.8" />

      {/* Green Stem */}
      <path d="M 45 25 C 48 18, 52 12, 58 8 C 55 15, 50 20, 45 25 Z" fill="#16A34A" />
      <path d="M 43 26 C 40 22, 45 20, 47 24 Z" fill="#15803D" />

      <defs>
        <linearGradient id="chiliGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EF4444" />
          <stop offset="60%" stopColor="#DC2626" />
          <stop offset="100%" stopColor="#991B1B" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

// Floating Fresh Tomato
export const FloatingTomatoSVG: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md select-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="tomatoGrad" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#F87171" />
          <stop offset="40%" stopColor="#EF4444" />
          <stop offset="85%" stopColor="#DC2626" />
          <stop offset="100%" stopColor="#991B1B" />
        </radialGradient>
      </defs>
      {/* Main Round Tomato */}
      <circle cx="50" cy="52" r="38" fill="url(#tomatoGrad)" />

      {/* Shiny Specular Highlight */}
      <ellipse cx="38" cy="38" rx="10" ry="6" fill="#FFFFFF" opacity="0.45" transform="rotate(-30 38 38)" />

      {/* Green Calyx Star leaves on top */}
      <g fill="#16A34A" stroke="#15803D" strokeWidth="1">
        <path d="M 50 18 L 46 28 L 50 26 L 54 28 Z" />
        <path d="M 50 18 L 38 22 L 44 26 Z" />
        <path d="M 50 18 L 62 22 L 56 26 Z" />
        <path d="M 50 18 L 42 12 L 47 18 Z" />
        <path d="M 50 18 L 58 12 L 53 18 Z" />
      </g>
      {/* Stem */}
      <path d="M 50 18 Q 48 10 44 8" stroke="#15803D" strokeWidth="3.5" strokeLinecap="round" fill="none" />
    </svg>
  </div>
);

// Floating Coriander/Herb Leaves Cluster
export const CorianderLeavesSVG: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 100 100" className="w-full h-full select-none drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
      <g fill="#84CC16" opacity="0.95">
        {/* Leaf 1 */}
        <path d="M 30 40 C 15 20, 5 35, 20 50 C 5 65, 25 75, 35 60 C 45 75, 65 65, 50 50 C 65 35, 55 20, 30 40 Z" fill="#65A30D" />
        <path d="M 30 40 L 35 60" stroke="#4D7C0F" strokeWidth="2" />

        {/* Leaf 2 */}
        <path d="M 60 30 C 50 15, 40 25, 50 38 C 38 48, 52 58, 62 48 C 72 58, 85 48, 72 38 C 85 25, 72 15, 60 30 Z" fill="#84CC16" />

        {/* Leaf 3 */}
        <path d="M 70 70 C 60 55, 50 65, 60 78 C 48 88, 62 98, 72 88 C 82 98, 95 88, 82 78 C 95 65, 82 55, 70 70 Z" fill="#4ADE80" />
      </g>
    </svg>
  </div>
);

// Glowing Royal Flame Fire graphic SVG
export const FloatingFlameSVG: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" className={`w-full h-full pointer-events-none drop-shadow-lg ${className}`} xmlns="http://www.w3.org/2000/svg">
    <path d="M 50 10 C 60 30, 85 45, 75 75 C 65 95, 35 95, 25 75 C 15 45, 40 30, 50 10 Z" fill="url(#flameGradMain)" />
    <path d="M 50 35 C 55 45, 70 55, 62 75 C 55 88, 45 88, 38 75 C 32 55, 45 45, 50 35 Z" fill="url(#flameGradInner)" />
    <defs>
      <linearGradient id="flameGradMain" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="50%" stopColor="#EA580C" />
        <stop offset="100%" stopColor="#DC2626" />
      </linearGradient>
      <linearGradient id="flameGradInner" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FEF08A" />
        <stop offset="100%" stopColor="#F97316" />
      </linearGradient>
    </defs>
  </svg>
);

export const BowlDoodleSparkles: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`absolute top-4 left-4 w-8 h-8 ${className}`}>
    <FloatingFlameSVG />
  </div>
);

// Curved Arrow pointing to ORDER NOW button
export const CurvedArrowSVG: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 120 100" className={`w-full h-full pointer-events-none ${className}`} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M 20 85 C 10 50, 25 15, 65 20 C 85 22, 105 35, 110 55 C 112 65, 105 80, 90 85"
      fill="none"
      stroke="#FFFFFF"
      strokeWidth="3"
      strokeLinecap="round"
      strokeDasharray="100"
    />
    {/* Arrowhead */}
    <path d="M 82 80 L 92 87 L 90 75" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Delivery Scooter Badge (Bottom Left)
export const DeliveryScooterBadge: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex flex-col items-center justify-center ${className}`}>
    <div className="relative w-12 h-10 flex items-center justify-center">
      <svg viewBox="0 0 100 80" className="w-full h-full drop-shadow" xmlns="http://www.w3.org/2000/svg">
        {/* Speed motion lines */}
        <line x1="5" y1="25" x2="25" y2="25" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
        <line x1="2" y1="40" x2="20" y2="40" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
        <line x1="8" y1="55" x2="28" y2="55" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.8" />

        {/* Scooter Body */}
        <path d="M 30 50 L 75 50 L 65 30 L 45 30 Z" fill="#DC2626" />
        {/* Delivery Box */}
        <rect x="25" y="20" width="22" height="22" rx="3" fill="#DC2626" stroke="#FFFFFF" strokeWidth="1.5" />
        <path d="M 28 31 L 44 31" stroke="#FFFFFF" strokeWidth="2" />

        {/* Rider Helmet & Body */}
        <circle cx="55" cy="18" r="8" fill="#FFFFFF" />
        <path d="M 48 26 Q 55 22 62 26 L 60 35 L 50 35 Z" fill="#DC2626" />

        {/* Handlebar & Windshield */}
        <path d="M 65 30 L 72 18" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />

        {/* Wheels */}
        <circle cx="40" cy="58" r="10" fill="#1E293B" stroke="#FFFFFF" strokeWidth="2.5" />
        <circle cx="40" cy="58" r="4" fill="#94A3B8" />

        <circle cx="75" cy="58" r="10" fill="#1E293B" stroke="#FFFFFF" strokeWidth="2.5" />
        <circle cx="75" cy="58" r="4" fill="#94A3B8" />
      </svg>
    </div>
    <span className="text-white font-extrabold text-sm sm:text-base tracking-wider drop-shadow-sm font-display mt-0.5">
      12799
    </span>
  </div>
);

// Chef Mascot Badge (Bottom Right)
export const ChefMascotBadge: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`relative w-12 h-12 flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow" xmlns="http://www.w3.org/2000/svg">
      {/* Chef Body */}
      <ellipse cx="50" cy="65" rx="22" ry="20" fill="#DC2626" />

      {/* Serving Tray in Hand */}
      <path d="M 70 60 L 92 60" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
      <path d="M 74 60 C 74 52, 88 52, 88 60 Z" fill="#F8FAFC" opacity="0.9" />

      {/* Apron / Outfit detail */}
      <path d="M 42 52 L 58 52 L 55 75 L 45 75 Z" fill="#FFFFFF" />

      {/* Head */}
      <circle cx="50" cy="38" r="14" fill="#FED7AA" />
      {/* Mustache & Smile */}
      <path d="M 42 42 Q 50 48 58 42" stroke="#451A03" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="44" cy="35" r="2" fill="#451A03" />
      <circle cx="56" cy="35" r="2" fill="#451A03" />

      {/* Chef Tall Hat */}
      <path d="M 38 28 Q 32 15 42 12 Q 50 8 58 12 Q 68 15 62 28 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
      <rect x="40" y="26" width="20" height="6" fill="#F1F5F9" rx="1" />
    </svg>
  </div>
);
