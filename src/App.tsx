import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MenuSection } from './components/MenuSection';
import { MenuPage } from './components/MenuPage';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ReservationSection } from './components/ReservationSection';
import { ContactSection } from './components/ContactSection';
import { FooterSection } from './components/FooterSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

// Order Modal
import { OrderModal } from './components/OrderModal';

const TOTAL_FRAMES = 240;
const getFramePath = (index: number) => {
  const paddedIndex = index.toString().padStart(6, '0');
  return `./frames/frame_${paddedIndex}.png`;
};

export default function App() {
  // Theme State ('dark' | 'light')
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Page Routing State ('home' | 'menu')
  const [currentPage, setCurrentPage] = useState<'home' | 'menu'>('home');

  // Sync theme class to documentElement for Tailwind
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [theme]);

  // Order Modal State
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  // Frame Scroll Animation State & Refs
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const targetFrameRef = useRef(0);
  const animFrameIdRef = useRef<number | null>(null);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Preload all 240 frames silently in background
  useEffect(() => {
    const images: HTMLImageElement[] = [];

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      images.push(img);
    }

    imagesRef.current = images;
  }, []);

  // Canvas drawing & animation loop for 60fps frame scrubbing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      renderFrame(currentFrameRef.current);
    };

    const renderFrame = (frameIndex: number) => {
      const idx = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.round(frameIndex))
      );
      const img = imagesRef.current[idx];

      if (!img || !img.complete || img.naturalWidth === 0) return;

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      const bgThemeColor = theme === 'dark' ? '#050508' : '#fffcf7';

      // Clear canvas with theme background
      ctx.fillStyle = bgThemeColor;
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      // Fit image aspect ratio (COVER + 8% EXTRA CROP TO PUSH OUT ALL WATERMARKS & CORNER LOGOS)
      const imgWidth = img.naturalWidth;
      const imgHeight = img.naturalHeight;
      const imgAspect = imgWidth / imgHeight;
      const canvasAspect = canvasWidth / canvasHeight;

      let drawWidth = canvasWidth;
      let drawHeight = canvasHeight;

      if (canvasAspect > imgAspect) {
        drawWidth = canvasWidth;
        drawHeight = canvasWidth / imgAspect;
      } else {
        drawHeight = canvasHeight;
        drawWidth = drawHeight * imgAspect;
      }

      // 1.08x Scale factor crops off the outer 4% edges of all 4 corners where watermarks hide
      const scaleFactor = 1.08;
      drawWidth = drawWidth * scaleFactor;
      drawHeight = drawHeight * scaleFactor;

      const offsetX = (canvasWidth - drawWidth) / 2;
      const offsetY = (canvasHeight - drawHeight) / 2;

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

      // HEAVY RADIAL CORNER MASKS ON ALL 4 CORNERS FOR 100% CLEAN WATERMARK REMOVAL
      const maskRadius = Math.max(canvasWidth, canvasHeight) * 0.25;

      const corners = [
        { x: canvasWidth, y: canvasHeight }, // Bottom-Right
        { x: 0, y: canvasHeight },          // Bottom-Left
        { x: canvasWidth, y: 0 },           // Top-Right
        { x: 0, y: 0 },                      // Top-Left
      ];

      corners.forEach((corner) => {
        const maskGrad = ctx.createRadialGradient(
          corner.x,
          corner.y,
          0,
          corner.x,
          corner.y,
          maskRadius
        );

        maskGrad.addColorStop(0, bgThemeColor);
        maskGrad.addColorStop(0.5, bgThemeColor);
        maskGrad.addColorStop(1, 'transparent');

        ctx.fillStyle = maskGrad;
        ctx.beginPath();
        ctx.arc(corner.x, corner.y, maskRadius, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const updateScrollTarget = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;

      const scrollProgress = Math.min(1, Math.max(0, scrollTop / maxScroll));
      targetFrameRef.current = scrollProgress * (TOTAL_FRAMES - 1);
    };

    const animLoop = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.01) {
        currentFrameRef.current += diff * 0.25;
        renderFrame(currentFrameRef.current);
      } else if (currentFrameRef.current !== targetFrameRef.current) {
        currentFrameRef.current = targetFrameRef.current;
        renderFrame(currentFrameRef.current);
      }

      animFrameIdRef.current = requestAnimationFrame(animLoop);
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('scroll', updateScrollTarget, { passive: true });

    resizeCanvas();
    updateScrollTarget();
    animFrameIdRef.current = requestAnimationFrame(animLoop);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', updateScrollTarget);
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [theme]);

  return (
    <div className={`${theme} relative min-h-screen font-sans overflow-x-hidden transition-colors duration-500 ${
      theme === 'dark' ? 'bg-[#050508] text-slate-100' : 'bg-[#fffcf7] text-slate-900'
    }`}>
      {/* 1. BACKGROUND LAYER: Fixed Sticky 240-Frame Canvas Scrub */}
      <div className={`fixed inset-0 w-screen h-screen overflow-hidden z-0 pointer-events-none ${
        theme === 'dark' ? 'bg-[#050508]' : 'bg-[#fffcf7]'
      }`}>
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      {/* 2. MIDDLE LAYER: Light Translucent Overlays for High Background Visibility */}
      <div className={`fixed inset-0 w-screen h-screen pointer-events-none z-10 transition-colors duration-500 ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-[#050508]/50 via-transparent to-[#050508]/65'
          : 'bg-gradient-to-b from-[#fffcf7]/60 via-transparent to-[#fffcf7]/70'
      }`} />

      {/* 3. TOP LAYER: Website Sections & Dedicated Menu Page */}
      <div className="relative z-20 flex flex-col min-h-screen">
        <Navbar
          onOpenOrderModal={() => setIsOrderModalOpen(true)}
          onOpenMenuPage={() => {
            setCurrentPage('menu');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenHomePage={() => {
            setCurrentPage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          theme={theme}
          onToggleTheme={toggleTheme}
          currentPage={currentPage}
        />

        {currentPage === 'menu' ? (
          <MenuPage
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenOrderModal={() => setIsOrderModalOpen(true)}
          />
        ) : (
          <main className="flex-1 space-y-12">
            <HeroSection onOpenOrderModal={() => setIsOrderModalOpen(true)} />
            <MenuSection
              onOpenOrderModal={() => setIsOrderModalOpen(true)}
              onOpenFullMenuPage={() => {
                setCurrentPage('menu');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <TestimonialsSection />
            <ReservationSection />
            <ContactSection />
          </main>
        )}

        <FooterSection />
      </div>

      {/* Floating WhatsApp Widget */}
      <FloatingWhatsApp />

      {/* Interactive Order Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />
    </div>
  );
}
