import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home.page";
import AllProductsPage from "./pages/AllProducts.page";
import AddProductsPage from "./pages/AddProduct.page";
import CheckoutPage from "./pages/Checkout.page";
import NavbarMenu from "./components/common/NavbarMenu";

function App() {
  return (
    <div className="App">
      <NavbarMenu/>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-products" element={<AllProductsPage />} />
        <Route path="/add-product" element={<AddProductsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
}

export default App;
