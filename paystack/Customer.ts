import { omit } from "lodash";
import Requester from "./Requester";
import {
  CreateCustomerResponse,
  CreateCustomerData,
  CustomerValidationData,
  UpdateCustomerData,
  FetchCustomerResponse,
} from "./types";

export default class Customer extends Requester {
  path = "/customer";

  async create(data: CreateCustomerData) {
    const url = this.path;

    const result = await this.makeRequest({
      method: "post",
      data,
      url,
    });

    return this.resolveResponse<CreateCustomerResponse>(result);
  }

  /**
   * This TypeScript function fetches customer data based on the provided customer code asynchronously.
   * @param  - The `fetch` function takes a parameter `customerCode` of type string. It constructs a
   * URL using the `customerCode` and makes a GET request to that URL using the `makeRequest` function.
   * Finally, it resolves the response using the `resolveResponse` function with the type `Fetch
   * @returns The `fetch` function is returning the result of calling
   * `this.resolveResponse<FetchCustomerResponse>(result)`.
   */
  async fetch({ customerCode }: { customerCode: string }) {
    const url = `${this.path}/${customerCode}`;

    const result = await this.makeRequest({
      method: "get",
      data: {},
      url,
    });

    return this.resolveResponse<FetchCustomerResponse>(result);
  }

  async update(data: UpdateCustomerData) {
    const url = `${this.path}/${data.customerCode}`;

    const result = await this.makeRequest({
      method: "put",
      data: omit(data, ["customerCode"]),
      url,
    });

    return this.resolveResponse<CreateCustomerResponse>(result);
  }

  async validate(data: CustomerValidationData) {
    const url = `${this.path}/${data.customerCode}/identification`;
    const allData = {
      country: "NG",
      type: "bank_account",
      ...omit(data, ["customerCode"]),
    };

    const result = await this.makeRequest({
      method: "post",
      data: allData,
      url,
    });

    return this.resolveResponse(result);
  }
}
