import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { adddToCart } from "../redux/actions/cart.action";
import imgs from "../utils/dummyImgs";

const axios = require("axios").default;

function AllProductsPage() {
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:3000/items");
        setItems(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const addToCardhandler = (item) => {
    dispatch(adddToCart(item));
  };

  return (
    <div>
      <h1>Welcome to All Products page!</h1>
      <div className="container">
        <div className="row">
          {items.map((el, i) => (
            <div className="col-12 col-sm-4 col-md-3" key={el.id}>
              <div className="card">
                <img
                  src={i < 5 ? imgs[el.id - 1] : imgs[1]}
                  className="card-img-top img-fluid "
                  style={{ height: "200px" }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-start fs-4">{el.name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item text-start">
                    Price: {el.price}$
                  </li>
                </ul>
                <div className="card-body">
                  <button
                    className="btn btn-primary btn-sm btn-block"
                    onClick={() => addToCardhandler(el)}
                  >
                    Add To Cart
                  </button>
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
