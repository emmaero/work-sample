import Products from "./components/Products";
import { useEffect, useState } from "react";
import "./style/style.scss";
import Navigation from "./components/Navigation";
import { useImages } from "./states/ImagesProvider";

function App() {
  const [loadingStatus, setLoadingStatus] = useState(true);
  const [products, setProducts] = useState();
  const { images, dispatch } = useImages();
  function saveImages(images) {
    dispatch({ type: "setImages", images });
  }
  const URL = "http://localhost:3001/api/products";
  useEffect(() => {
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((json) => {
        setProducts(json.products);
        saveImages(json.images);
        setLoadingStatus(false);
      })
      .catch((error) => {
        console.log("error data:", error);
      });
  }, []);

  return (
    <div className="App">
      <Navigation />
      {loadingStatus ? <p>Loading...</p> : <Products list={products} />}
    </div>
  );
}

export default App;
