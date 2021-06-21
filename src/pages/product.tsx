import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import ProductOne from "./product1"
import Main from "./main"

const Product = () => {
  return (
    <Layout>
      <Router basepath="/product">
        <ProductOne path="/page1" />
        <Main path="/" />
      </Router>
    </Layout>
  )
}

export default Product;