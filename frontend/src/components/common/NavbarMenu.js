
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import shopingCartIcon from "../../assets/img/cart-shopping.svg";
function NavbarMenu() {
  const productCount = useSelector((state) => state.cartItems.length);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Product-Box</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/all-products">
              All Products
            </Nav.Link>
            <Nav.Link as={Link} to="/add-product">
              Add Product
            </Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Link as={Link} to="/checkout">
              <div
                style={{ width: "50px", height: "25px" }}
                className="position-relative"
              >
                <img src={shopingCartIcon} className="position-absolute" />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                  {productCount}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;
