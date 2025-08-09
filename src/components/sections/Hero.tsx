import React, { useMemo } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { BarChart3, Database, Target } from 'lucide-react';

const Hero: React.FC = () => {
  const { isDarkMode } = useTheme();

  // Memoize background elements for performance
  const backgroundElements = useMemo(() => {
    const points = Array.from({ length: 75 }, (_, i) => ({
      id: `point-${i}`,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4
    }));

    const lines = Array.from({ length: 10 }, (_, i) => ({
      id: `line-${i}`,
      left: Math.random() * 100,
      top: Math.random() * 100,
      rotation: Math.random() * 360,
      delay: Math.random() * 3
    }));

    return { points, lines };
  }, []); // Empty dependency array - only calculate once

  return (
    <div className={`min-h-screen relative overflow-hidden transition-all duration-700 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
          : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50'
      }`} style={{ paddingTop: '5rem' }}>
      {/* Optimized Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="data-visualization-bg">
          {backgroundElements.points.map((point) => (
            <div
              key={point.id}
              className={`data-point ${
                isDarkMode ? 'data-point-dark' : 'data-point-light'
              }`}
              style={{
                left: `${point.left}%`,
                top: `${point.top}%`,
                animationDelay: `${point.delay}s`,
                animationDuration: `${point.duration}s`
              }}
            />
          ))}
          {backgroundElements.lines.map((line) => (
            <div
              key={line.id}
              className={`data-line ${
                isDarkMode ? 'data-line-dark' : 'data-line-light'
              }`}
              style={{
                left: `${line.left}%`,
                top: `${line.top}%`,
                transform: `rotate(${line.rotation}deg)`,
                animationDelay: `${line.delay}s`
              }}
            />
          ))}
        </div>
      </div>
        <div className="max-w-5xl mx-auto py-24 px-6 text-center relative z-10">
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
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className={`text-xl font-bold mb-4 ${
                isDarkMode ? 'text-secondary' : 'text-secondary'
              }`}>Investigación de Mercados</h3>
              <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>
                Estudios cuantitativos y cualitativos para entender tu mercado y optimizar estrategias.
              </p>
            </div>
            
            <div className={`p-8 rounded-2xl shadow-xl ${
              isDarkMode ? 'bg-slate-800/60 border border-slate-700' : 'bg-white/80 border border-white'
            } backdrop-blur-sm hover-lift`}>
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <Database className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className={`text-xl font-bold mb-4 ${
                isDarkMode ? 'text-secondary' : 'text-secondary'
              }`}>Big Data & Analytics</h3>
              <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>
                Procesamiento y análisis de grandes volúmenes de datos para insights accionables.
              </p>
            </div>
            
            <div className={`p-8 rounded-2xl shadow-xl ${
              isDarkMode ? 'bg-slate-800/60 border border-slate-700' : 'bg-white/80 border border-white'
            } backdrop-blur-sm hover-lift`}>
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className={`text-xl font-bold mb-4 ${
                isDarkMode ? 'text-secondary' : 'text-secondary'
              }`}>Optimización de Procesos</h3>
              <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>
                Mejoramos la eficiencia operativa mediante análisis estadístico y evaluación de desempeño.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <a href="https://wa.me/593992849687" className="cta-button inline-block">
              Solicita una Consulta Gratuita
            </a>
          </div>
        </div>
      </div>
  );
};

export default Hero;