import type { GlobalSettings } from '~/types/globalSettings';

interface ResponseSettings {
  data: GlobalSettings;
}

export default defineNuxtPlugin(async () => {
  const { globalSettings } = useWebsiteSettings();
  const config = useRuntimeConfig();
  const endpoint = `${config.public.baseURL}/api/v1/website-settings`;

  try {
    const settings = await $fetch<ResponseSettings>(endpoint, {
      method: 'GET',
    });

    if (!settings || typeof settings !== 'object') {
      throw new Error('Invalid settings response');
    }

    // Filter out null values from the fetched settings
    const sanitizedSettings = Object.fromEntries(
      Object.entries(settings.data).filter(([_, value]) => value !== null),
    );

    globalSettings.value = {
      ...globalSettings.value,
      ...sanitizedSettings,
    };
  } catch (error) {
    return;
  }
});
