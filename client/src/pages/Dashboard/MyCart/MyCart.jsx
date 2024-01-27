import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";


const MyCart = () => {
    const [cart,refetch] = useCart()
    let totalCal =
        cart.reduce((sum, item) =>
            item.price + sum, 0


        )
    const total = parseFloat(totalCal).toFixed(2)

    const handleDelete=(item)=>{

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`https://restaurant-server-kappa.vercel.app/carts/${item._id}`,{
                method: 'DELETE',
                
              })
              .then(res=>res.json())
              .then(data=>{
                if(data.deletedCount>0){
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
            

                }

              })
            }
          });
         

    }
    return (
        <div className="w-full">
            <Helmet>
                <title>Yousra's Delightful Hub | My Cart</title>

            </Helmet>
            <div className="uppercase flex justify-evenly mt-40 items-center">
                <h3 className="text-2xl">Total Items: {cart.length}</h3>
                <h3 className="text-2xl">Total Price: ${total}</h3>
               <Link to="/dashboard/payment">
               <button className="btn mb-4 bg-yellow-500">Checkout <FaCheck className='text-3xl'></FaCheck>
               </button>
               </Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-yellow-100">
                        <tr>
                            <th>
                                    #
                            </th>
                            <th>Food</th>
                            <th>Item Name</th>
                            <th>Price Color</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cart.map((row,index) => 
                                
                                
                                <tr key={row._id}>
                                <td>
                                    {index+1}
                                </td>
                                <td>
                                    <div className="flex items-center">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={row.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                       
                                    </div>
                                </td>
                                <td>
                                    {row.name}
                                    
                                </td>
                                <td >${row.price}</td>
                                <td>
                                    <button
                                    onClick={()=>handleDelete(row)}
                                    className="btn btn-ghost btn-lg bg-yellow-500"><FaTrashAlt /></button>
                                </td>
                            </tr>)
                        }
                       
                       
                       
                        
                    </tbody>
                    

                </table>
            </div>
        </div>
    );
};

export default MyCart;