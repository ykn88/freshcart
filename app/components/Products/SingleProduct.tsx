import deleteProduct from 'app/products/mutations/deleteProduct'
import updateProduct from 'app/products/mutations/updateProduct'
import { useMutation } from 'blitz'
import React, { useState } from 'react'

const SingleProduct = ({product}) => {
    const [stock, setStock] = useState(product.stock)
    const [item, setItem] = useState(product)
    const [updateProductMutation] = useMutation(updateProduct)
    const [deleteProductMutation] = useMutation(deleteProduct)

    const handleClick = () => {
        setStock(!stock)
        try {
            const updated = updateProductMutation({
                where: {id: product.id},
                data: {stock: !product.stock}
            })
            console.log(updated)
        } catch (error) {
            console.log(error)
            alert('some error occured')
        }
    }

    const handleDelete = () => {
        try {
            setItem({})
            const deleted =  deleteProductMutation({
                where: {id: product.id}
            })
            console.log(deleted)
            alert('product has been deleted')
            window.location.reload()
        } catch (error) {
            console.log(error)
            alert('product deleted')
        }
    }

    return (
        <>
            <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{stock.toString()}</td>
                <td>
                    <button onClick={handleClick}>
                        Change Stock
                    </button>
                </td>
                <td>
                    <button onClick = {handleDelete}>
                        Remove Product
                    </button>
                </td>
            </tr>
        </>
    )
}

export default SingleProduct
