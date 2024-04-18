import { Request, Response, NextFunction } from "express";
import crypto from "crypto";
import Transfer from "./Transfer";
import Charge from "./Charge";
import Transactions from "./Transactions";
import Verify from "./Verify";
import Customer from "./Customer";
import DedicatedAccount from "./DedicatedAccount";

export default class PayStack {
  charge: Charge;

  transfer: Transfer;

  transaction: Transactions;

  verify: Verify;

  customer: Customer;

  dedicatedAccount: DedicatedAccount;

  constructor(key: string) {
    this.charge = new Charge(key);
    this.verify = new Verify(key);
    this.transfer = new Transfer(key);
    this.transaction = new Transactions(key);
    this.customer = new Customer(key);
    this.dedicatedAccount = new DedicatedAccount(key);
  }

  /* The `static webHook` method in the `PayStack` class is a static method that is used as middleware
  for handling webhook requests in an Express application. It takes a `secret` string as a parameter
  and returns a middleware function that verifies the authenticity of the webhook request. */
  static webHook =
    (secret: string) => (req: Request, res: Response, next: NextFunction) => {
      try {
        const hash = crypto
          .createHmac("sha512", secret) //
          .update(JSON.stringify(req.body))
          .digest("hex");

        if (hash === req.headers["x-paystack-signature"]) {
          next();
        } else {
          res.sendStatus(401);
        }
      } catch (err) {
        res.sendStatus(400);
      }
    };
}
