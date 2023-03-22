import { Link } from "react-router-dom";

export function Articles() {
    return (
        <div className=" py-5" style={{ background: "linear-gradient(-180deg, #c3e8a7, #bbe2ed)" }}>
            <div className="d-flex justify-content-center">
                <div
                    className="card"
                    style={{ width: "18rem", marginBottom: "10vh", marginRight: "10vh", boxShadow: "0 0 16px rgb(0 0 0 / 30%)" }}
                >
                    <div className="article--image">
                        <img
                            src="https://bisleri-shop-storage.s3.ap-south-1.amazonaws.com/posts/September2022/R9YusF2c2L0GAhnTl3Xu.jpg"
                            className="card-img-top"
                        />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">
                            pH in Natural Mineral Water - Understanding Basics to Identify the
                            Best Drinking Water
                        </h5>
                        <p className="card-text">
                            Find out the impact of lead in your drinking water, and how to
                            eliminate it.
                        </p>
                        {/* <a href="Article1.html" className="btn btn-primary"> */}
                        <Link to={'/articles/phinnaturalmineralwater'} className="btn btn-primary">Read More</Link>
                        {/* </a> */}
                    </div>
                </div>
                <div
                    className="card"
                    style={{ width: "18rem", marginBottom: "10vh", marginRight: "10vh", boxShadow: "0 0 16px rgb(0 0 0 / 30%)" }}
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
                            Ever wondered what does a plant, an animal and you have in common?
                        </p>
                        {/* <a href="Article2.html" className="btn btn-primary"> */}
                        <Link to={'/articles/hydrationtips'} className="btn btn-primary">Read More</Link>
                        {/* </a> */}
                    </div>
                </div>
                <div className="card" style={{ width: "18rem", marginBottom: "10vh", boxShadow: "0 0 16px rgb(0 0 0 / 30%)" }}>
                    <div className="article--image">
                        <img
                            src="https://bisleri-shop-storage.s3.ap-south-1.amazonaws.com/posts/April2022/hzSUDW73GDHLCUZLidqs.jpg"
                            className="card-img-top"
                        />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">
                            5 Reasons Why Your Skin Needs to Stay Hydrated
                        </h5>
                        <p className="card-text">
                            Drinking mineral water that is going to prove very beneficial for your
                            skin in the long run.
                        </p>
                        {/* <a href="Article3.html" className="btn btn-primary"> */}
                        <Link to={'/articles/5reasons'} className="btn btn-primary">Read More</Link>
                        {/* </a> */}
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div
                    className="card"
                    style={{ width: "18rem", marginBottom: "10vh", marginRight: "10vh", boxShadow: "0 0 16px rgb(0 0 0 / 30%)" }}
                >
                    <div className="article--image">
                        <img
                            src="https://bisleri-shop-storage.s3.ap-south-1.amazonaws.com/posts/April2022/mJq4zZE5ELwUG4tCS1Yl.jpg"
                            className="card-img-top"
                        />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">
                            Understanding the Relation Between Hydration and Mental Health
                        </h5>
                        <p className="card-text">
                            Your mineral water intake has a huge impact on your mental health.
                        </p>
                        {/* <a href="Article4.html" className="btn btn-primary"> */}
                        <Link to={'/articles/hydrationandmentalhealth'} className="btn btn-primary">Read More</Link>
                        {/* </a> */}
                    </div>
                </div>
                <div
                    className="card"
                    style={{ width: "18rem", marginBottom: "10vh", marginRight: "10vh", boxShadow: "0 0 16px rgb(0 0 0 / 30%)" }}
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
                            It is imperative you keep drinking water and stay hydrated throughout
                            the monsoon season.
                        </p>
                        {/* <a href="Article5.html" className="btn btn-primary"> */}
                        <Link to={'/articles/benefitsinmonsoon'} className="btn btn-primary">Read More</Link>
                        {/* </a> */}
                    </div>
                </div>
                <div className="card" style={{ width: "18rem", marginBottom: "10vh", boxShadow: "0 0 16px rgb(0 0 0 / 30%)" }}>
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
                            A thunderous monsoon at the end of a hot and humid summer is always
                            welcomed with open arms.
                        </p>
                        {/* <a href="Article6.html" className="btn btn-primary"> */}
                        <Link to={'/articles/waterbornediseases'} className="btn btn-primary">Read More</Link>
                        {/* </a> */}
                    </div>
                </div>
            </div>
        </div>

    )
}