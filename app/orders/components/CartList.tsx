import React from 'react'
import styles from '../../styles/Cart.module.scss';

const CartList = ({cart}) => {
    return (
            <>
                <div className={styles.cartItems}>
                    <div className={styles.image}>
                        <img src={cart.product.imageUrl} alt="" className={styles.img}/>
                    </div>
                    <div className={styles.cartItem}>
                        <div className={styles.first}>
                            <h2 className={styles.title}>{cart.product.name}</h2>
                        </div>
                        <div className={styles.second}>
                            <div className={styles.Heading}>
                                <h2 className={styles.secondHead}>{cart.product.measure}<span className={styles.span}>{cart.product.price}</span></h2>
                            </div>
                            <div className={styles.buttons}>
                            <button className={styles.button1}>+</button>
                            <div className={styles.buttonSpan}>{cart.quantity}</div>
                            <button className={styles.button1}>-</button>
                            </div>
                        </div>
                        <div className={styles.third}>
                            <h2 className={styles.thirdHead}>
                                (Minimum Order Quantity - <span className={styles.thirdSpan}>{cart.product.minQuantity}kg</span> )</h2>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default CartList
