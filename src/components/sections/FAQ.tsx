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
      </div>
    </section>
  );
};

export default FAQ;
