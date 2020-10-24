import styles from '../../styles/Cart.module.scss';
import getCarts from 'app/carts/queries/getCarts';
import { useCurrentUser } from 'app/hooks/useCurrentUser';
import CartList from 'app/orders/components/CartList';
import { useMutation, useQuery, useSession } from 'blitz';
import React, { useState } from 'react'
import deleteCart from 'app/carts/mutations/deleteCart';
import PlaceOrder from 'app/orders/components/PlaceOrder';
import EmptyCart from 'app/orders/components/EmptyCart';
const Cart = () => {
    const user = useCurrentUser()
    const [{carts}] =  useQuery(getCarts, {where: {userId: user?.id}, include:{product:true}})
    console.log(carts)
    let lists = carts
    const amount = parseInt(window.localStorage.getItem('quantity'))
    const [value, setValue] = useState(amount)
    console.log(value)
    return (
        <>
            {!lists.length ? (<EmptyCart />) : (
             <div>
                <div className={styles.mainDiv}>
                        <div className={styles.cartHead}>
                            <h2 className={styles.cartHead2}>Cart</h2>
                            <h3 className={styles.cartHead3}>Verify Your Order Items</h3>
                        </div>
                        {lists.map(cart => (
                        <div key={cart.id}>
                            <CartList cart={cart} setValue={setValue} value={value}/>
                        </div>
                        ))}
                </div>
                <PlaceOrder carts={carts} value={value}/>
             </div>
            )}
        </>
    )
}

export default Cart
