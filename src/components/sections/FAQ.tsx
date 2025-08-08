import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: '¿Qué tipos de datos pueden analizar?',
      answer: 'Trabajamos con todo tipo de datos: estructurados (bases de datos, CSV, Excel), semi-estructurados (JSON, XML) y no estructurados (texto, imágenes, videos). También integramos datos de múltiples fuentes como CRM, ERP, redes sociales, web analytics y encuestas.'
    },
    {
      question: '¿Cuánto tiempo toma un proyecto típico de análisis?',
      answer: 'El tiempo varía según la complejidad del proyecto. Un análisis básico puede tomar 1-2 semanas, mientras que proyectos de big data o machine learning pueden requerir 1-3 meses. Siempre proporcionamos un cronograma detallado después de la evaluación inicial.'
    },
    {
      question: '¿Trabaján con empresas de todos los tamaños?',
      answer: 'Sí, atendemos desde startups hasta grandes corporaciones. Adaptamos nuestras metodologías y precios según el tamaño y las necesidades específicas de cada cliente, ofreciendo soluciones escalables para cualquier presupuesto.'
    },
    {
      question: '¿Qué herramientas y tecnologías utilizan?',
      answer: 'Utilizamos las mejores herramientas del mercado: Python, R, SQL, Tableau, Power BI, Apache Spark, TensorFlow, AWS, Google Cloud Platform, y más. Seleccionamos la tecnología más adecuada para cada proyecto específico.'
    },
    {
      question: '¿Ofrecen capacitación para nuestro equipo interno?',
      answer: 'Absolutamente. Además de entregar los resultados, ofrecemos capacitación personalizada para que tu equipo pueda interpretar y utilizar los insights generados. También proporcionamos talleres sobre herramientas de análisis de datos.'
    },
    {
      question: '¿Cómo garantizan la seguridad y confidencialidad de nuestros datos?',
      answer: 'La seguridad es nuestra prioridad. Utilizamos protocolos de encriptación avanzados, acuerdos de confidencialidad estrictos, y cumplimos con normativas internacionales de protección de datos. Todos nuestros procesos están auditados y certificados.'
    },
    {
      question: '¿Cuál es su metodología de trabajo?',
      answer: 'Seguimos una metodología probada en 4 fases: 1) Análisis inicial y definición de objetivos, 2) Recolección y validación de datos, 3) Procesamiento avanzado con IA/ML, 4) Visualización y entrega de insights accionables. Mantenemos comunicación constante durante todo el proceso.'
    },
    {
      question: '¿Qué diferencia a MundoCifras de otras consultoras?',
      answer: 'Combinamos expertise técnico internacional con profundo conocimiento del mercado ecuatoriano. Nuestro enfoque es 100% orientado a resultados de negocio, no solo técnicos. Además, ofrecemos precios competitivos y soporte post-proyecto incluido.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestros servicios de análisis de datos 
            y consultoría estadística.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none group"
              >
                <h3 className="text-lg font-semibold text-primary group-hover:text-secondary transition-colors duration-300 pr-4">
                  {faq.question}
                </h3>
                
                <div className={`w-8 h-8 flex items-center justify-center rounded-full bg-primary group-hover:bg-secondary transition-all duration-300 flex-shrink-0 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  <svg 
                    className="w-4 h-4 text-white transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M19 9l-7 7-7-7" 
                    />
                  </svg>
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            ¿No encontraste la respuesta que buscabas?
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Nuestro equipo está aquí para resolver cualquier duda específica sobre tu proyecto. 
            Conversemos sin compromiso.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contacto"
              className="bg-tertiary hover:bg-tertiary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover-lift inline-flex items-center justify-center"
            >
              <span>Hacer una Pregunta</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>
            
            <a
              href="https://wa.me/59399284967"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover-lift inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
