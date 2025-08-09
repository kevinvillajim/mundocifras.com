/**
 * Utilidades para el manejo de temas
 */

export type Theme = 'light' | 'dark';

/**
 * Obtiene el tema actual del documento
 */
export const getCurrentTheme = (): Theme => {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
};

/**
 * Verifica si el modo oscuro está activo
 */
export const isDarkMode = (): boolean => {
  return getCurrentTheme() === 'dark';
};

/**
 * Obtiene el tema guardado en localStorage
 */
export const getSavedTheme = (): Theme | null => {
  return localStorage.getItem('theme') as Theme | null;
};

/**
 * Guarda el tema en localStorage
 */
export const saveTheme = (theme: Theme): void => {
  localStorage.setItem('theme', theme);
};

/**
 * Obtiene la preferencia del sistema
 */
export const getSystemTheme = (): Theme => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

/**
 * Aplica el tema al documento
 */
export const applyTheme = (theme: Theme): void => {
  document.documentElement.classList.remove('light', 'dark');
  document.documentElement.classList.add(theme);
  document.documentElement.setAttribute('data-theme', theme);
};

/**
 * Obtiene las clases CSS condicionales basadas en el tema
 */
export const getThemeClasses = (lightClasses: string, darkClasses: string): string => {
  return isDarkMode() ? darkClasses : lightClasses;
};

/**
 * Hook para detectar cambios en la preferencia del sistema
 */
export const watchSystemTheme = (callback: (theme: Theme) => void): (() => void) => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
  const handleChange = (e: MediaQueryListEvent) => {
    callback(e.matches ? 'dark' : 'light');
  };

  mediaQuery.addEventListener('change', handleChange);
  
  // Retornar función de limpieza
  return () => mediaQuery.removeEventListener('change', handleChange);
};