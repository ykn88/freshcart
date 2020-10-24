import getProducts from 'app/products/queries/getProducts'
import { Link, useMutation, useQuery } from 'blitz'
import React from 'react'
import SingleProduct from './SingleProduct'

const ProductList = () => {
    const [{products}] = useQuery(getProducts, {})
    console.log(products)
    return (
        <div>
            <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Price Per Kg</th>
                    <th>In Stock</th>
                    <th>Change Stock</th>
                    <th>Delete</th>
                    </tr> 
                </thead>
                <tbody>
                    {products.map(product => (
                        <SingleProduct product={product}/>
                    ))}
                </tbody>
            </table>
            <Link href='/admin'>
               <a>Back to HomePage</a> 
            </Link>
        </div>
    )
}

export default ProductList
