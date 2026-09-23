import Link from "next/link";
import { businessConfig } from "@/config/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text text-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-serif text-3xl font-bold mb-6 block">
              {businessConfig.brandName}
            </Link>
            <p className="text-muted/80 text-sm leading-relaxed max-w-sm">
              {businessConfig.shortDescription}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-accent">Explore</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-sm hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-sm hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-sm hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="text-sm hover:text-accent transition-colors">Portfolio</Link></li>
              <li><Link href="/photography" className="text-sm hover:text-accent transition-colors">Photography</Link></li>
              <li><Link href="/faq" className="text-sm hover:text-accent transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-accent">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href={`tel:${businessConfig.contact.phone.replace(/\D/g, "")}`} className="hover:text-accent transition-colors">
                  {businessConfig.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${businessConfig.contact.email}`} className="hover:text-accent transition-colors">
                  {businessConfig.contact.email}
                </a>
              </li>
              <li className="text-muted/80 leading-relaxed max-w-xs">
                {businessConfig.contact.address}
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-accent">Follow Us</h4>
            <ul className="space-y-4">
              <li>
                <a href={businessConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-accent transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href={businessConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-accent transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href={businessConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-accent transition-colors">
                  YouTube
                </a>
              </li>
              <li>
                <a href={businessConfig.social.pinterest} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-accent transition-colors">
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-muted/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted/60">
          <p>&copy; {currentYear} {businessConfig.brandName}. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-background transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-background transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
