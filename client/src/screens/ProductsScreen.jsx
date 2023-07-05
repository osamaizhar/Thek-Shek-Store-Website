//import React from 'react' in react 18 you don't need this line

import { Center, Wrap, WrapItem } from "@chakra-ui/react";
import { products } from "../products";
import ProductCard from "../components/ProductCard";

// Wrap is a layout component used to add space between elements and wraps automatically if there isn't enough space.
// Wrap: Wrap composes the Box component and renders a <ul> tag
// WrapItem: WrapItem composes the Box component and renders the HTML <li> tag
const ProductsScreen = () => {
  return (
    // 100vh == 100% of screen height
    <Wrap spacing={"30px"} justify={"center"} minHeight={"100vh"}>
      {/* WrapItem automatically sort our product cards whenever screen size
      increases or decreases */}
      {products.map((product) => (
        <WrapItem key={product._id}>
            {/*w is width h is height */}
          <Center w={"250px"} h={"550px"}>
            <ProductCard product={product} />
          </Center>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default ProductsScreen;
