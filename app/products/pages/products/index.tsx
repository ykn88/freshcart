import React, { Suspense, useState } from "react"
import Layout from "app/layouts/Layout"
import { BlitzPage } from "blitz"
import Search from "app/products/components/Search"
import Product from "app/products/components/Product"
import Checkout from "app/products/components/Checkout"
import { Check } from "app/products/components/Check"
import VerifyUser from "app/products/components/VerifyUser"

const ProductsPage: BlitzPage = () => {
  const [final, setFinal] = useState(0)
  const [grand, setGrand] = useState(0)
  return (
    <div>
      <br/><br/><br/>
      <Suspense fallback={<div>Loading...</div>}>
        <VerifyUser final={final} grand={grand} setFinal={setFinal} setGrand={setGrand}/>
        {/* <Check setFinal = {setFinal}/>
        <Search />
        <Product setFinal={setFinal}/>
        <Checkout final={final}/> */}
      </Suspense>
    </div>
  )
}

ProductsPage.getLayout = (page) => <Layout title={"Products"}>{page}</Layout>

export default ProductsPage
