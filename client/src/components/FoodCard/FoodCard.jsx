import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";



const FoodCard = ({ item }) => {
  const { user } = useContext(AuthContext)
  const {_id,name, image, price, recipe } = item
 
  const navigate = useNavigate()
  const location =useLocation()
  const  [,refetch]=useCart()
  
  const handleAddToCart = item => {
    console.log(item)
    if (user && user.email) {
      const cartItem ={menuItemId: _id, name, price, image, email:user.email}
      fetch('https://restaurant-server-kappa.vercel.app/carts', {
        method: 'POST',
        headers: {
          'content-type':'application/json'
        },
        body: JSON.stringify(cartItem)

      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            //to update the cart
refetch()
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your food added to cart",
              showConfirmButton: false,
              timer: 1500
            });

          }
        })
    }
    else{
      Swal.fire({
        title: "Please Login to Order",
        
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now"
      }).then((result) => {
        if (result.isConfirmed) {
         navigate('/login',
         {state:{from: location}} )
        }
      });

    }

  }
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure><img style={{ height: '400px', width: '300px' }} src={image} alt="" /></figure>
      <p className="bg-black text-white absolute right-0  p-2">${price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}!</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button onClick={() => handleAddToCart(item)} className="text-black font-semibold text-xl mt-4 btn btn-outline border-0 border-b-8 bg-slate-100 border-yellow-500">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;