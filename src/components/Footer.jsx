import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

function Footer({ bg, hiddenSocial }) {
  return (
    <footer className={`${bg || 'bg-dark'}  text-gray-300 py-10`}>
      <div className="flex flex-col items-center space-y-6">
        {/* Íconos de redes sociales */}
        {!hiddenSocial && (
          <div className="flex space-x-6 text-2xl">
            <a
              href="https://github.com/julianescobar"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/julian-andres-escobar-herrera/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:julianandrees.escobar03@gmail.com"
              className="hover:text-white transition-colors duration-300"
              aria-label="Correo electrónico"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://wa.me/573127112343?text=Hola,%20quiero%20más%20información%20sobre%20tu%20trabajo."
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400 transition-colors duration-300"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        )}

        {/* Línea de derechos */}
        <p className="text-sm text-gray-300 text-center px-4 md:px-0">
          © {new Date().getFullYear()} Julián Andrés Escobar Herrera. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
