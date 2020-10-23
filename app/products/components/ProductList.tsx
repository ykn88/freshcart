import createCart from 'app/carts/mutations/createCart'
import getCart from 'app/carts/queries/getCart'
import getCarts from 'app/carts/queries/getCarts'
import { Link, useMutation, useQuery } from 'blitz'
import React, { useEffect, useState } from 'react'
import { any } from 'zod'
import styles from '../../styles/Product.module.scss'
import AddCart from './AddCart'
import ChangeQty from './ChangeQty'

let basket: []
const ProductList = ({product, user, setFinal}) => {
    const [test, setTest] = useState(-1)
    const [amount, setAmount] = useState(product.minQuantity)
    useEffect(() => {
       basket = JSON.parse(window.localStorage.getItem('cart'))
       basket.forEach(basket => {
           if(basket.productId === product.id) {
               setTest(product.id)
               setAmount(basket.quantity)
           }
        })
    }, [])

    
    const [show, setShow] = useState(0)
   
    return (
            <>
                <div className={styles.images}>
                    <img src={product.imageUrl} alt="" className={styles.img}/>
                </div>
                <div className={styles.items}>
                    <Link href='/products/[productId]' as = {`/products/${product.id}`}>
                        <a>
                        <h2  className={styles.title}>{product.name}</h2>
                        </a>
                    </Link>
                    <div className={styles.item}>
                        <span  className={styles.span}><p  className={styles.para}>{product.measure}</p></span>
                        <span  className={styles.span2}>{product.price}</span>
                    </div>
                    <div className={styles.minQty}>
                        <p className={styles.minQtyPara}>(Minimum Order Quantity - {product.minQuantity})</p>
                    </div>
                    <div>
                    {(show === product.id || test === product.id) ? (
                        <div>
                        <ChangeQty amount={amount} product={product} setFinal={setFinal}/>
                        </div>
                     ) : (
                        <div>
                        <AddCart user={user} product={product} setShow={setShow} setFinal={setFinal}/>
                        </div>
                    )}
                    </div>
                </div>
            </>
    )
}

export default ProductList
