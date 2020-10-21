import OrderHistory from 'app/orders/components/OrderHistory'
import Layout from "app/layouts/Layout"
import React from 'react'

const history = () => {
    return (
        <div>
            <br/><br/><br/>
            <OrderHistory />
        </div>
    )
}
history.getLayout = (page) => <Layout title={"Orders History"}>{page}</Layout>
export default history
