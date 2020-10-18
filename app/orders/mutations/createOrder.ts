import { Ctx } from "blitz"
import db, { OrderCreateArgs } from "db"

type CreateOrderInput = Pick<OrderCreateArgs, "data">
export default async function createOrder({ data }: CreateOrderInput, ctx: Ctx) {
  ctx.session.authorize()

  const order = await db.order.create({ data })

  return order
}
