import { useState, useEffect } from 'preact/hooks';

// Función auxiliar para codificar los datos del formulario al formato esperado por Netlify (URL-encoded)
const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function Contact() {  

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [touched, setTouched] = useState({}); // Nuevo: campos tocados

  // Ocultar mensaje de éxito automáticamente después de 5 segundos
  useEffect(() => {
    if (submitStatus === 'success') {
      const timer = setTimeout(() => setSubmitStatus(''), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  // Validación individual por campo
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'El nombre es requerido';
        if (value.trim().length < 2) return 'El nombre debe tener al menos 2 caracteres';
        return '';
      
      case 'email':
        if (!value.trim()) return 'El email es requerido';
        if (!/\S+@\S+\.\S+/.test(value)) return 'Email inválido';
        return '';
      
      case 'message':
        if (!value.trim()) return 'El mensaje es requerido';
        if (value.trim().length < 10) return 'El mensaje debe tener al menos 10 caracteres';
        return '';
      
      default:
        return '';
    }
  };

  // Validación completa (para submit)
  const validateForm = () => {
    const newErrors = {};
    
    Object.keys(formData).forEach(key => {
      if (key !== 'service') { // service no es requerido
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      }
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

     // Marcar todos los campos como tocados al intentar enviar
     const allTouched = {};
     Object.keys(formData).forEach(key => {
       allTouched[key] = true;
     });
     setTouched(allTouched);

    // Validación final antes de enviar
    if (!validateForm()) {
      // Scroll al primer error
      const firstError = document.querySelector('[class*="border-red-500"]');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }    

    setIsSubmitting(true);

    try {
      const body = new URLSearchParams(new FormData(form)).toString();
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body
      });
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', service: '', message: '' });
        setErrors({});
        setTouched({});
        form.reset();
      } else {
        setSubmitStatus('error');
        console.error('Netlify form submission failed.', response);
      }
    } catch (error) {
      //setErrors(true);
      setSubmitStatus('error');
      console.error('Network error during form submission.', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    
    // Marcar campo como "tocado"
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    
    // Validar campo individual
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Marcar como tocado en el primer cambio
    if (!touched[name]) {
      setTouched(prev => ({
        ...prev,
        [name]: true
      }));
    }

    // Validación en tiempo real SIEMPRE al escribir
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  // Estado derivado para controlar el estado del botón
  const requiredFilled = (
    formData.name.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.message.trim() !== ''
  );
  const formatValid = (
    validateField('name', formData.name) === '' &&
    validateField('email', formData.email) === '' &&
    validateField('message', formData.message) === ''
  );
  // Errores calculados en caliente para que el botón responda en tiempo real
  const hasErrors = [
    validateField('name', formData.name),
    validateField('email', formData.email),
    validateField('message', formData.message)
  ].some(Boolean);
  const isDisabled = isSubmitting || !requiredFilled || !formatValid || hasErrors;

  // Contador de caracteres del mensaje
  const messageLength = formData.message.length;
  const minMessage = 10;
  const messageCounterClass = messageLength < minMessage
    ? 'text-red-600 dark:text-red-400'
    : 'text-gray-500 dark:text-gray-400';

  return (
    <section id="contacto" class="py-20 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Comienza tu transformación digital
            </h2>
            <p class="text-xl text-gray-600 dark:text-gray-300">
              Contáctanos para una consultoría gratuita
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-12">
            <div>
              <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Información de contacto
              </h3>
              
              <div class="space-y-4">
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                    <span class="text-primary-600 dark:text-primary-400">📧</span>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-800 dark:text-white">Email</p>
                    <p class="text-gray-600 dark:text-gray-300">kodeabierto.labs+inmo-digital@gmail.com</p>
                  </div>
                </div>

                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                    <span class="text-primary-600 dark:text-primary-400">📱</span>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-800 dark:text-white">Tel.</p>
                    <p class="text-gray-600 dark:text-gray-300">(11) 6862-6990</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mensajes de feedback */}
            {submitStatus === 'success' && (
              <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 dark:bg-green-800 dark:text-green-200 rounded-lg">
                ¡Mensaje enviado con éxito! Te contactaremos a la brevedad.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 dark:bg-red-800 dark:text-red-200 rounded-lg">
                Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo.
              </div>
            )}

            <form 
              name="contactoInmobiliario"  
              method="POST" 
              data-netlify-honeypot="bot-field" 
              data-netlify="true" 
              onSubmit={handleSubmit}
              class="space-y-6">
            
              <input type="hidden" name="form-name" value="contactoInmobiliario" />
              <p class="hidden">
                <label>No llenar este campo: <input name="bot-field" /></label>
              </p>
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onInput={handleChange}
                  onBlur={handleBlur}
                  required
                  class={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors ${
                    errors.name && touched.name
                      ? 'border-red-500 focus:ring-red-500 dark:border-red-500'
                      : 'border-gray-300 dark:border-gray-600 focus:ring-primary-500 dark:bg-gray-700 dark:text-white'
                  }`}
                  placeholder="Tu nombre"
                />
                {errors.name && touched.name && (
                  <p class="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                    <span class="mr-1">⚠️</span>
                    {errors.name}
                  </p>
                )}
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
                  onInput={handleChange}
                  onBlur={handleBlur}
                  required
                  class={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors ${
                    errors.email && touched.email
                      ? 'border-red-500 focus:ring-red-500 dark:border-red-500'
                      : 'border-gray-300 dark:border-gray-600 focus:ring-primary-500 dark:bg-gray-700 dark:text-white'
                  }`}
                  placeholder="tu@email.com"
                />
                {errors.email && touched.email && (
                  <p class="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                    <span class="mr-1">⚠️</span>
                    {errors.email}
                  </p>
                )}
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
                  onInput={handleChange}
                  onBlur={handleBlur}
                  rows="4"
                  class={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors ${
                    errors.message && touched.message
                      ? 'border-red-500 focus:ring-red-500 dark:border-red-500'
                      : 'border-gray-300 dark:border-gray-600 focus:ring-primary-500 dark:bg-gray-700 dark:text-white'
                  }`}
                  placeholder="Cuéntanos sobre tu inmobiliaria..."
                ></textarea>
                <div class="mt-1 text-xs flex justify-end">
                  <span class={`${messageCounterClass}`} aria-live="polite">
                    {messageLength}/{minMessage} mínimo
                  </span>
                </div>
                {errors.message && touched.message && (
                  <p class="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                    <span class="mr-1">⚠️</span>
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isDisabled}
                class={`w-full py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  isDisabled 
                    ? 'bg-gray-400 cursor-not-allowed text-gray-200' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105'
                }`}
              >
                {isSubmitting ? 'Enviando...' : 'Solicitar Consultoría Gratuita'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}