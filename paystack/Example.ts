import PayStack from ".";

const paystack = new PayStack("secretKey");

// examples are below
async function checkoutUrl(data: any) {
  try {
    const paymentInit = await paystack.transaction.initialize({
      metadata: {
        transactionId: data.id,
      },
      amount: `${data.amount * 100}`,
      callbackUrl: data.callbackUrl,
      email: data.email,
    });

    return {
      authorizationUrl: paymentInit.authorizationUrl,
      accessCode: paymentInit.accessCode,
      transactionId: data.id,
    };
  } catch (err: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    if (err.message.includes("ETIMEDOUT")) {
      console.error(err.message);
    }
    throw err;
  }
}

async function chargeSavedCard(data: any) {
  try {
    const paymentInit = await paystack.transaction.chargeAuthorization({
      email: data.email,
      amount: `${data.amount * 100}`,
      authorizationCode: data.authorizationCode,
      metadata: { transactionId: data.id, cardId: data.id },
    });
  } catch (err: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    if (err.message.includes("ETIMEDOUT")) {
      console.error(err.message);
    }
    throw err;
  }
}

async function createCustomer(body: any) {
  try {
    const data = await paystack.customer.create({
      email: body.email,
      firstName: body.firstName,
      lastName: body.lastName,
      phone: body.phoneNumber,
    });
  } catch (err: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    if (err.message.includes("ETIMEDOUT")) {
      console.error(err.message);
    }
    throw err;
  }
}

async function verifyAccountNumber(body: any) {
  try {
    const bankDetails = await paystack.verify.accountNumber({
      bankCode: body.code,
      accountNumber: body.accountNumber,
    });
  } catch (err: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    if (err.message.includes("ETIMEDOUT")) {
      console.error(err.message);
    }
    throw err;
  }
}

async function fetchCustomer(body: any) {
  try {
    const customer = await paystack.customer.fetch({
      customerCode: body.customerCode,
    });
  } catch (err: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    if (err.message.includes("ETIMEDOUT")) {
      console.error(err.message);
    }
    throw err;
  }
}
