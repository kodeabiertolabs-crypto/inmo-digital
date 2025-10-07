export default function Hero() {
	return (
	  <section class="bg-gradient-to-br from-primary-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 py-20">
		<div class="container mx-auto px-4 text-center">
		  <h1 class="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
			Transforma tu inmobiliaria
			<span class="block text-primary-600 dark:text-primary-400">con soluciones digitales</span>
		  </h1>
		  
		  <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
			Desarrollamos tu presencia digital completa: sitios web modernos, optimización SEO, 
			chatbots inteligentes y gestión de redes sociales para potenciar tu negocio.
		  </p>
		  
		  <div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a href="#contacto" class="btn-primary text-lg">
			  Comenzar Ahora
			</a>
			<a href="#servicios" class="bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-2 border-primary-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
			  Ver Servicios
			</a>
		  </div>
		</div>
	  </section>
	);
  }