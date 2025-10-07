import { useState } from 'preact/hooks';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header class="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50">
      <div class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center space-x-2">
            <div class="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-lg">ID</span>
            </div>
            <span class="text-xl font-bold text-gray-800 dark:text-white">
              Inmobiliaria Digital
            </span>
          </div>

          <nav class="hidden md:flex space-x-8">
            {['Servicios', 'Beneficios', 'Contacto'].map((item) => (
              <a 
                href={`#${item.toLowerCase()}`}
                class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div class="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              class="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
            >
              ☰
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div class="md:hidden mt-4 pb-4 border-t dark:border-gray-700 pt-4">
            <nav class="flex flex-col space-y-4">
              {['Servicios', 'Beneficios', 'Contacto'].map((item) => (
                <a 
                  href={`#${item.toLowerCase()}`}
                  class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}