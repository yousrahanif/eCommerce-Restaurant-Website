import { Link, Outlet } from "react-router-dom";
import { FaBowlFood, FaCartPlus } from "react-icons/fa6";

import { FaRegCalendarAlt , FaUsers,FaWallet, FaBookReader } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import useCart from "../hooks/useCart";
import { MdFastfood, MdManageAccounts } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import useAdmin from "../hooks/useAdmin";





const Dashboard = () => {
  const [cart]=useCart()
  // const isAdmin =true;
  const [isAdmin]=useAdmin();
    return (
        <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar bg-yellow-500">
      <div className="flex-none ">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 px-2 mx-2">Yousra's-DelightFul-Hub </div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
          <li><Link to="/">Home</Link></li>
          {/* <li><Link>Navbar Item 2</a></li> */}
        </ul>
      </div>
    </div>
    {/* Page content here */}
    <Outlet></Outlet>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-yellow-500">

      {
        isAdmin? <>
        <li><Link to="/dashboard/adminhome"><RiAdminFill />Admin Home</Link></li>
      <li><Link to="/dashboard/addItem"><MdFastfood />Add Items</Link></li>
      <li><Link to="/dashboard/manageitems"><FaBookReader />Manage Items</Link></li>
      {/* <li><Link to=""><MdManageAccounts />Manage Reservations</Link></li> */}
      <li><Link to="/dashboard/allusers"><FaUsers />All Users</Link></li>
        </>:
         <>
        
        <li className="bg-yellow-400"><Link to="/dashboard/userhome" ><FaHome />User Home</Link></li>
      <li><Link to="/dashboard/mycart"><FaCartPlus></FaCartPlus>My Cart
      
      <span className="">+{cart?.length || 0}</span>
      </Link>
      </li>
      {/* <li><Link><FaWallet />Payment History</Link></li> */}
      {/* <li><Link><FaRegCalendarAlt />Reservations</Link></li> */}
        </>
      }
      {/* Sidebar content here */}
      
      <div className="divider"></div>
      <li><Link to="/"><FaHome></FaHome> Home</Link> </li>
                    <li><Link to="/menu"><FaBowlFood></FaBowlFood>  Menu</Link></li>
                   {/* <li><Link to="/order">Order Food</Link></li>  */}
      
      
    
      
    </ul>
  </div>
</div>
    );
};

export default Dashboard;