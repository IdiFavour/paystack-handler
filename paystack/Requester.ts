import axios, { AxiosError, Method } from "axios";
import camelcaseKeys from "camelcase-keys";
import snakecaseKeys from "snakecase-keys";

const instance = axios.create();

type RequestParams = { url: string; method: Method; data: any };
interface PaystackResponse {
  status: boolean;
  message: string;
  data: any;
}

export default class Paystack {
  contentType = undefined;

  baseUrl = "api.paystack.co";

  constructor(private key?: string) {}

  // eslint-disable-next-line class-methods-use-this
  resolveResponse<T extends Record<string, any>>(result: PaystackResponse) {
    if (!result.status) throw new Error("invalid response");
    return { ...result.data, message: result.message } as T;
  }

  async makeRequest({ url, method, data }: RequestParams) {
    try {
      const fullUrl = `https://${this.baseUrl}${url}`;
      const result = await instance.request({
        data: data && snakecaseKeys(data),
        url: fullUrl,
        method,
        headers: {
          "Content-Type":
            this.contentType !== undefined
              ? this.contentType
              : "application/json",
          ...(this.key ? { Authorization: `Bearer ${this.key}` } : {}),
        } as any,
      });

      return camelcaseKeys(result.data, { deep: true });
    } catch (err: any) {
      if (err instanceof AxiosError && err.response)
        return Promise.reject(console.error(err.response.data.message));
      console.error(err);
      return Promise.reject(err);
    }
  }
}
