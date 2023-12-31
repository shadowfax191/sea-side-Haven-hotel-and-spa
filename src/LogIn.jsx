import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "./layout/NavBar";
import { useContext, useState } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const LogIn = () => {
    window.scrollTo(0,0)
    const [theme,setTheme]=useState('light')

    const handleChange=()=>{
        if(theme ==='light'){
            setTheme('dark')
        }
        else{
            setTheme('light')
        }
    }
    const { signIn ,signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        signIn(email, password)
            .then(res => {
               const uId=res.user.uid
                if (res.user.uid) {
                    toast.success('Successfully Login Complete ',
                        {
                            style: {
                                borderRadius: '10px',
                                background: '#333',
                                color: '#fff',
                            },
                        })
                  
                    axios.post('https://b8a11-server-side-shadowfax191-main.vercel.app/jwt', { uId }, { withCredentials: true })
                       


                }

                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
              
                toast.error(err.message,
                    {
                        style: {
                            borderRadius: '10px',
                            background: '#FF0',
                            color: '#333',
                        },
                    });
            })
    }

    const handleGoogle =()=>{
        signInWithGoogle()
        .then(res => {
            const uId=res.user.uid
             if (res.user.uid) {
                 toast.success('Successfully Login Complete ',
                     {
                         style: {
                             borderRadius: '10px',
                             background: '#333',
                             color: '#fff',
                         },
                     })
               
                 axios.post('https://b8a11-server-side-shadowfax191-main.vercel.app/jwt', { uId }, { withCredentials: true })
                     


             }

             navigate(location?.state ? location.state : '/')
         })
         .catch(err => {
         
             toast.error(err.message,
                 {
                     style: {
                         borderRadius: '10px',
                         background: '#FF0',
                         color: '#333',
                     },
                 });
         })
    }
    return (
        <div data-theme={`${theme}`}>
             <Helmet>
                <title>Sea Hotel | Login </title>
            </Helmet>
            <NavBar handleChange={handleChange}></NavBar>
            <h1 className="text-5xl font-bold pb-5 text-center pt-10">Login now!</h1>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left flex-1">
                        <img src="https://i.ibb.co/LtwrXJk/10.jpg" alt="" />

                    </div>
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 flex-1">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-accent">Login</button>
                            </div>
                            <p>Do not have an Account? <Link className="text-accent font-bold" to='/register'>register</Link></p>
                            <div className="form-control ">
                                <p className="text-center font-bold text-lg uppercase pb-5">Or</p>
                                <button onClick={handleGoogle} className="btn btn-accent"><img className="w-8" src="https://i.ibb.co/mNSDXcs/search-1.png" alt="" /></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;