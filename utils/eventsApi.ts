import type { AsyncData } from 'nuxt/app';
import type { TypeEvent } from '~/types/general';

interface ResponseModels {
  data: TypeEvent[];
}
interface ErrorType {
  message: string;
}
export const eventsApi = () => {
  const fetchEvents = async () => {
    const requestURL = '/api/v1/event-types';
    const response = await useFetchWrapper(requestURL, {
      method: 'GET',
    });
    return response as AsyncData<ResponseModels, ErrorType>;
  };

  return {
    fetchEvents,
  };
};
