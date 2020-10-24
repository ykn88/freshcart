import ProductList from 'app/components/Products/ProductList'
import { useCurrentUser } from 'app/hooks/useCurrentUser'
import { BlitzPage, Link } from 'blitz'
import React, { Suspense } from 'react'

export const Verify = () => {
    const user = useCurrentUser()
    return(
        <>
            {(user?.role === 'admin' && user?.id) ? (
                <div>
                    <ProductList />
                </div>
            ) : (<div>
                 <Link href='/'>
                    <a>You are no allowed here, go back</a>
                 </Link>
            </div>)
           }
        </>
    )
} 

const viewproducts:BlitzPage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Verify />
        </Suspense>
    )
}

export default viewproducts
