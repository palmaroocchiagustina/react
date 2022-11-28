import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Navbar from "./components/Navbar";
import ContextContainer  from "./components/ContextContainer";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";


export default function App() {

  return (
    <BrowserRouter>
     <ContextContainer>
      <Navbar  color={"black"}/>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:idcategoria" element={<ItemListContainer />} />
        <Route path="/item/:iditem" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/cart" element={<Navbar/>}/>
        <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </ContextContainer>
      <Footer />
    </BrowserRouter>
  );
}






