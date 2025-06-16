import { useTranslation } from 'react-i18next';
import profileImg from '../assets/jescobar.webp';
import SectionTitle from './SectionTitle';

function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="pt-30 bg-dark pb-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Imagen o ilustración */}
        <div className="flex justify-center">
          <img
            src={profileImg}
            alt="Julián Escobar"
            className="w-60 h-60 object-cover"
          />
        </div>

        {/* Texto */}
        <div>          
          <SectionTitle title={t('about')}></SectionTitle>
          <p className="lwhite leading-relaxed">
          {t('about_description')
          
            .split('\n\n')
            .map((paragraph, index) => (
              <span key={index} className="block mb-4">
                {paragraph}
              </span>
            ))}
        </p>

        </div>
      </div>
    </section>
  );
}

export default About;