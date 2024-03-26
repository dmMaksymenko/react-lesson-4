import axios from "axios";
import { useState, useEffect } from "react";
import { CirclesWithBar } from "react-loader-spinner";
// {
// "id": 7,
// "title": "Samsung Galaxy Book",
// "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
// "price": 1499,
// "discountPercentage": 4.15,
// "rating": 4.25,
// "stock": 50,
// "brand": "Samsung",
// "category": "laptops",
// "thumbnail": "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
// "images": [
// "https://cdn.dummyjson.com/product-images/7/1.jpg",
// "https://cdn.dummyjson.com/product-images/7/2.jpg",
// "https://cdn.dummyjson.com/product-images/7/3.jpg",
// "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg"
// ]
// }
function App() {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsLoading(true);
        const { data } = await axios.get("https://dummyjson.com/products");
        setProducts(data.products);
      } catch (error) {
        setIsError(error);
      } finally {
        setIsLoading(true);
      }
    }
    fetchProducts();
  }, []);
  return (
    <>
      <div>
        <h1> Smart Ukrainian Big Product Store</h1>
        {isLoading && <div>Oops something went wrong</div>}(
        <div>
          return(
          <CirclesWithBar
            height="100"
            width="100"
            color="#4fa94d"
            outerCircleColor="#4fa94d"
            innerCircleColor="#4fa94d"
            barColor="#4fa94d"
            ariaLabel="circles-with-bar-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
          )
        </div>
        )
        <ul>
          {Array.isArray(products) &&
            products.map((product) => {
              return (
                <li key={product.id}>
                  <img
                    width={250}
                    src={product.thumbnail}
                    alt={product.title}
                  />
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                  <p>Price: {product.price}</p>
                  <p>Discount: {product.discountPercentage}</p>
                  <p>Rating: {product.rating}</p>
                  <p>Stock: {product.stock}</p>
                  <p>Brand: {product.brand}</p>
                  <p>Category: {product.category}</p>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}

export default App;
