import React from "react"
import { useRouter, BlitzPage } from "blitz"
import Layout from "app/layouts/Layout"
import { SignupForm } from "app/auth/components/SignupForm"
import Signup from "../components/Signup"

const SignupPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <div>
      {/* <SignupForm onSuccess={() => router.push("/")} /> */}
      <Signup onSuccess={() => router.push('/products')}/>
    </div>
  )
}

SignupPage.getLayout = (page) => <Layout title="Sign Up">{page}</Layout>

export default SignupPage
