import getCarts from "app/carts/queries/getCarts"
import { useCurrentUser } from "app/hooks/useCurrentUser"
import { useQuery } from "blitz"
import { useEffect } from "react"

let totalQuantity: number
let lists:Array<Object> = []

export const Check = ({setFinal}) => {
  let localCart
  let cartList
  let amount = 0
  let check
  // const user = useCurrentUser()
 
  useEffect(() => {
      
  }, [])

//   const [{carts}] = useQuery(getCarts,{include:{product:true}})
//   localCart = JSON.parse(window.localStorage.getItem('cart'))
//   lists = localCart
//   cartList = carts
//   console.log(cartList)
//   try {
//     if(lists.length > 0) {
//         lists.forEach(list => amount += list.quantity)
//     }
//     else if(cartList.length > 0) {
//        cartList.forEach(cart => {
//            const item = JSON.parse(window.localStorage.getItem('cart'))
//            const newItem = {
//             quantity: cart.quantity,
//             productId: cart.productId,
//             productPrice: cart.productPrice,
//             userId: cart.userId
//            }
//            item.push(newItem)
//            window.localStorage.setItem('cart', JSON.stringify(item))
//            amount += cart.quantity
//        })
//     }
//     else {
//         amount = 0
//     }
//     window.localStorage.setItem('quantity', amount.toString())
//     setFinal(amount)
//  } catch (error) {
//     console.log(error)
//   }
  return (
    <>

    </>
  )
}
