import React from "react";
import logo from "../assets/logo.png";

const footerLinks = {
  navigation: [
    { name: "Our Story", href: "/#about" },
    { name: "Meet the Chef", href: "/#chef" },
    { name: "Reviews", href: "/#reviews" },
    { name: "Gallery", href: "/gallery" },
  ],
  services: [
    { name: "Catering", href: "/#services" },
    { name: "Custom Cakes", href: "/#services" },
    { name: "Menu & Pricing", href: "/pricing" },
    { name: "Order Online", href: "/shop" },
  ],
  support: [
    { name: "Contact Us", href: "/#contact" },
    { name: "Delivery Info", href: "/#shipping" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
};

const socials = [
  {
    name: "Instagram",
    icon: <i className="fa-brands fa-instagram"></i>,
    url: "https://www.instagram.com/tabbie_bakes",
  },
  {
    name: "WhatsApp",
    icon: <i className="fa-brands fa-whatsapp"></i>,
    url: "https://wa.me/message/JDAMXIQTPNBSO1",
  },
  {
    name: "Tiktok",
    icon: <i className="fa-brands fa-tiktok"></i>,
    url: "https://www.tiktok.com/@tabbie_bakes",
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#0a0a0a] text-[#f2f2f2] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Main Grid Structure */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16">
          {/* Column 1: Brand & Socials */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="/"
              className="inline-block mb-6 transition-transform hover:scale-105"
            >
              <img
                src={logo}
                alt="TabbieBakes"
                className="w-[140px] md:w-[160px] brightness-0 invert"
              />
            </a>
            <p className="text-sm opacity-50 leading-relaxed max-w-xs mb-8">
              Crafting sensational treats from the finest ingredients to make
              your special moments unforgettable.
            </p>
            <div className="flex gap-5">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl opacity-60 hover:opacity-100 hover:text-[#c31644] transition-all"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#c31644] mb-6">
              Navigation
            </h4>
            <ul className="space-y-4 text-sm opacity-60">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:opacity-100 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#c31644] mb-6">
              Services
            </h4>
            <ul className="space-y-4 text-sm opacity-60">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:opacity-100 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Support */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#c31644] mb-6">
              Support
            </h4>
            <ul className="space-y-4 text-sm opacity-60">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:opacity-100 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Credits Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] uppercase tracking-widest opacity-40">
          <p>© {new Date().getFullYear()} TabbieBakes. All rights Reserved.</p>
          <a
            href="https://oyenekanemmanuel.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-100 hover:text-[#c31644] transition-colors"
          >
            Developed by Elite DEV
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
