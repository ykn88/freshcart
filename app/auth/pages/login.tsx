import React from "react"
import { useRouter, BlitzPage, useQuery } from "blitz"
import Layout from "app/layouts/Layout"
import { LoginForm } from "app/auth/components/LoginForm"
import getCarts from "app/carts/queries/getCarts"

let cartDb
let localCart 
let order = {}
let array = {}
let amount = 0

const LoginPage: BlitzPage = () => {
  const router = useRouter()

  const handleRoute = () => {
   

    localCart = JSON.parse(window.localStorage.getItem('cart'))

    
    window.localStorage.setItem('quantity', JSON.stringify(amount))
    window.localStorage.setItem('order', JSON.stringify(order))
    window.localStorage.setItem('array', JSON.stringify(array))
    router.push('/products')
  }

  return (
    <div>
      <LoginForm onSuccess={handleRoute} />
    </div>
  )
}

LoginPage.getLayout = (page) => <Layout title="Log In">{page}</Layout>

export default LoginPage
