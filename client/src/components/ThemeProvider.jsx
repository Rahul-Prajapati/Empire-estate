import { useSelector } from 'react-redux';

export default function ThemeProvider({ children }) {
  const { theme } = useSelector((store) => store.theme);
  return (
    <div className={`${theme === 'light' ? 'bg-white text-gray-700 max-h-screen min-h-screen' : 'dark:text-gray-800 dark:bg-[rgb(16,23,42)] max-h-screen min-h-screen'}`}>
      {children}
  </div>
  );
}