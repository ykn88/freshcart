import { Ctx } from "blitz"
import db, { PaymentDeleteArgs } from "db"

type DeletePaymentInput = Pick<PaymentDeleteArgs, "where">

export default async function deletePayment({ where }: DeletePaymentInput, ctx: Ctx) {
  ctx.session.authorize()

  const payment = await db.payment.delete({ where })

  return payment
}
