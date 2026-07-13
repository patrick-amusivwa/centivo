"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import Button from "@mui/material/Button";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function HeroGSAP() {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useGSAP(
    () => {
      const heroElement = heroRef.current;

      // Initial States
      gsap.set(".big-results .letter", { y: 80, opacity: 0 });
      gsap.set(".subline-hero", { opacity: 0, y: 20 });

      // ── Simplex 2D Noise (self-contained) ──
      const _F2 = 0.5 * (Math.sqrt(3) - 1);
      const _G2 = (3 - Math.sqrt(3)) / 6;
      const _g2 = [[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]];
      const _p256 = Array.from({ length: 256 }, (_, i) => i);
      for (let i = 255; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [_p256[i], _p256[j]] = [_p256[j], _p256[i]];
      }
      const _perm = new Uint8Array(512).map((_, i) => _p256[i & 255]);

      const noise2D = (x: number, y: number): number => {
        const s = (x + y) * _F2;
        const i = Math.floor(x + s), j = Math.floor(y + s);
        const t = (i + j) * _G2;
        const x0 = x - (i - t), y0 = y - (j - t);
        const i1 = x0 > y0 ? 1 : 0, j1 = x0 > y0 ? 0 : 1;
        const x1 = x0 - i1 + _G2, y1 = y0 - j1 + _G2;
        const x2 = x0 - 1 + 2 * _G2, y2 = y0 - 1 + 2 * _G2;
        const ii = i & 255, jj = j & 255;
        const gi0 = _perm[ii + _perm[jj]] % 12;
        const gi1 = _perm[ii + i1 + _perm[jj + j1]] % 12;
        const gi2 = _perm[ii + 1 + _perm[jj + 1]] % 12;
        let n0 = 0, n1 = 0, n2 = 0;
        let t0 = 0.5 - x0 * x0 - y0 * y0;
        if (t0 >= 0) { t0 *= t0; n0 = t0 * t0 * (_g2[gi0][0] * x0 + _g2[gi0][1] * y0); }
        let t1 = 0.5 - x1 * x1 - y1 * y1;
        if (t1 >= 0) { t1 *= t1; n1 = t1 * t1 * (_g2[gi1][0] * x1 + _g2[gi1][1] * y1); }
        let t2 = 0.5 - x2 * x2 - y2 * y2;
        if (t2 >= 0) { t2 *= t2; n2 = t2 * t2 * (_g2[gi2][0] * x2 + _g2[gi2][1] * y2); }
        return 70 * (n0 + n1 + n2);
      };

      // ── Canvas setup ──
      const c = canvasRef.current;
      const ctx = c?.getContext("2d");
      let animationFrameId: number;
      let handleResizeCanvas: () => void;
      let handleGlobalMouseMove: (e: MouseEvent) => void;
      let handleGlobalMouseLeave: () => void;

      if (c && ctx) {
        let W = (c.width  = window.innerWidth);
        let H = (c.height = window.innerHeight);

        let mouseX = W / 2, mouseY = H / 2, mouseActive = false;

        // ── Particle pool ──
        type Pt = { x: number; y: number; px: number; py: number; vx: number; vy: number; life: number; maxLife: number; hue: number; };

        const COUNT = isMobile ? 60 : 150; // Reduce particles on mobile
        const SCALE = 0.003;
        let tick = 0;

        const spawnPt = (): Pt => ({
          x: Math.random() * W,  y: Math.random() * H,
          px: 0, py: 0,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          life: Math.random() * 300,        // stagger births
          maxLife: 300 + Math.random() * 500,
          hue: 205 + Math.random() * 22,    // 205-227 = Centivo blue range
        });

        const pts: Pt[] = Array.from({ length: COUNT }, spawnPt);

        const frame = () => {
          // Fade trail — lighter on mobile
          ctx.globalCompositeOperation = "source-over";
          ctx.fillStyle = isMobile ? "rgba(244, 248, 252, 0.2)" : "rgba(244, 248, 252, 0.15)";
          ctx.fillRect(0, 0, W, H);

          ctx.lineWidth = isMobile ? 0.7 : 1.1; // Thinner lines on mobile

          for (const p of pts) {
            // Noise-driven angle — slightly slower on mobile
            const nx = p.x * SCALE, ny = p.y * SCALE, nt = tick * (isMobile ? 0.0001 : 0.00016);
            const angle = noise2D(nx, ny + nt) * Math.PI * 3.5;

            // Smooth velocity toward flow field direction
            p.vx = p.vx * 0.90 + Math.cos(angle) * 1.5 * 0.10;
            p.vy = p.vy * 0.90 + Math.sin(angle) * 1.5 * 0.10;

            // Mouse pull — only on non-mobile (touch doesn't use this)
            if (!isMobile && mouseActive) {
              const dx = mouseX - p.x, dy = mouseY - p.y;
              const d2 = dx * dx + dy * dy;
              const R = 220;
              if (d2 < R * R) {
                const d = Math.sqrt(d2);
                const f = (1 - d / R) * 1.4;
                p.vx += (dx / d) * f;
                p.vy += (dy / d) * f;
              }
            }

            p.px = p.x; p.py = p.y;
            p.x += p.vx; p.y += p.vy;
            p.life++;

            if (p.x < -8 || p.x > W + 8 || p.y < -8 || p.y > H + 8 || p.life > p.maxLife) {
              Object.assign(p, spawnPt());
              continue;
            }

            // Life-based alpha — lower on mobile
            const lr = p.life / p.maxLife;
            const alpha = Math.sin(lr * Math.PI) * (isMobile ? 0.25 : 0.42);

            ctx.beginPath();
            ctx.strokeStyle = `hsla(${p.hue}, 75%, 52%, ${alpha})`;
            ctx.moveTo(p.px, p.py);
            ctx.lineTo(p.x, p.y);
            ctx.stroke();
          }

          tick++;
          animationFrameId = requestAnimationFrame(frame);
        };

        frame();

        handleResizeCanvas = () => {
          W = c.width  = window.innerWidth;
          H = c.height = window.innerHeight;
        };
        handleGlobalMouseMove = (e: MouseEvent) => {
          mouseX = e.clientX; mouseY = e.clientY; mouseActive = true;
        };
        handleGlobalMouseLeave = () => { mouseActive = false; };

        window.addEventListener("resize",    handleResizeCanvas);
        if (!isMobile) {
          window.addEventListener("mousemove", handleGlobalMouseMove);
          window.addEventListener("mouseleave", handleGlobalMouseLeave);
        }
      }

      // Set Cards — hidden below, will fly up to position
      cardsRef.current.forEach((card) => {
        if (card) {
          const rot = parseFloat(card.dataset.rot || "0");
          card.dataset.restRot = rot.toString();
          gsap.set(card, {
            y: 600,
            scale: 0.6,
            rotation: rot + (Math.random() - 0.5) * 50,
            opacity: 0,
            transformOrigin: "bottom center",
          });
        }
      });

      // Intro Timeline
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        // 1. Title words reveal upward
        .fromTo(
          ".gsap-title .word > span",
          { y: "120%", opacity: 0, rotationZ: 4 },
          { y: "0%", opacity: 1, rotationZ: 0, duration: 1.1, stagger: 0.09, ease: "power4.out" },
          0.1
        )
        // 2. Subline fades in
        .to(".subline-hero", { opacity: 1, y: 0, duration: 0.6 }, 0.7)
        // 3. Cards fly up from below — dealt from center outward like a card spread
        .to(
          cardsRef.current.filter(Boolean),
          {
            y: 0,
            scale: 1,
            opacity: 1,
            rotation: (_i: number, el: HTMLElement) => parseFloat(el.dataset.restRot || "0"),
            duration: 1.0,
            stagger: { each: 0.08, from: "center" },
            ease: "expo.out",
          },
          0.85
        );

      // ── Mouse parallax — uses GSAP quickTo so it doesn't conflict with ScrollTrigger x/y
      const quickX: ((v: number) => void)[] = [];
      const quickY: ((v: number) => void)[] = [];
      cardsRef.current.forEach((card) => {
        if (card) {
          quickX.push(gsap.quickTo(card, "xPercent", { duration: 0.6, ease: "power2.out" }));
          quickY.push(gsap.quickTo(card, "yPercent", { duration: 0.6, ease: "power2.out" }));
        }
      });

      const handleMouseMove = (e: MouseEvent) => {
        if (!heroRef.current) return;
        const rect = heroRef.current.getBoundingClientRect();
        const nx = ((e.clientX - rect.left) / rect.width - 0.5);  // -0.5 to 0.5
        const ny = ((e.clientY - rect.top)  / rect.height - 0.5);
        cardsRef.current.forEach((card, i) => {
          if (!card) return;
          const d = parseFloat(card.dataset.depth || "8") * 0.5;
          quickX[i]?.(nx * d);
          quickY[i]?.(ny * d * 0.5);
        });
      };

      const handleMouseLeave = () => {
        cardsRef.current.forEach((_c, i) => {
          quickX[i]?.(0);
          quickY[i]?.(0);
        });
      };

      if (heroElement && !isMobile) {
        heroElement.addEventListener("mousemove", handleMouseMove);
        heroElement.addEventListener("mouseleave", handleMouseLeave);
      }

      // ── Scroll Fan Out — PINNED so it plays while hero stays on screen ──
      // Cards spread into a wide fan as user scrolls
      const fanMoves = [
        { x: -520, y: -80,  rot: -32 },
        { x: -360, y:  30,  rot: -22 },
        { x: -200, y: 120,  rot: -12 },
        { x:  -60, y: 160,  rot:  -4 },
        { x:   60, y: 160,  rot:   6 },
        { x:  200, y: 120,  rot:  16 },
        { x:  360, y:  30,  rot:  26 },
        { x:  520, y: -80,  rot:  36 },
      ];

      const st = ScrollTrigger.create({
        trigger: ".gsap-hero",
        start: "top top",
        end: "+=600",          // 600px of scroll to play out the fan
        pin: true,             // pin the hero while the animation plays
        scrub: isMobile ? 0.8 : 1.2, // Smoother on mobile
        onUpdate: (self) => {
          const p = self.progress;

          // Headline and text fade+move up
          gsap.set(".gsap-title",   { y: -80 * p, opacity: 1 - p * 1.2 });
          gsap.set(".subline-hero", { y: -40 * p, opacity: 1 - p * 2 });
          gsap.set(".hero-buttons", { opacity: 1 - p * 1.5 });

          // Cards fan out dramatically
          cardsRef.current.forEach((card, i) => {
            if (!card) return;
            const m = fanMoves[i];
            const rest = parseFloat(card.dataset.restRot || "0");
            gsap.set(card, {
              x: m.x * p,
              y: m.y * p,
              rotation: rest + m.rot * p,
              scale: 1 + 0.08 * p,   // cards slightly grow as they spread
            });
          });
        },
      });

      // Cleanup
      return () => {
        st.kill();
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        if (handleResizeCanvas) window.removeEventListener("resize", handleResizeCanvas);
        if (!isMobile) {
          if (handleGlobalMouseMove) window.removeEventListener("mousemove", handleGlobalMouseMove);
          if (handleGlobalMouseLeave) window.removeEventListener("mouseleave", handleGlobalMouseLeave);
        }
        if (heroElement && !isMobile) {
          heroElement.removeEventListener("mousemove", handleMouseMove);
          heroElement.removeEventListener("mouseleave", handleMouseLeave);
        }
      };
    },
    { scope: heroRef }
  );

  const handleCardHover = (e: React.MouseEvent, i: number) => {
    const card = cardsRef.current[i];
    if (!card) return;
    gsap.to(card, {
      scale: 1.05,
      zIndex: 20,
      duration: 0.3,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleCardLeave = (i: number) => {
    const card = cardsRef.current[i];
    if (!card) return;
    gsap.to(card, {
      scale: 1,
      zIndex: 10,
      duration: 0.5,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const cardsData = [
    { src: "/imagestouse/CCTV camera installation Surveillance & Monitoring.jpg", rot: -9, depth: 14, cl: "card-1" },
    { src: "/imagestouse/Server maintenance and servicing.jpg", rot: -5, depth: 10, cl: "card-2" },
    { src: "/imagestouse/networking solution lan.jpg", rot: -2, depth: 8, cl: "card-3" },
    { src: "/imagestouse/Websites designed and Hosting.jpg", rot: 3, depth: 12, cl: "card-4" },
    { src: "/imagestouse/Computer Hardware Maintenance laptop desktops.jpg", rot: 0, depth: 6, cl: "card-5" },
    { src: "/imagestouse/Access control and biometric Hardware.jpg", rot: 4, depth: 11, cl: "card-6" },
    { src: "/imagestouse/Internet provision.jpg", rot: 7, depth: 9, cl: "card-7" },
    { src: "/imagestouse/solarinstalltion.jpeg", rot: -4, depth: 13, cl: "card-8" },
  ];

  return (
    <section className="gsap-hero" ref={heroRef}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
      <div className="grain"></div>

      <h1 className="gsap-title z-10 relative">
        <span className="word"><span>Reliable</span></span>&nbsp;
        <span className="word"><span>ICT</span></span>&nbsp;
        <span className="word"><span>Solutions</span></span>
        <br />
        <span className="word"><span>for</span></span>&nbsp;
        <span className="word"><span>Kenya&rsquo;s</span></span>&nbsp;
        <span className="word"><span>Businesses.</span></span>
      </h1>

      <div className="subline-hero mt-6 mb-4 text-center z-10 relative max-w-2xl mx-auto px-4">
        <p className="hero-subline-primary">
          Centivo Technologies delivers enterprise networking, CCTV surveillance, server infrastructure,
          solar installations, web design and IT support to businesses across Kenya.
        </p>
        <p className="hero-subline-secondary">
          Serving clients in Nairobi, Kisumu and beyond. We build, maintain and support the systems your business depends on.
        </p>
      </div>



      <div className="cards-row">
        {cardsData.map((data, i) => (
          <div
            key={i}
            ref={(el) => { cardsRef.current[i] = el; }}
            className={`gsap-card ${data.cl}`}
            data-rot={data.rot}
            data-depth={data.depth}
            onMouseMove={(e) => handleCardHover(e, i)}
            onMouseLeave={() => handleCardLeave(i)}
          >
            <Image src={data.src} alt="Centivo Service" fill className="object-cover" />
          </div>
        ))}
      </div>

      <div className="hero-buttons mt-12 mb-8 flex flex-wrap gap-4 justify-center z-10 relative">
        <Button
          component={Link}
          href="/services"
          className="liquid-glass-btn liquid-glass-btn-primary"
          sx={{
            py: 1.5,
            px: 4,
            fontSize: "1.05rem",
            borderRadius: "999px",
            textTransform: "none",
          }}
        >
          Explore our services
        </Button>
        <Button
          component={Link}
          href="/contact"
          className="liquid-glass-btn liquid-glass-btn-secondary"
          sx={{
            py: 1.5,
            px: 4,
            fontSize: "1.05rem",
            borderRadius: "999px",
            textTransform: "none",
          }}
        >
          Contact us
        </Button>
      </div>
    </section>
  );
}
