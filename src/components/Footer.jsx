import WhatsApp from './icons/WhatsApp';
import XTwitter from './icons/XTwitter';
import Facebook from './icons/Facebook';
import Instagram from './icons/Instagram';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        
        {/* Contenido principal del footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Sección Logo y descripción */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-4">
              <img 
                src="/assets/LogoFondoTransparente.png"
                alt="Logo" 
                className="h-21 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Ofrecemos las mejores hamburguesas y sandwiches con ingredientes frescos y de calidad.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <WhatsApp />
              </a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <XTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-600 transition-colors">
                <Instagram />
              </a>
            </div>
          </div>

          {/* Sección Contacto */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start">
                <svg className="w-5 h-5 mr-2 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a href="mailto:info@hamburgueseria.com" className="text-gray-400 hover:text-amber-500 transition-colors">
                  info@hamburgueseria.com
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <svg className="w-5 h-5 mr-2 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <svg className="w-5 h-5 mr-2 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span className="text-gray-400">Av. Principal 123, Ciudad</span>
              </div>
            </div>
          </div>

          {/* Sección Horario */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Horario de Atención</h3>
            <div className="space-y-1 text-gray-400">
              <div className="flex justify-between max-w-xs mx-auto md:mx-0">
                <span>Lunes - Viernes:</span>
                <span>11:00 - 22:00</span>
              </div>
              <div className="flex justify-between max-w-xs mx-auto md:mx-0">
                <span>Sábados:</span>
                <span>12:00 - 23:00</span>
              </div>
              <div className="flex justify-between max-w-xs mx-auto md:mx-0">
                <span>Domingos:</span>
                <span>12:00 - 20:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Hamburguesería Delicious. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Hecho con ❤️ por nuestro equipo
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;