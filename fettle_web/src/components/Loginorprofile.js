import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function Loginorprofile() {
    const getdata = useSelector((state) => state.viewreducer.logininfo);
    if (!getdata.email == "") {
        return (
            <>
                <h3 className="text-decoration-none " style={{ marginLeft: "6vh" }}>Welcome {getdata.name}</h3>
                <Link to={"/profile"}>

                    <div>
                        <button className="btn btn-outline-info mx-3" type="submit">
                            Profile
                        </button></div>
                </Link>
            </>
        )
    }
    else {
        return (
            <>
                <div>
                    <Link to={"/login"}>
                        <button className="btn btn-outline-info mx-3" type="submit">
                            Login
                        </button>
                    </Link>

                    <Link to={"/register"}>
                        <button className="btn btn-outline-info" type="submit">
                            Register
                        </button>
                    </Link>
                </div>
            </>
        )
    }
}

