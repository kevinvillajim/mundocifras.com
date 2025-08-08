# MundoCifras Website

Sitio web corporativo para MundoCifras, consultora especializada en análisis de datos, big data e investigación de mercados en Quito, Ecuador.

## 🚀 Tecnologías

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4
- **Routing**: React Router DOM 7
- **Build Tool**: Vite
- **Animations**: CSS personalizado + Framer Motion

## 🎨 Paleta de Colores

- **Primary**: `#0e1f7a` (Azul corporativo)
- **Secondary**: `#4d8fc2` (Azul claro)
- **Tertiary**: `#bb8407` (Dorado/Naranja)

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navegación principal
│   │   └── Footer.tsx      # Pie de página
│   ├── sections/
│   │   ├── Hero.tsx        # Sección principal
│   │   ├── Services.tsx    # Servicios ofrecidos
│   │   ├── About.tsx       # Sobre la empresa
│   │   ├── Process.tsx     # Metodología de trabajo
│   │   ├── CaseStudies.tsx # Casos de éxito
│   │   ├── Testimonials.tsx# Testimonios de clientes
│   │   ├── FAQ.tsx         # Preguntas frecuentes
│   │   └── Contact.tsx     # Formulario de contacto
│   └── ui/
│       └── WhatsAppFloat.tsx # Botón flotante de WhatsApp
├── pages/
│   └── HomePage.tsx        # Página principal
├── routes/
│   └── AppRouter.tsx       # Configuración de rutas
└── styles/
    └── global.css          # Estilos globales y animaciones
```

## 🌟 Características

### Diseño y UX
- ✅ Diseño moderno y profesional
- ✅ Totalmente responsive (mobile-first)
- ✅ Animaciones fluidas y atractivas
- ✅ Navegación intuitiva con scroll suave
- ✅ Efectos hover y microinteracciones

### Funcionalidades
- ✅ Header con navegación sticky
- ✅ Menú móvil hamburguesa
- ✅ Sección hero con estadísticas animadas
- ✅ Showcase de 6 servicios principales
- ✅ Información corporativa detallada
- ✅ Metodología de trabajo paso a paso
- ✅ Casos de éxito con métricas
- ✅ Testimonios de clientes con carousel
- ✅ FAQ interactivo con acordeón
- ✅ Formulario de contacto funcional
- ✅ Botón flotante de WhatsApp
- ✅ Links a redes sociales

### Optimización
- ✅ Carga rápida con Vite
- ✅ Componentes reutilizables
- ✅ TypeScript para mayor robustez
- ✅ SEO friendly
- ✅ Accesibilidad mejorada

## 🚀 Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone [URL_DEL_REPO]

# Navegar al directorio
cd mundocifras.com

# Instalar dependencias
npm install
```

### Desarrollo
```bash
# Iniciar servidor de desarrollo
npm run dev

# El sitio estará disponible en http://localhost:5173
```

### Producción
```bash
# Generar build de producción
npm run build

# Previsualizar build
npm run preview
```

## 📱 Información de Contacto

- **Teléfono/WhatsApp**: +593 99 284 9687
- **Email**: eduardo.encalada@mundocifras.com
- **Ubicación**: Quito, Ecuador
- **Facebook**: [MundoCifras.ec](https://www.facebook.com/MundoCifras.ec)

## 🎯 Servicios Destacados

1. **Análisis Estadístico** - Procesamiento avanzado con técnicas modernas
2. **Big Data** - Gestión y análisis de grandes volúmenes
3. **Investigación de Mercados** - Estudios cuanti y cualitativos
4. **Brand Tracking** - Monitoreo de desempeño de marca
5. **Consultoría Estratégica** - Decisiones basadas en datos
6. **Evaluaciones Digitales** - Análisis de performance online

## 🔧 Personalización

### Colores
Los colores están definidos en `tailwind.config.js` y pueden modificarse fácilmente:

```javascript
colors: {
  primary: "#0e1f7a",    // Azul principal
  secondary: "#4d8fc2",  // Azul secundario
  tertiary: "#bb8407",   // Dorado/Naranja
}
```

### Animaciones
Las animaciones personalizadas están en `src/styles/global.css` y pueden ajustarse según las necesidades.

### Contenido
El contenido está hardcodeado en los componentes para optimizar la velocidad. Para un CMS, considerar integrar Strapi o Sanity.

## 📈 Próximas Mejoras

- [ ] Sistema de blog integrado
- [ ] Dashboard de cliente
- [ ] Calculadora de presupuestos
- [ ] Chat en vivo
- [ ] Integración con CRM
- [ ] Múltiples idiomas (ES/EN)

## 🤝 Soporte

Para soporte técnico o consultas sobre el desarrollo, contactar al equipo de desarrollo.

---

**MundoCifras** - Transformando datos en decisiones inteligentes 🚀
