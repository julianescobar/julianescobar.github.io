import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Hero() {
  const titleRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );
  }, []);

  return (
    <section className="h-screen flex items-center justify-center bg-gray-100">
      <h1 ref={titleRef} className="text-5xl font-bold text-blue-600">
        ¡Hola, soy Julián!
      </h1>
    </section>
  );
}

export default Hero;
