import React, { Suspense, useEffect, useState } from "react"
import Layout from "app/layouts/Layout"
import { Link, usePaginatedQuery, useRouter, BlitzPage, useQuery } from "blitz"
import getProducts from "app/products/queries/getProducts"
import Header from "app/products/components/Header"
import Search from "app/products/components/Search"
import Product from "app/products/components/Product"
import Footer from "app/products/components/Footer"
import Checkout from "app/products/components/Checkout"
import getCarts from "app/carts/queries/getCarts"

let totalQuantity: number

export const Check = () => {
  const cartDB = useQuery(getCarts, {})
  console.log(cartDB)
  return (
    <div>

    </div>
  )
}

const ProductsPage: BlitzPage = () => {
  const [final, setFinal] = useState(0)
  console.log(final)
  
  return (
    <div>
      {/* <p>
        <Link href="/products/new">
          <a>Create Product</a>
        </Link>
      </p> */}

      {/* <Suspense fallback={<div>Loading...</div>}>
        <ProductsList />
      </Suspense> */}
      {/* <Header /> */}
      <br/><br/><br/>
      <Suspense fallback={<div>Loading...</div>}>
        <Check />
        <Search />
        <Product setFinal={setFinal}/>
        <Checkout final={final}/>
      </Suspense>
      {/* <Footer /> */}
    </div>
  )
}

ProductsPage.getLayout = (page) => <Layout title={"Products"}>{page}</Layout>

export default ProductsPage
