
import './App.css';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';


export default function App() {
  return (
  <div>
    <Navbar color={"black"}/>
    <div>  
      <ItemListContainer fondo={"grey"} greeting= {"BIENVENIDOS A CHILL OUT- PRENDAS DE DISEÑO"} />
     </div>
    <Footer/>
  </div>
  );
}


