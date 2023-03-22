import { useDispatch, useSelector } from "react-redux";
import { ADD, DLT, RMV } from "../Redux/actions/Action";
import { useEffect, useState } from "react";

export function Items() {
  const [price, setPrice] = useState(0);
  console.log(price);

  const getdata = useSelector((state) => state.cartreducer.carts);

  const dispatch = useDispatch();

  const del = (id) => {
    dispatch(DLT(id));
  }

  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
  }

  const remove = (item) => {
    dispatch(RMV(item));
  }

  if (getdata.length > 0) {
    return (
      <>
        {
          getdata.map((item) => {
            return (
              <tr>
                <td data-th="Product">
                  <div className="row d-flex">
                    <div className="col-md-3 text-left">
                      <img
                        src={item.url}
                        alt=""
                        className="img-fluid d-none d-md-block rounded mb-2 shadow"
                      />
                    </div>
                    <div className="col-md-9 text-left mt-sm-2">
                      <h4>Fettle</h4>
                      <p className="font-weight-light">{item.Capacity}</p>
                    </div>
                  </div>
                </td>
                <td data-th="Price">Rs. {item.Price * item.qnty}</td>
                <td data-th="Quantity">
                  <div className="mt-2 d-flex justify-content-between align-items-center text-center" style={{ border: "black", width: "10vh", height: "6vh", cursor: "pointer", background: "#ddd", color: "#111" }}>
                    <div className="align-items-center ml-2" onClick={item.qnty <= 1 ? () => del(item.id) : () => remove(item)} style={{ fontSize: "50" }}>-</div>
                    <div className="align-items-center" style={{ fontSize: "50" }}>{item.qnty}</div>
                    <div className="align-items-center" onClick={() => send(item)} style={{ fontSize: "50" }}>+</div>
                  </div>
                </td>
                <td className="actions" data-th="">
                  <div className="text-right">
                    <button
                      type="button"
                      className="btn btn-primary position-relative"
                      value={"Delete"}
                      onClick={() => del(item.id)}
                    >Delete

                    </button>
                  </div>
                </td>
              </tr>
            );
          })
        }


      </>
    );

  } else {
    return (
      <div className="d-flex align-item-center">
        <h1 className="text-center">YOUR CART IS EMPTY</h1>
      </div>
    )
  }
}
