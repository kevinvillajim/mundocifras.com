import React from 'react';

const About: React.FC = () => {
  const values = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Innovación',
      description: 'Utilizamos las últimas tecnologías y metodologías para ofrecer soluciones de vanguardia.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Precisión',
      description: 'Cada análisis se realiza con la máxima rigurosidad estadística y científica.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Colaboración',
      description: 'Trabajamos estrechamente contigo para entender y resolver tus desafíos específicos.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
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
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Sobre MundoCifras
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos especialistas en convertir datos complejos en insights accionables 
            que impulsan el crecimiento y la innovación de nuestros clientes.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left side - Story */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Nuestra Historia
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Fundada con la visión de democratizar el poder de los datos, MundoCifras nació 
                de la necesidad de brindar a las empresas ecuatorianas herramientas de análisis 
                de clase mundial.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Desde nuestros inicios en Quito, hemos ayudado a organizaciones de todos los 
                tamaños a tomar decisiones más inteligentes basadas en evidencia sólida y 
                análisis riguroso.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nuestro equipo multidisciplinario combina expertise técnico con profundo 
                conocimiento del mercado local, garantizando soluciones relevantes y efectivas.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Nuestra Misión
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Empoderar a las empresas ecuatorianas con inteligencia de datos que les permita 
                competir globalmente, optimizar sus procesos y crear valor sostenible para todos 
                sus stakeholders.
              </p>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            <div className="bg-gradient-primary rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-tertiary mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-sm opacity-90">
                      {achievement.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-tertiary rounded-full opacity-60 animate-float" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full opacity-40 animate-float" style={{animationDelay: '1s'}} />
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">
              Nuestros Valores
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Los principios que guían cada proyecto y definen nuestra cultura organizacional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            ¿Listo para transformar tus datos?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Únete a las empresas que ya están tomando decisiones más inteligentes 
            con nuestras soluciones de análisis de datos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contacto"
              className="bg-primary hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover-lift inline-flex items-center justify-center"
            >
              <span>Comenzar Proyecto</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#servicios"
              className="border-2 border-primary hover:bg-primary hover:text-white text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover-lift inline-flex items-center justify-center"
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
