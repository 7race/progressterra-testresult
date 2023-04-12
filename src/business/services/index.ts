import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';

const customAxios = axios.create();

customAxios.defaults.headers.common['Content-Type'] = 'application/json';

export const request = async <T>(config: AxiosRequestConfig): Promise<T> => {
  try {
    const response = await customAxios.request<T>(config);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed to fetch data: ${error.message}`);
    } else {
      throw new Error('Failed to fetch data');
    }
  }
};
