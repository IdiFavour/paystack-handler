import Requester from './Requester';
import { AssignDVAData, BaseResponse } from './types';

export default class DedicatedAccount extends Requester {
  path = '/dedicated_account';

  /**
   * Creates a request to assign a paystack dedicated account
   * @param data AssignDVAData
   * @returns Promise<BaseResponse>
   */
  async assign(data: AssignDVAData) {
    const url = `${this.path}/assign`;

    const result = await this.makeRequest({
      method: 'post',
      data,
      url,
    });

    return this.resolveResponse<BaseResponse>(result);
  }
}
