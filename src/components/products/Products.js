import styled from "styled-components";
import { categories } from "../data";
import Product from "./Product"

const Container = styled.div`

    padding: 20px;
    display: flex;
    align-items : center ;
    flex-wrap: wrap;
    justify-content: center;
`;



const Products = () => {
  return (
    <Container>
      {categories.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
