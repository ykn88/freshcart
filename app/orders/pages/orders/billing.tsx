import deleteCart from 'app/carts/mutations/deleteCart'
import createOrderDetail from 'app/orderDetails/mutations/createOrderDetail'
import updateOrder from 'app/orders/mutations/updateOrder'
import { BlitzPage, Router, useMutation } from 'blitz'
import React, { Suspense } from 'react'

export const Finalize = () => {
    const [createOrderDetailMutation] = useMutation(createOrderDetail)
    const [updateOrderMutation] = useMutation(updateOrder)
    const [deleteCartMutation] = useMutation(deleteCart)
    const cart = JSON.parse(window.localStorage.getItem('cart'))
    const order = JSON.parse(window.localStorage.getItem('order'))
    const carts = JSON.parse(window.localStorage.getItem('array'))
    console.log(carts)

    const oDetails = async() => {
        try {
          
            for(let i = 0; i < cart.length; i++){
              const orderDetails = await createOrderDetailMutation({
                data: {
                order: {connect: {id: order.id}},
                goodsId: cart[i].productId,
                productPrice: cart[i].productPrice,
                quantity: cart[i].quantity
                }
            })
            }
  
            const updated = await updateOrderMutation({
            where: {id: order.id},
            data: {orderStatus: "PENDING"}
            })
 
            carts.cart.forEach(async(cart) => {
            const deleted = await deleteCartMutation({
                where: {id: cart.id}
            })
            })

            const list = []
            window.localStorage.setItem('cart', JSON.stringify(list))
            const localOrder = {}
            window.localStorage.setItem('order', JSON.stringify(localOrder))
            window.localStorage.setItem('quantity', '0')
            window.localStorage.setItem('array', JSON.stringify(localOrder))
            Router.push('/products')
        } catch (error) {
          console.log(error)
      }
    }

    return (
        <div>
            <h3>User Details go here</h3>
            <button onClick = {oDetails}>Proceed to pay</button>
        </div>
    )
}

const Billing:BlitzPage = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
               <Finalize />
            </Suspense>
        </div>
    )
}

export default Billing
