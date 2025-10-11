import { useState } from 'preact/hooks';
import PropertyDemo from './PropertyDemo';

const services = [
	{
		icon: '🌐',
		title: 'Desarrollo Web Inmobiliario',
		description: 'Sitios web modernos con catálogo de propiedades, mapas interactivos y panel de administración.',
		features: ['Catálogo de propiedades', 'Mapas interactivos', 'Panel administrativo', 'Responsive design'],
		price: 'Desde $249/mes',
		hasDemo: true // Nueva propiedad para identificar qué servicio tiene demo
	},
	{
		icon: '🚀',
		title: 'Optimización SEO',
		description: 'Mejora tu posicionamiento en Google y atrae más clientes potenciales.',
		features: ['Auditoría SEO completa', 'Optimización local', 'Link building', 'Reportes mensuales'],
		price: 'Desde $199/mes',
		hasDemo: false
	},
	{
		icon: '🤖',
		title: 'Chatbot Inteligente',
		description: 'Atiende consultas 24/7 y captura leads automáticamente.',
		features: ['Respuestas automáticas', 'Calificación de leads', 'Integración CRM', 'Soporte multilenguaje'],
		price: 'Desde $99/mes',
		hasDemo: false
	},
	{
		icon: '📱',
		title: 'Gestión de Redes Sociales',
		description: 'Contenido estratégico para Facebook, Instagram y TikTok.',
		features: ['Contenido semanal', 'Tours virtuales', 'Gestión de comentarios', 'Analítica avanzada'],
		price: 'Desde $299/mes',
		hasDemo: false
	},
	{
		icon: '⭐',
		title: 'Gestión de Reseñas',
		description: 'Mejora tu reputación online y genera confianza con tus clientes.',
		features: ['Monitoreo de reseñas', 'Respuestas automatizadas', 'Reportes de satisfacción', 'Recuperación clientes'],
		price: 'Desde $149/mes',
		hasDemo: false
	},
	{
		icon: '📧',
		title: 'Email Marketing',
		description: 'Campañas automatizadas para nutrir leads y fidelizar clientes.',
		features: ['Newsletters mensuales', 'Secuencias automatizadas', 'Plantillas profesionales', 'Analítica de campañas'],
		price: 'Desde $79/mes',
		hasDemo: false
	}
];

export default function Services() {
	const [showDemo, setShowDemo] = useState(false);
	const [selectedService, setSelectedService] = useState(null);

	const handleDemoClick = (service) => {
		setSelectedService(service);
		setShowDemo(true);
	};

	const closeDemo = () => {
		setShowDemo(false);
		setSelectedService(null);
	};

	return (
		<section id="servicios" class="py-20 bg-white dark:bg-gray-900">
			<div class="container mx-auto px-4">
				<div class="text-center mb-16">
					<h2 class="text-4xl font-bold text-gray-800 dark:text-white mb-4">
						Nuestros Servicios
					</h2>
					<p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
						Soluciones completas diseñadas específicamente para el sector inmobiliario
					</p>
				</div>

				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<div key={index} class="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
							<div class="text-4xl mb-4">{service.icon}</div>
							<h3 class="text-xl font-bold text-gray-800 dark:text-white mb-3">
								{service.title}
							</h3>
							<p class="text-gray-600 dark:text-gray-300 mb-4">
								{service.description}
							</p>

							<ul class="space-y-2 mb-6">
								{service.features.map((feature, idx) => (
									<li key={idx} class="flex items-center text-sm text-gray-600 dark:text-gray-400">
										<span class="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
										{feature}
									</li>
								))}
							</ul>

							<div class="flex justify-between items-center">
								<span class="text-lg font-semibold text-primary-600 dark:text-primary-400">
									{service.price}
								</span>
								{/*<button class="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
									Más Info
								</button>*/}
								<button
									onClick={() => service.hasDemo ? handleDemoClick(service) : null}
									class={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${service.hasDemo
											? 'bg-primary-600 hover:bg-primary-700 text-white cursor-pointer'
											: 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
										}`}
								>
									{service.hasDemo ? 'Ver Demo' : 'Próximamente'}
								</button>
							</div>
						</div>
					))}
				</div>

				{/* Modal de Demo */}
				{showDemo && selectedService && (
					<PropertyDemo service={selectedService} onClose={closeDemo} />
				)}
			</div>
		</section>
	);
}