import { useContext } from "react";
import { FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleSignIn}=useContext(AuthContext)
    const navigate =useNavigate();
    const location = useLocation();
    const from =location.state?.from?.pathname || "/";
    const handleGoogleSignIn =()=>{
       googleSignIn()
       .then(result =>{
        const loggedInUser = result.user;
        console.log(loggedInUser)
        // navigate(from, {replace:true})
           
        const savedUser = {name: loggedInUser.displayName, email: loggedInUser.email}

              fetch('http://localhost:5000/users',{
               
                method: 'POST', 
                headers:{
                  'content-type':'application/json'
                },
                body: JSON.stringify(savedUser)

              })
              .then(res=>res.json())
              .then(()=>{
               
                  
                    navigate(from, {replace:true})

                
              })
            
    
       })
       .catch(error=>{
        console.log(error)
       })
    }
    return (
        <div>
              <div className="divider">OR</div>
            <div className="w-full text-center my-4">
            <button  onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
  <FaGoogle></FaGoogle>
</button>
            </div>
            
        </div>
    );
};

export default SocialLogin;