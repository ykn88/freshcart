import { useCurrentUser } from 'app/hooks/useCurrentUser'
import React from 'react'
import { Check } from './Check'
import Checkout from './Checkout'
import Footer from './Footer'
import Product from './Product'
import Profile from './Profile'
import Search from './Search'

const VerifyUser = ({final, grand, setFinal, setGrand}) => {
    const user = useCurrentUser()
    return (
        <div>
            {user?.verified === false ? (
               <div>
                  <Profile />
               </div>
            ) : (
              <div>
                <Check setFinal={setFinal}/>
                <Search />
                <Product setFinal={setFinal} grand={grand} setGrand={setGrand}/>
                <Checkout final={final}/>
                <div>
                  <Footer final={final} grand={grand}/>
                </div>
              </div>
            )}
        </div>
    )
}

export default VerifyUser
