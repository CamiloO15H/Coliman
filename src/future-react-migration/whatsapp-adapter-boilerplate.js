/**
 * Boilerplate para la Integración de WhatsApp (Patrón Adaptador)
 * Ubicación sugerida en React: src/services/adapters/WhatsAppAdapter.js
 */

// 1. Definición de la interfaz del servicio de mensajería (MessagingService Interface)
// En JavaScript/TypeScript, esto define los métodos esperados por los componentes.
class MessagingServiceInterface {
  sendWhatsAppMessage(phoneNumber, messageText) {
    throw new Error("El método sendWhatsAppMessage debe ser implementado");
  }
}

// 2. Implementación concreta del Adaptador de WhatsApp
export class WhatsAppAdapter extends MessagingServiceInterface {
  constructor(baseUrl = "https://api.whatsapp.com/send") {
    super();
    this.baseUrl = baseUrl;
  }

  /**
   * Genera el enlace y redirige al usuario a la API de WhatsApp
   * @param {string} phoneNumber Número telefónico con código de país (ej. "17045551840")
   * @param {string} messageText Mensaje preestablecido
   */
  sendWhatsAppMessage(phoneNumber, messageText) {
    if (!phoneNumber) return;
    
    // Limpieza de caracteres no numéricos
    const cleanPhone = phoneNumber.replace(/\D/g, "");
    const encodedText = encodeURIComponent(messageText || "");
    const finalUrl = `${this.baseUrl}?phone=${cleanPhone}&text=${encodedText}`;

    // Ejecuta la redirección (abriendo una nueva pestaña)
    window.open(finalUrl, "_blank", "noopener,noreferrer");
  }
}

// 3. Ejemplo de uso del hook dentro del componente de React:
/*
import { WhatsAppAdapter } from 'src/services/adapters/WhatsAppAdapter';

export function ContactButton({ phone, message }) {
  // Instanciamos el adaptador (se puede inyectar globalmente vía Contexto si es necesario)
  const messagingService = new WhatsAppAdapter();

  const handleContact = () => {
    // El componente depende de la interfaz de servicio abstracta, no de una url directa
    messagingService.sendWhatsAppMessage(phone, message);
  };

  return (
    <button onClick={handleContact}>
      Contactar por WhatsApp
    </button>
  );
}
*/
