import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import "./Header.css"; 

interface HeaderProps {
  onSearchToggle?: () => void;
}

export function Header({ onSearchToggle }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { label: "SONGS", href: "/songs" },
    { label: "POEMS", href: "/poems" },
    { label: "REFLECTIONS", href: "/reflections" },
    { label: "PEOPLE", href: "/people" },
    { label: "FILMS", href: "/films" },
  ];

  return (
    <header className="sticky top-0 bg-white/90 backdrop-blur-sm z-50">
      <div className="gradient-bg mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3-column layout: [logo | centered nav | actions] */}
        <div className="grid grid-cols-[auto_1fr_auto] items-center  px-6">
          <div className="grid grid-cols-[auto_1fr_auto] gap-x-20">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center h-full">
            <img
              src="/logo.svg"
              alt="Logo"
              className="h-12 md:h-[100px] w-auto object-contain"
            />
          </Link>

          {/* Center: Desktop Navigation */}
          <nav className="hidden md:flex justify-center items-center space-x-10">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-gray-700 hover:text-gray-900 text-sm font-medium tracking-wide transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center justify-end gap-4">
            <Link
              to="/about"
              className="hidden md:block text-gray-800 hover:text-gray-900 text-sm font-medium tracking-wide"
            >
              ABOUT
            </Link>

            <button
              onClick={onSearchToggle}
              aria-label="Search"
              className="p-2 text-gray-700 hover:text-gray-900"
            >
              <Search size={22} />
            </button>

            <Link to="/radio" className="p-2">
              <img src="/radio.svg" alt="Radio" className="h-8 md:h-[55px] w-auto" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className="md:hidden p-2 text-gray-700 hover:text-gray-900"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-full w-80 bg-black text-white z-50 md:hidden transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <img src="/logo.svg" alt="Logo" className="h-10 w-auto" />
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
            className="p-2"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="p-4 space-y-1">
          {navigationItems.map((item, index) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "block px-4 py-3 rounded-lg text-sm font-medium hover:bg-white/10 transition",
                isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
              )}
              style={{ transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms" }}
            >
              {item.label}
            </Link>
          ))}

          <Link
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className="block px-4 py-3 rounded-lg text-sm font-medium hover:bg-white/10 transition"
          >
            ABOUT
          </Link>
        </nav>
      </aside>
    </header>
  );
}
