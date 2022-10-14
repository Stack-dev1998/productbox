import { useEffect, useState } from "react";
import imgs from '../utils/dummyImgs'

const axios = require("axios").default;

function AllProductsPage() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:3000/items");
        setItems(response.data);
        console.log(response.data)
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div>
      <h1>Welcome to All Products page!</h1>
      <div className="container">
        <div className="row">
          {items.map((el) => (
            <div className="col-12 col-sm-4 col-md-3">
              <div className="card">
                <img src={imgs[el.id-1]} className="card-img-top img-fluid " style={{height:"200px"}} alt="..."/>
                <div className="card-body">
                  <h5 className="card-title text-start fs-4">{el.name}</h5>
                 
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item text-start">Price: {el.price}$</li>
                 
                </ul>
                <div className="card-body">
                  <button className="btn btn-primary btn-sm btn-block">Add To Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllProductsPage;
