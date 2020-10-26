import React from "react"
import { useRouter, BlitzPage, useQuery } from "blitz"
import Layout from "app/layouts/Layout"
import { LoginForm } from "app/auth/components/LoginForm"
import getCarts from "app/carts/queries/getCarts"
import Login from "../components/Login"

let cartDb
let localCart = []
let order = {}
let array = {}
let amount = 0

const LoginPage: BlitzPage = () => {
  const router = useRouter()

  const handleRoute = (user) => {
    window.localStorage.setItem('cart', JSON.stringify(localCart))
    window.localStorage.setItem('quantity', amount.toString())
    window.localStorage.setItem('order', JSON.stringify(order))
    window.localStorage.setItem('array', JSON.stringify(array))
    window.localStorage.setItem('amount', amount.toString())
    if(user.role === 'admin') router.push('/admin')
    else router.push('/products')
  }

  return (
    <div>
      {/* <LoginForm onSuccess={handleRoute} /> */}
      <Login handleRoute={handleRoute}/>
    </div>
  )
}

LoginPage.getLayout = (page) => <Layout title="Log In">{page}</Layout>

export default LoginPage
