import { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

// Creamos y exportamos el proveedor de tema personalizado
export const CustomThemeProvider = ({ children }) => {
    // Estado para el tema, por defecto 'light'
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  
    // Efecto para actualizar el atributo 'data-theme' y el localStorage cuando cambia el tema
    useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }, [theme]);
  
    // Función para alternar entre 'light' y 'dark'
    const toggleTheme = () => {
      setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };
  
    // Proporcionamos el valor del contexto
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };

CustomThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };