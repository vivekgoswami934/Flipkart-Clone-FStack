import { Box } from "@mui/system";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import DataProvider from "./Context/DataProvider";
import { Routes, Route } from "react-router-dom";
import DetailsView from "./Components/Details/DetailsView";
import Cart from "./Components/Cart/Cart";
import AllProducts from "./Components/AllProductPage/AllProducts";

function App() {
 
   

  return (
    <DataProvider>
      <Header />
      <Box style={{ marginTop: 54 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<DetailsView  />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<AllProducts />} />
        </Routes>
      </Box>
    </DataProvider>
  );
}

export default App;
