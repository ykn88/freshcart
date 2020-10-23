import deleteCart from 'app/carts/mutations/deleteCart'
import updateCart from 'app/carts/mutations/updateCart'
import createOrderDetail from 'app/orderDetails/mutations/createOrderDetail'
import { Router, useMutation } from 'blitz'
import React, { useEffect } from 'react'
import createOrder from '../mutations/createOrder'
import updateOrder from '../mutations/updateOrder'

const PlaceOrder = (carts) => {

    window.localStorage.setItem('array', JSON.stringify(carts))
    let i:number = 0
    let amount = 0
    const cart = JSON.parse(window.localStorage.getItem('cart'))
    cart.forEach(cart => amount += (cart.quantity * cart.productPrice))
    const [createOrderMutation] = useMutation(createOrder)
    const [updateCartMutation] = useMutation(updateCart)

    const handleClick = async() => {
        try {
          const order = await createOrderMutation({
            data: {
              user: {connect: {id: carts.user.id}},
              totalPrice: amount
            }
          })
          window.localStorage.setItem('order', JSON.stringify(order))
        } catch (error) {
            console.log(error)      
        }
        updateCarts()
    }

    const updateCarts = async() => {
      try {
        for( let i = 0; i < cart.length; i++ ) {
          for( let j = 0; j < carts.cart.length; j++ ) {
            if (carts.cart[j].productId === cart[i].productId) {
                const updated = await updateCartMutation ({
                  where: { id: carts.cart[j].id},
                  data: { quantity: cart[i].quantity }
                })
              console.log(updated)
            }
          }
        }
      } catch (error) {
        console.log(error)
      }
      Router.push('/orders/billing')    
    } 

    
    return (
        <div>
            <button onClick={handleClick}>Place Order</button>
        </div>
    )
}

export default PlaceOrder
