import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function SectionTitle({ title, subtitle = "", className = "" }) {
  const titleRef = useRef(null);

  useEffect(() => {
    const letters = titleRef.current.querySelectorAll('.char');

    letters.forEach((letter) => {
      gsap.set(letter, { opacity: 0, y: 10 }); // Estado inicial
    });

 const isMobile = window.innerWidth < 768;

ScrollTrigger.create({
  trigger: titleRef.current,
  start: isMobile ? 'top 95%' : 'top 80%',
  end: 'bottom top',
  onEnter: () => {
    gsap.to(letters, {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      ease: 'power2.out',
      duration: 0.6,
    });
  },
  onLeaveBack: () => {
    gsap.to(letters, {
      opacity: 0,
      y: 10,
      stagger: 0.02,
      ease: 'power2.in',
      duration: 0.3,
    });
  }
});

  }, []);

  const renderTitleWithSpans = () => {
    return title.split('').map((char, i) => (
      <span key={i} className="char inline-block">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <div className={`relative ${className}`}>
      <h2 ref={titleRef} className="text-3xl font-bold text-white mb-4 inline-block">
        {renderTitleWithSpans()}
      </h2>
      {subtitle && (
        <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto mt-4">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;
