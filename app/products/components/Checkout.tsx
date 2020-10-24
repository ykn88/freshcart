import createCart from 'app/carts/mutations/createCart'
import updateCart from 'app/carts/mutations/updateCart'
import { Router, useMutation } from 'blitz'
import React, { useEffect } from 'react'



const Checkout = ({final}) => {
    let cartArray 
    useEffect(() => {
       cartArray = JSON.parse(window.localStorage.getItem('array'))
    })    
    const [createCartMutation] = useMutation(createCart)
    const [updateCartMutation] = useMutation(updateCart)
    const addToCart = async() => {
        
     const cart = JSON.parse(window.localStorage.getItem('cart'))
        try {
            cart.forEach(async cart => {
                   const created = await createCartMutation({
                       data: {
                           user: {connect: {id: cart.userId}},
                           product: {connect: {id: cart.productId}},
                           productPrice: cart.productPrice,
                           quantity: cart.quantity
                       }
                   })
                });
                Router.push('/orders')
            }  catch (error) {
              alert('product exists in cart')
               Router.push('/orders')
            }
    }

    return (
        <div>
            <button disabled={final < 15 && true} onClick={addToCart}>Checkout</button>
        </div>
    )
}

export default Checkout
