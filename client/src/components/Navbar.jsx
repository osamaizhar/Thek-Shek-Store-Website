// import React from 'react' since we are using react 18 we don't need this first line here
// for light/dark mode
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  // for hamburger and menu icon
  Icon,
  Text,
  // gives us boolean functionality , will be using this
  useDisclosure, // Hook for managing disclosure state
  Button,
  Stack,
  useColorModeValue, // Hook for managing color mode values
  useColorMode, // Hook for managing color mode
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom"; // giving link an alias to differentiate from Link of chakra ui
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { GiTechnoHeart } from "react-icons/gi";

const links = [
  { linkName: "Products", path: "/products" }, // defines linkname and path
  { linkName: "ShoppingCart", path: "/cart" },
];

// This code defines a NavLink component in JavaScript. The component renders a link (<Link>) with some styling and properties. The link's target (to) is determined by the path prop. The link's content is determined by the children prop.
const NavLink = ({ path, children }) => (
  <Link // Link is ReactLink from react-router-dom
    as={ReactLink} //    ReactLink is a class or component in React that provides a way to create a two-way binding between a value and an input element in a React component.
    to={path}
    px={2} // Horizontal padding
    py={2} // Vertical padding
    rounded="md" // Rounded corners
    _hover={{
      textDecoration: "none", // removes underline from link
      bg: useColorModeValue("gray.200", "gray.700"), // adjusts background
    }}
  >
    {children}
  </Link>
);
const Navbar = () => {
  const { isOpen, onClose, onOpen } = useDisclosure(); //isOpen .. are from useDisclosure  // State and functions for managing the open/close state of the menu
  const { colorMode, toggleColorMode } = useColorMode(); // State and function for managing the color mode
  return (
    // In React we have one parent component per functional component or class component, can't have 2 parent compoenets
    // md = medium, if isOpen then show CloseIcon else show HamburgerIcon
    // Box is our parent component
    // Hstack is a way to organize and position multiple UI elements side by side within a parent container.
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />

        <HStack>
          <Link as={ReactLink} to="/">
            <Flex alignItems="center">
              <Icon as={GiTechnoHeart} h={6} w={6} color="orange.400" />
              <Text frontWeight="extrabold">Tech Shek Store</Text>
            </Flex>
          </Link>
          {/* "md" is commonly used in Chakra UI as a shorthand for the medium breakpoint size. In Chakra UI, breakpoints are defined for different screen sizes, 
          such as "sm" for small, "md" for medium, "lg" for large, and so on. These breakpoints can be used to apply different styles or layouts based on the screen size. 
          So, in the context of Chakra UI, "md" typically refers to the medium breakpoint size. */}
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
            {" "}
            {/* added to fix mobile view base is referring to mobile view */}
            {links.map(
              (
                link // mapping the anonymous function to links array and rendering NavLink component where
              ) => (
                // path is equal to link.path and key is equal to link.linkName
                <NavLink key={link.linkName} path={link.path}>
                  {link.linkName}
                </NavLink>
              )
            )}
          </HStack>
        </HStack>

        <Flex alignItems="center">
          <NavLink>
            {/* This section of code deals with light and dark more */}
            <Icon
              as={colorMode === "light " ? MoonIcon : SunIcon}
              alignSelf="center"
              onClick={() => toggleColorMode()} // anonymous function here basically only runs the toggleColorMode function when icon is clicked
            />
          </NavLink>
          {/* p stands for padding  */}
          <Button
            as={ReactLink}
            to="/login"
            p={2}
            fontSize={"sm"}
            fontWeight={400}
            variant="link"
          >
            Sign In
          </Button>
          {/*m stands for margin _hover basically add hover effect so if you hover then orange color becomes 
        lighter otherwise it will be a slightly darker orange and color= sets the color of the text to white */}
          <Button
            as={ReactLink}
            to="/registration"
            m={2}
            fontSize={"sm"}
            display={{ base: "none", md: "inline-flex" }} // added to fix mobile view
            fontWeight={600}
            _hover={{ bg: "orange.400" }}
            bg="orange.500"
            color={"white"}
          >
            Sign Up
          </Button>
        </Flex>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          {" "}
          {/*Shows the hamburger menu drop down icons  */}
          <Stack as="nav" spacing={4}>
          {/* key={link.linkName}: This sets the unique key for each rendered <NavLink> component. The key is typically used by React to optimize rendering and track component updates.
path={link.path}: This sets the path prop of the <NavLink> component, likely specifying the URL or path that the link should navigate to. */}
            {links.map(
              (
                link // mapping the anonymous function to links array and rendering NavLink component where
              ) => (
                // path is equal to link.path and key is equal to link.linkName
                <NavLink key={link.linkName} path={link.path}>
                  {link.linkName}
                </NavLink>
              )
            )}
            <NavLink key={"sign up"} path={"/registration"}>
              Sign Up
            </NavLink>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
