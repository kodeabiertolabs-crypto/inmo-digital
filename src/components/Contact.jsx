import { useState } from 'preact/hooks';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Gracias por tu interés! Te contactaremos pronto.');
    setFormData({ name: '', email: '', service: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" class="py-20 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Comienza Tu Transformación Digital
            </h2>
            <p class="text-xl text-gray-600 dark:text-gray-300">
              Contáctanos para una consultoría gratuita
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-12">
            <div>
              <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Información de Contacto
              </h3>
              
              <div class="space-y-4">
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                    <span class="text-primary-600 dark:text-primary-400">📧</span>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-800 dark:text-white">Email</p>
                    <p class="text-gray-600 dark:text-gray-300">info@inmobiliariadigital.com</p>
                  </div>
                </div>

                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                    <span class="text-primary-600 dark:text-primary-400">📱</span>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-800 dark:text-white">WhatsApp</p>
                    <p class="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            <form name="contactoInmobiliario"  method="POST" data-netlify="true" class="space-y-6">
              <input type="hidden" name="form-name" value="contactoInmobiliario" /> 
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label for="service" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Servicio de Interés
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="web">Desarrollo Web</option>
                  <option value="seo">Optimización SEO</option>
                  <option value="chatbot">Chatbot</option>
                  <option value="social">Redes Sociales</option>
                  <option value="reviews">Gestión de Reseñas</option>
                  <option value="email">Email Marketing</option>
                </select>
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                  placeholder="Cuéntanos sobre tu inmobiliaria..."
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full btn-primary text-lg"
              >
                Solicitar Consultoría Gratuita
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}