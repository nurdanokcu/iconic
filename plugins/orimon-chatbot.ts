export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    // Orimon Chatbot script
    const chatbotScript = document.createElement('script');
    chatbotScript.src = 'https://bot.orimon.ai/deploy/index.js';
    chatbotScript.setAttribute('tenantId', '788ec9e1-7255-43ec-8512-c5f997704390');
    chatbotScript.async = true;
    document.body.appendChild(chatbotScript);
  }
});
