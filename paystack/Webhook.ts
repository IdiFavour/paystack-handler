import { Request, Response } from "express";
import crypto from "crypto";

export const paystackWebhook = async (req: Request, res: Response) => {
  const hash = crypto
    .createHmac("sha512", "secretKey") // add paystack secret key
    .update(JSON.stringify(req.body))
    .digest("hex");

  if (hash !== req.headers["x-paystack-signature"]) {
    return res.sendStatus(403);
  }

  // Retrieve the request's body
  const eventBody = req.body;

  switch (eventBody.event) {
    //event type
    case "charge.success": {
      // charge event is used for different events so switch is used
      switch (eventBody.data.metadata.transactionType) {
        case "deposit": {
          break;
        }
        default: {
          console.error("Cannot process event");
        }
      }
      break;
    }
    default: {
      console.error("Cannot process event");
    }
  }

  res.sendStatus(200);
};
