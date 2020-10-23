import { useCurrentUser } from 'app/hooks/useCurrentUser'
import { Link, useQuery } from 'blitz'
import React, { useEffect, useState } from 'react'
import styles from '../../styles/Product.module.scss'
import getProducts from '../queries/getProducts'
import ProductList from './ProductList'

const Product = ({setFinal}) => {
    let basket : []
    
    const user = useCurrentUser()
    console.log(user)
    const [{products}] = useQuery(getProducts, {})
        return (
            <>
                {products.map(product => (
                    <div key={product.id} className={styles.mainDiv}>
                      <ProductList product={product} user={user} setFinal={setFinal}/>
                    </div>    
                ))}
            </>
        )
    }

export default Product
