'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="w-full py-2 px-5">
        <div>
          <h1 className="font-bold text-lg">logo</h1>
          <button
            className="space-y-1 absolute top-4 right-5 z-999"
            onClick={handleClick}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
          >
            <span
              className={cn(
                'w-4 h-0.5 block bg-black transition-all duration-300',
                isOpen && 'rotate-45 translate-y-1.5 bg-white'
              )}
            ></span>
            <span
              className={cn('w-4 h-0.5 block bg-black', isOpen && 'opacity-0')}
            ></span>
            <span
              className={cn(
                'w-4 h-0.5 block bg-black',
                isOpen && '-rotate-45 -translate-y-1.5 bg-white'
              )}
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            ></span>
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={cn(
          'bg-[#999] fixed inset-0 z-9 transition-all duration-500',
          isOpen ? 'opacity-80' : 'opacity-0'
        )}
        aria-hidden={!isOpen}
      ></div>

      <div
        className={cn(
          'fixed inset-0 bg-black z-99 transition-transform duration-500',
          isOpen ? 'translate-x-[20vw]' : 'translate-x-full'
        )}
      >
        <nav className="absolute top-1/2 -translate-y-1/2 left-10">
          <ul className="space-y-4 *:text-white">
            <li>
              <Link href="/">home</Link>
            </li>
            <li>
              <Link href="/">about</Link>
            </li>
            <li>
              <Link href="/">service</Link>
            </li>
            <li>
              <Link href="/">contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
