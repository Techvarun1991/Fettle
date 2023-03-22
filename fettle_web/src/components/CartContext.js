import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Items } from "./Items";
import { Prod } from "./Prod";


export function CartContext() {

  const [price, setPrice] = useState(0);
  console.log(price);

  const getdata = useSelector((state) => state.cartreducer.carts);

  const total = () => {
    let price = 0;
    getdata.map((item, i) => {
      price = item.Price * item.qnty + price
    });
    setPrice(price);
  }

  useEffect(() => {
    total();
  }, [total])

  return (
    <>
      <div
        className=" py-5"
        style={{ background: "linear-gradient(-180deg, #c3e8a7, #bbe2ed)" }}
      >
        <section id="cartpage">
          <div className="container">
            <h3
              style={{ fontSize: "2rem", textAlign: "center", color: "black" }}
            >
              <strong> Shopping Cart</strong>
            </h3>
            <div
              className="container border"
              style={{ height: "fit-content", backgroundColor: "whitesmoke" }}
            >
              <table
                id="shoppingCart"
                className="table table-condensed table-responsive"
              >
                <thead>
                  <tr>
                    <th style={{ width: "60%" }}>Product</th>
                    <th style={{ width: "12%" }}>Price</th>
                    <th style={{ width: "10%" }}>Quantity</th>
                    <th style={{ width: "16%" }}>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <Items />
                  <h2 className="align-item-right">Total: Rs.{price}</h2>
                </tbody>

              </table>
            </div>
            <div className="my-5">
              <div className="row mt-4 d-flex align-items-center">
                <div className="col-sm-6 order-md-2 text-right">
                  <Link
                    to={"./checkout"}
                    className="btn btn-primary mb-4 btn-lg pl-5 pr-5"
                  >
                    Checkout
                  </Link>
                </div>
                <div className="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
                  <Link to={'/products'}>
                    <i className="fas fa-arrow-left mr-2" /> Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
