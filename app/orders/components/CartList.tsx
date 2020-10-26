import deleteCart from 'app/carts/mutations/deleteCart';
import { useMutation } from 'blitz';
import React, { useEffect, useState } from 'react'
import styles from '../../styles/Cart.module.scss';
import EmptyCart from './EmptyCart';
import OrderChange from './OrderChange';

let totatlList = []

const CartList = ({cart, setValue, value}) => {

    useEffect(() => {
      totatlList = JSON.parse(window.localStorage.getItem('cart'))
    }, [])
    const [basket, setBasket] = useState(cart)
    const [deleteCartMutation] = useMutation(deleteCart)
    const finalQty = parseInt(window.localStorage.getItem('quantity'))
    const grandQty = parseFloat(window.localStorage.getItem('amount'))
    const [final, setFinal] = useState(finalQty)
    const [grand, setGrand] = useState(grandQty)
    console.log(value)
    const handleClick = async(cart) => {
            totatlList = totatlList.filter(list => list.productId !== basket.productId)
            setValue(value - basket.quantity)
            setBasket(null)
            const dummyQuantity = final - cart.quantity  
            setFinal(dummyQuantity)
            window.localStorage.setItem('quantity', dummyQuantity.toString())  
            const dummyGrand = grand - cart.quantity * cart.productPrice
            setGrand(dummyGrand)
            window.localStorage.setItem('amount', dummyGrand.toString())   
            window.localStorage.setItem('cart', JSON.stringify(totatlList)) 
            console.log(totatlList)
        try {
            const deleted = await deleteCartMutation({
                where: {userId_productId: {userId: cart.userId, productId: cart.productId}}
            })
        } catch (error) {
            console.log(error)                     
        }
    }

    return (
            <>  
              {(totatlList === [] || cart === {}) ? (<EmptyCart />) : (
                <div>

                    {basket === null ? (<div></div>) : (
                        <div className={styles.cartItems}>
                            <div className={styles.image}>
                                <img src={basket.product.imageUrl} alt="" className={styles.img}/>
                            </div>
                            <div className={styles.cartItem}>
                                <div className={styles.first}>
                                    <h2 className={styles.title}>{basket.product.name}</h2>
                                </div>
                                <div className={styles.second}>
                                    <div className={styles.Heading}>
                                        <h2 className={styles.secondHead}>{basket.product.measure}<span className={styles.span}>{basket.product.price}</span></h2>
                                    </div>
                                    <>
                                      <OrderChange basket={basket} setValue={setValue} value={value} setFinal={setFinal} setGrand={setGrand} final={final} grand={grand}/>
                                    </>
                                </div>
                                <div className={styles.third}>
                                    <h2 className={styles.thirdHead}>
                                        (Minimum Order Quantity - <span className={styles.thirdSpan}>{basket.product.minQuantity}kg</span> )</h2>
                                </div>
                                <div>
                                    <button onClick={() => handleClick(basket)}>Remove from the cart</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
              )}
          
            </>
        )
}

export default CartList
