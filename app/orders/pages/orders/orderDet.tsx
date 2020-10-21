import React from 'react'
import Layout from "app/layouts/Layout"
import OrderDet from 'app/orders/components/OrderDet'

const orderDet = () => {
    return (
        <div>
            <br/><br/><br/>
            <OrderDet />
        </div>
    )
}
orderDet.getLayout = (page) => <Layout title={"Orders History"}>{page}</Layout>
export default orderDet
