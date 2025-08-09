import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { 
  BarChart3, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook 
} from 'lucide-react';

const Footer: React.FC = () => {
  const { isDarkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    servicios: [
      { name: 'Análisis Estadístico', href: '#servicios' },
      { name: 'Big Data', href: '#servicios' },
      { name: 'Investigación de Mercados', href: '#servicios' },
      { name: 'Brand Tracking', href: '#servicios' },
    ],
    empresa: [
      { name: 'Sobre Nosotros', href: '#nosotros' },
      { name: 'Nuestro Equipo', href: '#nosotros' },
      { name: 'Casos de Éxito', href: '#nosotros' },
      { name: 'Carreras', href: '#contacto' },
    ],
    recursos: [
      { name: 'Blog', href: '#' },
      { name: 'Guías', href: '#' },
      { name: 'Webinars', href: '#' },
      { name: 'FAQ', href: '#' },
    ]
  };

  return (
    <footer className={`text-white ${
      isDarkMode ? 'bg-slate-900' : 'bg-primary'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-xl font-bold">MundoCifras</h3>
                <p className="text-secondary text-sm">Data Intelligence</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transformamos datos complejos en insights accionables que impulsan 
              el crecimiento y la innovación de nuestros clientes.
            </p>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-tertiary flex-shrink-0" strokeWidth={2} />
                <span className="text-gray-300">Quito, Ecuador</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-tertiary flex-shrink-0" strokeWidth={2} />
                <a href="tel:+59399284967" className="text-gray-300 hover:text-tertiary transition-colors duration-300">
                  +593 99 284 9687
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-tertiary flex-shrink-0" strokeWidth={2} />
                <a href="mailto:eduardo.encalada@mundocifras.com" className="text-gray-300 hover:text-tertiary transition-colors duration-300 break-all">
                  eduardo.encalada@mundocifras.com
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-tertiary">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-tertiary">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-tertiary">Recursos</h4>
            <ul className="space-y-3 mb-8">
              {footerLinks.recursos.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div>
              <h5 className="text-sm font-semibold mb-4 text-tertiary">Síguenos</h5>
              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com/MundoCifras.ec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-tertiary transition-all duration-300 hover-lift"
                >
                  <Facebook className="w-5 h-5" fill="currentColor" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="py-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-300">
              © {currentYear} MundoCifras. Todos los derechos reservados.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
