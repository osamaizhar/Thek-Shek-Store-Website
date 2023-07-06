import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  Button,
  Tooltip, // Tooltip gives info when you hover over something
  Stack,
  Link,
  HStack, // HStack is a way to organize and position multiple UI elements side by side within a parent container horizontally
  Text,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi"; // since chakra does not have shopping cart icon we use FiShoppingCart from react-icons

import { Link as ReactLink } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import { useState } from "react"; // hook in react

const Rating = ({ rating, numReviews }) => {
  const { iconSize, setIconSize } = useState("14px"); // useState is not required if you are using redux
  return (
    <Flex>
      <HStack spacing={"2px"}>
        <StarIcon size={iconSize} w={"14px"} color={rating >= 2 ? "orange.500" : "gray.200"} />
        <StarIcon size={iconSize} w={"14px"} color={rating >= 2 ? "orange.500" : "gray.200"} /> {/*checks if rating is >=2 then change star color to orange other wise leave it gray */}
        <StarIcon size={iconSize} w={"14px"} color={rating >= 3 ? "orange.500" : "gray.200"} />
        <StarIcon size={iconSize} w={"14px"} color={rating >= 4 ? "orange.500" : "gray.200"} />
        <StarIcon size={iconSize} w={"14px"} color={rating >= 5 ? "orange.500" : "gray.200"} />
      </HStack>
      <Text fontSize={"md"} fontWeight={"bold"} ml={"4px"}>
        {`${numReviews} ${numReviews === 1 ? "Review" : "Reviews"}`} {/*using string interpolation we are checking here if number of reviews is 1 we just say Review otherwise we say Reviews */}

      </Text>
    </Flex>
  )
}

const ProductCard = ({ product }) => { // product is directly destructured from props to avoid redundancy
  // cards needs to be static so it does not mess up their view in mobile mode
  return (
    <Stack
      p="2"
      spacing={"3px"}
      bg={useColorModeValue("white", "gray.800")}
      minW="240px"
      h={"450px"}
      borderWidth={"1px"}
      rounded={"1g"}
      shadow={"1g"}
      position={"relative"}>
      {product.isNew && <Circle size={"10px"} position={"absolute"} top={2} right={2} bg={"green.300"} />}
      {product.stock <= 0 && <Circle size={"10px"} position={"absolute"} top={2} right={2} bg={"red.300"} />}
      <Image src={product.image} alt={product.name} roundedTop="lg" />
      <Box flex={"1"} alignItems={"baseline"}>
        {product.stock <= 0 && (
          <Badge rounded="full" px={"2"} fontSize={"0.8rem"} colorScheme="red">
            Out of Stock
          </Badge>
        )}
        {product.isNew && (
          <Badge rounded="full" px={"2"} fontSize={"0.8rem"} colorScheme="green">
            New
          </Badge>
        )}
      </Box>
      <Flex mt={"1"} justifyContent={"space-between"} alignContent={"center"}>
        {/*we use this tilted apostrophe and $ sign to add variable in sting called string interpolation */}
        <Link as={ReactLink} to={`/products/${product._id}`} pt={"2"} cursor={"pointer"}> {/*pt is padding top  setting the mouse cursor as "pointer" so that user knows they can click on the card */}
          <Box fontSize={"2xl"} fontWeight={"semibold"} lineHeight={"tight"}>
            {product.name}
          </Box>
        </Link> {/*this will give route using product id */}
      </Flex>
      <Flex>
        <Rating rating={product.rating} numReviews={product.numReviews} />
      </Flex>
      <Flex justify={"space-between"}>               {/*if we are using light more color of text will be gray otherwise it will be white */}
        <Box fontSize={"2xl"} color={useColorModeValue("gray.800", "white")}>
          {product.price.toFixed(2)}  {/* toFixed rounds it the price to 2 dp */}
          <Box as="span" color={useColorModeValue("gray.600", "white")} fontSize={"lg"}>
            pkr
          </Box>
        </Box>
        <Tooltip label="Add to cart" bg={"white"} placement="top" color={"gray.800"} fontSize={"1.2em"}>
          <Button variant={"ghost"} display={"flex"} disabled={product.stock <= 0}>
            <Icon as={FiShoppingCart} h={"7"} w={"7"} alignSelf={"center"} />
          </Button>

        </Tooltip>
      </Flex>

    </Stack>
  );
};

export default ProductCard;
