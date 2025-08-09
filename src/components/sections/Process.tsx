import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { FileSearch, Database, Lightbulb, BarChart3 } from 'lucide-react';

const Process: React.FC = () => {
  const { isDarkMode } = useTheme();
  const steps = [
    {
      number: '01',
      title: 'Análisis Inicial',
      description: 'Evaluamos tus necesidades específicas y definimos objetivos claros para el proyecto de análisis.',
      icon: <FileSearch className="w-8 h-8" />,
      details: ['Reunión de diagnóstico', 'Definición de KPIs', 'Planificación del proyecto']
    },
    {
      number: '02',
      title: 'Recolección de Datos',
      description: 'Implementamos metodologías avanzadas para capturar datos relevantes y de alta calidad.',
      icon: <Database className="w-8 h-8" />,
      details: ['Integración de fuentes', 'Validación de datos', 'Limpieza y normalización']
    },
    {
      number: '03',
      title: 'Procesamiento Avanzado',
      description: 'Aplicamos técnicas de machine learning y análisis estadístico para extraer insights valiosos.',
      icon: <Lightbulb className="w-8 h-8" />,
      details: ['Modelado predictivo', 'Análisis de patrones', 'Correlaciones estadísticas']
    },
    {
      number: '04',
      title: 'Visualización y Entrega',
      description: 'Creamos dashboards interactivos y reportes detallados que facilitan la toma de decisiones.',
      icon: <BarChart3 className="w-8 h-8" />,
      details: ['Dashboards interactivos', 'Reportes ejecutivos', 'Presentación de resultados']
    }
  ];

  return (
    <section className={`py-20 ${
      isDarkMode ? 'bg-slate-900' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-primary'
          }`}>
            Nuestro Proceso
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDarkMode ? 'text-slate-300' : 'text-gray-600'
          }`}>
            Una metodología probada que garantiza resultados precisos y accionables 
            en cada proyecto de análisis de datos.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className={`hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 transform -translate-y-1/2 z-0 ${
            isDarkMode ? 'bg-secondary' : 'bg-primary'
          }`} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="group">
                {/* Step Card */}
                <div className={`border-2 rounded-2xl p-6 hover-lift transition-all duration-300 group-hover:shadow-xl relative ${
                  isDarkMode 
                    ? 'bg-slate-800 border-slate-700 group-hover:border-secondary/30' 
                    : 'bg-white border-gray-100 group-hover:border-secondary/30'
                }`}>
                  {/* Step Number */}
                  <div className="absolute -top-4 left-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mt-8 mb-6">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 mx-auto ${
                      isDarkMode
                        ? 'bg-slate-700 group-hover:bg-tertiary text-secondary group-hover:text-white'
                        : 'bg-gray-50 group-hover:bg-tertiary text-primary group-hover:text-white'
                    }`}>
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center mb-6">
                    <h3 className={`text-xl font-semibold mb-3 group-hover:text-secondary transition-colors duration-300 ${
                      isDarkMode ? 'text-white' : 'text-primary'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`leading-relaxed text-sm ${
                      isDarkMode ? 'text-slate-300' : 'text-gray-600'
                    }`}>
                      {step.description}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className={`flex items-center text-xs ${
                        isDarkMode ? 'text-slate-400' : 'text-gray-600'
                      }`}>
                        <div className="w-1.5 h-1.5 bg-tertiary rounded-full mr-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Connector */}
                <div className="lg:hidden flex justify-center mt-6 mb-2">
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-8 bg-secondary" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className={`rounded-2xl p-8 md:p-12 ${
            isDarkMode 
              ? 'bg-slate-800 border border-slate-700' 
              : 'bg-gray-50'
          }`}>
            <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-primary'
            }`}>
              ¿Listo para comenzar tu proyecto de datos?
            </h3>
            <p className={`text-lg mb-8 max-w-2xl mx-auto ${
              isDarkMode ? 'text-slate-300' : 'text-gray-600'
            }`}>
              Nuestro equipo de expertos está preparado para guiarte a través de cada paso 
              del proceso y entregar insights que transformen tu negocio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contacto"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover-lift inline-flex items-center justify-center"
              >
                <span>Iniciar Proyecto</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              
              <a
                href="tel:+59399284967"
                className={`border-2 border-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover-lift inline-flex items-center justify-center ${
                  isDarkMode 
                    ? 'bg-slate-800 text-primary' 
                    : 'bg-white text-primary'
                }`}
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
