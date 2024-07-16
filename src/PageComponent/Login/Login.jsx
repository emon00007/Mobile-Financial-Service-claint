import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="card bg-base-100 lg:w-2/5 md:w-2/4 shadow-2xl my-6">
                    <form  className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="" name="number" placeholder="Phone Number" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link text-red-600 link-hover"></a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p>Are you new?<Link to="/signUp">sign up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;