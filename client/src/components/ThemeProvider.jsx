import { useSelector } from 'react-redux';

export default function ThemeProvider({ children }) {
  const { theme } = useSelector((store) => store.theme);
  return (
    <div className={`${theme === 'light' ? 'bg-white text-gray-700' : 'dark:text-gray-800 dark:bg-[rgb(16,23,42)]'}`}>
      {children}
  </div>
  );
}