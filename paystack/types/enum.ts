export enum TransferReciepientType {
  NUBAN = 'nuban',
  MOBILE_MONEY = 'mobile_money',
  AUTHORIZATION = 'authorization',
  BASA = 'basa',
}

export enum PaystackEventEnum {
  CHARGE_SUCCESS = 'charge.success',
  TRANSFER_SUCCESS = 'transfer.success',
  TRANSFER_FAILED = 'transfer.failed',
  TRANSFER_REVERSED = 'transfer.reversed',
  CUSTOMERID_SUCCESS = 'customeridentification.success',
  CUSTOMERID_FAILURE = 'customeridentification.failure',
  DVA_CREATION_SUCCESS = 'dedicatedaccount.assign.success',
  DVA_CREATION_FAILURE = 'dedicatedaccount.assign.failed',
}
