import { request } from '.';

interface CreateTokenResponse {
  accessToken: string;
}

const urlPost = import.meta.env.VITE_URL_POST;
const accessKey = import.meta.env.VITE_ACCESS_KEY;
const clientID = import.meta.env.VITE_CLIENT_ID;
const deviceID = import.meta.env.VITE_DEVICE_ID;

export const createToken = async (): Promise<CreateTokenResponse> => {
  try {
    const response = await request<CreateTokenResponse>({
      method: 'post',
      url: urlPost,
      headers: {
        AccessKey: accessKey,
      },
      data: {
        idClient: clientID,
        accessToken: '',
        paramName: 'device',
        paramValue: deviceID,
        latitude: 0,
        longitude: 0,
        sourceQuery: 0,
      },
    });
    return response;
  } catch (error) {
    throw new Error('Failed to create token');
  }
};
