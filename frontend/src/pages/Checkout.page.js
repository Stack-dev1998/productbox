import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import imgs from "../utils/dummyImgs";
import { removeFromCart } from "../redux/actions/cart.action";

function CheckoutPage() {
  const items = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  const removeFromCarthandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <h1>Welcome to Checkout page!</h1>
      <div className="container">
        <div className="row">
          {items.map((el) => (
            <div className="col-12 col-sm-4 col-md-3" key={el.id}>
              <div className="card">
                <img
                  src={imgs[el.id - 1]}
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
                  <li className="list-group-item text-start">
                    Quantity: {el.qnty}$
                  </li>
                  <li className="list-group-item text-start">
                    Total Amount: {el.price*el.qnty}$
                  </li>
                </ul>
                <div className="card-body">
                  <button
                    className="btn btn-primary btn-sm btn-block"
                    onClick={() => removeFromCarthandler(el.id)}
                  >
                    Remove Item
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

export default CheckoutPage;
