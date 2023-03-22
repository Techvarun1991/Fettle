import { Component, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getlogin } from "../services/customerapiservice";
import { viewlogin } from "../Redux/actions/Action" ;
import { Button, Modal } from "react-bootstrap";

export function Login() {


    const [formdata, setformatdata] = useState({ email: '', password: '', name: '' });
    const [logindata, setlogindata] = useState({ email: '', });
    const [modalOpeningStatus, setmodatOpeningStatus] = useState(false)

    const openDialog = () => {
        setmodatOpeningStatus(true);
    }
    const closeDialog = () => {
        setmodatOpeningStatus(false);
    }


    const handleChangeemail = (event) => {
        // setstate.formdata.email = event.target.value;
        formdata.email = event.target.value;
        // console.log(this.state.formdata)
    }
    const handleChangepass = (event) => {
        // this.state.formdata.password = event.target.value;
        formdata.password = event.target.value;
        // console.log(this.state.formdata)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(this.state.formdata)
        const response = await getlogin(formdata);
        logindata.email = response.data[0].email;
        logindata.password = response.data[0].password;
        logindata.name = response.data[0].name;
        if (!logindata.email == '' || !logindata.password == '') {
            dispatch(viewlogin(logindata));
            console.log(logindata);
            openDialog();
        }
        else {
            alert("email or password not correct");

        }
        // console.log(response)
        // console.log(response.data);


    }

    const dispatch = useDispatch();

    // const formsubmit = async (event) => {
    //     event.preventDefault();


    //     // console.log(this.state.formdata)
    //     const response = await getlogin(formdata);
    //     logindata.email = response.data[0].email;
    //     logindata.password = response.data[0].password;
    //     // console.log(response)
    //     // console.log(response.data);
    //     dispatch(viewlogin(logindata));
    //     console.log(logindata);
    // }

    return (
        <div className="py-5" style={{ background: "linear-gradient(-180deg, #c3e8a7, #bbe2ed)" }}>

            <div className="d-flex justify-content-end py-4 mr-5" >
                <h5>
                    Don't have an account? <Link to={'/register'}> Create an acount</Link>
                </h5>
            </div>
            <main className="form-signin w-100 m-auto " style={{ background: "white", maxWidth: 430, boxShadow: "0 0 16px rgb(0 0 0 / 30%)" }}>
                <form style={{ textAlign: "center", padding: "5vh" }} id="formstyle" onSubmit={handleSubmit}>
                    <img
                        className="mb-4"
                        src={require("./Images/fettlelogo1.jpg")}
                        alt="Logo"
                        width={72}
                        height={65}
                    />
                    <h1 className="h3 mb-3 fw-normal">Login</h1>
                    <div className="form-floating">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            name="email"
                            placeholder="name@example.com"
                            onChange={handleChangeemail}
                            required=""
                        />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div>&nbsp;</div>
                    <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            name="password"
                            placeholder="Password"
                            onChange={handleChangepass}
                            required=""
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div>&nbsp;</div>
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" defaultValue="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">
                        Sign in
                    </button>
                    <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
                </form>
            </main>
            <Modal show={modalOpeningStatus} onHide={closeDialog}>
                <Modal.Header closeButton>
                    <Modal.Title>Success</Modal.Title>
                </Modal.Header>
                <Modal.Body>Login Successfully!</Modal.Body>
                <Modal.Footer>
                    <Link to={'/'}>
                        <Button variant="primary" onClick={closeDialog}>
                            Close
                        </Button>
                    </Link>
                </Modal.Footer>
            </Modal>
        </div >

    )

}