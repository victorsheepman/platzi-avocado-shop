import React from 'react'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'
import fetch from 'isomorphic-unfetch'

//SSR
export const getStaticProps = async ()=>{
  const response = await fetch('https://platzi-avo-alpha.vercel.app/api/avo');
  console.log(response);
  
  const {data: productList} = await response.json();
  
  return {
    props:{
      productList
    }
  }
}

const HomePage = ({productList}:{productList: TProduct[]}) => {

  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  )
}

export default HomePage
