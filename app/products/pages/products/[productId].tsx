import React, { Suspense, useEffect, useState } from "react"
import Layout from "app/layouts/Layout"
import { Link, useRouter, useQuery, useParam, BlitzPage, useSession, useMutation } from "blitz"
import getProduct from "app/products/queries/getProduct"
import deleteProduct from "app/products/mutations/deleteProduct"
import { useCurrentUser } from "app/hooks/useCurrentUser"
import AddQuantity from "app/products/components/AddQuantity"

export const Product = () => {
 
  let user = useSession()
  let userInfo = useCurrentUser()
  
  console.log(userInfo)
  const productId = useParam("productId", "number")
  const [product] = useQuery(getProduct, { where: { id: productId } })
  const router = useRouter()

  return (
    <div>
      <h1>Product {product.id}</h1>
      <pre>{JSON.stringify(product, null, 2)}</pre>


      {user.roles[0]==='admin' && (
        <>
          <Link href="/products/[productId]/edit" as={`/products/${product.id}/edit`}>
            <a>Edit</a>
          </Link>
          <button
            type="button"
            onClick={async () => {
              if (window.confirm("This will be deleted")) {
                await deleteProduct({ where: { id: product.id } })
                router.push("/products")
              }
            }}
          >
            Delete
          </button>
        
        </>
      )}

      {userInfo?.verified===true && (
        <AddQuantity product={product} user={userInfo}/>
      )}

    </div>
  )
}

const ShowProductPage: BlitzPage = () => {
  return (
    <div>
      <p>
        <Link href="/products">
          <a>Products</a>
        </Link>
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <Product />
      </Suspense>
    </div>
  )
}

ShowProductPage.getLayout = (page) => <Layout title={"Product"}>{page}</Layout>

export default ShowProductPage
