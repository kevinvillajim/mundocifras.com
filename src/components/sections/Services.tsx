import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { 
  BarChart3, 
  Zap, 
  Shield, 
  Eye, 
  Lightbulb, 
  Settings,
  ArrowRight,
  Check
} from 'lucide-react';

const Services: React.FC = () => {
  const { isDarkMode } = useTheme();
  
  const services = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Análisis Estadístico',
      description: 'Procesamiento avanzado de datos con técnicas estadísticas modernas para extraer insights valiosos.',
      features: ['Análisis descriptivo e inferencial', 'Modelado predictivo', 'Visualización de datos']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Big Data',
      description: 'Gestión y análisis de grandes volúmenes de datos para descubrir patrones ocultos.',
      features: ['Procesamiento masivo', 'Machine Learning', 'Data Mining']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Investigación de Mercados',
      description: 'Estudios cuantitativos y cualitativos para comprender tu mercado y clientes.',
      features: ['Estudios de mercado', 'Análisis de competencia', 'Segmentación de clientes']
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Brand Tracking',
      description: 'Monitoreo continuo del desempeño de tu marca en el mercado.',
      features: ['Seguimiento de marca', 'Análisis de percepción', 'KPIs de branding']
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Consultoría Estratégica',
      description: 'Asesoramiento para la toma de decisiones inteligentes basadas en datos.',
      features: ['Estrategias data-driven', 'Optimización de procesos', 'ROI de inversiones']
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Evaluaciones Digitales',
      description: 'Análisis del desempeño digital y evaluación de plataformas online.',
      features: ['Analytics web', 'Social media metrics', 'Performance digital']
    }
  ];

  return (
    <section id="servicios" className={`py-24 relative overflow-hidden ${
      isDarkMode 
        ? 'bg-slate-900' 
        : 'bg-gray-50'
    }`}>
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl animate-float" />
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-tertiary/10 rounded-full blur-xl animate-pulse-custom" />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className={`text-5xl md:text-6xl font-black mb-8 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Nuestros Servicios
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8 rounded-full" />
          <p className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium ${
            isDarkMode ? 'text-slate-300' : 'text-gray-700'
          }`}>
            Ofrecemos <span className={`font-bold ${isDarkMode ? 'text-blue-400' : 'text-primary'}`}>soluciones integrales</span> de análisis de datos adaptadas a las necesidades 
            específicas de tu empresa, desde estudios de mercado hasta implementación de <span className={`font-bold ${isDarkMode ? 'text-blue-300' : 'text-secondary'}`}>big data</span>.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group backdrop-blur-sm rounded-2xl p-8 shadow-xl hover-lift border transition-all duration-500 hover-glow relative overflow-hidden ${
                isDarkMode 
                  ? 'bg-slate-800/80 border-slate-700/50 hover:border-blue-400/30' 
                  : 'bg-white/80 border-gray-200/50 hover:border-primary/30'
              }`}
            >
              {/* Efecto de fondo animado */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                isDarkMode 
                  ? 'bg-secondary/10' 
                  : 'bg-secondary/5'
              }`} />
              
              {/* Icon */}
              <div className="mb-8 relative z-10">
                <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-all duration-500 shadow-lg">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className={`text-2xl font-bold mb-4 transition-all duration-300 ${
                  isDarkMode ? 'text-white group-hover:text-secondary' : 'text-primary group-hover:text-secondary'
                }`}>
                  {service.title}
                </h3>
                
                <p className={`mb-8 leading-relaxed text-lg transition-colors duration-300 ${
                  isDarkMode 
                    ? 'text-slate-300 group-hover:text-slate-200' 
                    : 'text-gray-700 group-hover:text-gray-800'
                }`}>
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={`flex items-center transition-colors duration-300 ${
                      isDarkMode 
                        ? 'text-slate-400 group-hover:text-slate-300' 
                        : 'text-gray-600 group-hover:text-gray-700'
                    }`}>
                      <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20">
          <div className={`relative rounded-3xl p-12 md:p-16 text-white overflow-hidden shadow-2xl ${
            isDarkMode 
              ? 'bg-slate-800' 
              : 'bg-primary'
          }`}>
            {/* Efectos de fondo sutiles */}
            <div className="absolute inset-0 bg-white/5" />
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-float" />
            
            <div className="relative z-10 text-center">
              <h3 className="text-3xl md:text-4xl font-black mb-6 text-white">
                ¿Necesitas un servicio personalizado?
              </h3>
              <div className="w-50 h-1 bg-secondary mx-auto mb-8 rounded-full" />
              <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                Cada empresa es única. <span className="font-bold text-secondary">Contáctanos</span> para diseñar una solución de análisis de datos 
                específica para tus necesidades y objetivos.
              </p>
              <a
                href="#contacto"
                className="group inline-flex items-center bg-tertiary hover:bg-tertiary/90 text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-500 hover-lift hover-glow shadow-2xl relative overflow-hidden"
              >
                <span className="relative z-10">Solicitar Propuesta</span>
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
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
