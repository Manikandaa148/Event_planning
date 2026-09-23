import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg" | "fluid";
}

export function Container({ children, className, size = "default" }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto px-4 sm:px-6 md:px-8",
        {
          "max-w-[1440px]": size === "default",
          "max-w-4xl": size === "sm",
          "max-w-[1920px]": size === "lg",
          "max-w-full px-0 sm:px-0 md:px-0": size === "fluid",
        },
        className
      )}
    >
      {children}
    </div>
  );
}
