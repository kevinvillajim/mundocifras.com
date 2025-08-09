import { useTheme } from '../contexts/ThemeContext';

/**
 * Hook personalizado para obtener clases CSS condicionales basadas en el tema
 */
export const useThemeClass = () => {
  const { isDarkMode, theme } = useTheme();

  /**
   * Retorna las clases CSS apropiadas basadas en el tema actual
   */
  const getThemeClass = (lightClass: string, darkClass: string): string => {
    return isDarkMode ? darkClass : lightClass;
  };

  /**
   * Retorna clases CSS para texto
   */
  const getTextClass = (base = 'text-gray-900', dark = 'dark:text-white'): string => {
    return `${base} ${dark}`;
  };

  /**
   * Retorna clases CSS para fondos
   */
  const getBgClass = (base = 'bg-white', dark = 'dark:bg-slate-900'): string => {
    return `${base} ${dark}`;
  };

  /**
   * Retorna clases CSS para bordes
   */
  const getBorderClass = (base = 'border-gray-200', dark = 'dark:border-slate-700'): string => {
    return `${base} ${dark}`;
  };

  /**
   * Retorna clases CSS para botones primarios
   */
  const getPrimaryButtonClass = (): string => {
    return getThemeClass(
      'bg-primary hover:bg-blue-800 text-white',
      'bg-blue-600 hover:bg-blue-700 text-white'
    );
  };

  /**
   * Retorna clases CSS para botones secundarios
   */
  const getSecondaryButtonClass = (): string => {
    return getThemeClass(
      'border-2 border-primary text-primary hover:bg-primary hover:text-white',
      'border-2 border-blue-400 text-blue-400 hover:bg-blue-600 hover:text-white hover:border-blue-600'
    );
  };

  /**
   * Retorna clases CSS para cards/tarjetas
   */
  const getCardClass = (): string => {
    return getBgClass('bg-white', 'dark:bg-slate-800') + ' ' + 
           getBorderClass('border-gray-100', 'dark:border-slate-700');
  };

  /**
   * Retorna clases CSS para inputs
   */
  const getInputClass = (): string => {
    return getBgClass('bg-white', 'dark:bg-slate-800') + ' ' +
           getBorderClass('border-gray-300', 'dark:border-slate-600') + ' ' +
           getTextClass('text-gray-900', 'dark:text-white') + ' ' +
           'focus:ring-2 focus:ring-secondary dark:focus:ring-blue-500 focus:border-transparent';
  };

  /**
   * Retorna clases CSS para efectos glassmorphism
   */
  const getGlassClass = (): string => {
    return getThemeClass(
      'glass-dropdown',
      'glass-dropdown-dark'
    );
  };

  return {
    isDarkMode,
    theme,
    getThemeClass,
    getTextClass,
    getBgClass,
    getBorderClass,
    getPrimaryButtonClass,
    getSecondaryButtonClass,
    getCardClass,
    getInputClass,
    getGlassClass,
  };
};