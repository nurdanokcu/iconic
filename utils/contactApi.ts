import type { DataContactForm } from '~/types/contact';

interface ResponseContact {
  status: string;
  message: string;
}
export const contactApi = () => {
  const sendContact = async (data: DataContactForm) => {
    const requestURL = '/api/v1/contact-form';
    const response = await fetchWrapper<ResponseContact>(requestURL, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return response;
  };

  return {
    sendContact,
  };
};
