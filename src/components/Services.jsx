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

const Zap = (props) => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
		<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
	</svg>
);

const Robot = (props) => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
		<path d="M7 7h.01" />
		<path d="M17 7h.01" />
		<rect x="2" y="5" width="20" height="14" rx="2" />
		<path d="M10 17s.5-2 2-2 2 2 2 2" />
	</svg>
);

const TrendingUp = (props) => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
	  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
	  <polyline points="16 7 22 7 22 13" />
	</svg>
  );

const Phone = (props) => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
		<path d="M23 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6l-2 1v-2a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v2h-2a2 2 0 0 1-2-2v-14a2 2 0 0 1 2-2h18z" />
		<polyline points="17 8 12 12 7 8" />
	</svg>
);


// 5. Gestión de Reseñas
const Star = (props) => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
	  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
	</svg>
  );

const Email = (props) => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
		<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
		<polyline points="22 6 12 12 2 6" />
	</svg>
);
// 6. Email Marketing
const Mail = (props) => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
	  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
	  <polyline points="22,6 12,13 2,6" />
	</svg>
  );

// 4. Gestión de Redes Sociales
const Share2 = (props) => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
	  <circle cx="18" cy="5" r="3" />
	  <circle cx="6" cy="12" r="3" />
	  <circle cx="18" cy="19" r="3" />
	  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
	  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
	</svg>
  );

const servicesData = [
	{
		icon: Zap, //'🌐',
		title: '1. Plataforma Web Optimizada',
		description: 'Desarrollo de un sitio web de alto rendimiento. Enfocado en generar leads calificados desde el primer día con una experiencia de usuario superior.',
		features: ['Catálogo de propiedades', 'Mapas interactivos', 'Panel administrativo', 'Responsive design'],
		price: 'Desde ARS $680.000',
		note: "Pago Único (Proyecto + Setup)",
		setupLabel: 'Setup desde ARS $170.000',
		setupDetails: [
			'Descubrimiento y arquitectura de contenidos',
			'Diseño UI y maquetado responsive',
			'Catálogo de propiedades con filtros y mapas',
			'Integraciones (formularios, WhatsApp, Analytics)',
			'SEO técnico inicial y configuración de dominio/SSL'
		],
		hasDemo: true, // Nueva propiedad para identificar qué servicio tiene demo
		color: "bg-indigo-500",
		colorDark: "dark:bg-indigo-600"
	},
	{
		icon: Robot, //'🤖',
		title: '2. Asistentes Inteligentes 24/7 (IA)',
		description: 'Asistentes inteligentes que responden consultas, filtran y clasifican leads automáticamente, asegurando que ningún cliente potencial se pierda (incluso de madrugada).',
		features: ['Respuestas automáticas', 'Calificación de leads', 'Integración CRM', 'Soporte multilenguaje'],
		price: 'Desde ARS $120.000/mes',
		note: "Plan Mensual + Setup",
		setupLabel: 'Setup desde ARS $150.000',
		setupDetails: [
			'Configuración de la plataforma del Chatbot.',
			'Integración con la web (widget de chat).',
			'Entrenamiento del modelo IA con preguntas frecuentes y catálogo inicial.',
			'Desarrollo de la lógica de clasificación de leads.'
		],
		
		hasDemo: false,
		color: "bg-green-500",
		colorDark: "dark:bg-green-600"
	},
	{
		icon: TrendingUp, //'🚀',
		title: '3. Marketing de Crecimiento Acelerado',//'Optimización SEO',
		description: 'Estrategias de captación (SEO y Publicidad Paga) para generar tráfico calificado y constante, asegurando visibilidad y un flujo estable de leads en Buenos Aires.',
		features: ['Auditoría SEO completa', 'Optimización local', 'Link building', 'Reportes mensuales'],
		price: 'Desde ARS $180.000/mes',
		note: "Plan Mensual + Setup",
		setupLabel: 'Setup desde ARS $120.000',
		setupDetails: [			
			'Auditoría SEO y de competencia.',
			'Definición de la estrategia de palabras clave y audiencias (Buyer Persona).',
			'Creación y configuración de las cuentas publicitarias (Meta/Google Ads).',
			'Diseño de dashboards y métricas de seguimiento.'
		],
		color: "bg-purple-500",
		colorDark: "dark:bg-purple-600"
		//hasDemo: false
	},	
	{
		icon: Share2, //'📱',
		title: '4. Gestión de Redes Sociales',
		description: 'Creación de contenido estratégico y publicaciones optimizadas para Facebook, Instagram y TikTok, convirtiendo la presencia social en una fuente recurrente de consultas y autoridad.',
		features: ['Contenido semanal', 'Tours virtuales', 'Gestión de comentarios', 'Analítica avanzada'],
		price: 'Desde ARS $150.000/mes',
		note: "Plan Mensual + Setup",
		setupLabel: 'Setup desde ARS $90.000',
		setupDetails: [			
			'Auditoría y optimización de perfiles (Bio, destacados, branding).',
			'Definición del calendario editorial y pilares de contenido.',
			'Desarrollo de plantillas de diseño personalizadas.',
			'Configuración de la herramienta de publicación programada.'
		],
		hasDemo: false,
		color: "bg-blue-500",
		colorDark: "dark:bg-blue-600"
	},
	{
		icon: Star, //'⭐',
		title: '5. Gestión de Reseñas y Reputación',
		description: 'Estrategias activas para captar reseñas positivas de clientes satisfechos. Mejora tu reputación online en Google y aumenta la confianza antes de que el cliente te contacte.',
		features: ['Monitoreo de reseñas', 'Respuestas automatizadas', 'Reportes de satisfacción', 'Recuperación clientes'],
		price: 'Desde ARS $90.000/mes',
		note: "Plan Mensual + Setup",
		setupLabel: 'Setup desde ARS $70.000',
		setupDetails: [
			'Configuración de herramientas',
			'Diseño de flujos post-visita/venta',
			'Plantillas de respuesta'
		],
		hasDemo: false,
		color: "bg-yellow-500",
		colorDark: "dark:bg-yellow-600"
	},
	{
		icon: Mail, //'📧',
		title: '6. Email Marketing Automatizado',
		description: 'Diseño e implementación de campañas de correo electrónico que nutren (educan) a los leads. Fideliza clientes y genera oportunidades de venta repetida de forma automática.',
		features: ['Newsletters mensuales', 'Secuencias automatizadas', 'Plantillas profesionales', 'Analítica de campañas'],
		price: 'Desde ARS $100.000/mes',
		note: "Plan Mensual + Setup",
		setupLabel: 'Setup desde ARS $80.000',
		setupDetails: [
			'Configuración de listas y autenticación de dominio (SPF/DKIM/DMARC)',
			'Plantillas y automatizaciones base',
			'Métricas y seguimiento'
		],
		hasDemo: false,
		color: "bg-red-500",
		colorDark: "dark:bg-red-600"
	}
];

