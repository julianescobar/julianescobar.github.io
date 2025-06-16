import { useState } from 'react';
import SectionTitle from './SectionTitle';
import { useTranslation } from 'react-i18next';

function ContactForm() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validate = () => {
    const newErrors = {};
    if (!formData.firstname.trim()) newErrors.firstname = 'El nombre es obligatorio.';
    if (!formData.lastname.trim()) newErrors.lastname = 'El apellido es obligatorio.';
    if (!formData.email.trim()) {
      newErrors.email = 'El correo es obligatorio.';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'El correo no es válido.';
    }
    if (!formData.message.trim()) newErrors.message = 'El mensaje es obligatorio.';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const portalId = '50162488';
    const formId = '1a665ddd-9e49-4197-90ee-c5db80d70760';
    const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

    const data = {
      fields: [
        { name: 'firstname', value: formData.firstname },
        { name: 'lastname', value: formData.lastname },
        { name: 'email', value: formData.email },
        { name: 'message', value: formData.message }
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title
      }
    };

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          message: ''
        });
        setErrors({});

        // Ocultar mensaje después de 5 segundos
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      } else {
        const errorText = await res.text();
        console.error('HubSpot error:', errorText);
        setErrors({ global: 'Ocurrió un error al enviar el formulario. Intenta nuevamente.' });
      }
    } catch (err) {
      console.error('Error de red:', err);
      setErrors({ global: 'Error de conexión. Revisa tu red e intenta de nuevo.' });
    }
  };

  return (
    <section className="py-16 px-4 bg-dark2 text-white" id="contact">
      <div className="max-w-xl mx-auto">        
        <SectionTitle title={t('contact')} className="text-center mb-6"></SectionTitle>
        {submitted && (
          <div className="text-green-400 text-center mb-4 transition-opacity duration-500">
            ¡Gracias por contactarnos! Te responderemos pronto.
          </div>
        )}

        {errors.global && (
          <div className="text-red-400 text-center mb-4">{errors.global}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="firstname"
              placeholder="Nombre *"
              value={formData.firstname}
              onChange={handleChange}
              className={`w-full p-3 rounded bg-gray-500 text-white placeholder-gray-100/50 ${
                errors.firstname ? 'border border-red-500' : ''
              }`}
            />
            {errors.firstname && <p className="text-red-400 text-sm mt-1">{errors.firstname}</p>}
          </div>

          <div>
            <input
              type="text"
              name="lastname"
              placeholder="Apellido *"
              value={formData.lastname}
              onChange={handleChange}
              className={`w-full p-3 rounded bg-gray-500 text-white placeholder-gray-100/50 ${
                errors.lastname ? 'border border-red-500' : ''
              }`}
            />
            {errors.lastname && <p className="text-red-400 text-sm mt-1">{errors.lastname}</p>}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico *"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 rounded bg-gray-500 text-white placeholder-gray-100/50 ${
                errors.email ? 'border border-red-500' : ''
              }`}
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Mensaje *"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`w-full p-3 rounded bg-gray-500 text-white placeholder-gray-100/50 ${
                errors.message ? 'border border-red-500' : ''
              }`}
            />
            {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full text-white placeholder-gray-300 bg-gray-800 border border-gray-600 py-3 px-4 rounded-md
            transition-all duration-700 ease-in-out hover:cursor-pointer
            bg-gradient-to-r from-gray-900 to-[#3a3869] bg-[length:0%_100%] bg-left hover:bg-[length:100%_100%] bg-no-repeat hover:border-gray-200"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
