import React, { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { 
  Search, 
  Sun, 
  Moon, 
  ChevronDown, 
  Menu, 
  X 
} from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  // Usar el contexto de tema
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar dropdown cuando se hace click fuera
  useEffect(() => {
    const handleClickOutside = () => setActiveDropdown(null);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const navLinks = [
    {
      label: 'Inicio',
      href: '/'
    },
    {
      label: 'Servicios',
      href: '/servicios',
      dropdown: [
        { label: 'Investigación de Mercados', href: '/servicios/investigacion-mercados' },
        { label: 'Estudios Cuantitativos', href: '/servicios/estudios-cuantitativos' },
        { label: 'Estudios Cualitativos', href: '/servicios/estudios-cualitativos' },
        { label: 'Big Data & Analytics', href: '/servicios/big-data' },
        { label: 'Análisis Estadístico', href: '/servicios/analisis-estadistico' },
        { label: 'Brand Tracking', href: '/servicios/brand-tracking' }
      ]
    },
    {
      label: 'Soluciones',
      href: '/soluciones',
      dropdown: [
        { label: 'Evaluaciones de Concepto', href: '/soluciones/evaluaciones-concepto' },
        { label: 'Desempeño Digital', href: '/soluciones/desempeno-digital' },
        { label: 'Optimización de Procesos', href: '/soluciones/optimizacion-procesos' },
        { label: 'Estudios Sociales', href: '/soluciones/estudios-sociales' },
        { label: 'Herramientas de Investigación', href: '/soluciones/herramientas' }
      ]
    },
    {
      label: 'Casos de Éxito',
      href: '/casos-exito'
    },
    {
      label: 'Nosotros',
      href: '/nosotros'
    }
  ];

  const handleDropdownClick = (e: React.MouseEvent, label: string) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === label ? null : label);
  };


  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-700 ${
          isScrolled 
            ? isDarkMode 
              ? 'glass-header-dark' 
              : 'glass-header'
            : 'bg-black opacity-90'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <div className="flex items-center space-x-4 group">
              <div className="logo-glow w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                {/* <BarChart3 className="w-8 h-8 text-white" strokeWidth={1.8} /> */}
                <img src='./logo.png'/>
              </div>
              <div>
                <h1 className={`text-2xl font-black tracking-tight transition-all duration-500 ${
                  isScrolled 
                    ? 'text-gradient' 
                    : isDarkMode 
                      ? 'text-white' 
                      : 'text-white'
                } hover:scale-105 transform cursor-pointer`}>
                  MundoCifras
                </h1>
                <p className={`text-sm font-semibold tracking-wider transition-all duration-500 ${
                  isScrolled 
                    ? 'text-gradient opacity-90' 
                    : isDarkMode
                      ? 'text-blue-200'
                      : 'text-blue-100'
                }`}>
                  CONSULTORÍA EN DATOS
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link) => (
                <div key={link.label} className="relative">
                  {link.dropdown ? (
                    <button
                      onClick={(e) => handleDropdownClick(e, link.label)}
                      className={`nav-item flex items-center transition-all duration-300 ${
                        isScrolled 
                          ? isDarkMode 
                            ? 'text-slate-200 hover:text-blue-300' 
                            : 'text-gray-700 hover:text-blue-600'
                          : 'text-white hover:text-blue-200'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 ml-2 transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className={`nav-item transition-all duration-300 ${
                        isScrolled 
                          ? isDarkMode 
                            ? 'text-slate-200 hover:text-blue-300' 
                            : 'text-gray-700 hover:text-blue-600'
                          : 'text-white hover:text-blue-200'
                      }`}
                    >
                      {link.label}
                    </a>
                  )}

                  {/* Dropdown Menu */}
                  {link.dropdown && activeDropdown === link.label && (
                    <div className={`absolute top-full left-0 mt-3 w-72 rounded-xl dropdown-enter ${
                      isDarkMode ? 'glass-dropdown-dark' : 'glass-dropdown'
                    } py-3 z-50`}>
                      {link.dropdown.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className={`block px-5 py-3 font-medium text-sm transition-all duration-300 hover-lift ${
                            isDarkMode 
                              ? 'text-slate-200 hover:text-blue-300 hover:bg-slate-800/40' 
                              : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/60'
                          } rounded-lg mx-2`}
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Section */}
            <div className="hidden lg:flex items-center space-x-3">
              
              {/* Search Button */}
              <button className={`search-icon transition-all duration-300 ${
                isScrolled 
                  ? isDarkMode
                    ? 'text-slate-200 hover:text-blue-300'
                    : 'text-gray-700 hover:text-blue-600'
                  : 'text-white hover:text-blue-200'
              }`}>
                <Search className="w-5 h-5" />
              </button>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleTheme}
                className={`theme-toggle transition-all duration-300 ${
                  isScrolled 
                    ? isDarkMode
                      ? 'text-blue-300'
                      : 'text-gray-700'
                    : 'text-white'
                }`}
                aria-label="Cambiar tema"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              {/* CTA Button */}
              <a href="https://wa.me/593992849687" className="cta-button">
                <span className="relative z-10">Consulta Gratuita</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-3">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isScrolled 
                    ? isDarkMode 
                      ? 'text-blue-300 hover:bg-slate-800' 
                      : 'text-gray-700 hover:bg-gray-100'
                    : 'text-white hover:bg-white/10'
                }`}
                aria-label="Cambiar tema"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isScrolled 
                    ? isDarkMode 
                      ? 'text-slate-200 hover:bg-slate-800' 
                      : 'text-gray-700 hover:bg-gray-100'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className={`py-6 space-y-1 mobile-menu-slide ${
              isDarkMode ? 'glass-dropdown-dark' : 'glass-dropdown'
            } rounded-2xl mt-4 mx-2`}>
              {navLinks.map((link) => (
                <div key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-6 py-4 font-semibold text-base transition-all duration-300 hover-lift rounded-lg mx-2 ${
                      isDarkMode 
                        ? 'text-slate-200 hover:text-blue-300 hover:bg-slate-800/40' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/60'
                    }`}
                  >
                    {link.label}
                  </a>
                  {link.dropdown && (
                    <div className="pl-4 space-y-1 mt-2">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block px-6 py-2 text-sm font-medium transition-all duration-300 rounded-lg mx-2 ${
                            isDarkMode 
                              ? 'text-slate-400 hover:text-blue-300 hover:bg-slate-800/30' 
                              : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/40'
                          }`}
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-4 pt-6">
                <a
                  href="https://wa.me/593992849687"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="cta-button block w-full text-center"
                >
                  Consulta Gratuita
                </a>
              </div>
            </div>
          </div>
        </div>
      </header> 
    </>
  );
};

export default Header;