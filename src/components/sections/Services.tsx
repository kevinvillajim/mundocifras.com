import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Análisis Estadístico',
      description: 'Procesamiento avanzado de datos con técnicas estadísticas modernas para extraer insights valiosos.',
      features: ['Análisis descriptivo e inferencial', 'Modelado predictivo', 'Visualización de datos']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Big Data',
      description: 'Gestión y análisis de grandes volúmenes de datos para descubrir patrones ocultos.',
      features: ['Procesamiento masivo', 'Machine Learning', 'Data Mining']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: 'Investigación de Mercados',
      description: 'Estudios cuantitativos y cualitativos para comprender tu mercado y clientes.',
      features: ['Estudios de mercado', 'Análisis de competencia', 'Segmentación de clientes']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: 'Brand Tracking',
      description: 'Monitoreo continuo del desempeño de tu marca en el mercado.',
      features: ['Seguimiento de marca', 'Análisis de percepción', 'KPIs de branding']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Consultoría Estratégica',
      description: 'Asesoramiento para la toma de decisiones inteligentes basadas en datos.',
      features: ['Estrategias data-driven', 'Optimización de procesos', 'ROI de inversiones']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      ),
      title: 'Evaluaciones Digitales',
      description: 'Análisis del desempeño digital y evaluación de plataformas online.',
      features: ['Analytics web', 'Social media metrics', 'Performance digital']
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl animate-float" />
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-tertiary/10 rounded-full blur-xl animate-pulse-custom" />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-gradient mb-8">
            Nuestros Servicios
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-tertiary to-secondary mx-auto mb-8 rounded-full" />
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
            Ofrecemos <span className="text-primary font-bold">soluciones integrales</span> de análisis de datos adaptadas a las necesidades 
            específicas de tu empresa, desde estudios de mercado hasta implementación de <span className="text-secondary font-bold">big data</span>.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover-lift border border-gray-200/50 hover:border-primary/30 transition-all duration-500 hover-glow relative overflow-hidden"
            >
              {/* Efecto de fondo animado */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className="mb-8 relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-primary via-secondary to-tertiary rounded-2xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-gradient transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-700 mb-8 leading-relaxed text-lg group-hover:text-gray-800 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      <div className="w-6 h-6 bg-gradient-to-br from-tertiary to-secondary rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Efecto de brillo superior */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20">
          <div className="relative bg-gradient-to-br from-primary via-secondary to-primary rounded-3xl p-12 md:p-16 text-white overflow-hidden shadow-2xl">
            {/* Efectos de fondo */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-tertiary/20 rounded-full blur-3xl animate-float" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse-custom" />
            
            <div className="relative z-10 text-center">
              <h3 className="text-3xl md:text-4xl font-black mb-6 text-gradient bg-gradient-to-r from-white via-tertiary to-white bg-clip-text">
                ¿Necesitas un servicio personalizado?
              </h3>
              <div className="w-16 h-1 bg-tertiary mx-auto mb-8 rounded-full" />
              <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                Cada empresa es única. <span className="font-bold text-tertiary">Contáctanos</span> para diseñar una solución de análisis de datos 
                específica para tus necesidades y objetivos.
              </p>
              <a
                href="#contacto"
                className="group inline-flex items-center bg-gradient-to-r from-tertiary to-yellow-500 hover:from-yellow-500 hover:to-tertiary text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-500 hover-lift hover-glow shadow-2xl relative overflow-hidden"
              >
                <span className="relative z-10">Solicitar Propuesta</span>
                <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
