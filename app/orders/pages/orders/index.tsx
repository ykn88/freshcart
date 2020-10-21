import React, { Suspense } from "react"
import Layout from "app/layouts/Layout"
import { Link, usePaginatedQuery, useRouter, BlitzPage } from "blitz"
import getOrders from "app/orders/queries/getOrders"
import Cart from "app/products/components/Cart"


const OrdersPage: BlitzPage = () => {
  return (
    <div>
      <p>
        <Link href="/orders/new">
          <a>Create Order</a>
        </Link>
      </p>

      <Suspense fallback={<div>Loading...</div>}>
      <br />
      <br />
      
        {/* <OrdersList /> */}
        <Cart />
      
      </Suspense>
      
    </div>
  )
}

OrdersPage.getLayout = (page) => <Layout title={"Orders"}>{page}</Layout>

export default OrdersPage
