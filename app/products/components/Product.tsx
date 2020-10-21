import { Link, useQuery } from 'blitz'
import React, { useState } from 'react'
import styles from '../../styles/Product.module.scss'
import getProducts from '../queries/getProducts'

const Product = () => {
    const [show, setShow] = useState(false)
    const [{products}] = useQuery(getProducts, {})
    const handleShow = (product) => {
        product.id && (setShow(!show))
    }
        return (
            <>
                {products.map(product => (
                    <div key={product.id} className={styles.mainDiv}>
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
                                    <span  className={styles.span}>1<p  className={styles.para}>{product.measure}</p></span>
                                    <span  className={styles.span2}>{product.price}</span>
                                </div>
                                <div className={styles.minQty}>
                                    <p className={styles.minQtyPara}>(Minimum Order Quantity - {product.minQuantity})</p>
                                </div>
                                <div>
                                  <button /*hidden={show}*/ onClick={() => handleShow(product)} className={styles.button}>Add To Cart</button>
                                </div>
                                <div>
                                {(show===true) && (
                                    <div>
                                        <button>-</button>
                                        {product.minQuantity}
                                        <button>+</button>
                                    </div>
                                )}
                                </div>
                            </div>
                        </>
                    </div>    
                ))}
            </>
        )
    }

export default Product
