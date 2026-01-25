'use client';

import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';

interface RootToggleOption {
  title: string;
  description: string;
  url: string;
}

interface RootToggleProps {
  options: RootToggleOption[];
}

export function RootToggle({ options }: RootToggleProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Find the current active option based on pathname
  const currentOption = options.find((option) => pathname.startsWith(option.url)) || options[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-2 px-3 py-2 text-sm rounded-lg border border-fd-border bg-fd-background hover:bg-fd-muted transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <div className="flex flex-col items-start min-w-0 flex-1">
          <span className="font-medium text-fd-foreground truncate w-full">
            {currentOption.title}
          </span>
          <span className="text-xs text-fd-muted-foreground truncate w-full">
            {currentOption.description}
          </span>
        </div>
        <ChevronDown
          className={`h-4 w-4 text-fd-muted-foreground flex-shrink-0 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-fd-background border border-fd-border rounded-lg shadow-lg z-50 overflow-hidden">
          {options.map((option) => {
            const isActive = pathname.startsWith(option.url);
            return (
              <Link
                key={option.url}
                href={option.url}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-sm transition-colors ${
                  isActive
                    ? 'bg-fd-muted text-fd-foreground font-medium'
                    : 'text-fd-foreground hover:bg-fd-muted'
                }`}
              >
                <div className="flex flex-col">
                  <span className="font-medium">{option.title}</span>
                  <span className="text-xs text-fd-muted-foreground">{option.description}</span>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
