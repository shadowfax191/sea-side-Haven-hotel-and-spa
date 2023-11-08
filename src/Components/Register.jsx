import { Link } from "react-router-dom";
import NavBar from "../layout/NavBar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import auth from "../Firebase/firebase";
import { updateProfile } from "firebase/auth";
import axios from "axios";
import { Helmet } from "react-helmet-async";


const Register = () => {
    window.scrollTo(0,0)


    const {createUser}=useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const name=e.target.name.value
        const photo=e.target.url.value
        if(/^(?=.*[A-Za-z])(?=.*[A-Z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(password)){
           
            createUser(email,password)
            .then(res=>{
                const uId=res.user.uid
               if(res.user.uid){
                toast.success('Successfully Registration Complete ',
                {
                  style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                  },
                })
                axios.post('https://b8a11-server-side-shadowfax191-main.vercel.app/jwt', { uId }, { withCredentials: true })
                .then(res => {
                    console.log(res.data);
                })
               }
               const user =auth.currentUser
               if(user){
                return updateProfile(user,{
                    displayName:name,
                    photoURL:photo
                })
               }

            })
            .catch(err=>{
                console.log(err);
               toast.error(err.message ,
                {
                  style: {
                    borderRadius: '10px',
                    background: '#FF0',
                    color: '#333',
                  },
                });
            })
        }
        else{
            toast.error('Password should contain 1 upper case,1 special character and at least 6 character',
            {
 
              style: {
                borderRadius: '10px',
                background: '#FF0',
                color: '#333',
              },
            })
        }
        
    }
    return (
        <div>
            <Helmet>
                <title>Sea Hotel | Register </title>
            </Helmet>
            <NavBar></NavBar>
            <h1 className="text-5xl font-bold pb-5 text-center pt-10">Register now!</h1>
            <div className="hero "> 
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left flex-1">
                       
                        <img src=" https://i.ibb.co/NsS9Ct3/6368592.jpg" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 flex-1">
                        <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="url" name="url" className="input input-bordered" required />
                            </div>
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
                                <button className="btn btn-accent">Register</button>
                            </div>
                            <p>Already have an Account? <Link className="text-accent font-bold" to='/login'>login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;