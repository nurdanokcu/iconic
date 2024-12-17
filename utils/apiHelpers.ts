export async function useFetchWrapper(request: string, opts: any) {
  const config = useRuntimeConfig();
  const defaultHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };

  return await useFetch(request, {
    headers: defaultHeaders,
    baseURL: config.public.baseURL,
    ...opts,
  });
}

export async function fetchWrapper<T>(endpoint: string, options: any) {
  const config = useRuntimeConfig();
  const baseUrl = config.public.baseURL;
  const finalUrl = `${baseUrl}${endpoint}`;
  const defaultHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };
  return await $fetch<T>(finalUrl, {
    headers: defaultHeaders,
    ...options,
  });
}
