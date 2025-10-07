const benefits = [
	{
	  number: '+40%',
	  title: 'Aumento en Leads',
	  description: 'Incremento promedio en leads calificados'
	},
	{
	  number: '24/7',
	  title: 'Disponibilidad',
	  description: 'Tu negocio siempre disponible para clientes'
	},
	{
	  number: '#1',
	  title: 'Posicionamiento',
	  description: 'Mejora en resultados de búsqueda local'
	},
	{
	  number: '5x',
	  title: 'Más Visibilidad',
	  description: 'Aumento en presencia digital'
	}
  ];
  
  export default function Benefits() {
	return (
	  <section id="beneficios" class="py-20 bg-gray-50 dark:bg-gray-800">
		<div class="container mx-auto px-4">
		  <div class="text-center mb-16">
			<h2 class="text-4xl font-bold text-gray-800 dark:text-white mb-4">
			  Resultados Comprobados
			</h2>
			<p class="text-xl text-gray-600 dark:text-gray-300">
			  Métricas reales de inmobiliarias que han transformado su negocio
			</p>
		  </div>
  
		  <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
			{benefits.map((benefit, index) => (
			  <div key={index} class="text-center">
				<div class="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">
				  {benefit.number}
				</div>
				<h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-2">
				  {benefit.title}
				</h3>
				<p class="text-gray-600 dark:text-gray-300 text-sm">
				  {benefit.description}
				</p>
			  </div>
			))}
		  </div>
		</div>
	  </section>
	);
  }