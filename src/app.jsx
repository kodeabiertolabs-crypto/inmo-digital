import { useState } from 'preact/hooks';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Contact from './components/Contact';

export function App() {
	return (
		<div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
			<Header />
			<Hero />
			<Services />
			<Benefits />
			<Contact />

			<footer class="bg-gray-800 dark:bg-gray-900 text-white py-8">
				<div class="container mx-auto px-4 text-center">
					<p>&copy; 2025 Inmobiliaria Digital Services. Todos los derechos reservados.</p>
					<p class="text-gray-400 mt-2">Transformando inmobiliarias con soluciones digitales</p>
				</div>
			</footer>
		</div>
	);
}