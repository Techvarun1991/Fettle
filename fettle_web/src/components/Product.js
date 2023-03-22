import { Button, Card, Container, Row } from "react-bootstrap";
import { Prod } from "./Prod";
import { ADD } from "../Redux/actions/Action";
import { useDispatch } from "react-redux";

export function Product() {
    const dispatch = useDispatch();

    const send = (e) => {
        console.log(e);
        dispatch(ADD(e));
    }

    return (
        <div
            className="py-5"
            style={{ background: "linear-gradient(-180deg, #c3e8a7, #bbe2ed)" }}
        >
            <div className="main container">
                <div>
                    <h1 style={{ textAlign: "center", margin: "0vh 0vh" }}>
                        <strong>Products</strong>
                    </h1>
                </div>
                <div
                    className="container"
                    style={{
                        padding: "50px 50px",
                        marginTop: "-420px !important",
                        marginBottom: "-420px",
                    }}
                >
                    <div
                        id="carouselExampleControls"
                        className="carousel slide"
                        data-bs-ride="carousel"
                    >
                        <div
                            className="carousel-inner"
                            style={{
                                borderRadius: "5vh",
                                boxShadow: "0 0 16px rgb(0 0 0 / 100%)",
                            }}
                        >
                            <div className="carousel-item active">
                                <img
                                    src="https://wallpaperaccess.com/full/1164911.jpg"
                                    className="d-block w-100 rounded"
                                    height="600px"
                                    width="60vh"
                                    alt=""
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://wallpaperaccess.com/full/562838.jpg"
                                    className="d-block w-100 rounded"
                                    height="600px"
                                    width="60vh"
                                    alt=""
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://wallpapershome.com/images/wallpapers/water-3840x2160-4k-5k-wallpaper-splash-drops-close-up-macro-blue-901.jpg"
                                    className="d-block w-100 rounded"
                                    height="600px"
                                    width="60vh"
                                    alt=""
                                />
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleControls"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleControls"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                {/* <div>
  <img src="./1.jpeg" style="width: 100%; max-height: 600px" alt="" />
    </div> */}
            </div>
            <div
                className="container border box-sizing-border-box"
                style={{ width: "auto", height: "250vh", marginTop: "50vh" }}
            >
                <div
                    className="product-listing d-flex justify-content-center flex-wrap"
                    style={{ marginTop: "10vh" }}
                >
                    <Container className=" container d-flex flex-wrap ">
                        <Row className="justify-content-center">
                            {Prod.map((product, id) => {
                                return (
                                    <Card style={{ width: "18rem", marginBottom: "10vh", marginRight: "10vh" }}>
                                        <Card.Img variant="top" src={product.url} />
                                        <Card.Body>
                                            <Card.Title>Fettle</Card.Title>
                                            <Card.Text>{product["Capacity"]}</Card.Text>
                                            <Card.Text>Rs.{product.Price}</Card.Text>
                                            <Button variant="primary" onClick={() => send(product)}>Add To Cart</Button>
                                        </Card.Body>
                                    </Card>
                                );
                            })}
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
}