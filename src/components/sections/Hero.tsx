import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '500+', label: 'Proyectos Analizados' },
    { number: '10TB+', label: 'Datos Procesados' },
    { number: '150+', label: 'Clientes Satisfechos' },
    { number: '99%', label: 'Precisión en Análisis' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-primary particles">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Geometric shapes con efectos mejorados */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-white/20 rounded-full animate-float glass" />
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-tertiary/30 rotate-45 glass-dark animate-pulse-custom" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-tertiary/20 rounded-lg animate-float glass" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-white/10 rounded-full animate-float glass" style={{animationDelay: '1.5s'}} />
        <div className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-secondary/20 rounded-sm rotate-12 animate-pulse-custom glass" style={{animationDelay: '3s'}} />
        <div className="absolute top-1/4 left-1/3 w-10 h-10 border border-tertiary/20 rounded-full animate-float" style={{animationDelay: '2.5s'}} />
        
        {/* Grid pattern mejorado */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" 
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), 
                               linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>
        
        {/* Luz ambiental */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-custom" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-tertiary/10 rounded-full blur-3xl animate-pulse-custom" style={{animationDelay: '1s'}} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main heading */}
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transformamos
              <span className="block text-gradient text-6xl md:text-8xl font-black py-2">Datos en</span>
              <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent hover-scale">
                Decisiones
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Consultora especializada en <span className="text-tertiary font-semibold">análisis estadístico</span>, 
              <span className="text-tertiary font-semibold"> big data</span> e 
              <span className="text-tertiary font-semibold"> investigación de mercados</span>. 
              Convierte tu información en ventaja competitiva.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <a
                href="#servicios"
                className="group relative bg-gradient-to-r from-tertiary to-secondary hover:from-secondary hover:to-tertiary text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-500 hover-lift hover-glow flex items-center space-x-3 shadow-2xl overflow-hidden"
              >
                <span className="relative z-10">Nuestros Servicios</span>
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>
              
              <a
                href="#contacto"
                className="group relative glass border-2 border-white/50 hover:bg-white hover:text-primary text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-500 hover-lift hover-scale flex items-center space-x-3 shadow-2xl overflow-hidden"
              >
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className="relative z-10">Consulta Gratuita</span>
                <div className="absolute inset-0 bg-white/10 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-xl" />
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="group text-center p-6 rounded-2xl glass hover:glass-dark border border-white/20 hover-lift hover-glow transition-all duration-500 relative overflow-hidden"
                  style={{animationDelay: `${0.8 + index * 0.1}s`}}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-tertiary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="text-4xl md:text-5xl font-black text-gradient mb-3 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-gray-200 text-sm md:text-base font-medium group-hover:text-white transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                  {/* Efecto de brillo */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-tertiary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 animate-pulse">
          <span className="text-white/60 text-sm">Descubre más</span>
          <svg className="w-6 h-6 text-white/60 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
