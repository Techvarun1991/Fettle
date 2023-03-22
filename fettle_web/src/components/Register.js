import { Alert, Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { Component, useState } from "react";
import { Link } from "react-router-dom";
import { newCust } from "../services/customerapiservice";
import { Showmodal } from "./Showmodal";

export class Register extends Component {

  constructor() {
    super();
    this.state = {
      formData: {},
      modalOpeningStatus: false,
      defaultValues: { name: '', email: '', password: '' },
      notvalidemail: false,
      notconfirmpass: false
    }
  }

  openDialog = () => {
    this.setState({ modalOpeningStatus: true });
  }
  closeDialog = () => {
    this.setState({ modalOpeningStatus: false });
  }

  handleChange = (event) => {
    if ([event.target.name] == "email") {
      if (!event.target.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        this.state.notvalidemail = true;

      }
      if (event.target.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        this.state.notvalidemail = false;

      }
    }
    if ([event.target.name] == "confirmpass") {
      if (!(this.state.formData.password == event.target.value)) {
        this.state.notconfirmpass = true;
        console.log("not same")

      }
      if (this.state.formData.password == event.target.value) {
        this.state.notconfirmpass = false;
        console.log("same matched");

      }
    }
    if ([event.target.name] != "confirmpass") {
      // console.log("data inserted");
      this.setState(
        {
          formData: {
            ...this.state.formData,
            [event.target.name]: event.target.value
          },
        }
      );
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log(this.state.notvalidemail);
    console.log(this.state.notconfirmpass);

    if (this.state.formData.name == "") {
      alert('enter name')
    }
    else if (this.state.formData.email == "") {
      alert('enter email')
    }

    else if (this.state.formData.password.length > 8) {
      alert('enter email')
    }

    else if (this.state.notconfirmpass) {
      alert('Password Mismatched');
      console.log("password mismatched"); <>
        <alert>Password mismatched</alert>
        <Showmodal show='true'><h2>Password mismatched</h2><p>Password & Confirm password should be same</p></Showmodal></>
    }
    else if (this.state.notvalidemail) {
      alert('Not valid email');
      console.log("not valid email"); <>
        <Alert>Not valid email</Alert>
        <Showmodal show='true'><h2>Not valid email</h2><p>Email id should be in correct format</p></Showmodal></>
    }
    else {
      console.log(this.state.formData);
      const response = await newCust(this.state.formData);
      console.log(response.data);
      if (response.status == 200) {
        this.setState({ formData: { name: '', email: '', password: '' } });
        this.setState({ confirmpass: '' })
        this.openDialog();
      }
    }

  }

  render() {
    return (
      <div className="py-5" style={{ background: "linear-gradient(-180deg, #c3e8a7, #bbe2ed)" }}>

        <div className="d-flex justify-content-end mt-4 mr-5">
          <h5>
            Already have an account? <Link to={'/login'}> Login here</Link>
          </h5>
        </div>
        <main className="form-signin w-100 m-auto mb-5" style={{ background: "white", maxWidth: 520, boxShadow: "0 0 16px rgb(0 0 0 / 30%)" }}>
          <form style={{ textAlign: "center", padding: "5vh" }} id="formstyle">
            <img
              className="mb-4"
              src={require("./Images/fettlelogo1.jpg")}
              alt="Logo"
              width={72}
              height={65}
            />
            <h1 className="h3 mb-3 fw-normal">Register</h1>
            {/* <div className="d-flex justify-content-between"> */}
            <div className="form-floating ">
              <input
                type="text"
                className="form-control"
                placeholder="name@example.com"
                name="name"
                value={this.state.formData.name}
                onChange={this.handleChange}
                required
              />
              <label htmlFor="floatingInput">Full Name</label>
            </div>
            <div>&nbsp;</div>
            <div className="form-floating">
              <input
                type="email"
                className="form-control "
                placeholder="name@example.com"
                name="email"
                // style={{ height: "50px" }}
                {...this.state.validemail ? { className: "form-floating form-control is-invalid" } : ""}
                value={this.state.formData.email}
                onChange={this.handleChange}
                required
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            {/* </div> */}
            <div>&nbsp;</div>

            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                name="password"
                value={this.state.formData.password}
                placeholder="Password"
                onChange={this.handleChange}
                required
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div>&nbsp;</div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="confirmpass"
                // {...this.state.notconfirmpass ? { className: "form-floating  form-control is-invalid" } : ""}
                onChange={this.handleChange}
                required
              />
              <label htmlFor="floatingPassword">Confirm Password</label>
            </div>
            {/* </div> */}
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <input type="submit" className="w-100 btn btn-lg btn-primary" onClick={this.handleSubmit}></input>
            {/* <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign in
            </button> */}
            <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
          </form>
        </main>

        {/* <Showmodal show={this.state.modalope} */}

        <Modal show={this.state.modalOpeningStatus} onHide={this.closeDialog}>
          <Modal.Header closeButton>
            <Modal.Title>Success</Modal.Title>
          </Modal.Header>
          <Modal.Body>Registered Successfully!</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.closeDialog}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

    )
  }
}