import PoolsPage from "./pages/productWedge";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "components/Layout/Footer";
import PortfolioPage from "pages/PortfolioPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/product" element={<PoolsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
