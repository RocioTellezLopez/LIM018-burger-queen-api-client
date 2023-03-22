import Logo from "../../staticComponents/Logo/Logo";
import "./Waiter.css";
import Products from "../../staticComponents/Products/Products";
import getProducts from "../../../api/peticiones/getProducts";
import { useEffect, useState } from "react";

function Waiter() {
  // peticiones al servidor para obtener los la lista de productos

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts("products", "EsUnSecreto")
      .then((data) => setProducts(data));
  }, []);
  
  // console.log(products)
  

  function breakfastProducts(string) {
    let itemsBreakfast = products.filter((item) => item.type === "breakfast")
    return (
      <div>
        { itemsBreakfast.map((data) => <Products item={data} key={data.id} />)}
      </div>
    )
  }

  return (
    <section>
      <Logo className="logo" />
      <div>
        <button onClick={breakfastProducts}>Desayuno</button>
        <button>Almuerzo y Cena</button>
        <div>
          {/* { products.map((data) => <Products item={data} key={data.id} />)
          } */}
        </div>
      </div>
    </section>
  );
}

export default Waiter;
