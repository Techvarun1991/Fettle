import { Link } from "react-router-dom";

export function Homepage() {
  return (
    <div className="py-5" style={{ background: "linear-gradient(-180deg, #c3e8a7, #bbe2ed)" }}>
      <div className="main container">
        <div>
          <h2 style={{ textAlign: "center", margin: "0vh 0vh" }}>
            Taste of Nature In Fettle
          </h2>
        </div>
        <div
          className="container"
          style={{
            padding: "45px 50px",

          }}
        >
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner" style={{ borderRadius: "5vh" }}>
              <div className="carousel-item active">
                <img
                  src="https://images.pexels.com/photos/40784/drops-of-water-water-nature-liquid-40784.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="d-block w-100 rounded"
                  height="600px"
                  width="60vh"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="d-block w-100 rounded"
                  height="600px"
                  width="60vh"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("./Images/amadej-tauses-xWOTojs1eg4-unsplash.jpg")}
                  className="d-block w-100 rounded"
                  height="600px"
                  width="60vh"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div id="aboutus">&nbsp;</div>
      </div>
      <hr />
      <div>
        <div className="">
          <h2
            className="text-align-center my"
            style={{ textAlign: "center", margin: "5vh 0" }}
          >
            <strong> About Us</strong>
          </h2>
          <hr />
          <div
            className="d-flex justify-content-between"
            style={{ padding: "5vh 0vh" }}
          >
            <div style={{ marginLeft: "10vh" }}>
              <img
                src={require("./Images/16.jpg")}
                alt=""
                style={{
                  borderRadius: 15,
                  boxShadow: "0 0 16px rgb(0 0 0 / 40%)",
                }}
              />
            </div>
            <div
              style={{
                marginRight: "30vh",
                paddingTop: "20vh",
                width: "40vh",
              }}
            >
              <h2 style={{ textAlign: "center" }}>
                Widely preferred as a source of safe drinking water in
                Maharashtra.
              </h2>
            </div>
          </div>
          <img src="" alt="" srcSet="" />
        </div>
        <hr />
        <div
          className="d-flex justify-content-between"
          style={{ padding: "5vh 0vh" }}
        >
          <div
            style={{
              marginLeft: "10vh",
              marginRight: "10vh",
              paddingTop: "10vh",
            }}
          >
            <h3
              style={{ textAlign: "center", fontFamily: '"Nunito sans"' }}
            >
              Fettle Mineral Water stands apart with its promise of goodness
              that goes through rigorous 10 STEP QUALITY PROCESS and 114
              TESTS. Every drop is safe, pure and hygienic to the core and
              meets the quality guidelines set by the Bureau of Indian
              Standards (BIS).
            </h3>
          </div>
          <div style={{ marginRight: "10vh" }}>
            <img
              src={require("./Images/11.webp")}
              alt=""
              width="700px"
              height="400px"
              style={{
                borderRadius: 15,
                boxShadow: "0 0 16px rgb(0 0 0 / 40%)",
              }}
            />
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-between align-items-center">
          <div style={{ marginLeft: "10vh" }}>
            <img
              src={require("./Images/demo.jpg")}
              alt=""
              style={{
                borderRadius: 15,
                boxShadow: "0 0 16px rgb(0 0 0 / 40%)",
              }}
            />
          </div>
          <div style={{ padding: "5vh", textAlign: "center" }}>
            <div>
              <h4>
                Bottles for Change aims to create awareness that USED
                PLASTIC IS NOT WASTE. IT HAS VALUE. IT IS RECYCLABLE.
              </h4>
            </div>
            <br />
            <div className="d-flex justify-content-evenly h5">
              <div style={{ width: "40vh" }}>
                9 <br />
                Corporates enrolled in these 7 cities
              </div>
              <div style={{ width: "40vh" }}>
                800 <br />
                Housing Societies reached
              </div>
            </div>
            <br />
            <div className="d-flex justify-content-evenly h5">
              <div style={{ width: "40vh" }}>
                500 <br />
                Corporates partnered/engaged
              </div>
              <div style={{ width: "40vh" }}>
                400 <br />
                Schools and Colleges reached
              </div>
            </div>
            <br />
            <div className="d-flex justify-content-evenly h5">
              <div style={{ width: "40vh" }}>
                500 <br />
                Hotels and Restaurants reached
              </div>
              <div style={{ width: "40vh" }}>
                600 <br />
                Awareness Sessions/Workshops <br />
                conducted
              </div>
            </div>
            <br />
            <div className="d-flex justify-content-evenly h5">
              <div style={{ width: "40vh" }}>
                6,00,000 <br />
                Population reached
              </div>
              <div style={{ width: "40vh" }}>
                6,500 <br />
                Tonnes of plastic collected
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div id="articles">
        <div className="d-flex text-muted justify-content-center">
          <h2 style={{ fontSize: 30, padding: "5vh 0vh" }}>
            Related Articles
          </h2>
        </div>
        <div className="d-flex justify-content-end">
          <h5 style={{ marginRight: "5vh" }}>
            <Link to={'/articles'}>
              <u>View All</u>
            </Link>
          </h5>
        </div>
        <div className="d-flex justify-content-center">
          <div
            className="card"
            style={{
              width: "18rem",
              marginBottom: "10vh",
              marginRight: "10vh",
            }}
          >
            <div className="article--image">
              <img
                src="https://bisleri-shop-storage.s3.ap-south-1.amazonaws.com/posts/September2022/R9YusF2c2L0GAhnTl3Xu.jpg"
                className="card-img-top"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                pH in Natural Mineral Water - Understanding Basics to
                Identify the Best Drinking Water
              </h5>
              <p className="card-text">
                Find out the impact of lead in your drinking water, and how
                to eliminate it.
              </p>
              <a href="Article1.html" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
          <div
            className="card"
            style={{
              width: "18rem",
              marginBottom: "10vh",
              marginRight: "5vh",
            }}
          >
            <div className="article--image">
              <img
                src="https://bisleri-shop-storage.s3.ap-south-1.amazonaws.com/posts/June2021/aE4GThRGK7tEcUU1WgXS.jpg"
                className="card-img-top"
                alt="Hydration Tips for All Ages"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Hydration Tips for All Ages</h5>
              <p className="card-text">
                Ever wondered what does a plant, an animal and you have in
                common?
              </p>
              <a href="Article2.html" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
          <div
            className="card"
            style={{
              width: "18rem",
              marginBottom: "10vh",
              marginRight: "10vh",
            }}
          >
            <div className="article--image">
              <img
                src="https://bisleri-shop-storage.s3.ap-south-1.amazonaws.com/posts/April2022/7AOPoImpetx6R3rQZgem.jpg"
                className="card-img-top"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Benefits of Drinking More Water in Monsoon Season
              </h5>
              <p className="card-text">
                It is imperative you keep drinking water and stay hydrated
                throughout the monsoon season.
              </p>
              <a href="Article5.html" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
          <div
            className="card"
            style={{ width: "18rem", marginBottom: "10vh" }}
          >
            <div className="article--image">
              <img
                src="https://bisleri-shop-storage.s3.ap-south-1.amazonaws.com/posts/June2021/NZojiU8HkYHHEcjFqPRl.jpg"
                className="card-img-top"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Water borne diseases in monsoon: Tips to safeguard yourself
              </h5>
              <p className="card-text">
                A thunderous monsoon at the end of a hot and humid summer is
                always welcomed with open arms.
              </p>
              <a href="Article6.html" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}