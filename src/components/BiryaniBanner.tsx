import React from 'react';
import { motion } from 'motion/react';
import {
  BiryaniBowlSVG,
  FloatingChiliSVG,
  FloatingTomatoSVG,
  CorianderLeavesSVG,
  BowlDoodleSparkles,
  CurvedArrowSVG,
  DeliveryScooterBadge,
  ChefMascotBadge,
} from './BiryaniGraphics';
import { ExtractedComponent } from '../types';

interface BiryaniBannerProps {
  onSelectComponent?: (comp: ExtractedComponent | null) => void;
  selectedComponentId?: string | null;
  onOrderClick?: () => void;
  isInspectorActive?: boolean;
}

export const BiryaniBanner: React.FC<BiryaniBannerProps> = ({
  onSelectComponent,
  selectedComponentId,
  onOrderClick,
  isInspectorActive = false,
}) => {
  const getHighlightClass = (id: string) => {
    if (!isInspectorActive) return '';
    if (selectedComponentId === id) {
      return 'ring-4 ring-yellow-300 ring-offset-2 ring-offset-amber-600 shadow-2xl scale-[1.02] transition-all duration-200 cursor-pointer z-50';
    }
    return 'hover:ring-2 hover:ring-white/80 hover:scale-[1.01] transition-all duration-200 cursor-pointer';
  };

  const handleCompClick = (e: React.MouseEvent, id: string) => {
    if (isInspectorActive && onSelectComponent) {
      e.stopPropagation();
      const comp = (window as any).EXTRACTED_COMPONENTS_MAP?.[id];
      if (comp) onSelectComponent(comp);
    }
  };

  return (
    <div className="flex items-center justify-center p-2 sm:p-4 select-none">
      {/* Poster Frame Card (Exact Biryani Banner Canvas) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className={`relative w-full max-w-[420px] aspect-[1/1.38] bg-[#D18A2B] rounded-[36px] overflow-hidden shadow-2xl flex flex-col justify-between border-4 border-[#C17A1B] ${
          selectedComponentId === 'ochre-card-bg' && isInspectorActive ? 'ring-4 ring-yellow-300' : ''
        }`}
        onClick={(e) => handleCompClick(e, 'ochre-card-bg')}
      >
        {/* Red Center Ribbon Banner */}
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-[52%] h-[60%] bg-[#D31212] z-0 transition-all ${getHighlightClass(
            'red-vertical-stripe'
          )}`}
          onClick={(e) => handleCompClick(e, 'red-vertical-stripe')}
        />

        {/* Top Floating Leaves Decor */}
        {/* Top-Left Coriander/Mint */}
        <div
          className={`absolute top-3 left-4 w-16 h-16 z-10 transition-transform hover:rotate-6 ${getHighlightClass(
            'coriander-top-left'
          )}`}
          onClick={(e) => handleCompClick(e, 'coriander-top-left')}
        >
          <CorianderLeavesSVG className="w-full h-full transform -rotate-12" />
        </div>

        {/* Top-Right Herb Sprigs */}
        <div
          className={`absolute top-3 stroke-2 right-4 w-14 h-14 z-10 transition-transform hover:-rotate-6 ${getHighlightClass(
            'coriander-top-right'
          )}`}
          onClick={(e) => handleCompClick(e, 'coriander-top-right')}
        >
          <CorianderLeavesSVG className="w-full h-full transform rotate-45 scale-90 opacity-90" />
        </div>

        {/* Header Typography Section */}
        <div className="relative z-20 pt-7 text-center flex flex-col items-center">
          {/* Main Title BIRYANI */}
          <div
            className={`cursor-pointer group transition-all ${getHighlightClass('biryani-heading')}`}
            onClick={(e) => handleCompClick(e, 'biryani-heading')}
          >
            <h1 className="font-display font-black text-4xl sm:text-5xl tracking-wide text-white uppercase drop-shadow-md leading-none px-2">
              BIRYANI
            </h1>
          </div>

          {/* Subtitle Spicy & Yummy */}
          <div
            className={`-mt-1 sm:-mt-2 cursor-pointer transition-all ${getHighlightClass('spicy-yummy-subtitle')}`}
            onClick={(e) => handleCompClick(e, 'spicy-yummy-subtitle')}
          >
            <span className="font-script text-3xl sm:text-4xl lg:text-[42px] text-white drop-shadow-lg tracking-normal inline-block transform -rotate-2">
              Spicy &amp; Yummy
            </span>
          </div>
        </div>

        {/* Middle Main Content Area (Biryani Bowl & Floating Ingredients) */}
        <div className="relative z-10 flex-1 flex items-center justify-center -mt-3">
          {/* Floating Tomato (Middle Right) */}
          <div
            className={`absolute right-3 top-[18%] w-12 h-12 z-20 hover:scale-110 transition-transform ${getHighlightClass(
              'floating-tomato'
            )}`}
            onClick={(e) => handleCompClick(e, 'floating-tomato')}
          >
            <FloatingTomatoSVG className="w-full h-full" />
          </div>

          {/* Floating Red Chili Pepper (Middle Left) */}
          <div
            className={`absolute left-2 top-[34%] w-14 h-14 z-20 hover:scale-110 transition-transform ${getHighlightClass(
              'floating-chili'
            )}`}
            onClick={(e) => handleCompClick(e, 'floating-chili')}
          >
            <FloatingChiliSVG className="w-full h-full" />
          </div>

          {/* Sparkles Doodle overlay around bowl */}
          <div
            className={`absolute inset-0 pointer-events-none z-10 ${getHighlightClass('doodle-sparkles')}`}
            onClick={(e) => handleCompClick(e, 'doodle-sparkles')}
          >
            <BowlDoodleSparkles />
          </div>

          {/* Center Biryani Bowl */}
          <motion.div
            whileHover={{ scale: 1.03, rotate: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={`relative w-[80%] max-w-[280px] aspect-square z-20 cursor-pointer ${getHighlightClass(
              'main-biryani-bowl'
            )}`}
            onClick={(e) => {
              handleCompClick(e, 'main-biryani-bowl');
              if (!isInspectorActive && onOrderClick) onOrderClick();
            }}
          >
            <BiryaniBowlSVG className="w-full h-full" />
          </motion.div>
        </div>

        {/* Bottom Section (CTA, Arrow, and Badges) */}
        <div className="relative z-30 pb-5 px-4 flex flex-col items-center">
          {/* Curved Arrow Pointing to ORDER NOW */}
          <div
            className={`absolute bottom-11 left-7 w-20 h-16 pointer-events-none z-20 ${getHighlightClass('doodle-arrow')}`}
            onClick={(e) => handleCompClick(e, 'doodle-arrow')}
          >
            <CurvedArrowSVG className="w-full h-full" />
          </div>

          {/* Capsule ORDER NOW Button */}
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              if (isInspectorActive) {
                handleCompClick(e, 'order-now-cta');
              } else if (onOrderClick) {
                onOrderClick();
              }
            }}
            className={`bg-[#D31212] hover:bg-[#b80e0e] active:bg-[#9e0b0b] text-white font-display font-extrabold text-base sm:text-lg tracking-wider px-7 py-2.5 rounded-full shadow-lg border-2 border-white/20 transition-all flex items-center justify-center cursor-pointer mb-2 z-30 ${getHighlightClass(
              'order-now-cta'
            )}`}
          >
            ORDER NOW
          </motion.button>

          {/* Bottom Footer Badges Row */}
          <div className="w-full flex items-end justify-between px-2 pt-1">
            {/* Delivery Scooter Badge & Hotline (Bottom Left) */}
            <div
              className={`cursor-pointer hover:opacity-90 transition-opacity ${getHighlightClass(
                'delivery-scooter-badge'
              )}`}
              onClick={(e) => {
                handleCompClick(e, 'delivery-scooter-badge');
                if (!isInspectorActive && onOrderClick) onOrderClick();
              }}
            >
              <DeliveryScooterBadge />
            </div>

            {/* Chef Mascot Badge (Bottom Right) */}
            <div
              className={`cursor-pointer hover:opacity-90 transition-opacity ${getHighlightClass(
                'chef-mascot-badge'
              )}`}
              onClick={(e) => handleCompClick(e, 'chef-mascot-badge')}
            >
              <ChefMascotBadge />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
