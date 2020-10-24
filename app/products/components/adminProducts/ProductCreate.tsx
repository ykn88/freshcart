import createProduct from 'app/products/mutations/createProduct'
import { Router, useMutation } from 'blitz'
import React from 'react'
import UploadProduct from './UploadProduct'

const ProductCreate = ({user}) => {
    const [createProductMutation] = useMutation(createProduct)

    const newProduct = (values) => {
        console.log(values)
        try {
            const product = createProductMutation({
              data: {
                name: values.name,
                price: parseInt(values.price),
                imageUrl: values.imageUrl,
                stock: true,
                category: {connect: {id: parseInt(values.category)}},
                minQuantity: parseInt(values.minQuantity),
                measure: values.measure,
                description: values.description
              }
            }) 
            console.log(product)
            Router.push('/admin')
        } catch (error) {
            alert('Product not created')
            console.log(error)
        }
    }
    return (
        <div>
            <UploadProduct newProduct={newProduct}/>
        </div>
    )
}

export default ProductCreate
