import { Ctx, NotFoundError } from "blitz"
import db, { FindFirstPaymentArgs } from "db"

type GetPaymentInput = Pick<FindFirstPaymentArgs, "where">

export default async function getPayment({ where }: GetPaymentInput, ctx: Ctx) {
  ctx.session.authorize()

  const payment = await db.payment.findFirst({ where })

  if (!payment) throw new NotFoundError()

  return payment
}
