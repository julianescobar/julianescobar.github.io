import { useState, useRef, useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';

export default function Header({hiddenContact}) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const logoRef = useRef(null);
  const pseudoLogoText = t('pseudologo');

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const letters = logoRef.current?.querySelectorAll('.letter');
      if (letters?.length) {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

        tl.fromTo(
          letters,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            stagger: 0.04,
            ease: 'power2.out',
          }
        ).to(
          letters,
          {
            opacity: 0,
            y: -10,
            duration: 0.2,
            stagger: 0.02,
            ease: 'power2.in',
          },
          '+=0.5'
        );
      }
    }, logoRef);

    return () => ctx.revert();
  }, [pseudoLogoText]);

  return (
    <header className="backdrop-blur-md bg-black/40 text-white px-6 py-4 fixed top-0 left-0 w-full z-50 shadow-lg">
  <div className="max-w-7xl mx-auto flex justify-between items-center relative w-full logo-xs">
    
    {/* Logo animado */}
    <div
      ref={logoRef}
      className="bg-gray-800 font-semibold text-xs sm:text-sm md:text-base lg:text-lg px-4 py-2 rounded-md shadow-md font-mono flex"

    >
      {pseudoLogoText.split('').map((char, index) => (
        <span key={index} className="letter inline-block">
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>

    {/* Menú desktop */}
    <ul className="hidden md:flex space-x-6">
      <li><a href="#about" className="hover:underline">{t('about')}</a></li>
      <li><a href="#projects" className="hover:underline">{t('projects')}</a></li>
      <li><a href="#skills" className="hover:underline">{t('skills')}</a></li>
      {!hiddenContact && (
      <li><a href="#contact" className="hover:underline">{t('contact')}</a></li>
      )}
    </ul>

    {/* Botón hamburguesa en mobile */}
    <button
      className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 z-50"
      onClick={() => setIsOpen(!isOpen)}
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {isOpen ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        )}
      </svg>
    </button>
  </div>

  {/* Menú mobile */}
  {isOpen && (
    <ul className="md:hidden flex flex-col items-start space-y-4 px-6 pt-4 pb-2 bg-black">
      <li><a href="#about" className="hover:underline">{t('about')}</a></li>
      <li><a href="#projects" className="hover:underline">{t('projects')}</a></li>
      <li><a href="#skills" className="hover:underline">{t('skills')}</a></li>
      {!hiddenContact && (
      <li><a href="#contact" className="hover:underline">{t('contact')}</a></li>
      )}
    </ul>
  )}
</header>

  );
}