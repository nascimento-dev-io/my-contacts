import { useCallback, useEffect, useState } from 'react';
import themes from '../assets/styles/themes';

export default function useTheme() {
  const [theme, setTheme] = useState('light');
  const [current, setCurrent] = useState(themes[theme]);

  const handleToggleTheme = useCallback(() => {
    setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'));
  }, []);

  useEffect(() => {
    setCurrent(themes[theme]);
  }, [theme]);

  return { theme, current, handleToggleTheme };
}
