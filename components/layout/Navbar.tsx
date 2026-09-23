"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { businessConfig } from "@/config/data";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Photography", href: "/photography" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ease-out",
          isScrolled
            ? "py-4 bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
            : "py-6 bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px] flex items-center justify-between">
          <Link 
            href="/" 
            className="font-serif text-2xl font-bold tracking-tight text-text hover:opacity-80 transition-opacity"
            aria-label="Home"
          >
            {businessConfig.brandName}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center space-x-8">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm font-medium tracking-wide uppercase transition-colors hover:text-accent relative group",
                      pathname === link.href ? "text-accent" : "text-text"
                    )}
                  >
                    {link.label}
                    <span 
                      className={cn(
                        "absolute -bottom-2 left-0 h-[2px] bg-accent transition-all duration-300",
                        pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                      )} 
                    />
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-text text-background text-sm font-medium tracking-wide uppercase rounded-sm hover:bg-accent hover:text-background transition-colors duration-300"
            >
              Let's Plan
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2 -mr-2 text-text"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={28} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[70] bg-background flex flex-col pt-6 px-4 pb-safe-bottom"
          >
            <div className="flex justify-between items-center px-2">
              <Link href="/" className="font-serif text-2xl font-bold text-text">
                {businessConfig.brandName}
              </Link>
              <button
                className="p-2 -mr-2 text-text"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close Menu"
              >
                <X size={32} strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center items-center mt-12 mb-8 overflow-y-auto">
              <ul className="flex flex-col items-center space-y-6 md:space-y-8 w-full">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "font-serif text-4xl md:text-5xl tracking-wide",
                        pathname === link.href ? "text-accent italic" : "text-text"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-12 md:mt-16 text-center space-y-4"
              >
                <Link
                  href="/contact"
                  className="block px-8 py-4 bg-text text-background font-medium tracking-widest uppercase rounded-sm"
                >
                  Plan Your Wedding
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
