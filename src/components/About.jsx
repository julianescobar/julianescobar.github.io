import { useTranslation } from 'react-i18next';
import profileImg from '../assets/jescobar.webp';

function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Imagen o ilustración */}
        <div className="flex justify-center">
          <img
            src={profileImg}
            alt="Julián Escobar"
            className="w-60 h-60 object-cover rounded-full border-4 border-blue-500 shadow-lg"
          />
        </div>

        {/* Texto */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">{t('about')}</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {t('about_description')}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;