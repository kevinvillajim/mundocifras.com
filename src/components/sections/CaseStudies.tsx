import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { BarChart3, Users, Search } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const { isDarkMode } = useTheme();
  const cases = [
    {
      title: 'Optimización de Inventario',
      client: 'Retail Leader Ecuador',
      industry: 'Retail',
      challenge: 'Reducir costos de inventario sin afectar la disponibilidad de productos',
      solution: 'Implementamos algoritmos de predicción de demanda y análisis de patrones estacionales',
      results: [
        { metric: '35%', description: 'Reducción en costos de inventario' },
        { metric: '98%', description: 'Disponibilidad de productos mantenida' },
        { metric: '3 meses', description: 'Tiempo de implementación' }
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'primary'
    },
    {
      title: 'Segmentación de Clientes',
      client: 'FinTech Innovadora',
      industry: 'Servicios Financieros',
      challenge: 'Mejorar la personalización de productos financieros',
      solution: 'Análisis de clustering con machine learning para identificar 8 segmentos únicos de clientes',
      results: [
        { metric: '45%', description: 'Incremento en conversión' },
        { metric: '60%', description: 'Mejora en satisfacción del cliente' },
        { metric: '8', description: 'Segmentos de clientes identificados' }
      ],
      icon: <Users className="w-8 h-8" />,
      color: 'secondary'
    },
    {
      title: 'Análisis de Redes Sociales',
      client: 'Marca Líder en Consumo',
      industry: 'Bienes de Consumo',
      challenge: 'Entender el sentiment de marca y optimizar estrategia digital',
      solution: 'Procesamiento de lenguaje natural para analizar menciones y sentiment en tiempo real',
      results: [
        { metric: '+25%', description: 'Incremento en engagement' },
        { metric: '92%', description: 'Precisión en análisis de sentiment' },
        { metric: '1M+', description: 'Menciones procesadas mensualmente' }
      ],
      icon: <Search className="w-8 h-8" />,
      color: 'tertiary'
    }
  ];

  return (
    <section className={`py-20 ${
      isDarkMode ? 'bg-slate-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-primary'
          }`}>
            Casos de Éxito
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDarkMode ? 'text-slate-300' : 'text-gray-600'
          }`}>
            Descubre cómo hemos ayudado a empresas ecuatorianas a transformar sus datos 
            en resultados concretos y medibles.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {cases.map((caseStudy, index) => (
            <div
              key={index}
              className={`group rounded-2xl overflow-hidden shadow-lg hover-lift transition-all duration-300 border ${
                isDarkMode 
                  ? 'bg-slate-800 border-slate-700' 
                  : 'bg-white border-gray-100'
              }`}
            >
              {/* Header with gradient */}
              <div className={`h-32 flex items-center justify-center relative overflow-hidden ${
                caseStudy.color === 'primary' ? 'bg-primary' :
                caseStudy.color === 'secondary' ? 'bg-secondary' : 'bg-tertiary'
              }`}>
                <div className="text-center text-white z-10">
                  <div className="mb-2">{caseStudy.icon}</div>
                  <div className="text-sm font-medium opacity-90">{caseStudy.industry}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className={`text-xl font-semibold mb-2 group-hover:text-secondary transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-primary'
                  }`}>
                    {caseStudy.title}
                  </h3>
                  <p className="text-sm text-tertiary font-medium">
                    {caseStudy.client}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className={`text-sm font-semibold mb-2 ${
                    isDarkMode ? 'text-slate-300' : 'text-gray-700'
                  }`}>Desafío:</h4>
                  <p className={`text-sm mb-4 ${
                    isDarkMode ? 'text-slate-400' : 'text-gray-600'
                  }`}>{caseStudy.challenge}</p>
                  
                  <h4 className={`text-sm font-semibold mb-2 ${
                    isDarkMode ? 'text-slate-300' : 'text-gray-700'
                  }`}>Solución:</h4>
                  <p className={`text-sm ${
                    isDarkMode ? 'text-slate-400' : 'text-gray-600'
                  }`}>{caseStudy.solution}</p>
                </div>

                {/* Results */}
                <div className={`border-t pt-4 ${
                  isDarkMode ? 'border-slate-700' : 'border-gray-100'
                }`}>
                  <h4 className={`text-sm font-semibold mb-3 ${
                    isDarkMode ? 'text-slate-300' : 'text-gray-700'
                  }`}>Resultados:</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {caseStudy.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center justify-between">
                        <span className={`text-xs ${
                          isDarkMode ? 'text-slate-400' : 'text-gray-600'
                        }`}>{result.description}</span>
                        <span className={`text-lg font-bold ${
                          isDarkMode ? 'text-secondary' : 'text-primary'
                        }`}>{result.metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`rounded-2xl p-8 md:p-12 shadow-lg border ${
          isDarkMode 
            ? 'bg-slate-800 border-slate-700' 
            : 'bg-white border-gray-100'
        }`}>
          <div className="text-center mb-12">
            <h3 className={`text-3xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-primary'
            }`}>
              Impacto Comprobado
            </h3>
            <p className={`max-w-2xl mx-auto ${
              isDarkMode ? 'text-slate-300' : 'text-gray-600'
            }`}>
              Nuestros proyectos de análisis de datos han generado resultados medibles 
              y sostenibles para nuestros clientes.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-tertiary mb-2">150+</div>
              <div className={`text-sm ${
                isDarkMode ? 'text-slate-400' : 'text-gray-600'
              }`}>Proyectos Completados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-tertiary mb-2">35%</div>
              <div className={`text-sm ${
                isDarkMode ? 'text-slate-400' : 'text-gray-600'
              }`}>Incremento Promedio en ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-tertiary mb-2">10TB+</div>
              <div className={`text-sm ${
                isDarkMode ? 'text-slate-400' : 'text-gray-600'
              }`}>Datos Procesados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-tertiary mb-2">50+</div>
              <div className={`text-sm ${
                isDarkMode ? 'text-slate-400' : 'text-gray-600'
              }`}>Empresas Beneficiadas</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className={`text-2xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-primary'
          }`}>
            ¿Tu empresa puede ser el próximo caso de éxito?
          </h3>
          <p className={`mb-8 max-w-2xl mx-auto ${
            isDarkMode ? 'text-slate-300' : 'text-gray-600'
          }`}>
            Conversemos sobre cómo podemos ayudarte a alcanzar resultados similares 
            con una estrategia de datos personalizada.
          </p>
          <a
            href="#contacto"
            className="bg-primary hover:bg-primary/90 hover:shadow-lg text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover-lift inline-flex items-center"
          >
            <span>Discutir Mi Proyecto</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
