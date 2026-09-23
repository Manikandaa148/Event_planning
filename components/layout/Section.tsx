import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  bg?: "default" | "surface" | "dark" | "transparent";
  containerSize?: "default" | "sm" | "lg" | "fluid";
  padding?: "default" | "none" | "y-only" | "large";
}

export function Section({
  children,
  className,
  containerClassName,
  id,
  bg = "default",
  containerSize = "default",
  padding = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative",
        {
          "bg-background": bg === "default",
          "bg-surface": bg === "surface",
          "bg-text text-background": bg === "dark",
          "bg-transparent": bg === "transparent",
          
          "py-16 md:py-24 lg:py-32": padding === "default",
          "py-24 md:py-32 lg:py-48": padding === "large",
          "py-16 md:py-24 lg:py-32 px-0": padding === "y-only",
          "p-0": padding === "none",
        },
        className
      )}
    >
      <Container size={containerSize} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
