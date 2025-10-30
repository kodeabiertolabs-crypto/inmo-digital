import { useState } from 'preact/hooks';
import PropertyDemo from './PropertyDemo';

// Preguntas frecuentes globales sobre setup y administración
const faqs = [
    {
        q: '¿Qué es el setup y en qué se diferencia de la administración?',
        a: 'El setup es el trabajo inicial de implementación (diseño, configuración, integraciones, SEO técnico, etc.). La administración es el trabajo mensual y continuo: mantenimiento, optimizaciones y operación día a día.'
    },
    {
        q: '¿El setup se paga una sola vez?',
        a: 'Sí, el setup es un pago único por implementación. En algunos servicios puede estar incluido el primer mes (por ejemplo, SEO básico), según lo indicado.'
    },
    {
        q: '¿La pauta publicitaria y herramientas están incluidas?',
        a: 'No. Los costos de pauta (Meta/Google) y herramientas (Email/WhatsApp/CRM) se cotizan por fuera y dependen de volumen y proveedor.'
    },
    {
        q: '¿Incluyen factura y ajustes por inflación?',
        a: 'Sí, emitimos factura y los valores están sujetos a ajuste periódico. Podemos ofrecer descuentos por contratación trimestral o semestral.'
    }
];

const services = [
	{
		icon: '🌐',
		title: 'Desarrollo Web Inmobiliario',
		description: 'Sitios web modernos con catálogo de propiedades, mapas interactivos y panel de administración.',
		features: ['Catálogo de propiedades', 'Mapas interactivos', 'Panel administrativo', 'Responsive design'],
		price: 'Desde ARS 180.000/mes',
		setupLabel: 'Setup desde ARS 1.800.000',
		setupDetails: [
			'Descubrimiento y arquitectura de contenidos',
			'Diseño UI y maquetado responsive',
			'Catálogo de propiedades con filtros y mapas',
			'Integraciones (formularios, WhatsApp, Analytics)',
			'SEO técnico inicial y configuración de dominio/SSL'
		],
		hasDemo: true // Nueva propiedad para identificar qué servicio tiene demo
	},
	{
		icon: '🚀',
		title: 'Optimización SEO',
		description: 'Mejora tu posicionamiento en Google y atrae más clientes potenciales.',
		features: ['Auditoría SEO completa', 'Optimización local', 'Link building', 'Reportes mensuales'],
		price: 'Desde ARS 170.000/mes',
		setupLabel: 'Setup incluido el primer mes',
		setupDetails: [
			'Auditoría técnica y on-page inicial',
			'Plan de keywords y contenidos',
			'Correcciones base de performance y metadatos'
		],
		//hasDemo: false
	},
	{
		icon: '🤖',
		title: 'Chatbot Inteligente',
		description: 'Atiende consultas 24/7 y captura leads automáticamente.',
		features: ['Respuestas automáticas', 'Calificación de leads', 'Integración CRM', 'Soporte multilenguaje'],
		price: 'Desde ARS 80.000/mes',
		setupLabel: 'Setup desde ARS 180.000',
		setupDetails: [
			'Diseño de flujos y entrenamiento',
			'Integración con WhatsApp/Widget web',
			'Conexión con CRM y pruebas de punta a punta'
		],
		hasDemo: false
	},
	{
		icon: '📱',
		title: 'Gestión de Redes Sociales',
		description: 'Contenido estratégico para Facebook, Instagram y TikTok.',
		features: ['Contenido semanal', 'Tours virtuales', 'Gestión de comentarios', 'Analítica avanzada'],
		price: 'Desde ARS 220.000/mes',
		setupLabel: 'Setup incluido (estrategia y lineamientos)',
		setupDetails: [
			'Estrategia y calendario base',
			'Lineamientos visuales y plantillas',
			'Configuración de perfiles y tracking'
		],
		hasDemo: false
	},
	{
		icon: '⭐',
		title: 'Gestión de Reseñas',
		description: 'Mejora tu reputación online y genera confianza con tus clientes.',
		features: ['Monitoreo de reseñas', 'Respuestas automatizadas', 'Reportes de satisfacción', 'Recuperación clientes'],
		price: 'Desde ARS 95.000/mes',
		setupLabel: 'Setup incluido (flujos y herramientas)',
		setupDetails: [
			'Configuración de herramientas',
			'Diseño de flujos post-visita/venta',
			'Plantillas de respuesta'
		],
		hasDemo: false
	},
	{
		icon: '📧',
		title: 'Email Marketing',
		description: 'Campañas automatizadas para nutrir leads y fidelizar clientes.',
		features: ['Newsletters mensuales', 'Secuencias automatizadas', 'Plantillas profesionales', 'Analítica de campañas'],
		price: 'Desde ARS 85.000/mes',
		setupLabel: 'Setup incluido (herramienta y plantillas)',
		setupDetails: [
			'Configuración de listas y autenticación de dominio (SPF/DKIM/DMARC)',
			'Plantillas y automatizaciones base',
			'Métricas y seguimiento'
		],
		hasDemo: false
	}
];

