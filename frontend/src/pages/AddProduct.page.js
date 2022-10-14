import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
function AddProductsPage() {
  const [saveModel, setSaveModel] = useState({
    name: "",
    price: "",
    img: "",
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setSaveModel((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/items/add-item",
        saveModel
      );

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Put Items up for Sale</h1>
      <div className="card w-50 mx-auto p-3 text-start">
      <form method="post" onSubmit={onSubmitHandler}>
        <div class="mb-3">
          <label for="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={onChangeHandler}
          />
        </div>
        <div className="mb-3">
          <label for="price" className="form-label">
            Price:
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            name="price"
            onChange={onChangeHandler}
          />
        </div>
        <div className="mb-3">
          <label for="img" className="form-label">
            Image:
          </label>
          <input
            type="text"
            className="form-control"
            id="img"
            name="img"
            onChange={onChangeHandler}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <p>
          <Link to="/all-products">View items</Link>
        </p>
      </form>
              </div>
      
    </div>
  );
}

export default AddProductsPage;
