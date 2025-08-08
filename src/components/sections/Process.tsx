import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Análisis Inicial',
      description: 'Evaluamos tus necesidades específicas y definimos objetivos claros para el proyecto de análisis.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      details: ['Reunión de diagnóstico', 'Definición de KPIs', 'Planificación del proyecto']
    },
    {
      number: '02',
      title: 'Recolección de Datos',
      description: 'Implementamos metodologías avanzadas para capturar datos relevantes y de alta calidad.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
      details: ['Integración de fuentes', 'Validación de datos', 'Limpieza y normalización']
    },
    {
      number: '03',
      title: 'Procesamiento Avanzado',
      description: 'Aplicamos técnicas de machine learning y análisis estadístico para extraer insights valiosos.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      details: ['Modelado predictivo', 'Análisis de patrones', 'Correlaciones estadísticas']
    },
    {
      number: '04',
      title: 'Visualización y Entrega',
      description: 'Creamos dashboards interactivos y reportes detallados que facilitan la toma de decisiones.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      details: ['Dashboards interactivos', 'Reportes ejecutivos', 'Presentación de resultados']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nuestro Proceso
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una metodología probada que garantiza resultados precisos y accionables 
            en cada proyecto de análisis de datos.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-tertiary transform -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="group">
                {/* Step Card */}
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover-lift transition-all duration-300 group-hover:border-secondary/30 group-hover:shadow-xl relative">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mt-8 mb-6">
                    <div className="w-16 h-16 bg-gray-50 group-hover:bg-gradient-to-br group-hover:from-secondary group-hover:to-primary rounded-xl flex items-center justify-center text-primary group-hover:text-white transition-all duration-300 mx-auto">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center text-xs text-gray-600">
                        <div className="w-1.5 h-1.5 bg-tertiary rounded-full mr-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Connector */}
                <div className="lg:hidden flex justify-center mt-6 mb-2">
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-secondary" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              ¿Listo para comenzar tu proyecto de datos?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Nuestro equipo de expertos está preparado para guiarte a través de cada paso 
              del proceso y entregar insights que transformen tu negocio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contacto"
                className="bg-primary hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover-lift inline-flex items-center justify-center"
              >
                <span>Iniciar Proyecto</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              
              <a
                href="tel:+59399284967"
                className="bg-white border-2 border-primary hover:bg-primary hover:text-white text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover-lift inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Llamar Ahora</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
