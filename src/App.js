import "./App.css";
import Left from "./Component/Left/Left";
import Main from "./Component/Main/Main";
import Center from "./Component/Center/Center";
import { product } from "./assets/infos/productinfo";

function App() {
  return (
    <div className="flex flex-wrap flex-row-reverse  mx-5 md:mx-10 ">
      {/* slider */}
      <Main images={product.images} />
      {/* Product Detail */}
      <Center item={product} />
      {/* Feature */}
      <Left />
    </div>
  );
}

export default App;
