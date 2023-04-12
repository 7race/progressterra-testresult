import { request } from '.';

export interface BonusInfo {
  data: {
    currentQuantity: number;
    dateBurning: string;
    forBurningQuantity: number;
  };
}

const urlGet: string = import.meta.env.VITE_URL_GET;
const accessKey = import.meta.env.VITE_ACCESS_KEY;

export const getBonusInfo = async (
  accessToken: string
): Promise<BonusInfo['data']> => {
  try {
    const response = await request<BonusInfo>({
      method: 'get',
      url: `${urlGet}${accessToken}`,
      headers: {
        AccessKey: accessKey,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to get bonus info');
  }
};
