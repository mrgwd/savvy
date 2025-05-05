"use client";

import { useEffect, useRef } from "react";

export default function CursorEffect() {
  const smallCursorRef = useRef<HTMLDivElement>(null);
  const largeCursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const smallCursor = smallCursorRef.current;
    const largeCursor = largeCursorRef.current;

    if (!smallCursor || !largeCursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let smallCursorX = 0;
    let smallCursorY = 0;
    let largeCursorX = 0;
    let largeCursorY = 0;

    // Speed factors (lower = smoother/slower)
    const smallCursorSpeed = 0.2;
    const largeCursorSpeed = 0.1;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Show cursors when mouse moves
      smallCursor.style.opacity = "1";
      largeCursor.style.opacity = "0.5";
    };

    const handleMouseLeave = () => {
      // Hide cursors when mouse leaves the window
      smallCursor.style.opacity = "0";
      largeCursor.style.opacity = "0";
    };

    // Animation loop for smooth cursor movement
    const animateCursor = () => {
      // Calculate distance between current position and target (mouse) position
      const smallDx = mouseX - smallCursorX;
      const smallDy = mouseY - smallCursorY;
      const largeDx = mouseX - largeCursorX;
      const largeDy = mouseY - largeCursorY;

      // Update cursor positions with easing
      smallCursorX += smallDx * smallCursorSpeed;
      smallCursorY += smallDy * smallCursorSpeed;
      largeCursorX += largeDx * largeCursorSpeed;
      largeCursorY += largeDy * largeCursorSpeed;

      // Apply the new positions
      smallCursor.style.transform = `translate3d(${smallCursorX - 6}px, ${
        smallCursorY - 6
      }px, 0)`;
      largeCursor.style.transform = `translate3d(${largeCursorX - 64}px, ${
        largeCursorY - 64
      }px, 0)`;

      // Continue the animation loop
      requestAnimationFrame(animateCursor);
    };

    // Start the animation
    requestAnimationFrame(animateCursor);

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    // Clean up
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={smallCursorRef}
        className="fixed top-0 left-0 size-2 rounded-full bg-primary pointer-events-none z-50 opacity-0 hidden md:block"
        style={{ transition: "opacity 0.3s ease" }}
      />
      <div
        ref={largeCursorRef}
        className="fixed top-0 left-0 size-32 rounded-full bg-primary/30 blur-3xl pointer-events-none z-40 opacity-0 hidden md:block"
        style={{ transition: "opacity 0.3s ease" }}
      />
    </>
  );
}
