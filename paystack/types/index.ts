// Generated by https://quicktype.io
/* eslint-disable max-classes-per-file */
/* eslint-disable lines-between-class-members */

import { IsObject, IsString } from "class-validator";
import { PaystackEventEnum, TransferReciepientType } from "./enum";

// Responses

export interface BaseResponse {
  message: string;
}

export interface IReciepientResponse {
  active: boolean;
  createdAt: string;
  currency: string;
  domain: string;
  id: number;
  integration: number;
  name: string;
  recipientCode: string;
  type: string;
  updatedAt: string;
  isDeleted: boolean;
  details: IDetails;
}

export interface IInitiateTransferResponse {
  reference: string;
  integration: number;
  domain: string;
  amount: number;
  currency: string;
  source: string;
  reason: string;
  recipient: number;
  status: string;
  transferCode: string;
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateCustomerResponse {
  email: string;
  integration: number;
  domain: string;
  customerCode: string;
  id: number;
  identified: boolean;
  identifications: null;
  createdAt: string;
  updatedAt: string;
}

export interface FetchCustomerResponse {
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  metadata: any;
  domain: string;
  customerCode: string;
  dedicatedAccount: {
    bank: {
      name: string;
      id: number;
      slug: string;
    };
    id: number;
    accountName: string;
    accountNumber: string;
    createdAt: string;
    updatedAt: string;
    currency: string;
    active: boolean;
    assigned: boolean;
    assignment: {
      assigneeId: number;
      assigneeType: string;
      accountType: string;
      integration: number;
    };
  } | null;
  identified: boolean;
}
// Data
export interface InitiateTransferData {
  source: string;
  reason: string;
  amount: number;
  recipient: string;
  metadata?: Record<string, any>;
  reference?: string;
}

export interface IDetails {
  authorizationCode: null;
  accountNumber: string;
  accountName: null;
  bankCode: string;
  bankName: string;
}

export interface TransferReciepientData {
  type: TransferReciepientType;
  name: string;
  currency: string;
  bankCode: string;
  accountNumber: string;
}

export interface ChargeCreationData {
  email: string;
  amount: number;
  metadata?: Record<string, string>;
  card?: any;
  bank?: any;
  authorizationCode: string;
}

export interface SubmitPinData {
  pin: string;
  reference: string;
}

export interface SubmitPhoneData {
  phone: string;
  reference: string;
}

export interface SubmitBirthdayData {
  birthday: string;
  reference: string;
}

export interface SubmitOtpData {
  otp: string;
  reference: string;
}

export interface CreateCustomerData {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
}

export interface AssignDVAData {
  email: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  phone: string;
  preferredBank: string;
  country: string;
  accountNumber: string;
  bvn: string;
  bankCode: string;
}

export interface UpdateCustomerData {
  customerCode: string;
  firstName?: string;
  lastName?: string;
}

export interface CustomerValidationData {
  customerCode: string;
  accountNumber: string;
  bvn: string;
  bankCode: string;
  firstName: string;
  lastName: string;
}

export interface IPaystackChargeEventData {
  status: string;
  id: number;
  amount: number;
  channel: string;
  metadata: {
    transactionId: string;
    saveCard?: boolean;
    cardId?: boolean;
    attachCardToResource?: boolean;
  };
  customer: {
    email: string;
  };
  authorization: {
    authorizationCode: string;
    bin: string;
    last4: string;
    expMonth: string;
    expYear: string;
    cardType: string;
    bank: string;
    countryCode: string;
    brand: string;
    accountName: string;
    signature: string;
    reusable: boolean;
  };
}

export class PaystackChargeEventData implements IPaystackChargeEventData {
  status: string;

  id: number;

  amount: number;

  reference: string;

  channel: string;

  metadata: {
    transactionId: string;
    saveCard?: boolean;
    cardId?: boolean;
    attachCardToResource?: boolean;
  };

  customer: {
    email: string;
    customerCode: string;
  };

  authorization: {
    authorizationCode: string;
    bin: string;
    last4: string;
    expMonth: string;
    expYear: string;
    cardType: string;
    bank: string;
    countryCode: string;
    brand: string;
    accountName: string;
    signature: string;
    reusable: boolean;
  };
}

export interface IPaystackTransferEventData {
  amount: number;
  currency: number;
  domain: string;
  id: number;
  integration: {
    id: number;
    isLive: boolean;
  };
  reason: string;
  reference: string;
  source: string;
  status: string;
  transferCode: string;
  recipient: {
    active: boolean;
    currency: string;
    email: string;
    id: string;
    name: string;
    recipientCode: string;
    type: string;
    details: {
      accountNumber: string;
      accountName: string;
      bankCode: string;
      bankName: string;
    };
  };
}

export class PaystackTransferEventData implements IPaystackTransferEventData {
  amount: number;

  currency: number;

  domain: string;

  id: number;

  integration: {
    id: number;
    isLive: boolean;
  };

  reason: string;

  reference: string;

  source: string;

  status: string;

  transferCode: string;

  recipient: {
    active: boolean;
    currency: string;
    email: string;
    id: string;
    name: string;
    recipientCode: string;
    type: string;
    details: {
      accountNumber: string;
      accountName: string;
      bankCode: string;
      bankName: string;
    };
  };
}

export class PaystackCustomerIDEventData {
  customerId: number;

  customerCode: string;

  email: string;

  identification: {
    country: string;
    type: string;
    bvn: string;
    accountNumber: string;
    bankCode: string;
  };
}

export class PaystackCustomerIDSuccessEventData extends PaystackCustomerIDEventData {}

export class PaystackCustomerIDFailureEventData extends PaystackCustomerIDEventData {
  reason: string;
}

export class PaystackDVAAssignSuccessEventData {
  customer: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    customerCode: string;
    phone: string | null;
    metadata: any;
    riskAction: string;
    internationalFormatPhone: string | null;
  };

  dedicatedAccount: {
    accountName: string;
    accountNumber: string;
    assigned: boolean;
    currency: string;
    metadata: any;
    active: boolean;
    id: number;
    createdAt: string;
    updatedAt: string;
    bank: {
      name: string;
      id: number;
      slug: string;
    };
    assignment: {
      assignee_id: number;
      assignee_type: string;
      account_type: string;
      integration: number;
    };
  };
}

export class PaystackEvent<T = any> {
  @IsString()
  event: PaystackEventEnum;

  @IsObject()
  data: T;
}
