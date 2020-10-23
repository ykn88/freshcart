import updateCart from 'app/carts/mutations/updateCart'
import getCart from 'app/carts/queries/getCart'
import getCarts from 'app/carts/queries/getCarts'
import { useCurrentUser } from 'app/hooks/useCurrentUser'
import { useMutation, useQuery } from 'blitz'
import React, { useState } from 'react'

const ChangeQty = ({amount, product, setFinal}) => {
    const [value, setValue] = useState(amount)
    let carts = JSON.parse(window.localStorage.getItem('cart'))
    const incremntValue = async() => {
        setValue(value + 1)
        const carts = JSON.parse(window.localStorage.getItem('cart'))
        carts.forEach(cart => {
            if(cart.productId === product.id) cart.quantity = value + 1
        })
        window.localStorage.setItem('cart', JSON.stringify(carts))
        let quantity = parseInt(window.localStorage.getItem('quantity'))
        quantity += 1
        setFinal(quantity)
        window.localStorage.setItem('quantity', quantity.toString())
    }
    
    const decremntValue = async() => {
        setValue(value - 1)
        const carts = JSON.parse(window.localStorage.getItem('cart'))
        carts.forEach(cart => {
            if(cart.productId === product.id) cart.quantity = value - 1
        })
        window.localStorage.setItem('cart', JSON.stringify(carts))
        let quantity = parseInt(window.localStorage.getItem('quantity'))
        quantity -= 1
        setFinal(quantity)
        window.localStorage.setItem('quantity', quantity.toString())
    }

    return (
            <>
                <button disabled={value <= product.minQuantity && true}
                 onClick={decremntValue}
                >
                 -
                </button>
                    {value}
                <button onClick={incremntValue}>+</button>
            </>
    )
}

export default ChangeQty
