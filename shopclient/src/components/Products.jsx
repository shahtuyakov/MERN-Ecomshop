import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";
import { publicRequest } from "../requestMethods";


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = ({ cat, filters, sort }) => {
  // console.log(cat, filters, sort);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  //--------------------------------------------------
//   const axiosInstance = axios.create({
//     baseURL: process.env.REACT_APP_API_URL,
//   })

  //--------------------------------------------------

  // ------- filteres ----------
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get( cat
          ? `/product?category=${cat}`
          : "/api/product"
        );
        setProducts(res.data);
      } catch (err) {
        
      }
    };
    getProducts();
  }, [cat]);


  useEffect(() => {
    cat && setFilteredProducts(products.filter((item) =>
      Object.entries(filters).every(([key, value]) =>
        item[key].includes(value))));
  }, [products, cat, filters]);



  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

//------------------------------------------------------
  
  return (
    <Container>
      {cat 
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products.slice(0, 7).map((item) => <Product item={item} key={item.id}/>)}
    </Container>
  )
}

export default Products
