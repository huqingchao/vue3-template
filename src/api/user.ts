import type { AxiosResponse } from 'axios';
import request from '/@/utils/request';
export async function getUser(): Promise<AxiosResponse> {
  try {
    return await request.get('/user?ID=12345');
  } catch (error) {
    return error as Promise<AxiosResponse>;
  }
}
