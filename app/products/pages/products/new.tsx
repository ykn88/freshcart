import React, { Suspense } from "react"
import Layout from "app/layouts/Layout"
import { Link, useRouter, useMutation, BlitzPage } from "blitz"
import createProduct from "app/products/mutations/createProduct"
import ProductForm from "app/products/components/ProductForm"
import Cart from "app/products/components/Cart"
import Image from "app/products/components/Image"
import UploadProduct from "app/products/components/adminProducts/UploadProduct"
import VerifyUser from "app/products/components/adminProducts/VerifyUser"

const NewProductPage: BlitzPage = () => {
  const router = useRouter()
  const [createProductMutation] = useMutation(createProduct)

  return (
    <div>
      <br/><br/><br/>
      <Suspense fallback={<div>Loading...</div>}>
        <VerifyUser />
      </Suspense>
    </div>
  )
}

NewProductPage.getLayout = (page) => <Layout title={"Create New Product"}>{page}</Layout>

export default NewProductPage
