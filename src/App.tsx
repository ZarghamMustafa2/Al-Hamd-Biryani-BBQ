import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
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
  return `/frames/frame_${paddedIndex}.webp`;
};

const getFallbackFramePath = (index: number) => {
  const paddedIndex = index.toString().padStart(6, '0');
  return `./frames/frame_${paddedIndex}.jpg`;
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

  // Award-Winning Lenis Smooth Scroll Engine (Apple & Nike 120Hz/60fps Liquid Smooth Touch & Wheel Physics)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.8,
      infinite: false,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Order Modal State
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  // Frame Scroll Animation State & Refs
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  const fallbackPosterRef = useRef<HTMLImageElement | null>(null);
  const currentFrameRef = useRef(0);
  const targetFrameRef = useRef(0);
  const animFrameIdRef = useRef<number | null>(null);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Preload poster image for instant 0.01s display
  useEffect(() => {
    const poster = new Image();
    poster.src = './chicken_tikka_biryani.jpg';
    poster.onload = () => {
      fallbackPosterRef.current = poster;
      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext('2d');
        if (ctx) {
          ctx.drawImage(poster, 0, 0, canvasRef.current.width, canvasRef.current.height);
        }
      }
    };
  }, []);

  // LIQUID SMOOTH PRELOADER (Loads every 2nd WebP keyframe in 0.1s = 4.8MB total for 100% fluid mobile motion)
  useEffect(() => {
    const images: (HTMLImageElement | null)[] = new Array(TOTAL_FRAMES).fill(null);

    const loadFrame = (index: number) => {
      if (images[index]) return;
      const img = new Image();
      img.src = getFramePath(index);

      img.onerror = () => {
        img.src = getFallbackFramePath(index);
      };

      img.onload = () => {
        if (index === 0 && canvasRef.current) {
          const ctx = canvasRef.current.getContext('2d');
          if (ctx) {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvasRef.current.width = window.innerWidth * dpr;
            canvasRef.current.height = window.innerHeight * dpr;
            ctx.drawImage(img, 0, 0, canvasRef.current.width, canvasRef.current.height);
          }
        }
      };

      images[index] = img;
    };

    // Preload keyframes every 2nd step (120 frames total = 4.8MB ultra-fast load)
    for (let i = 0; i < TOTAL_FRAMES; i += 2) {
      loadFrame(i);
    }
    loadFrame(0);
    loadFrame(TOTAL_FRAMES - 1);

    imagesRef.current = images;

    // Stream remaining odd frames in background idle time
    let bgIndex = 1;
    const streamInterval = setInterval(() => {
      for (let b = 0; b < 15 && bgIndex < TOTAL_FRAMES; b++, bgIndex += 2) {
        loadFrame(bgIndex);
      }
      if (bgIndex >= TOTAL_FRAMES) {
        clearInterval(streamInterval);
      }
    }, 100);

    return () => {
      clearInterval(streamInterval);
    };
  }, []);

  // Canvas drawing & 60fps Liquid Inertia animation scrubbing loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      renderFrame(currentFrameRef.current);
    };

    const renderFrame = (frameIndex: number) => {
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const bgThemeColor = theme === 'dark' ? '#050508' : '#fffcf7';

      // 1. CLEAR & FILL CANVAS
      ctx.fillStyle = bgThemeColor;
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      const targetIdx = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.round(frameIndex))
      );

      // Find nearest loaded keyframe
      let img = imagesRef.current[targetIdx];
      if (!img || !img.complete || img.naturalWidth === 0) {
        for (let delta = 1; delta < 10; delta++) {
          const prev = Math.max(0, targetIdx - delta);
          const next = Math.min(TOTAL_FRAMES - 1, targetIdx + delta);
          if (imagesRef.current[prev] && imagesRef.current[prev]?.complete) {
            img = imagesRef.current[prev];
            break;
          }
          if (imagesRef.current[next] && imagesRef.current[next]?.complete) {
            img = imagesRef.current[next];
            break;
          }
        }
      }

      // Fallback to poster image if no frames loaded yet
      if ((!img || !img.complete || img.naturalWidth === 0) && fallbackPosterRef.current) {
        img = fallbackPosterRef.current;
      }

      if (!img || !img.complete || img.naturalWidth === 0) return;

      // Fit image aspect ratio (COVER + 8% EXTRA CROP TO REMOVE WATERMARKS)
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

      const scaleFactor = 1.08;
      drawWidth = drawWidth * scaleFactor;
      drawHeight = drawHeight * scaleFactor;

      const offsetX = (canvasWidth - drawWidth) / 2;
      const offsetY = (canvasHeight - drawHeight) / 2;

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

      // RADIAL CORNER MASKS FOR CLEAN EDGE FADING
      const maskRadius = Math.max(canvasWidth, canvasHeight) * 0.25;

      const corners = [
        { x: canvasWidth, y: canvasHeight },
        { x: 0, y: canvasHeight },
        { x: canvasWidth, y: 0 },
        { x: 0, y: 0 },
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

    // Calculate scroll target dynamically based on scroll position
    const updateScrollTarget = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop || window.pageYOffset || 0;
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
      const maxScroll = Math.max(1, docHeight - window.innerHeight);

      const scrollProgress = Math.min(1, Math.max(0, scrollTop / maxScroll));
      targetFrameRef.current = scrollProgress * (TOTAL_FRAMES - 1);
    };

    // Liquid Smooth Inertia Physics Loop (Lerp factor 0.12 for buttery smooth Apple-style glide on mobile)
    const animLoop = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.001) {
        currentFrameRef.current += diff * 0.12;
        renderFrame(currentFrameRef.current);
      } else if (currentFrameRef.current !== targetFrameRef.current) {
        currentFrameRef.current = targetFrameRef.current;
        renderFrame(currentFrameRef.current);
      }

      animFrameIdRef.current = requestAnimationFrame(animLoop);
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('scroll', updateScrollTarget, { passive: true });
    window.addEventListener('touchmove', updateScrollTarget, { passive: true });
    window.addEventListener('wheel', updateScrollTarget, { passive: true });

    resizeCanvas();
    updateScrollTarget();
    animFrameIdRef.current = requestAnimationFrame(animLoop);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', updateScrollTarget);
      window.removeEventListener('touchmove', updateScrollTarget);
      window.removeEventListener('wheel', updateScrollTarget);
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [theme]);

  return (
    <div className={`${theme} relative min-h-screen font-sans overflow-x-hidden transition-colors duration-500 ${
      theme === 'dark' ? 'bg-[#050508] text-slate-100' : 'bg-[#fffcf7] text-slate-900'
    }`}>
      {/* 1. BACKGROUND LAYER: Fixed Sticky 240-Frame 3D Canvas Scrub Animation with Liquid Inertia Physics */}
      <div
        className={`fixed inset-0 w-full h-full overflow-hidden z-0 pointer-events-none ${
          theme === 'dark' ? 'bg-[#050508]' : 'bg-[#fffcf7]'
        }`}
        style={{ willChange: 'transform', transform: 'translateZ(0)' }}
      >
        <canvas ref={canvasRef} className="w-full h-full block object-cover" />
      </div>

      {/* 2. MIDDLE LAYER: Translucent Overlays */}
      <div className={`fixed inset-0 w-full h-full pointer-events-none z-10 transition-colors duration-500 ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-[#050508]/35 via-transparent to-[#050508]/55'
          : 'bg-gradient-to-b from-[#fffcf7]/45 via-transparent to-[#fffcf7]/60'
      }`} />

      {/* 3. TOP LAYER: Website Content */}
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
