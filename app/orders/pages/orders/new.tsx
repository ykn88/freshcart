import React from "react"
import Layout from "app/layouts/Layout"
import { Link, useRouter, useMutation, BlitzPage } from "blitz"
import createOrder from "app/orders/mutations/createOrder"
import OrderForm from "app/orders/components/OrderForm"
import EmptyCart from "app/orders/components/EmptyCart"
import Phone from "app/orders/components/Phone"
import OrderDetails from "app/orders/components/OrderDetails"

const NewOrderPage: BlitzPage = () => {
  const router = useRouter()
  const [createOrderMutation] = useMutation(createOrder)

  return (
    <div>
      <br/><br/><br/>
      {/* <h1>Create New Order</h1>

      <OrderForm
        initialValues={{}}
        onSubmit={async () => {
          try {
            const order = await createOrderMutation({ data: { name: "MyName" } })
            alert("Success!" + JSON.stringify(order))
            router.push("/orders/[orderId]", `/orders/${order.id}`)
          } catch (error) {
            alert("Error creating order " + JSON.stringify(error, null, 2))
          }
        }}
      /> */}

      {/* <p>
        <Link href="/orders">
          <a>Orders</a>
        </Link>
      </p> */}
      <EmptyCart />
      <hr/>
      <OrderDetails />

    <br/>
    <hr style={{width:"80%", marginLeft:'2.5rem'}}/>
    {/* <OrderDetails /> */}
    <Phone />
    </div>
  )
}

NewOrderPage.getLayout = (page) => <Layout title={"Create New Order"}>{page}</Layout>

export default NewOrderPage
