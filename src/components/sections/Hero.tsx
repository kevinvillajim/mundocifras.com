import React, { useEffect, useState } from 'react';
import { isDarkMode } from '../../utils/theme';

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
    <div className={`min-h-screen transition-all duration-700 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
          : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50'
      }`} style={{ paddingTop: '5rem' }}>
        <div className="max-w-5xl mx-auto py-24 px-6 text-center">
          <h1 className={`text-5xl md:text-7xl font-black mb-8 leading-tight ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="text-gradient">Decisiones Inteligentes</span><br/>
            <span className="text-gradient">Basadas en Datos</span>
          </h1>
          <p className={`text-xl md:text-2xl mb-12 leading-relaxed max-w-4xl mx-auto ${
            isDarkMode ? 'text-slate-300' : 'text-gray-600'
          }`}>
            En MundoCifras transformamos información compleja en insights estratégicos que impulsan 
            el crecimiento de tu negocio. Somos tu aliado en investigación de mercados y análisis estadístico.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className={`p-8 rounded-2xl shadow-xl ${
              isDarkMode ? 'bg-slate-800/60 border border-slate-700' : 'bg-white/80 border border-white'
            } backdrop-blur-sm hover-lift`}>
              <h3 className="text-xl font-bold mb-4 text-gradient">📊 Investigación de Mercados</h3>
              <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>
                Estudios cuantitativos y cualitativos para entender tu mercado y optimizar estrategias.
              </p>
            </div>
            
            <div className={`p-8 rounded-2xl shadow-xl ${
              isDarkMode ? 'bg-slate-800/60 border border-slate-700' : 'bg-white/80 border border-white'
            } backdrop-blur-sm hover-lift`}>
              <h3 className="text-xl font-bold mb-4 text-gradient">📈 Big Data & Analytics</h3>
              <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>
                Procesamiento y análisis de grandes volúmenes de datos para insights accionables.
              </p>
            </div>
            
            <div className={`p-8 rounded-2xl shadow-xl ${
              isDarkMode ? 'bg-slate-800/60 border border-slate-700' : 'bg-white/80 border border-white'
            } backdrop-blur-sm hover-lift`}>
              <h3 className="text-xl font-bold mb-4 text-gradient">🎯 Optimización de Procesos</h3>
              <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>
                Mejoramos la eficiencia operativa mediante análisis estadístico y evaluación de desempeño.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <a href="https://wa.me/593992849687" className="cta-button inline-block">
              Solicita una Consulta Gratuita
            </a>
            <p className={`mt-4 text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>
              📱 WhatsApp: +593 99 284 9687 | 📧 eduardo.encalada@mundocifras.com
            </p>
          </div>
        </div>
      </div>
  );
};

export default Hero;