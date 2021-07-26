import { Box, Image, Badge, StarIcon } from '@chakra-ui/react'
import Link from 'next/link'
const Home = ({ products }) => {
  console.log(products);
  //const productList = products.map((product) => {
    return (
      <>
        <h1>Home</h1>
      </>
    )
//})
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/products')
  const data = await res.json()
  return {
    props: {
      products: data,
    },
  }
}

export default Home
