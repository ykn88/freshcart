import { Ctx } from "blitz"
import db, { FindManyPaymentArgs } from "db"

type GetPaymentsInput = Pick<FindManyPaymentArgs, "where" | "orderBy" | "skip" | "take">

export default async function getPayments(
  { where, orderBy, skip = 0, take }: GetPaymentsInput,
  ctx: Ctx
) {
  ctx.session.authorize()

  const payments = await db.payment.findMany({
    where,
    orderBy,
    take,
    skip,
  })

  const count = await db.payment.count()
  const hasMore = typeof take === "number" ? skip + take < count : false
  const nextPage = hasMore ? { take, skip: skip + take! } : null

  return {
    payments,
    nextPage,
    hasMore,
    count,
  }
}
