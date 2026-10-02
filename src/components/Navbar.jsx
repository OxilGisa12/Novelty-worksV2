import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Reach Us', href: '/reach-us' },
  { label: 'Insights', href: '/insights' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const currentPath = window.location.pathname;

  const isActive = (href) =>
    href === '/'
      ? currentPath === '/'
      : currentPath.startsWith(href);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white">
        <div className="h-16 px-5 sm:px-6 md:px-12 flex items-center">

          {/* Logo */}
          <a
            href="/"
            onClick={closeMenu}
            className="flex items-center group shrink-0"
          >
            <span className="text-xs font-black tracking-widest text-slate-800 uppercase transition-all duration-300 group-hover:tracking-[0.2em]">
              Novelty
            </span>

            <span className="text-xs font-black tracking-widest text-[#16A34A] uppercase transition-all duration-300 group-hover:tracking-[0.2em]">
              Works LTD
            </span>
          </a>

          {/* Desktop right side */}
          <div className="ml-auto flex items-center">

            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center gap-1">

              {navItems.map((item) => {
                const active = isActive(item.href);

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`
                      relative px-4 py-2 rounded-full text-sm
                      transition-all duration-200
                      ${
                        active
                          ? 'bg-green-50 text-[#16A34A] font-semibold'
                          : 'text-slate-600 font-medium hover:text-slate-900 hover:bg-gray-50'
                      }
                    `}
                  >
                    {item.label}

                    {/* Active green indicator */}
                    <span
                      className={`
                        absolute left-1/2 -translate-x-1/2 bottom-0.5
                        h-0.5 bg-[#16A34A] rounded-full
                        transition-all duration-300 ease-out
                        ${
                          active
                            ? 'w-5 opacity-100'
                            : 'w-0 opacity-0'
                        }
                      `}
                    />
                  </a>
                );
              })}

            </nav>

            {/* Desktop Get Started */}
            <div className="hidden lg:flex items-center ml-7">
              <a
                href="/reach-us"
                className="
                  bg-green-50
                  hover:bg-green-100
                  text-[#16A34A]
                  text-sm font-semibold
                  px-5 py-2.5
                  rounded-xl
                  border border-green-100
                  transition-all duration-200
                "
              >
                Get Started
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="
                lg:hidden
                ml-4
                w-10 h-10
                flex items-center justify-center
                text-slate-700
                hover:text-[#16A34A]
                hover:bg-green-50
                rounded-lg
                transition-all duration-200
              "
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <X size={22} strokeWidth={1.8} />
              ) : (
                <Menu size={22} strokeWidth={1.8} />
              )}
            </button>

          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`
            lg:hidden
            overflow-hidden
            border-t border-slate-100
            bg-white
            transition-all duration-300 ease-out
            ${
              menuOpen
                ? 'max-h-[500px] opacity-100'
                : 'max-h-0 opacity-0'
            }
          `}
        >
          <nav className="px-5 sm:px-6 py-4">

            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className={`
                    relative flex items-center
                    min-h-[48px]
                    px-4
                    rounded-lg
                    text-sm
                    transition-all duration-200
                    ${
                      active
                        ? 'bg-green-50 text-[#16A34A] font-semibold'
                        : 'text-slate-600 font-medium hover:bg-gray-50 hover:text-slate-900'
                    }
                  `}
                >
                  {item.label}

                  {active && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-[#16A34A] rounded-full" />
                  )}
                </a>
              );
            })}

            {/* Mobile Get Started */}
            <a
              href="/reach-us"
              onClick={closeMenu}
              className="
                flex items-center justify-center
                mt-3
                min-h-[46px]
                bg-[#16A34A]
                hover:bg-green-700
                text-white
                text-sm font-semibold
                rounded-xl
                transition-colors duration-200
              "
            >
              Get Started
            </a>

          </nav>
        </div>
      </header>

      {/* Space reserved for fixed navbar */}
      <div className="h-16" />
    </>
  );
}