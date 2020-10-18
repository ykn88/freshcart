import { Ctx } from "blitz"
import db, { PaymentCreateArgs } from "db"

type CreatePaymentInput = Pick<PaymentCreateArgs, "data">
export default async function createPayment({ data }: CreatePaymentInput, ctx: Ctx) {
  ctx.session.authorize()

  const payment = await db.payment.create({ data })

  return payment
}
