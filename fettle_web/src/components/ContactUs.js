export function ContactUs() {
  return (
    <div style={{ background: "linear-gradient(-180deg, #c3e8a7, #bbe2ed)" }}>

      <div className="container" style={{ height: "160vh" }}>
        <div>&nbsp;</div>
        <div>
          <h1 className="d-flex justify-content-center">
            We are happy to help you
          </h1>
        </div>
        <main className="form-signin w-100 m-auto my-5" style={{ background: "white", maxWidth: 800, boxShadow: "0 0 16px rgb(0 0 0 / 100%)", borderRadius: "5vh" }}>
          <form style={{ padding: "5vh" }} id="formstyle">
            <p>
              Write in if you have any business proposals, queries, complaints or
              suggestions. <br />
              We would love to hear from you!
            </p>
            <div
              className="d-flex justify-content-evenly"
              style={{ paddingTop: "3vh" }}
            >
              <div className="form-floating width-300">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  required=""
                />
                <label htmlFor="floatingInput">Full Name</label>
              </div>
              <div className="form-floating width-300">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  required=""
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
            </div>
            <div>&nbsp;</div>
            <div
              className="d-flex justify-content-evenly"
              style={{ paddingTop: "3vh" }}
            >
              <div className="form-floating width-300">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  required=""
                />
                <label htmlFor="floatingPassword">Contact No</label>
              </div>
              <div className="form-floating width-300">
                <input
                  type="text"
                  className="form-control"
                  id="Location"
                  placeholder="Location"
                  required=""
                />
                <label htmlFor="floatingPassword">Location</label>
              </div>
            </div>
            <div>&nbsp;</div>
            <div
              className="d-flex justify-content-evenly"
              style={{ paddingTop: "3vh" }}
            >
              <div className="form-floating width-650">
                <textarea
                  name=""
                  className="form-control"
                  id="yourmessage"
                  width="100%"
                  rows={8}
                  style={{ minHeight: 170 }}
                  defaultValue={""}
                />
                <label htmlFor="yourmessage">Your message</label>
              </div>
            </div>
            <div>&nbsp;</div>
            <div style={{ marginLeft: "5vh" }}>
              <input type="checkbox" id="contactustnc" defaultChecked="" />
              <span>
                I hereby authorize Fettle and their affiliates to call and/or send
                texts via SMS <br />
                to me for communication.
              </span>
            </div>
            <div>&nbsp;</div>
            <button
              className="btn btn-lg btn-primary d-flex align-items-center"
              type="submit"
              style={{ marginTop: "0vh", marginLeft: "5vh" }}
            >
              Submit
            </button>
          </form>
        </main>
        <div>&nbsp;</div>
        <div className="d-flex justify-content-center">
          <div>
            <h1>Find us in your area</h1>
          </div>
        </div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div className="d-flex justify-content-evenly">
          <div>
            <h3>Mumbai</h3>
            <p>
              Fettle Ltd. <br />
              WesternExpress Highway, <br />
              Andheri (East),
              <br />
              Mumbai - 400099
              <br />
              <br />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
              </svg>
              wecare@fettle.co.in
              <br />
              <br />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-telephone"
                viewBox="0 0 16 16"
              >
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
              </svg>
              1800-121-1007
            </p>
          </div>
          <div>
            <h3>Pune</h3>
            <p>
              Fettle Ltd. <br />
              Gaothan, Shivaji nagar, <br />
              Pune - 411005
              <br />
              <br />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
              </svg>
              wecare@fettle.co.in
              <br />
              <br />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-telephone"
                viewBox="0 0 16 16"
              >
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
              </svg>
              1800-121-1007
            </p>
          </div>
          <div>
            <h3>Nashik</h3>
            <p>
              Fettle Ltd. <br />
              Agra National Highway, <br />
              Kevdian, Panchavati
              <br />
              Nashik - 422003
              <br />
              <br />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
              </svg>
              wecare@fettle.co.in
              <br />
              <br />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-telephone"
                viewBox="0 0 16 16"
              >
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
              </svg>
              1800-121-1007
            </p>
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;