import React from 'react';

const CaseStudies: React.FC = () => {
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
      image: '📊',
      color: 'from-primary to-secondary'
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
      image: '👥',
      color: 'from-secondary to-tertiary'
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
      image: '🔍',
      color: 'from-tertiary to-primary'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Casos de Éxito
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre cómo hemos ayudado a empresas ecuatorianas a transformar sus datos 
            en resultados concretos y medibles.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {cases.map((caseStudy, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover-lift transition-all duration-300 border border-gray-100"
            >
              {/* Header with gradient */}
              <div className={`h-32 bg-gradient-to-r ${caseStudy.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="text-6xl opacity-20 absolute -top-4 -right-4 transform rotate-12">
                  {caseStudy.image}
                </div>
                <div className="text-center text-white z-10">
                  <div className="text-4xl mb-2">{caseStudy.image}</div>
                  <div className="text-sm font-medium opacity-90">{caseStudy.industry}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                    {caseStudy.title}
                  </h3>
                  <p className="text-sm text-tertiary font-medium">
                    {caseStudy.client}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Desafío:</h4>
                  <p className="text-sm text-gray-600 mb-4">{caseStudy.challenge}</p>
                  
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Solución:</h4>
                  <p className="text-sm text-gray-600">{caseStudy.solution}</p>
                </div>

                {/* Results */}
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Resultados:</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {caseStudy.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center justify-between">
                        <span className="text-xs text-gray-600">{result.description}</span>
                        <span className="text-lg font-bold text-primary">{result.metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">
              Impacto Comprobado
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nuestros proyectos de análisis de datos han generado resultados medibles 
              y sostenibles para nuestros clientes.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-tertiary mb-2">150+</div>
              <div className="text-sm text-gray-600">Proyectos Completados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-tertiary mb-2">35%</div>
              <div className="text-sm text-gray-600">Incremento Promedio en ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-tertiary mb-2">10TB+</div>
              <div className="text-sm text-gray-600">Datos Procesados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-tertiary mb-2">50+</div>
              <div className="text-sm text-gray-600">Empresas Beneficiadas</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-primary mb-4">
            ¿Tu empresa puede ser el próximo caso de éxito?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Conversemos sobre cómo podemos ayudarte a alcanzar resultados similares 
            con una estrategia de datos personalizada.
          </p>
          <a
            href="#contacto"
            className="bg-gradient-primary hover:shadow-lg text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover-lift inline-flex items-center"
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
