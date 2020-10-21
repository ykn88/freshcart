import deleteCart from 'app/carts/mutations/deleteCart'
import updateCart from 'app/carts/mutations/updateCart'
import createOrderDetail from 'app/orderDetails/mutations/createOrderDetail'
import { Router, useMutation } from 'blitz'
import React from 'react'
import createOrder from '../mutations/createOrder'
import updateOrder from '../mutations/updateOrder'

const PlaceOrder = (carts, {user}) => {
    let orderDetails = []
    let deleted = []
    let i:number = 0
    let amount = 0
    
    carts.cart.length > 0 && carts.cart.forEach(cart => {
        amount += cart.productPrice
    })
    console.log(carts.user)
    
    const [createOrderMutation] = useMutation(createOrder)
    const [createOrderDetailMutation] = useMutation(createOrderDetail)
    const [updateOrderMutation] = useMutation(updateOrder)
    const [deleteCartMutation] = useMutation(deleteCart)
    const [updateCartMutation] = useMutation(updateCart)

    const handleClick = async() => {
        try {
          const order = await createOrderMutation({
            data: {
              user: {connect: {id: carts.user.id}},
              totalPrice: amount
            }
          })
    
          console.log(order)
          oDetails(order)
    
        } catch (error) {
            console.log(error)      
        }
    }

    const oDetails = async(order) => {
        try {
          
        for(i; i<carts.cart.length; i++){
          orderDetails[i] = await createOrderDetailMutation({
            data: {
              order: {connect: {id: order.id}},
              goodsId: carts.cart[i].productId,
              productPrice: carts.cart[i].productPrice,
              quantity: carts.cart[i].quantity
            }
          })
        }
        console.log(orderDetails)
  
        const updated = await updateOrderMutation({
          where: {id: order.id},
          data: {orderStatus: "PENDING"}
        })
  
        console.log(updated)
        let j = 0
        carts.cart.forEach(async(car) => {
          deleted[j] = await deleteCartMutation({
            where: {id: car.id}
          })
          j++     
        })
        Router.push('/products')
      } catch (error) {
          console.log(error)
      }
    }
    
    return (
        <div>
            <button onClick={handleClick}>Place Order</button>
        </div>
    )
}

export default PlaceOrder
