import { useState, useEffect } from 'preact/hooks';
import './index.css';

// Componente para los iconos (simulados con SVG sencillos o texto)
const Icon = ({ children, className = "" }) => (
	<div className={`p-3 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 ${className}`}>
		{children}
	</div>
);

// Componente individual de Servicio
const ServiceCard = ({ title, description, icon }) => (
	<div class="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
		<Icon>{icon}</Icon>
		<h3 class="mt-4 text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
		<p class="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
	</div>
);

export function App() {
	const [isDark, setIsDark] = useState(false);

	// Efecto para aplicar la clase 'dark' al body al cambiar el estado
	useEffect(() => {
		document.body.classList.toggle('dark', isDark);
	}, [isDark]);

	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">

			{/* -------------------- HEADER & NAV -------------------- */}
			<header className="sticky top-0 z-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md">
				<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
					<h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
						Digital Inmobiliario 🚀
					</h1>
					<button
						onClick={() => setIsDark(!isDark)}
						className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors"
						aria-label="Toggle Dark Mode"
					>
						{isDark ? '☀️' : '🌙'}
					</button>
				</nav>
			</header>

			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

				{/* -------------------- SECCIÓN INTRO -------------------- */}
				<section className="text-center py-16">
					<h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
						Estrategia Digital para Inmobiliarias
					</h2>
					<p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
						Identificamos oportunidades de crecimiento en Google Maps y ofrecemos soluciones web modernas y efectivas para captar más clientes.
					</p>
				</section>

				{/* -------------------- SECCIÓN SERVICIOS -------------------- */}
				<section className="py-12">
					<h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">Nuestros Servicios Clave</h3>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

						{/* Servicio 1: Creación de Sitio Web (Para Candidatos sin Web) */}
						<ServiceCard
							title="Creación de Sitio Web A1"
							description="Diseño moderno, catálogo de propiedades con mapeo, intranet de administración y hosting incluido."
							icon="💻"
						/>

						{/* Servicio 2: Optimización SEO (Para Candidatos con Baja Puntuación/Ranking) */}
						<ServiceCard
							title="Optimización Web y SEO"
							description="Mejoramos tu posicionamiento en Google, optimizamos la velocidad de carga y actualizamos el diseño con tecnologías modernas."
							icon="📈"
						/>

						{/* Servicio 3: Chatbot y Automatización */}
						<ServiceCard
							title="Implementación de Chatbot"
							description="Atención al cliente 24/7. Califica leads, responde preguntas frecuentes y no pierdas consultas fuera de horario."
							icon="🤖"
						/>

						{/* Servicio 4: Gestión de Reputación */}
						<ServiceCard
							title="Gestión de Reputación y Reseñas"
							description="Estrategias para mejorar tu puntuación en Google Maps y gestionar activamente todas las reseñas online."
							icon="⭐️"
						/>

						{/* Servicio 5: Community Management */}
						<ServiceCard
							title="Difusión en Redes Sociales"
							description="Creación de contenido atractivo (YouTube/TikTok) y gestión completa de tus perfiles (Community Management)."
							icon="📱"
						/>

						{/* Servicio 6: Hosting y Mantenimiento */}
						<ServiceCard
							title="Mantenimiento y Hosting Premium"
							description="Alojamiento de alta velocidad, seguimiento de analíticas, copias de seguridad diarias y soporte técnico mensual."
							icon="⚙️"
						/>

					</div>
				</section>

			</main>

			{/* -------------------- FOOTER -------------------- */}
			<footer className="mt-12 py-8 border-t border-gray-200 dark:border-gray-700 text-center">
				<p className="text-sm text-gray-500 dark:text-gray-400">
					© {new Date().getFullYear()} Digital Inmobiliario. Todos los derechos reservados.
				</p>
			</footer>

		</div>
	);
}