import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  return (
    <header className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">{t('welcome')}</h1>

      <ul className="flex space-x-4">
        <li><a href="#about">{t('about')}</a></li>
        <li><a href="#projects">{t('projects')}</a></li>
        <li><a href="#skills">{t('skills')}</a></li>
        <li><a href="#contact">{t('contact')}</a></li>
      </ul>

      <div>
        {/* 
        <button onClick={() => changeLanguage('es')} className="mr-2">ES</button>
        <button onClick={() => changeLanguage('en')}>EN</button>
        */}
      </div>
    </header>
  );
}


export default Header;