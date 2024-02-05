import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaCartPlus } from "react-icons/fa6";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";


const NavBar = () => {

  const {user, logOut}=useContext(AuthContext)
    const [cart]=useCart();
    const [isAdmin]=useAdmin()



    
    const handleLogOut =()=>{
      logOut()
      .then(()=>{

      })
      .catch(error=>console.log(error))
    }
    
    const navOptions =<>
    
    <li className="bg-black text-white"><Link to="/">Home</Link></li>
    <li className="bg-black text-white"><Link to="/menu">Menu</Link></li>
    <li className="bg-black text-white"><Link to="/about">About Us</Link></li>
    <li className="bg-black text-white"><Link to="/order/appetizer">Order</Link></li>
    <li className="bg-black text-white">
<Link  to="/dashboard/mycart">

{/* <button className="btn"> */}
{/* <FaCartPlus /> */}

  <div className="">Cart</div>
{/* </button> */}
</Link>

  </li>
    {
      isAdmin ? <li className="bg-black text-white"><Link to="/dashboard/adminhome">Dashboard</Link></li> : <li><Link to="/dashboard/userhome">Dashboard</Link></li>
    }
 
      
      {user ? <> 
      {/* <span>{user?.displayName}</span> */}
      
        <li className="bg-black text-white" onClick={handleLogOut}><Link >LogOut</Link></li>
      </>: 
        <li className="bg-black text-white"><Link to="/login">Login</Link></li>
      }
    </>
    return (
        <>
        <div className="navbar fixed z-10  top-0 max-w-screen-xl bg-yellow-400 text-black">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navOptions}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Yousra's-DelightfulHub!</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navOptions}
    </ul>
  </div>
  {/* <div className="navbar-end">
    <a className="btn">Button</a>
  </div> */}
</div>
            
        </>
    );
};

export default NavBar;