// Componente individual de la tarjeta de servicio
const ServiceCard = ({ icon: Icon, title, description, price, note, color, colorDark, index, 
	openSetupIndex, setOpenSetupIndex, setupLabel, setupDetails, hasDemo, service, handleDemoClick }) => {
	return (
	  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-2xl transition-all duration-300 hover:shadow-indigo-500/30 dark:hover:shadow-indigo-400/20 transform hover:scale-[1.02] border border-gray-100 dark:border-gray-700">
		<div className={`w-12 h-12 ${color} ${colorDark} text-white rounded-full flex items-center justify-center mb-4`}>
		  <Icon className="w-6 h-6" />
		</div>
		<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
		<p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
		
		<div class="flex justify-between items-center gap-3">
			<div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
				<p className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">{price}</p>
				<p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{note}</p>
			</div>
			<div>
				<button
					type="button"
					onClick={() => setOpenSetupIndex(openSetupIndex === index ? null : index)}
					class="text-xs md:text-sm px-3 py-1 rounded-lg border border-primary-600 text-primary-600 hover:bg-primary-50 dark:border-primary-400 dark:text-primary-300 dark:hover:bg-gray-700 transition-colors"
					aria-expanded={openSetupIndex === index}
				>
					¿Qué incluye el setup?
				</button>
			</div>
			{hasDemo && <button
				onClick={() => hasDemo ? handleDemoClick(service) : null}
				class={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${hasDemo
					? 'bg-primary-600 hover:bg-primary-700 text-white cursor-pointer'
					: 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
					}`}
			>
				{hasDemo ? 'Ver Demo' : 'Próximamente'}
			</button>}
		</div>
			{openSetupIndex === index && (
				<div class="mt-4 p-4 rounded-lg bg-white/60 dark:bg-gray-700/60 border border-gray-200 dark:border-gray-600 text-sm">
					{setupLabel && (
						<p class="font-semibold text-gray-800 dark:text-gray-200 mb-2">{setupLabel}</p>
					)}
					<ul class="list-disc ml-5 space-y-1 text-gray-700 dark:text-gray-300">
						{setupDetails && setupDetails.map((item, i) => (
							<li key={i}>{item}</li>
						))}
					</ul>
				</div>
			)}
	  </div>
	);
  };

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
		<section id="servicios" className="py-20 bg-gray-50 dark:bg-gray-900">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-base font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase">Nuestra Estrategia 360</h2>
					<p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
						La fórmula para el crecimiento de tu inmobiliaria
					</p>
					<p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
						Combinamos tecnología de punta con experiencia en el mercado de Buenos Aires para asegurar un flujo constante de leads calificados.
					</p>					
				</div>

				<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
					{servicesData.map((service, index) => (
						<ServiceCard
							key={index}
							index={index}
							icon={service.icon}
							title={service.title}
							description={service.description}
							price={service.price}
							note={service.note}
							color={service.color}
							colorDark={service.colorDark}
							openSetupIndex={openSetupIndex}
							setOpenSetupIndex={setOpenSetupIndex}
							setupLabel={service.setupLabel}
							setupDetails={service.setupDetails}
							hasDemo={service.hasDemo}
							service={service}
							handleDemoClick={handleDemoClick}
						/>
					))}
					{/*servicesData.map((service, index) => (
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
					))}*/}
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