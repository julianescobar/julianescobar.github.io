import { useEffect } from 'react';

function Contact() {
  useEffect(() => {
    const formContainer = document.querySelector('#hubspotForm');
    if (!formContainer || formContainer.hasChildNodes()) return;

    // Evita insertar el script múltiples veces
    if (!document.querySelector('script[src="//js.hsforms.net/forms/embed/v2.js"]')) {
      const script = document.createElement('script');
      script.src = '//js.hsforms.net/forms/embed/v2.js';
      script.async = true;
      script.onload = () => {
        if (window.hbspt) {
          window.hbspt.forms.create({
            region: 'na1',
            portalId: '50162488',
            formId: '1a665ddd-9e49-4197-90ee-c5db80d70760',
            target: '#hubspotForm'
          });
        }
      };
      document.body.appendChild(script);
    } else {
      // Si el script ya existe, crea el form directamente
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '50162488',
          formId: '1a665ddd-9e49-4197-90ee-c5db80d70760',
          target: '#hubspotForm'
        });
      }
    }
  }, []);

  return (
    <section id="contact" className="py-16 px-4 bg-gray-100">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Contacto</h2>
        <div id="hubspotForm" />
      </div>
    </section>
  );
}

export default Contact;
