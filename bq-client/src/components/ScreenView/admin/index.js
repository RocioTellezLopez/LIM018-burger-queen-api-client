import { useState } from "react";

export default function Admin() {
  // variable de estado para los productos;
  const [products, setProducts] = useState([]);

  // peticiones de productos
  // fetch('http://localhost:3000/products', {
  //   method: 'GET',
  //   headers: {
  //     Authorization: 'Bearer EsUnSecreto'
  //   }
  // })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data)
  //   });

  const productPrueba = {
    name: 'leche',
    price: 10,
    imagen: '',
    type: 'desayuno'
  };
  const url = 'http://localhost:3000/products';

  // function postProduct( url) {
  //   fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer EsUnSecreto'
  //     },
  //     body: JSON.stringify({
  //       id: '',
  //       name: 'leche',
  //       price: 10,
  //       imagen: '',
  //       type: 'desayuno'
  //     })
  //   })
  // }

  // postProduct(url)

  

  return (
    <div>Admin</div>
  );
}