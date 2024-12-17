export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    // Orimon Chatbot script
   /*  const chatbotScript = document.createElement('script');
    chatbotScript.src = 'https://bot.orimon.ai/deploy/index.js';
    chatbotScript.setAttribute('tenantId', '788ec9e1-7255-43ec-8512-c5f997704390');
    chatbotScript.async = true;
    document.body.appendChild(chatbotScript); */

    // Orimon Chatbot iframe
    /* const iframe = document.createElement('iframe');
    iframe.src = 'https://bot.orimon.ai/?tenantId=788ec9e1-7255-43ec-8512-c5f997704390&fullScreenBot=false';
    iframe.height = '100%';
    iframe.width = '100%';
    iframe.style.border = 'none';
    document.body.appendChild(iframe); */
  }
});
