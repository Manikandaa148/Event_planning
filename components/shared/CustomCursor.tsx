"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const [hoverState, setHoverState] = useState<"default" | "view" | "pointer">("default");
  const pathname = usePathname();

  const mouseX = useSpring(0, { stiffness: 500, damping: 28, mass: 0.5 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 28, mass: 0.5 });

  useEffect(() => {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);

    if (isTouch) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsTouchDevice(true); // Disable if reduced motion is requested
      return;
    }

    const manageMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", manageMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [mouseX, mouseY]);

  useEffect(() => {
    setHoverState("default");
  }, [pathname]);

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const isClickable = target.closest("a, button, input, textarea, select");
      const isPortfolio = target.closest("[data-cursor='view']");

      if (isPortfolio) {
        setHoverState("view");
      } else if (isClickable) {
        setHoverState("pointer");
      } else {
        setHoverState("default");
      }
    };

    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    
    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <motion.div
      ref={cursorRef}
      className={cn(
        "fixed top-0 left-0 w-4 h-4 rounded-full bg-accent pointer-events-none z-[100] mix-blend-difference flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 text-[9px] font-bold tracking-widest text-background overflow-hidden transition-all duration-300 ease-out will-change-transform",
        hoverState === "view" ? "w-20 h-20 bg-background mix-blend-normal text-text" : "",
        hoverState === "pointer" ? "scale-150" : ""
      )}
      style={{
        x: mouseX,
        y: mouseY,
      }}
    >
      <div className={cn("opacity-0 transition-opacity duration-300", hoverState === "view" && "opacity-100")}>
        VIEW
      </div>
    </motion.div>
  );
}
