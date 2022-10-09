import { Box } from "@mui/system";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import DataProvider from "./Context/DataProvider";
import { Routes, Route } from "react-router-dom";
import DetailsView from "./Components/Details/DetailsView";

function App() {
  return (
    <DataProvider>
      <Header />
      <Box style={{ marginTop: 54 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<DetailsView />} />
        </Routes>
      </Box>
    </DataProvider>
  );
}

export default App;
