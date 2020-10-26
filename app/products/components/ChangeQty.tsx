import updateCart from 'app/carts/mutations/updateCart'
import getCart from 'app/carts/queries/getCart'
import getCarts from 'app/carts/queries/getCarts'
import { useCurrentUser } from 'app/hooks/useCurrentUser'
import { useMutation, useQuery } from 'blitz'
import styles from '../../styles/ChangeQty.module.scss'
import React, { useContext, useState } from 'react'
import ItemContext from 'app/context/ItemContext'

const ChangeQty = ({amount, grand, product, setFinal, setGrand}) => {
    const {addValue, reduceValue} = useContext(ItemContext)
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
        setGrand(grand + product.price)
        let finalGrand = parseFloat(window.localStorage.getItem('amount'))
        finalGrand += product.price
        window.localStorage.setItem('amount', finalGrand.toString())
        setFinal(quantity)
        addValue(1, product.price)
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
        setGrand(grand - product.price)
        let finalGrand = parseFloat(window.localStorage.getItem('amount'))
        finalGrand -= product.price
        window.localStorage.setItem('amount', finalGrand.toString())
        setFinal(quantity)
        reduceValue(1, product.price)
        window.localStorage.setItem('quantity', quantity.toString())
    }

    return (
            <div className={styles.buttons}>
                <button className={styles.button1} disabled={value <= product.minQuantity && true}
                 onClick={decremntValue}
                >
                 -
                </button>
                    {value}
                <button className={styles.button1} onClick={incremntValue}>+</button>
            </div>
    )
}

export default ChangeQty
