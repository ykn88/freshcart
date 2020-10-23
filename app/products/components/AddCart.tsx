import createCart from 'app/carts/mutations/createCart'
import { useMutation } from 'blitz'
import React from 'react'
import { number } from 'zod'
import styles from '../../styles/Product.module.scss'

const AddCart = ({user, product, setShow, setFinal}) => {
    const addCart = () => {
      console.log(product)
      const newCart = {
        quantity: product.minQuantity,
        productId: product.id,
        productPrice: product.price,
        userId: user.id 
      }
      setShow(product.id)
      let cart = JSON.parse(window.localStorage.getItem('cart'))
      cart.push(newCart)
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