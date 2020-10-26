import getCarts from 'app/carts/queries/getCarts'
import ItemContext, { ItemContextConsumer } from 'app/context/ItemContext'
import { useCurrentUser } from 'app/hooks/useCurrentUser'
import { contextValues } from 'app/layouts/Layout'
import { useQuery } from 'blitz'
import React, { useContext, useEffect } from 'react'
import { Check } from './Check'
import Checkout from './Checkout'
import Footer from './Footer'
import Product from './Product'
import Profile from './Profile'
import Search from './Search'

let local:Array<Object> =  []
let check:Array<Object> =  []

const VerifyUser = ({final, grand, setFinal, setGrand}) => {
  const user = useCurrentUser()
  const [{carts}] = useQuery(getCarts, {where: {userId: user?.id}})
  check = JSON.parse(window.localStorage.getItem('cart'))
  let dummyQuantity = 0
  let dummyAmount = 0
  if(check.length === 0 && carts) {
      carts.map(cart => {
        if(cart.userId === user?.id){
          let newCart = {
            quantity: cart.quantity,
            productId: cart.productId,
            productPrice: cart.productPrice,
            userId: cart.userId 
          }
          local.push(newCart)
          dummyQuantity += cart.quantity
          dummyAmount += cart.quantity * cart.productPrice
        }
      })
      window.localStorage.setItem('cart', JSON.stringify(local))
      window.localStorage.setItem('quantity', dummyQuantity.toString())
      window.localStorage.setItem('amount', dummyAmount.toString())
    }
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
                  <Product setFinal={setFinal} grand={grand} setGrand={setGrand} />
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
