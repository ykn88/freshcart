import updateCart from 'app/carts/mutations/updateCart'
import { Router, useMutation, useSession } from 'blitz'
import React from 'react'
import createOrder from '../mutations/createOrder'

const PlaceOrder = ({carts, value} ) => {

    window.localStorage.setItem('array', JSON.stringify(carts))
    let i:number = 0
    let amount = 0
    const cart = JSON.parse(window.localStorage.getItem('cart'))
    cart.forEach(cart => amount += (cart.quantity * cart.productPrice))
    const [createOrderMutation] = useMutation(createOrder)
    const [updateCartMutation] = useMutation(updateCart)
    console.log(carts)
    const handleClick = async() => {
        try {
          const order = await createOrder({
            data: {
              user: {connect: {id: carts[0].userId}},
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
          for( let j = 0; j < carts.length; j++ ) {
            if (carts[j].productId === cart[i].productId) {
                const updated = await updateCartMutation ({
                  where: { userId_productId: {userId: cart[1].userId, productId: cart[i].productId}},
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
