"use client";

import { useEffect, useRef, useCallback } from "react";

const FRAME_COUNT = 122;

function getFrameSrc(index: number): string {
  const padded = String(index).padStart(3, "0");
  return `/frames/${padded}.jpg`;
}

interface ScrollSequenceProps {
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
}

export default function ScrollSequence({ scrollContainerRef }: ScrollSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number>(0);
  const loadedCountRef = useRef(0);

  // Draw a specific frame to the canvas
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[frameIndex];
    if (!img || !img.complete || !img.naturalWidth) return;

    // Set canvas internal size to match image
    if (canvas.width !== img.naturalWidth || canvas.height !== img.naturalHeight) {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);
  }, []);

  // Preload all frames
  useEffect(() => {
    const images: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      img.onload = () => {
        loadedCountRef.current++;
        // Draw first frame as soon as it loads
        if (i === 0) {
          drawFrame(0);
        }
      };
      images.push(img);
    }

    imagesRef.current = images;
  }, [drawFrame]);

  // Scroll-linked frame update
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        const scrollTop = window.scrollY - container.offsetTop;
        const scrollHeight = container.scrollHeight - window.innerHeight;
        const scrollFraction = Math.max(0, Math.min(1, scrollTop / scrollHeight));
        const frameIndex = Math.min(
          FRAME_COUNT - 1,
          Math.floor(scrollFraction * FRAME_COUNT)
        );

        if (frameIndex !== currentFrameRef.current) {
          currentFrameRef.current = frameIndex;
          drawFrame(frameIndex);
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [scrollContainerRef, drawFrame]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full max-w-4xl h-auto mx-auto"
      style={{ imageRendering: "auto" }}
    />
  );
}
