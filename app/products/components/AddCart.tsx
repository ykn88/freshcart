import createCart from 'app/carts/mutations/createCart'
import ItemContext from 'app/context/ItemContext'
import { useMutation } from 'blitz'
import React, { useContext } from 'react'
import { number } from 'zod'
import styles from '../../styles/Product.module.scss'

const AddCart = ({user, product, grand, setShow, setFinal, setGrand}) => {
    const {addValue} = useContext(ItemContext)
    const addCart = () => {
      const newCart = {
        quantity: product.minQuantity,
        productId: product.id,
        productPrice: product.price,
        userId: user.id 
      }
      setShow(product.id)
      let cart = JSON.parse(window.localStorage.getItem('cart'))
      cart.push(newCart)
      let amount = product.minQuantity * product.price
      setGrand(grand + amount)
      let finalGrand = parseFloat(window.localStorage.getItem('amount'))
      finalGrand += amount
      window.localStorage.setItem('amount', finalGrand.toString())
      addValue(product.minQuantity, amount)
      window.localStorage.setItem('cart', JSON.stringify(cart))
      let quantity = parseInt(window.localStorage.getItem('quantity'))
      quantity += product.minQuantity
      setFinal(quantity)
      window.localStorage.setItem('quantity', quantity.toString())
    }
 
    return (
        <>
          <button onClick={addCart} className={styles.button}>Add To Cart</button>
        </>
    )
}

export default AddCart
