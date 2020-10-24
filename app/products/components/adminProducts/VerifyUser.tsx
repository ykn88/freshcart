import { useCurrentUser } from 'app/hooks/useCurrentUser'
import getCurrentUser from 'app/users/queries/getCurrentUser'
import { Link, Router } from 'blitz'
import React from 'react'
import ProductCreate from './ProductCreate'
import UploadProduct from './UploadProduct'

const VerifyUser = () => {
    const user = useCurrentUser()
    console.log(user?.id)
    return (
        <>
            {(user?.id && user.role === 'admin') ? (
                <div>
                   <ProductCreate user={user}/>
                </div>
            ) : (<div>
                <Link href='/'>
                   <a>You are not allowed here</a>
                </Link>
            </div>)
           }
        </>
    )
}

export default VerifyUser
