
import './App.css';
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


