import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet";




const Login = () => {

    const contex = useContext(AuthContext);
    const { signInUser, googleSignInbyPop } = contex;
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        signInUser(email, password)
            .then(() => {
                Swal.fire('Logged In', 'You successfully done Login', 'success')
                navigate('/');
            })

            .catch((error) => {
                Swal.fire('Error', `${error.message}`, 'error')

            })
    }

    const handleGoogleSignInPopup = () => {
        googleSignInbyPop()
            .then(() => {
                
            })

            .catch((error) => {
                Swal.fire('Error', `${error.message}`, 'error')

            })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <meta charSet="utf-8" />
                <title>BookHotel | Login</title>

            </Helmet>
           
            <form onSubmit={handleSubmit}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">



                        <div className="lg: relative">

                            <svg className="hidden lg:block" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="869.99994" height="520.13854" viewBox="0 0 869.99994 520.13854" ><path d="M831.09242,704.18737c-11.13833-9.4118-17.90393-24.27967-16.12965-38.75366s12.76358-27.78,27.01831-30.85364,30.50415,5.43465,34.83378,19.3594c2.3828-26.84637,5.12854-54.81757,19.40179-77.67976,12.92407-20.70115,35.3088-35.51364,59.5688-38.16357s49.80265,7.35859,64.93272,26.50671,18.83461,46.98549,8.2379,68.96911c-7.80623,16.19456-22.188,28.24676-37.2566,38.05184a240.45181,240.45181,0,0,1-164.45376,35.97709Z" transform="translate(-165.00003 -189.93073)" fill="#f2f2f2" /><path d="M996.72788,546.00953a393.41394,393.41394,0,0,0-54.82622,54.44229,394.561,394.561,0,0,0-61.752,103.194c-1.112,2.72484,3.31272,3.911,4.4123,1.21642A392.34209,392.34209,0,0,1,999.96343,549.24507c2.28437-1.86015-.97-5.08035-3.23555-3.23554Z" transform="translate(-165.00003 -189.93073)" fill="#fff" /><path d="M445.06712,701.63014c15.2985-12.92712,24.591-33.34815,22.15408-53.22817s-17.53079-38.15588-37.10966-42.37749-41.89745,7.46449-47.8442,26.59014c-3.27278-36.87349-7.04406-75.29195-26.64837-106.69317-17.75122-28.433-48.49666-48.778-81.81777-52.41768s-68.40395,10.107-89.18511,36.407-25.86934,64.53459-11.31476,94.72909c10.72185,22.24324,30.47528,38.79693,51.17195,52.26422,66.02954,42.9653,147.93912,60.88443,225.8773,49.41454" transform="translate(-165.00003 -189.93073)" fill="#f2f2f2" /><path d="M217.56676,484.37281a540.35491,540.35491,0,0,1,75.30383,74.77651A548.0761,548.0761,0,0,1,352.25665,647.04a545.835,545.835,0,0,1,25.43041,53.8463c1.52726,3.74257-4.55,5.37169-6.06031,1.67075a536.35952,536.35952,0,0,0-49.009-92.727A539.73411,539.73411,0,0,0,256.889,528.63168a538.44066,538.44066,0,0,0-43.76626-39.81484c-3.13759-2.55492,1.33232-6.97788,4.444-4.444Z" transform="translate(-165.00003 -189.93073)" fill="#fff" /><path d="M789.5,708.93073h-365v-374.5c0-79.67773,64.82227-144.5,144.49976-144.5h76.00049c79.67749,0,144.49975,64.82227,144.49975,144.5Z" transform="translate(-165.00003 -189.93073)" fill="#f2f2f2" /><path d="M713.5,708.93073h-289v-374.5a143.38177,143.38177,0,0,1,27.59571-84.94434c.66381-.90478,1.32592-1.79785,2.00878-2.68115a144.46633,144.46633,0,0,1,30.75415-29.85058c.65967-.48,1.322-.95166,1.99415-1.42334a144.15958,144.15958,0,0,1,31.47216-16.459c.66089-.25049,1.33374-.50146,2.00659-.74219a144.01979,144.01979,0,0,1,31.1084-7.33593c.65772-.08985,1.333-.16016,2.0083-.23047a146.28769,146.28769,0,0,1,31.10547,0c.67334.07031,1.34864.14062,2.01416.23144a143.995,143.995,0,0,1,31.10034,7.335c.6731.24073,1.346.4917,2.00879.74268a143.79947,143.79947,0,0,1,31.10645,16.21582c.67163.46143,1.344.93311,2.00635,1.40478a145.987,145.987,0,0,1,18.38354,15.564,144.305,144.305,0,0,1,12.72437,14.55078c.68066.88037,1.34277,1.77344,2.00537,2.67676A143.38227,143.38227,0,0,1,713.5,334.43073Z" transform="translate(-165.00003 -189.93073)" fill="#ccc" /><circle cx="524.99994" cy="335.5" r="16" fill="#014587" /><polygon points="594.599 507.783 582.339 507.783 576.506 460.495 594.601 460.496 594.599 507.783" fill="#ffb8b8" /><path d="M573.58165,504.27982h23.64384a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H558.69478a0,0,0,0,1,0,0v0a14.88688,14.88688,0,0,1,14.88688-14.88688Z" fill="#2f2e41" /><polygon points="655.599 507.783 643.339 507.783 637.506 460.495 655.601 460.496 655.599 507.783" fill="#ffb8b8" /><path d="M634.58165,504.27982h23.64384a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H619.69478a0,0,0,0,1,0,0v0a14.88688,14.88688,0,0,1,14.88688-14.88688Z" fill="#2f2e41" /><path d="M698.09758,528.60035a10.74272,10.74272,0,0,1,4.51052-15.84307l41.67577-114.86667L764.791,409.082,717.20624,518.85271a10.80091,10.80091,0,0,1-19.10866,9.74764Z" transform="translate(-165.00003 -189.93073)" fill="#ffb8b8" /><path d="M814.33644,550.1843a10.74269,10.74269,0,0,1-2.89305-16.21659L798.53263,412.4583l23.33776,1.06622L827.23606,533.045a10.80091,10.80091,0,0,1-12.89962,17.13934Z" transform="translate(-165.00003 -189.93073)" fill="#ffb8b8" /><circle cx="612.1058" cy="162.12254" r="24.56103" fill="#ffb8b8" /><path d="M814.17958,522.54937H740.13271l.08911-.57617c.13306-.86133,13.19678-86.439,3.56177-114.436a11.813,11.813,0,0,1,6.06933-14.5835h.00025c13.77173-6.48535,40.20752-14.47119,62.52,4.90918a28.23448,28.23448,0,0,1,9.45947,23.396Z" transform="translate(-165.00003 -189.93073)" fill="#014587" /><path d="M754.35439,448.1812,721.01772,441.418l15.62622-37.02978a13.99723,13.99723,0,0,1,27.10571,6.99755Z" transform="translate(-165.00003 -189.93073)" fill="#014587" /><path d="M797.05043,460.73882l-2.00415-45.94141c-1.51977-8.63623,3.42408-16.80029,11.02735-18.13476,7.60547-1.32959,15.03174,4.66016,16.55835,13.35986l7.533,42.92774Z" transform="translate(-165.00003 -189.93073)" fill="#014587" /><path d="M811.71606,517.04933c11.91455,45.37671,13.21436,103.0694,10,166l-16-2-29-120-16,122-18-1c-5.37744-66.02972-10.61328-122.71527-2-160Z" transform="translate(-165.00003 -189.93073)" fill="#2f2e41" /><path d="M793.2891,371.03474c-4.582,4.88079-13.09131,2.26067-13.68835-4.40717a8.05467,8.05467,0,0,1,.01014-1.55569c.30826-2.95357,2.01461-5.63506,1.60587-8.7536a4.59046,4.59046,0,0,0-.84011-2.14892c-3.65124-4.88933-12.22227,2.18687-15.6682-2.23929-2.113-2.714.3708-6.98713-1.25065-10.02051-2.14006-4.00358-8.47881-2.0286-12.45388-4.22116-4.42275-2.43948-4.15822-9.22524-1.24686-13.35269,3.55052-5.03359,9.77572-7.71951,15.92336-8.10661s12.25292,1.27475,17.99229,3.51145c6.52109,2.54134,12.98768,6.05351,17.00067,11.78753,4.88021,6.97317,5.34986,16.34793,2.90917,24.50174C802.09785,360.98987,797.03077,367.04906,793.2891,371.03474Z" transform="translate(-165.00003 -189.93073)" fill="#2f2e41" /><path d="M1004.98163,709.57417h-738.294a1.19069,1.19069,0,0,1,0-2.38137h738.294a1.19069,1.19069,0,0,1,0,2.38137Z" transform="translate(-165.00003 -189.93073)" fill="#3f3d56" /><path d="M634,600.43073H504a6.46539,6.46539,0,0,1-6.5-6.41531V303.846a6.46539,6.46539,0,0,1,6.5-6.41531H634a6.46539,6.46539,0,0,1,6.5,6.41531V594.01542A6.46539,6.46539,0,0,1,634,600.43073Z" transform="translate(-165.00003 -189.93073)" fill="#fff" /><rect x="332.49994" y="201.38965" width="143" height="2" fill="#ccc" /><rect x="332.99994" y="315.5" width="143" height="2" fill="#ccc" /><rect x="377.49994" y="107.5" width="2" height="304" fill="#ccc" /><rect x="427.49994" y="107.5" width="2" height="304" fill="#ccc" /></svg>

                            <div className="lg:absolute lg: top-1/3">
                                <h1 className="text-5xl font-bold">Login now!</h1>
                                <p className="py-6 text-slate-950">Welcome Back! We are delighted to see you again. Please enter your credentials to access your account. If you are new here, you can also sign up for an account below.</p>
                            </div>

                        </div>


                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
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

                                    <Link to={'/register'}><a className="label-text-alt link link-hover">New Here?</a></Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-blue-700 border-none hover:bg-blue-800 text-white font-medium">Login</button>
                            </div>

                            <div className="form-control mt-6">
                                <hr />
                                <div className="mt-6 flex justify-center">

                                    <img onClick={handleGoogleSignInPopup} className="w-8 hover:cursor-pointer" src="https://i.ibb.co/F5PGrQ6/google.png" alt="" />
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </form>



        </div>








    );
};

export default Login;