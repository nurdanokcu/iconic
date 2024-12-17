import type { AsyncData } from 'nuxt/app';
import type { TypeModel, TypeModelDetailed } from '~/types/models';

interface ResponseModels {
  data: TypeModel[];
}
interface ResponseSingleModel {
  data: TypeModelDetailed;
}
interface ErrorType {
  message: string;
}
export const modelsApi = () => {
  const fetchModelsSSR = async (queryParams = {}) => {
    const queryString = new URLSearchParams(queryParams).toString();
    const requestURL = `/api/v1/fashion-models${
      queryString ? `?${queryString}` : ''
    }`;
    const response = await useFetchWrapper(requestURL, {
      method: 'GET',
    });
    return response as AsyncData<ResponseModels, ErrorType>;
  };

  const fetchModelsClient = async (queryParams = {}) => {
    const queryString = new URLSearchParams(queryParams).toString();
    const requestURL = `/api/v1/fashion-models${
      queryString ? `?${queryString}` : ''
    }`;
    const response = await fetchWrapper<ResponseModels>(requestURL, {
      method: 'GET',
    });
    return response;
  };
  const fetchSingleModelSSR = async (slug: string) => {
    const requestURL = `/api/v1/fashion-models/${slug}`;
    const response = await useFetchWrapper(requestURL, {
      method: 'GET',
    });
    return response as AsyncData<ResponseSingleModel, ErrorType>;
  };
  const fetchPromotionalModelsClient = async () => {
    const requestURL = '/api/v1/fashion-models?is_promotional=true&limit=8';
    const response = await fetchWrapper<ResponseModels>(requestURL, {
      method: 'GET',
    });
    return response;
  };

  return {
    fetchModelsSSR,
    fetchModelsClient,
    fetchSingleModelSSR,
    fetchPromotionalModelsClient,
  };
};
