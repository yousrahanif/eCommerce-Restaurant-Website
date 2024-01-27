import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
    const {createUser, updateUserProfile}=useContext(AuthContext)
    const navigate =useNavigate();
    const {
        register,
        handleSubmit,
        reset,
       
        formState: { errors },
      } = useForm()
      const onSubmit = (data) =>{
        console.log(data)
        createUser(data.email, data.password)
        .then(result=>{
            const loggedUser =result.user;
console.log(loggedUser)
           
            updateUserProfile(data.name, data.photoUrl)
            .then(()=>{
              // console.log('user profile info updated')
              const savedUser = {name: data.name, email: data.email}

              fetch('https://restaurant-server-kappa.vercel.app/users',{
               
                method: 'POST', 
                headers:{
                  'content-type':'application/json'
                },
                body: JSON.stringify(savedUser)

              })
              .then(res=>res.json())
              .then(data=>{
                if(data.insertedId){
                  reset();
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User created Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/')

                }
              })
             
             



            })
            .catch(error=>{
              console.log(error)
            })
            
            
        })
       
      }
      const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(!passwordShown);
      };

    
    
    return (
       <>
       <Helmet>
                <title>Yousra's Delightful Hub | Sign Up</title>

            </Helmet>
       
       <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign up now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" 
                name="name"
               {...register("name", { required: true })}
                className="input input-bordered"  
                
                />
                {errors.name && <span className="text-red-600">Name field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="text" placeholder="photoUrl" 
                name="photoUrl"
               {...register("photoUrl", { required: true })}
                className="input input-bordered"  
                
                />
                {errors.photoUrl && <span className="text-red-600">PhotoUrl is field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" 
                name="email"
                {...register("email", { required: true })}
                className="input input-bordered"  />
                 {errors.email && <span className="text-red-600">Email field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={passwordShown ? 'text':'password'}placeholder="password" 
                name="password"
                {...register("password", { required: true,  maxLength: 20, minLength:6,
                pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&.*])(?=.*[0-9]).*$/
                
                })}
                className="input input-bordered"  />
                <Link>
                                <p className='font-thin mt-2 text-xs'
                  onClick={togglePasswordVisiblity}
                  
                >
                  Show Password
                </p> 
                                </Link> 
                 {errors.password?.type === "required" && (
        <p className="text-red-600">Password is required</p>
      )}
      {errors.password?.type === "maxLength" && (
                <p className="text-red-600">Password must be at less than 20 characters long</p>
              )}
      {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be at least 6 characters long</p>
              )}
        {errors.password?.type === "pattern" && (
                <p className="text-red-600">Password must have one uppercase,one lowercase, one number, and one special character</p>
              )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input  className="btn btn-primary" type="submit" value="Sign Up" />
                
              </div>
              <p className="mt-2 font-medium">Already have an account? <Link to="/login"><span className="text-blue-800">Login</span></Link></p>
             <SocialLogin></SocialLogin>
            </form>
            
          </div>
        </div>
      </div>
       </>
    );
};

export default SignUp;