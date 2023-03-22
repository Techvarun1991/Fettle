import { Button, Container, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function Subscription() {
    const openDialog = () => {
        this.setState({ modalOpeningStatus: true });
    }
    const closeDialog = () => {
        this.setState({ modalOpeningStatus: false });
    }
    const getdata = useSelector((state) => state.viewreducer.logininfo);
    if (!getdata.email == "") {
        return (
            <div className='py-5' style={{ background: "linear-gradient(-180deg, #c3e8a7, #bbe2ed)" }}>
                <Container>
                    <header>

                        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                            <h1 className="display-4 fw-normal">Subscribe To Our Top Selling Product</h1>
                            <p className="fs-5 text-muted pb-5">

                                Select the product from different pack sizes suitable for your family.
                            </p>
                        </div>
                    </header>
                    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                        <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm py-4">
                                <div className="card-header py-3">
                                    <h4 className="my-0 fw-normal">Small family</h4>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title pricing-card-title">
                                        Rs1000<small className="text-muted fw-light">/mo</small>
                                    </h1>
                                    <ul className="list-unstyled mt-3 mb-4 pb-4">
                                        <li>10 Liter Can</li>
                                        <li>30 days</li>
                                    </ul>
                                    <button type="button" className="w-100 btn btn-lg btn-outline-primary">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm py-4">
                                <div className="card-header py-3">
                                    <h4 className="my-0 fw-normal">Medium family</h4>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title pricing-card-title">
                                        Rs1600<small className="text-muted fw-light">/mo</small>
                                    </h1>
                                    <ul className="list-unstyled mt-3 mb-4 pb-4">
                                        <li>20 Litre Can</li>
                                        <li>30 days</li>
                                    </ul>
                                    <button type="button" className="w-100 btn btn-lg btn-outline-primary">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col pb-5">
                            <div className="card mb-4 rounded-3 shadow-sm py-4">
                                <div className="card-header py-3 ">
                                    <h4 className="my-0 fw-normal">Big family</h4>
                                </div>
                                <div className="card-body pt-3">
                                    <h1 className="card-title pricing-card-title">
                                        Rs2800<small className="text-muted fw-light">/mo</small>
                                    </h1>
                                    <ul className="list-unstyled mt-3 mb-4 pb-4">
                                        <li>30 Litres Can</li>
                                        <li>30 days</li>
                                    </ul>
                                    <button type="button" className="w-100 btn btn-lg btn-outline-primary">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

        )
    }
    else {
        return (
            <div className='py-5 text-center' style={{ background: "linear-gradient(-180deg, #c3e8a7, #bbe2ed)", height: "80vh" }}>
                <h2>Sorry</h2>
                <h4>You need to login to subscribe</h4>
                <div className="py-5">
                    <Link to={'/login'}>
                        <Button variant="primary" >
                            Login
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }
}