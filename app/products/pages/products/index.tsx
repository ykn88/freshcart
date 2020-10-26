import React, { Suspense, useContext, useEffect, useState } from "react"
import Layout from "app/layouts/Layout"
import { BlitzPage, useQuery } from "blitz"
import Search from "app/products/components/Search"
import Product from "app/products/components/Product"
import Checkout from "app/products/components/Checkout"
import { Check } from "app/products/components/Check"
import VerifyUser from "app/products/components/VerifyUser"
import getCarts from "app/carts/queries/getCarts"
import { useCurrentUser } from "app/hooks/useCurrentUser"
import ItemContext from "app/context/ItemContext"

let dummyQuantity = 0
let dummyAmount = 0

const ProductsPage: BlitzPage = () => {
  const [final, setFinal] = useState(dummyQuantity)
  const [grand, setGrand] = useState(0)
 
  return(
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
