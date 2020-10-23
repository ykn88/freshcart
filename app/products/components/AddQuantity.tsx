import createCart from 'app/carts/mutations/createCart'
import { Router, useMutation } from 'blitz'
import React, { useState } from 'react'

const AddQuantity = ({user, product}) => {
    const router = Router
    const [value, setValue] = useState(product.minQuantity)
    const [createCartMutation] = useMutation(createCart)
    
    const handleClick = async(quantity:number) => {
        
        // try {
        //   const cart = await createCartMutation({data : {
        //     user: {connect: {id: user.id}},
        //     product: {connect: {id: product.id}},
        //     quantity: quantity,
        //     productPrice: product.price * quantity,
        //   }}, {})
      
        //   console.log(cart)
          
        // } catch (error) {
        //   alert('Product Already added to cart')
        // }
    
    }

    return (
        <div>
            <div>
          <button 
          disabled={value <= product.minQuantity && true}
          onClick={() => setValue(value - 1)}
          >
            -
          </button>
          {value}
          <button
          onClick={() => setValue(value + 1)}
          >
            +
          </button>
          <button onClick={() => handleClick(value)}>Add to Cart</button>
          <br/>
          <button onClick={() => router.push('/orders')}>
            My Cart
          </button>
        </div>
        </div>
    )
}

export default AddQuantity
