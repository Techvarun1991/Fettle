import { Component } from "react";
import { Image, Container, Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import fettlelogo1 from "./Images/fettlelogo1.jpg";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { aboutus } from "./Homepage";
import { useSelector } from "react-redux";
import { Loginorprofile } from "./Loginorprofile";
import { HashLink as LINK } from "react-router-hash-link";

export function Navigationbar() {
  const getdata = useSelector((state) => state.cartreducer.carts);

  return (
    <>
      <header className="navbar-expand-md bg-light p-2 py-2">
        <div className="bg-light">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <img
                src={fettlelogo1}
                style={{ height: "10vh", width: "10vh" }}
                alt=""
              />
            </div>
            <Loginorprofile></Loginorprofile>
          </div>
        </div>
      </header>
      <div className="sticky-top navigationbar border-primary">
        <nav
          id="navs"
          className="navbar navbar-expand-lg bg-light border border-primary"
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="Homepage.html">
              Fettle
            </a>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to={"/"} className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/carreer"}>
                    Careers
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link" to={"products"}>
                    Products
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link" to={"/subscription"}>
                    Subcriptions
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <LINK to="/#aboutus" className="nav-link">
                    About Us
                  </LINK>
                </li>
                <li className="nav-item dropdown">
                  <Link to="/contactus" className="nav-link">
                    Contact Us
                  </Link>
                </li>
              </ul>
              <div>
                <Link to={"/cart"}>
                  <button
                    type="button"
                    className="btn btn-primary position-relative"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-cart"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {getdata.length}
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
