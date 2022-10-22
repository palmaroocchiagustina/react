
import './App.css';
import CartWidget from './components/CartWidget';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';


export default function App() {

  return (
  <div>
    <Navbar color={"black"}/>
    <div>  
      <ItemListContainer fondo={"whitesmoke"} greeting= {"BIENVENIDOS A CHILL OUT- PRENDAS DE DISEÑO"} />
     </div>
    <Footer/>
  </div>
  );
}


