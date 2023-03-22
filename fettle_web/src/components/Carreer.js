export function Carreer() {
  return (
    <div className="py-5" style={{ background: "linear-gradient(-180deg, #c3e8a7, #bbe2ed)" }}>
      <div className="main container">
        <div>
          <h2 style={{ textAlign: "center", margin: "0vh 0vh" }}>
            Join Fettle
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
            <div className="carousel-inner" style={{ borderRadius: "5vh", boxShadow: "0 0 16px rgb(0 0 0 / 100%)" }}>
              <div className="carousel-item active">
                <img
                  src={require("./Images/3.png")}
                  className="d-block w-100 rounded"
                  height="600px"
                  width="60vh"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("./Images/5.webp")}
                  className="d-block w-100 rounded"
                  height="600px"
                  width="60vh"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("./Images/4.webp")}
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
        {/* <div>
                        <img src="./1.jpeg" style="width: 100%; max-height: 600px" alt="" />
                      </div> */}
        <div id="aboutus">&nbsp;</div>
      </div>
      {/* <h2 style="text-align: center; margin: 5vh 0">
                      <h3>Note: Fettle is always eager to review details from smart, talented applicants who want to join our team. Please enter details and attach your resume on the given link below to tell us more about yourself</h3>
                    </h2> */}
      <div className="alert alert-primary" role="alert">
        Fettle is always eager to review details from smart, talented
        applicants who want to join our team. Please enter details and attach
        your resume on the given link below to tell us more about yourself
      </div>
      <div className="alert alert-danger" role="alert">
        Note : We would like to reiterate-Fettle does not ask for any money
        from the candidate at any stage of the recruitment process. Neither do
        we permit our external recruitment partners to collect/charge any fees
        from candidates. We advise candidates not to respond to any fraudulent
        emails and not to make any payments. Fettle company bear no
        responsibility for amounts being deposited or withdrawn therefrom in
        response to such emails/requests.
      </div>
      <main className="form-signin w-100 m-auto" style={{ maxWidth: 430 }}>
        <form style={{ textAlign: "center", padding: "5vh" }} id="formstyle">
          <img
            className="mb-4"
            src={require("./Images/fettlelogo1.jpg")}
            alt="Logo"
            width={72}
            height={90}
          />
          <h1 className="h3 mb-3 fw-normal">Candidate Details</h1>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Enter Full Name"
            />
            <label htmlFor="floatingInput">Name</label>
          </div>
          <div>&nbsp;</div>
          <div className="form-floating">
            <input
              type="number"
              className="form-control"
              id="floatingInput"
              required=""
              min={18}
              max={80}
            />
            <label htmlFor="floatingInput">Age</label>
          </div>
          <div>&nbsp;</div>
          <div className="form-floating">
            <input
              type="textarea"
              className="form-control"
              id="floatingInput"
              placeholder="Enter Complete Address"
            />
            <label htmlFor="floatingInput">Address</label>
          </div>
          <div>&nbsp;</div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Enter Mobile number"
            />
            <label htmlFor="floatingInput">Mobile Number</label>
          </div>
          <div>&nbsp;</div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Enter Email Id"
              required=""
              pattern="@"
            />
            <label htmlFor="floatingInput">Email ID</label>
          </div>
          <div>&nbsp;</div>
          <div className="form-floating">
            <input type="date" className="form-control" id="floatingInput" />
            <label htmlFor="floatingInput">DOB</label>
          </div>
          <div>&nbsp;</div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Enter Gender"
            />
            <label htmlFor="floatingInput">Gender</label>
          </div>
          <div>&nbsp;</div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Enter Highest Qualification"
            />
            <label htmlFor="floatingInput">Highest Qualification</label>
          </div>
          <div>&nbsp;</div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Enter City"
            />
            <label htmlFor="floatingInput">City</label>
          </div>
          <div>&nbsp;</div>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Attach your Resume
            </label>
            <input className="form-control" type="file" id="formFile" />
          </div>
          <button className="w-100 btn btn-lg btn-success" type="submit">
            Submit Details
          </button>
          <div>&nbsp;</div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Reset
          </button>
          <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
        </form>
      </main>
    </div>
  )
}