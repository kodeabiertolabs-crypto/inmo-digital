const properties = [
	{
	  id: 1,
	  image: 'https://images.unsplash.com/photo-1600585154340-9633f73f16d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
	  title: 'Casa Moderna en Bosque',
	  location: 'North Beverly Park, Los Angeles',
	  price: '$2,500,000',
	  beds: 5,
	  baths: 4,
	  sqft: 4200,
	  featured: true
	},
	{
	  id: 2,
	  image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
	  title: 'Penthouse con Vista al Mar',
	  location: 'Miami Beach, Florida',
	  price: '$1,800,000',
	  beds: 3,
	  baths: 3,
	  sqft: 2800,
	  featured: true
	},
	{
	  id: 3,
	  image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
	  title: 'Loft Industrial',
	  location: 'Williamsburg, Brooklyn',
	  price: '$950,000',
	  beds: 2,
	  baths: 2,
	  sqft: 1800,
	  featured: false
	},
	{
	  id: 4,
	  image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2092&q=80',
	  title: 'Villa Mediterránea',
	  location: 'Malibu, California',
	  price: '$3,200,000',
	  beds: 6,
	  baths: 5,
	  sqft: 5500,
	  featured: true
	}
  ];
  
  export default function FeaturedProperties() {
	return (
	  <section id="propiedades" class="py-20 bg-white dark:bg-gray-900">
		<div class="container mx-auto px-4">
		  <div class="text-center mb-16">
			<h2 class="text-4xl font-bold text-gray-800 dark:text-white mb-4 font-serif">
			  Propiedades Destacadas
			</h2>
			<p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
			  Descubre nuestras propiedades exclusivas seleccionadas cuidadosamente
			</p>
		  </div>
  
		  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
			{properties.map((property) => (
			  <div key={property.id} class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
				<div class="relative overflow-hidden">
				  <img 
					src={property.image} 
					alt={property.title}
					class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
				  />
				  {/* Badge Destacada en la imagen principal */}
				  {selectedProperty.featured && (
                  <div class="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Destacada
                  </div>
                )}
				  <div class="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
					<span class="text-lg">❤️</span>
				  </div>
				</div>
				
				<div class="p-6">
				  <div class="flex justify-between items-start mb-2">
					<h3 class="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-accent-600 transition-colors">
					  {property.title}
					</h3>
					<span class="text-2xl font-bold text-accent-600">{property.price}</span>
				  </div>
				  
				  <p class="text-gray-600 dark:text-gray-400 mb-4 flex items-center">
					<span class="mr-2">📍</span>
					{property.location}
				  </p>
				  
				  <div class="flex justify-between text-sm text-gray-600 dark:text-gray-400 border-t dark:border-gray-700 pt-4">
					<div class="flex items-center">
					  <span class="mr-1">🛏️</span>
					  {property.beds} hab.
					</div>
					<div class="flex items-center">
					  <span class="mr-1">🚿</span>
					  {property.baths} baños
					</div>
					<div class="flex items-center">
					  <span class="mr-1">📐</span>
					  {property.sqft} ft²
					</div>
				  </div>
				  
				  <button class="w-full mt-4 bg-gray-100 dark:bg-gray-700 hover:bg-accent-600 hover:text-white text-gray-800 dark:text-white font-semibold py-3 rounded-lg transition-all duration-300">
					Ver Detalles
				  </button>
				</div>
			  </div>
			))}
		  </div>
  
		  <div class="text-center mt-12">
			<button class="bg-accent-600 hover:bg-accent-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg">
			  Ver Todas las Propiedades
			</button>
		  </div>
		</div>
	  </section>
	);
  }