import React, { Suspense } from "react"
import Layout from "app/layouts/Layout"
import { Link, usePaginatedQuery, useRouter, BlitzPage } from "blitz"
import getProducts from "app/products/queries/getProducts"
import Header from "app/products/components/Header"
import Search from "app/products/components/Search"
import Product from "app/products/components/Product"
import Footer from "app/products/components/Footer"


const ProductsPage: BlitzPage = () => {
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
        <Search />
        <Product />
      </Suspense>
      {/* <Footer /> */}
    </div>
  )
}

ProductsPage.getLayout = (page) => <Layout title={"Products"}>{page}</Layout>

export default ProductsPage
