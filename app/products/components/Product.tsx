import { useCurrentUser } from 'app/hooks/useCurrentUser'
import { Link, useQuery } from 'blitz'
import React, { useEffect, useState } from 'react'
import styles from '../../styles/Product.module.scss'
import getProducts from '../queries/getProducts'
import ProductList from './ProductList'
let dummyValue =  0
const Product = ({setFinal, grand, setGrand }) => {
    let basket : []
    const user = useCurrentUser()
    const [{products}] = useQuery(getProducts, {})
        return (
            <>
                <div>
                    {products.map(product => (
                        <div key={product.id} className={styles.mainDiv}>
                        <ProductList product={product} grand={grand} user={user} setFinal={setFinal} setGrand={setGrand}/>
                        </div>    
                    ))}
                </div>
            </>
        )
    }

export default Product
