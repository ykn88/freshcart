import createCart from 'app/carts/mutations/createCart'
import updateCart from 'app/carts/mutations/updateCart'
import upsertCart from 'app/carts/mutations/upsertCart'
import { Router, useMutation } from 'blitz'
import React, { useEffect, useState } from 'react'



const Checkout = ({final}) => {
    let cartArray 
    const [value, setValue] = useState(0)
    // useEffect(() => {
    //    cartArray = JSON.parse(window.localStorage.getItem('array'))
    // })    
    const [createCartMutation] = useMutation(createCart)
    const [updateCartMutation] = useMutation(updateCart)
    const [upsertCartMutation] = useMutation(upsertCart)
    
    const addToCart = async() => {
     const cart = JSON.parse(window.localStorage.getItem('cart'))
     setValue(cart.quantity)
        try{
                cart.forEach(async cart => {
                    //setValue(cart.quantity)
                    const updated = await upsertCartMutation({
                        where: {userId_productId: {userId: cart.userId, productId: cart.productId}},
                        update: {quantity: cart.quantity},
                        create: {
                            quantity: cart.quantity,
                            productPrice: cart.productPrice,
                            user: {connect: {id: cart.userId}},
                            product: {connect: {id: cart.productId}}
                        }
                })
            })
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
