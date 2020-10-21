import styles from '../../styles/Cart.module.scss';
import getCarts from 'app/carts/queries/getCarts';
import { useCurrentUser } from 'app/hooks/useCurrentUser';
import CartList from 'app/orders/components/CartList';
import { useQuery, useSession } from 'blitz';
import React from 'react'
import PlaceOrder from 'app/orders/components/PlaceOrder';
const Cart = () => {
    const user = useCurrentUser()
    const [{carts}] =  useQuery(getCarts, {where: {userId: user?.id}, include:{product:true}})
    console.log(carts)
    return (
        <>
            <div className={styles.mainDiv}>
                    <div className={styles.cartHead}>
                        <h2 className={styles.cartHead2}>Cart</h2>
                        <h3 className={styles.cartHead3}>Verify Your Order Items</h3>
                    </div>
                    {carts.map(cart => (
                       <div key={cart.id}>
                          <CartList cart={cart}/>
                       </div>
                    ))}
            </div>
            <PlaceOrder cart={carts} user={user}/>
        </>
    )
}

export default Cart
