import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { 
  Lightbulb, 
  CheckCircle, 
  Users, 
  Zap,
  ArrowRight 
} from 'lucide-react';

const About: React.FC = () => {
  const { isDarkMode } = useTheme();
  
  const values = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Innovación',
      description: 'Utilizamos las últimas tecnologías y metodologías para ofrecer soluciones de vanguardia.'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Precisión',
      description: 'Cada análisis se realiza con la máxima rigurosidad estadística y científica.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Colaboración',
      description: 'Trabajamos estrechamente contigo para entender y resolver tus desafíos específicos.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Agilidad',
      description: 'Procesos eficientes que entregan resultados rápidos sin comprometer la calidad.'
    }
  ];

  const achievements = [
    { number: '8+', label: 'Años de experiencia' },
    { number: '150+', label: 'Proyectos exitosos' },
    { number: '50+', label: 'Empresas confían en nosotros' },
    { number: '99.5%', label: 'Satisfacción del cliente' }
  ];

  return (
    <section id="nosotros" className={`py-20 transition-colors duration-300 ${
      isDarkMode ? 'bg-slate-900' : 'bg-tertiary/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-primary'
          }`}>
            Sobre MundoCifras
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDarkMode ? 'text-slate-300' : 'text-gray-600'
          }`}>
            Somos especialistas en convertir datos complejos en insights accionables 
            que impulsan el crecimiento y la innovación de nuestros clientes.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left side - Story */}
          <div>
            <div className="mb-8">
              <h3 className={`text-2xl font-semibold mb-4 ${
                isDarkMode ? 'text-white' : 'text-primary'
              }`}>
                Nuestra Historia
              </h3>
              <p className={`leading-relaxed mb-4 ${
                isDarkMode ? 'text-slate-300' : 'text-gray-600'
              }`}>
                Fundada con la visión de democratizar el poder de los datos, MundoCifras nació 
                de la necesidad de brindar a las empresas ecuatorianas herramientas de análisis 
                de clase mundial.
              </p>
              <p className={`leading-relaxed mb-4 ${
                isDarkMode ? 'text-slate-300' : 'text-gray-600'
              }`}>
                Desde nuestros inicios en Quito, hemos ayudado a organizaciones de todos los 
                tamaños a tomar decisiones más inteligentes basadas en evidencia sólida y 
                análisis riguroso.
              </p>
              <p className={`leading-relaxed ${
                isDarkMode ? 'text-slate-300' : 'text-gray-600'
              }`}>
                Nuestro equipo multidisciplinario combina expertise técnico con profundo 
                conocimiento del mercado local, garantizando soluciones relevantes y efectivas.
              </p>
            </div>

            <div className="mb-8">
              <h3 className={`text-2xl font-semibold mb-4 ${
                isDarkMode ? 'text-white' : 'text-primary'
              }`}>
                Nuestra Misión
              </h3>
              <p className={`leading-relaxed ${
                isDarkMode ? 'text-slate-300' : 'text-gray-600'
              }`}>
                Empoderar a las empresas ecuatorianas con inteligencia de datos que les permita 
                competir globalmente, optimizar sus procesos y crear valor sostenible para todos 
                sus stakeholders.
              </p>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            <div className={`rounded-2xl p-8 text-white ${
              isDarkMode 
                ? 'bg-gradient-to-br from-slate-800 to-slate-600' 
                : 'bg-gradient-to-br from-primary-950 to-secondary'
            }`}>
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-3xl font-bold mb-2 ${
                      isDarkMode ? 'text-yellow-400' : 'text-tertiary'
                    }`}>
                      {achievement.number}
                    </div>
                    <div className={`text-sm opacity-90 ${
                      isDarkMode ? 'text-slate-200' : 'text-white'
                    }`}>
                      {achievement.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className={`absolute -top-4 -right-4 w-8 h-8 rounded-full opacity-60 animate-float ${
              isDarkMode ? 'bg-yellow-400' : 'bg-tertiary'
            }`} />
            <div className={`absolute -bottom-4 -left-4 w-6 h-6 rounded-full opacity-40 animate-float ${
              isDarkMode ? 'bg-blue-400' : 'bg-secondary'
            }`} style={{animationDelay: '1s'}} />
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className={`text-3xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-primary'
            }`}>
              Nuestros Valores
            </h3>
            <p className={`max-w-2xl mx-auto ${
              isDarkMode ? 'text-slate-300' : 'text-gray-600'
            }`}>
              Los principios que guían cada proyecto y definen nuestra cultura organizacional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ${
                  isDarkMode 
                    ? 'bg-tertiary' 
                    : 'bg-primary'
                }`}>
                  {value.icon}
                </div>
                <h4 className={`text-lg font-semibold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-primary'
                }`}>
                  {value.title}
                </h4>
                <p className={`text-sm leading-relaxed ${
                  isDarkMode ? 'text-slate-300' : 'text-gray-600'
                }`}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center rounded-2xl p-8 md:p-12 transition-colors duration-300 ${
          isDarkMode ? 'bg-slate-800' : 'bg-tertiary/20'
        }`}>
          <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-primary'
          }`}>
            ¿Listo para transformar tus datos?
          </h3>
          <p className={`text-lg mb-8 max-w-2xl mx-auto ${
            isDarkMode ? 'text-slate-300' : 'text-gray-600'
          }`}>
            Únete a las empresas que ya están tomando decisiones más inteligentes 
            con nuestras soluciones de análisis de datos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contacto"
              className={`text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover-lift inline-flex items-center justify-center ${
                isDarkMode 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'bg-primary hover:bg-blue-800'
              }`}
            >
              <span>Comenzar Proyecto</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="#servicios"
              className={`border-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover-lift inline-flex items-center justify-center ${
                isDarkMode 
                  ? 'border-blue-400 text-blue-400 hover:bg-blue-600 hover:border-blue-600 hover:text-white' 
                  : 'border-primary text-primary hover:bg-primary hover:text-white'
              }`}
            >
              <span>Ver Servicios</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;