export default function Services() {
	const [showDemo, setShowDemo] = useState(false);
	const [selectedService, setSelectedService] = useState(null);
	const [openSetupIndex, setOpenSetupIndex] = useState(null);
	const [openFaqIndex, setOpenFaqIndex] = useState(null);

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

							<div class="flex justify-between items-center gap-3">
								<span class="text-lg font-semibold text-primary-600 dark:text-primary-400">
									{service.price}
								</span>
								<button
									type="button"
									onClick={() => setOpenSetupIndex(openSetupIndex === index ? null : index)}
									class="text-xs md:text-sm px-3 py-1 rounded-lg border border-primary-600 text-primary-600 hover:bg-primary-50 dark:border-primary-400 dark:text-primary-300 dark:hover:bg-gray-700 transition-colors"
									aria-expanded={openSetupIndex === index}
								>
									¿Qué incluye el setup?
								</button>
								{/*<button class="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
									Más Info
								</button>*/}
								{service.hasDemo && <button
									onClick={() => service.hasDemo ? handleDemoClick(service) : null}
									class={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${service.hasDemo
											? 'bg-primary-600 hover:bg-primary-700 text-white cursor-pointer'
											: 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
										}`}
								>
									{service.hasDemo ? 'Ver Demo' : 'Próximamente'}
								</button>}
							</div>

							{openSetupIndex === index && (
								<div class="mt-4 p-4 rounded-lg bg-white/60 dark:bg-gray-700/60 border border-gray-200 dark:border-gray-600 text-sm">
									{service.setupLabel && (
										<p class="font-semibold text-gray-800 dark:text-gray-200 mb-2">{service.setupLabel}</p>
									)}
									<ul class="list-disc ml-5 space-y-1 text-gray-700 dark:text-gray-300">
										{service.setupDetails && service.setupDetails.map((item, i) => (
											<li key={i}>{item}</li>
										))}
									</ul>
								</div>
							)}
						</div>
					))}
				</div>

				{/* Leyenda de precios y setup */}
				<div class="mt-8 text-sm text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-center">
					<p>Precios referenciales "Desde". Setup no incluido donde aplique. Valores sujetos a ajuste e impuestos.</p>
					<p class="mt-1">Setup Web desde ARS 1.800.000. Setup Chatbot desde ARS 180.000. Costos de pauta y herramientas (email/WhatsApp) se cotizan aparte.</p>
				</div>

				{/* FAQ global: Setup y Administración */}
				<div class="mt-12 max-w-3xl mx-auto">
					<h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">
						Preguntas frecuentes sobre setup y administración
					</h3>
					<div class="divide-y divide-gray-200 dark:divide-gray-700 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
						{faqs.map((item, idx) => (
							<div key={idx} class="bg-white dark:bg-gray-800">
								<button
									type="button"
									class="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700"
									onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
									aria-expanded={openFaqIndex === idx}
								>
									<span class="font-medium text-gray-800 dark:text-gray-200">{item.q}</span>
									<span class="text-gray-500 dark:text-gray-400">{openFaqIndex === idx ? '−' : '+'}</span>
								</button>
								{openFaqIndex === idx && (
									<div class="px-4 pb-4 text-gray-700 dark:text-gray-300 text-sm">
										{item.a}
									</div>
								)}
							</div>
						))}
					</div>
				</div>

				{/* Modal de Demo */}
				{showDemo && selectedService && (
					<PropertyDemo service={selectedService} onClose={closeDemo} />
				)}
			</div>
		</section>
	);
}