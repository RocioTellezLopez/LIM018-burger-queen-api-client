
export default function getProducts(route, keyBearer) {
  const url = `http://localhost:3000/${route}`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${keyBearer}`
    }
  };
    
  const fetchProducts = fetch(url, options)
    .then((response) => response.json())
    .then(data => data)
    .catch(err => err);

    return fetchProducts;
}