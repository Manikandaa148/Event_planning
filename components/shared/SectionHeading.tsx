import { cn } from "@/lib/utils";
import { FadeUp } from "@/components/animations/FadeUp";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({ title, subtitle, alignment = "center", className }: SectionHeadingProps) {
  return (
    <FadeUp delay={0.1} className={cn("mb-16 md:mb-24", className, {
      "text-left": alignment === "left",
      "text-center": alignment === "center",
      "text-right": alignment === "right",
    })}>
      {subtitle && (
        <span className="block text-sm md:text-base font-medium tracking-[0.2em] uppercase text-accent mb-4">
          {subtitle}
        </span>
      )}
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-text leading-tight text-balance">
        {title}
      </h2>
    </FadeUp>
  );
}
