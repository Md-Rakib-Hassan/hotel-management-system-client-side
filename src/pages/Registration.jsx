import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../provider/AuthProvider";

const Registration = () => {

    const context = useContext(AuthContext)
    const navigate = useNavigate();

    const { createUser, auth, logOut } = context;

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const profile = e.target.profile.value
        const email = e.target.email.value
        const password = e.target.password.value

        if (password.length < 6) return Swal.fire('Error', `Password is less than 6 characters`, 'error')
        else if (!/(?=.*[A-Z])/.test(password)) return Swal.fire('Error', `Password don't have a capital letter`, 'error')
        else if (!/(?=.*\W)/.test(password)) return Swal.fire('Error', `Password don't have a special character`, 'error')

        createUser(email, password)
            .then(() => {

                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: profile,
                }).then(() => {
                    Swal.fire('Registered', 'You successfully done registration', 'success')
                    logOut();
                }).catch((error) => {
                    Swal.fire('Error', `${error.message}`, 'error')
                });

                navigate('/login');
            })
            .catch((error) => {
                Swal.fire('Error', `${error.message}`, 'error')
            })





    }



    return (
        <div className="hero min-h-screen bg-base-200 bg-[url(https://www.reshot.com/preview-assets/illustrations/GTQRL8HFXU/system-user-login-GTQRL8HFXU-w1600.jpg)]">
            <form onSubmit={handleSubmit} >
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold ">Register now!</h1>
                        <p className="py-6 text-xl text-gray-700">Welcome to Book Hotel! We are thrilled that you have decided to join our community. To get started, please fill out the registration form below. We look forward to helping you create memorable events and celebrations.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input required type="text" placeholder="name" name="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Profile</span>
                                </label>
                                <input required type="text" placeholder="Profile URL" name="profile" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input required type="email" placeholder="email" name="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input required type="password" placeholder="password" name="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to={'/login'}><a className="label-text-alt link link-hover">Already have an account?</a></Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-blue-700 border-none hover:bg-blue-800">Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default Registration;