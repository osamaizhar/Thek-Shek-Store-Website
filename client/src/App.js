import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductsScreen from "./screens/ProductsScreen";
import Home from "./screens/Home";
// BrowserRouter: The BrowserRouter component is a type of router provided by the react-router-dom library. It uses the HTML5 History API to manage the client-side routing for your application. It wraps your entire application and provides the necessary context for routing.

// Routes: The Routes component is a container for defining the routes of your application. It acts as a switch statement for rendering different components based on the current URL. Inside the Routes component, you define multiple Route components, each representing a specific route and component to render.

// Route: The Route component is used to define a specific route and the component to render when that route is accessed. It takes two main props: path and element. The path prop specifies the URL path that should match for the route to be active. The element prop specifies the component that should be rendered when the route matches. The element prop takes a React element, typically created using JSX.

// In the provided code snippet, the Routes component is used to define a single route with the path "/products" and the ProductsScreen component as the element to render when that route is accessed. This means that when the URL path matches "/products", the ProductsScreen component will be rendered.
// ChakraProvider Sets up chakra ui theme for the app
function App() {
  return (
     <ChakraProvider> 
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/products" element={<ProductsScreen />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </main>
      </Router>
    </ChakraProvider>
  );
}

export default App;
