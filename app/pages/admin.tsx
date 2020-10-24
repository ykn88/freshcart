import { BlitzPage, Link } from 'blitz'
import React from 'react'

const admin:BlitzPage = () => {
    return (
        <div>
            Hello from Admin
            <br/>
            <br/>
            <Link href='/products/new'>
               <a>Create a Product</a>
            </Link>
            <br/>
            <br/>
            <Link href='/adminProducts/viewproducts'>
               <a>View Products</a>
            </Link>
            <br/>
            <br/>
            {/* <Link href="/verify">
            <a>Unverified Users</a>
            </Link> */}
        </div>
    )
}

export default admin
