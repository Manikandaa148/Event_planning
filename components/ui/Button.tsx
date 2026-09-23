import * as React from "react";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { MoveRight } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  withArrow?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", withArrow = false, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium tracking-wide uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group",
          {
            "bg-text text-background hover:bg-accent": variant === "primary",
            "bg-surface text-text hover:bg-muted/10": variant === "secondary",
            "border border-border text-text hover:border-text": variant === "outline",
            "text-text hover:text-accent": variant === "ghost",
            "h-12 px-8 py-3": size === "default",
            "h-10 px-6 py-2 text-xs": size === "sm",
            "h-14 px-10 py-4 text-base": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      >
        <span className="flex items-center gap-2">
          {children}
          {withArrow && (
            <MoveRight 
              size={18} 
              strokeWidth={1.5} 
              className="transition-transform duration-300 group-hover:translate-x-1" 
            />
          )}
        </span>
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button };
