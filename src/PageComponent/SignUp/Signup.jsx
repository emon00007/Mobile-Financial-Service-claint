import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    const [registerError, setRegisterError] = useState("");
    const handelRegister = e => {

        e.preventDefault()
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email')
        const password = form.get('password')
        const number = form.get('number')

        if (password.length < 5) {
            setRegisterError("Password should be at least 5 number");
            return;
        } else if (password.length > 5) {
            setRegisterError("more than 5 number");
            return;
        }
        else if (!(/^\d{5}$/.test(password))) {
            setRegisterError("it's not a number");
            return;
        }
        console.log(email, name, number, password)
    }
    return (
        <div>
            <div className="hero bg-base-200  ">


                <div className="card bg-base-100 lg:w-2/5 md:w-2/4 shadow-2xl my-6">
                    <form onSubmit={handelRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                        </div>
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
                                <a href="#" className="label-text-alt link text-red-600 link-hover">{registerError}</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <p>Already have an account?<Link to="/Login">Login</Link></p>
                </div>
            </div>
        </div>

    );
};

export default Signup;