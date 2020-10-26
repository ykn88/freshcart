import deleteCart from 'app/carts/mutations/deleteCart'
import createOrderDetail from 'app/orderDetails/mutations/createOrderDetail'
import updateOrder from 'app/orders/mutations/updateOrder'
import { BlitzPage, Router, useMutation } from 'blitz'
import React, { Suspense, useEffect } from 'react'

let cart
let order
let carts 


export const Finalize = () => {
    useEffect(() => {
        // cart = JSON.parse(global.localStorage.getItem('cart'))
        // order = JSON.parse(window.localStorage.getItem('order'))
        // carts = global.localStorage.getItem('array')
        // carts = JSON.parse(global.localStorage.getItem('array'))
        // console.log(carts)
    }, [])
    const [createOrderDetailMutation] = useMutation(createOrderDetail)
    const [updateOrderMutation] = useMutation(updateOrder)
    const [deleteCartMutation] = useMutation(deleteCart)
    cart =   JSON.parse(window.localStorage.getItem('cart'))
    order =  JSON.parse(window.localStorage.getItem('order'))
    carts = JSON.parse(global.localStorage.getItem('array'))

    // console.log(global.localStorage.getItem('order'))

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
 
            carts.forEach(async(cart) => {
            const deleted = await deleteCartMutation({
                where: {userId_productId: {userId: cart.userId, productId: cart.productId}}
            })
            })

            const list:Array<Object> = []
            const localOrder = {}
            window.localStorage.setItem('cart', JSON.stringify(list))
            window.localStorage.setItem('order', JSON.stringify(localOrder))
            window.localStorage.setItem('quantity', '0')
            window.localStorage.setItem('amount', '0')
            window.localStorage.setItem('array', JSON.stringify(localOrder))
            Router.push('/')
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
    let carts = JSON.parse(window.localStorage.getItem('array'))
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
               <Finalize />
            </Suspense>
        </div>
    )
}

export default Billing
