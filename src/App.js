import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar  color={"black"}/>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:idcategoria" element={<ItemListContainer />} />
        <Route path="/item/:iditem" element={<ItemDetailContainer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}






/*import './App.css';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemList from './components/ItemList';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';


export default function App() {

  
  return (
  <div>
    <Navbar color={"black"}/>
    <div>
      <ItemDetailContainer/>
    </div>
    <div> 
      <ItemListContainer fondo={"whitesmoke"}/>
     </div>
    <div>
      <ItemList />
    </div>
    <Footer/>
  </div>
  );
}


*/