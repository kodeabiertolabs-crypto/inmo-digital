import { useState } from 'preact/hooks';

const demoProperties = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1600585154340-9633f73f16d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    title: 'Casa Moderna en Bosque',
    location: 'North Beverly Park, Los Angeles',
    price: '$2,500,000',
    beds: 5,
    baths: 4,
    sqft: 4200,
    description: 'Hermosa casa moderna con amplios espacios, acabados de lujo y ubicación privilegiada.',
    features: ['Piscina infinita', 'Cocina gourmet', 'Home theater', 'Gimnasio privado'],
    featured: false // ← AGREGADO
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
    description: 'Espectacular penthouse con vistas panorámicas al océano y acabados de primera calidad.',
    features: ['Terraza privada', 'Vista al mar', 'Concierge 24/7', 'Estacionamiento privado'],
    featured: true // ← AGREGADO
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
    description: 'Loft estilo industrial con espacios abiertos, techos altos y mucha personalidad.',
    features: ['Techos de 4m', 'Vigas expuestas', 'Ubicación céntrica', 'Cocina abierta'],
    featured: false // ← AGREGADO
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
	description: 'Villa Mediterránea con vistas panorámicas al océano y acabados de primera calidad.',
	features: ['Terraza privada', 'Vista al mar', 'Concierge 24/7', 'Estacionamiento privado'],
	featured: true
  }
];

export default function PropertyDemo({ service, onClose }) {
  const [selectedProperty, setSelectedProperty] = useState(demoProperties[0]);

  return (
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header del Modal */}
        <div class="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
          <div>
            <h2 class="text-2xl font-bold text-gray-800 dark:text-white">
              Demo: {service.title}
            </h2>
            <p class="text-gray-600 dark:text-gray-400">
              Así se vería el catálogo de propiedades en tu sitio web
            </p>
          </div>
          <button 
            onClick={onClose}
            class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <span class="text-2xl">×</span>
          </button>
        </div>

        {/* Contenido del Modal */}
        <div class="flex flex-col lg:flex-row h-[calc(90vh-80px)]">
          {/* Lista de Propiedades */}
          <div class="lg:w-1/3 border-r border-gray-200 dark:border-gray-700 overflow-y-auto">
            <div class="p-4 space-y-4">
              {demoProperties.map((property) => (
                <div 
                  key={property.id}
                  onClick={() => setSelectedProperty(property)}
                  class={`p-4 rounded-lg cursor-pointer transition-all relative ${
                    selectedProperty.id === property.id 
                      ? 'bg-blue-50 dark:bg-blue-900 border-2 border-blue-500' 
                      : 'bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:border-blue-300'
                  }`}
                >
                  {/* Badge Destacada en la lista */}
                  {property.featured && (
                    <div class="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Destacada
                    </div>
                  )}
                  
                  <div class="flex space-x-4">
                    <img 
                      src={property.image} 
                      alt={property.title}
                      class="w-20 h-20 object-cover rounded-lg"
                    />
                    <div class="flex-1">
                      <h3 class="font-semibold text-gray-800 dark:text-white">
                        {property.title}
                      </h3>
                      <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        {property.location}
                      </p>
                      <p class="text-lg font-bold text-blue-600 dark:text-blue-400">
                        {property.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detalle de Propiedad Seleccionada */}
          <div class="lg:w-2/3 overflow-y-auto">
            <div class="p-6">
              <div class="relative">
                <img 
                  src={selectedProperty.image} 
                  alt={selectedProperty.title}
                  class="w-full h-64 lg:h-80 object-cover rounded-lg mb-6"
                />
                
                {/* Badge Destacada en la imagen principal */}
                {selectedProperty.featured && (
                  <div class="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Destacada
                  </div>
                )}
              </div>
              
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Información Principal */}
                <div>
                  <div class="flex items-center gap-3 mb-2">
                    <h3 class="text-2xl font-bold text-gray-800 dark:text-white">
                      {selectedProperty.title}
                    </h3>
                    {/* Badge Destacada junto al título (opcional) */}
                    {selectedProperty.featured && (
                      <span class="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        Destacada
                      </span>
                    )}
                  </div>
                  
                  <p class="text-gray-600 dark:text-gray-400 mb-4 flex items-center">
                    <span class="mr-2">📍</span>
                    {selectedProperty.location}
                  </p>
                  <p class="text-gray-700 dark:text-gray-300 mb-6">
                    {selectedProperty.description}
                  </p>
                  
                  <div class="grid grid-cols-3 gap-4 mb-6">
                    <div class="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div class="text-2xl">🛏️</div>
                      <div class="font-semibold text-gray-800 dark:text-white">{selectedProperty.beds}</div>
                      <div class="text-sm text-gray-600 dark:text-gray-400">Habitaciones</div>
                    </div>
                    <div class="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div class="text-2xl">🚿</div>
                      <div class="font-semibold text-gray-800 dark:text-white">{selectedProperty.baths}</div>
                      <div class="text-sm text-gray-600 dark:text-gray-400">Baños</div>
                    </div>
                    <div class="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div class="text-2xl">📐</div>
                      <div class="font-semibold text-gray-800 dark:text-white">{selectedProperty.sqft}</div>
                      <div class="text-sm text-gray-600 dark:text-gray-400">ft²</div>
                    </div>
                  </div>
                </div>

                {/* Características y CTA */}
                <div>
                  <div class="bg-blue-50 dark:bg-blue-900 rounded-lg p-6 mb-6">
                    <div class="flex items-center justify-between mb-4">
                      <h4 class="text-xl font-bold text-gray-800 dark:text-white">
                        {selectedProperty.price}
                      </h4>
                      {selectedProperty.featured && (
                        <span class="bg-red-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                          ⭐ Oportunidad
                        </span>
                      )}
                    </div>
                    <button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors mb-4">
                      Solicitar Información
                    </button>
                    <button class="w-full border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-semibold py-3 px-6 rounded-lg transition-colors hover:bg-blue-50 dark:hover:bg-blue-800">
                      Agendar Visita
                    </button>
                  </div>

                  <div>
                    <h4 class="font-semibold text-gray-800 dark:text-white mb-3">Características</h4>
                    <div class="grid grid-cols-2 gap-2">
                      {selectedProperty.features.map((feature, index) => (
                        <div key={index} class="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <span class="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sección especial para propiedades destacadas */}
                  {selectedProperty.featured && (
                    <div class="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900 border border-yellow-200 dark:border-yellow-700 rounded-lg">
                      <div class="flex items-center">
                        <span class="text-yellow-600 dark:text-yellow-400 text-lg mr-2">⚡</span>
                        <span class="text-yellow-800 dark:text-yellow-200 font-medium text-sm">
                          Propiedad destacada - Alto interés de compradores
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Sección de Características del Servicio */}
              <div class="mt-8 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 class="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                  Características incluidas en {service.title}:
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} class="flex items-center">
                      <span class="text-green-500 mr-3">✓</span>
                      <span class="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer del Modal */}
        <div class="flex justify-between items-center p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700">
          <p class="text-gray-600 dark:text-gray-400">
            ¿Te gustaría tener un sitio web como este para tu inmobiliaria?
          </p>
          <div class="flex space-x-4">
            <button 
              onClick={onClose}
              class="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
            >
              Cerrar
            </button>
            <button class="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              Solicitar Cotización
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}