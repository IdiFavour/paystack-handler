import axios from "axios";

export enum PaystackTrxStatus {
  SUCCESS = "success",
  FAILED = "failed",
  ONGOING = "ongoing",
  PENDING = "pending",
  PROCESSING = "processing",
  QUEUED = "queued",
  REVERSED = "reversed",
  ABANDONED = "abandoned",
}

export async function createPaystackSession(
  secretKey: string,
  amount: number,
  currency: string,
  email: string,
  reference: string,
  callbackUrl: string,
  metadata?: Record<string, any>
) {
  const response = await axios.post(
    "https://api.paystack.co/transaction/initialize",
    {
      email,
      amount: amount * 100,
      currency: currency.toUpperCase(),
      reference,
      callback_url: callbackUrl,
      metadata,
    },
    {
      headers: {
        Authorization: `Bearer ${secretKey}`,
        ContentType: "application/json",
      },
    }
  );

  return response.data.data;
}

export async function verifyPaystackTransaction(
  secretKey: string,
  reference: string
) {
  const response = await axios.get(
    `https://api.paystack.co/transaction/verify/${encodeURIComponent(
      reference
    )}`,
    {
      headers: {
        Authorization: `Bearer ${secretKey}`,
        ContentType: "application/json",
      },
    }
  );
  return response.data.data;
}
