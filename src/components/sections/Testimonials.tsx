import React, { useState } from 'react';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'María González',
      position: 'Directora de Marketing',
      company: 'TechCorp Ecuador',
      content: 'MundoCifras transformó completamente nuestra comprensión del mercado. Sus análisis nos permitieron identificar oportunidades que aumentaron nuestras ventas en un 35%.',
      rating: 5
    },
    {
      name: 'Carlos Mendoza',
      position: 'CEO',
      company: 'Retail Solutions',
      content: 'La precisión y profundidad de sus estudios de mercado nos ayudaron a tomar decisiones estratégicas acertadas. Reducimos costos operativos en 25% gracias a sus insights.',
      rating: 5
    },
    {
      name: 'Ana Rodríguez',
      position: 'Gerente de Producto',
      company: 'InnovaCorp',
      content: 'El análisis de big data que realizaron nos reveló patrones de comportamiento de clientes que nunca habríamos descubierto por nuestra cuenta. Extraordinario trabajo.',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            La confianza de nuestros clientes es nuestro mayor logro. Descubre cómo hemos 
            ayudado a empresas como la tuya a alcanzar sus objetivos.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="flex items-center justify-center mb-6">
              <div className="flex space-x-1">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <svg 
                    key={i} 
                    className="w-6 h-6 text-tertiary" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 text-center italic">
              "{testimonials[currentTestimonial].content}"
            </blockquote>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">
                  {testimonials[currentTestimonial].name.charAt(0)}
                </span>
              </div>
              <h4 className="font-semibold text-primary text-lg mb-1">
                {testimonials[currentTestimonial].name}
              </h4>
              <p className="text-gray-600">
                {testimonials[currentTestimonial].position} en {testimonials[currentTestimonial].company}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover-lift"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-tertiary scale-125' 
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover-lift"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-tertiary mb-2">98%</div>
            <div className="text-white/80 text-sm">Satisfacción del Cliente</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-tertiary mb-2">150+</div>
            <div className="text-white/80 text-sm">Proyectos Completados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-tertiary mb-2">24h</div>
            <div className="text-white/80 text-sm">Tiempo de Respuesta</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-tertiary mb-2">5★</div>
            <div className="text-white/80 text-sm">Calificación Promedio</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
