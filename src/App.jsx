import { Navbar } from "./components/layout/navbar/Navbar";
import { Home } from "./components/pages/home/Home";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  let saludo = "Hola Boris! Como estas?";

  return (
    <div>
      <Home />
      <Navbar />
      <ItemListContainer saludo={saludo} />
    </div>
  );
}

export default App;
