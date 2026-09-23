import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeUp } from "@/components/animations/FadeUp";
import { Search, PenTool, CalendarCheck, GlassWater } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "DISCOVER",
    desc: "We learn your story, style, expectations and vision.",
    icon: Search,
  },
  {
    num: "02",
    title: "DESIGN",
    desc: "We turn your ideas into a thoughtful wedding experience.",
    icon: PenTool,
  },
  {
    num: "03",
    title: "CREATE",
    desc: "Our team manages planning, vendors, décor and execution.",
    icon: CalendarCheck,
  },
  {
    num: "04",
    title: "CELEBRATE",
    desc: "You enjoy every moment while we take care of the details.",
    icon: GlassWater,
  },
];

export function Process() {
  return (
    <Section>
      <SectionHeading 
        title="HOW WE BRING IT TO LIFE" 
        subtitle="The Process" 
      />

      <div className="relative mt-20 max-w-5xl mx-auto">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-border z-0" />
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative z-10">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <FadeUp key={step.num} delay={i * 0.15} className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-background border border-accent/20 flex items-center justify-center mb-6 relative group overflow-hidden">
                  <div className="absolute inset-0 bg-surface scale-0 rounded-full group-hover:scale-100 transition-transform duration-500 ease-out" />
                  <Icon className="w-8 h-8 text-accent relative z-10 transition-colors" strokeWidth={1.5} />
                </div>
                <h4 className="font-serif text-xl text-text mb-3">
                  <span className="text-muted/50 text-sm mr-2">{step.num}</span>
                  {step.title}
                </h4>
                <p className="text-muted text-sm leading-relaxed max-w-[200px]">
                  {step.desc}
                </p>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
