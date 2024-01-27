// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// import useAxiosSecure from '../../../hooks/useAxiosSecure';
// import SectionTitle from '../../../components/SectionTitle/SectionTitle';
// import Swal from 'sweetalert2';

// const EditItem = () => {
//   const { itemId } = useParams();
//   const [axiosSecure] = useAxiosSecure();
//   const { register, handleSubmit, reset, formState: { errors } } = useForm();
//   const [item, setItem] = useState({
//     // name: '',
//     // price: 0,
//     // category: '',
//     // recipe: '',
//     // image: '',
//   });
//   const customHandleSubmit =event =>{
//     event.preventDefault();
//     const form = event.target;
//     const name = form.name.value;
//     const price = form.price.value;
//     const category = form.category.value;
//     const recipe = form.recipe.value;
//     const image = form.image.value;
//     const updateMenu = {name, price, category, recipe, image};
//     console.log(updateMenu)
   

//   }
 

//   useEffect(() => {
//     // Fetch the details of the item using itemId
//     axiosSecure.get(`/menu/${itemId}`)
//       .then(res => {
//         setItem(res.data.menu); // Assuming the response contains the item details
//       })
//       .catch(error => {
//         console.error('Error fetching item details:', error);
//         // Handle error, e.g., redirect to ManageItems page
//       });
//   }, [axiosSecure, itemId]);
//   console.log('Item:', item);

//   const onSubmit = (data) => {
//     // Implement logic to update the item details
//     const { name, price, category, recipe, image } = data;
//     const updatedItem = { name, price: parseFloat(price), category, recipe, image };

//     // Perform the update using axiosSecure.put or axiosSecure.patch
//     axiosSecure.put(`/menu/${itemId}`, updatedItem)
//       .then(response => {
//         console.log('Item updated:', response);
//         // Handle success, e.g., show success message and redirect
//         Swal.fire({
//           position: 'top-end',
//           icon: 'success',
//           title: 'Your Item has been updated',
//           showConfirmButton: false,
//           timer: 1500,
//         });
//         // You may want to redirect the user back to the ManageItems page
//       })
//       .catch(error => {
//         console.error('Error updating item:', error);
//         // Handle error, e.g., show an error message
//       });
//   };

//   return (
//     <div className="w-full px-10">
//       <SectionTitle subHeading={"Update Item"} heading={"Edit Item"}></SectionTitle>
//       {/* <form onSubmit={handleSubmit(onSubmit)}> */}
//       <form onSubmit={customHandleSubmit}>
//         <label className="form-control w-full mb-4">
//           <div className="label">
//             <span className="label-text font-bold">Recipe Name*</span>
//           </div>
//           <input
//             type="text"
//             // placeholder="Recipe Name"
//             {...register("name", { required: true, maxLength: 80 })}
//             defaultValue={item?.name}  // Set defaultValue to actual value
//             className="input input-bordered w-full"
//           />
//         </label>

//         <div className="flex gap-4 mb-4">
//           <label className="form-control w-full ">
//             <div className="label">
//               <span className="label-text">Category*</span>
//             </div>
//             <select
//               {...register("category", { required: true })}
//               defaultValue={item.category}  // Set defaultValue to actual value
//               className="select select-bordered"
//             >
//               <option disabled>Pick one</option>
//               <option>Appetizer</option>
//               <option>Breakfast</option>
//               <option>Lunch</option>
//               <option>Beverage</option>
//               <option>Dessert</option>
//               <option>Popular</option>
//               <option>Chef's Favorite</option>
//             </select>
//           </label>

//           <label className="form-control w-full ">
//             <div className="label">
//               <span className="label-text font-bold">Price*</span>
//             </div>
//             <input
//               type="number"
//               step="0.01"
//               placeholder="Price"
//               {...register("price", { required: true })}
//               defaultValue={item.price}  // Set defaultValue to actual value
//               className="input input-bordered w-full"
//             />
//           </label>
//         </div>

//         <label className="form-control mb-4">
//           <div className="label">
//             <span className="label-text ">Recipe Details</span>
//           </div>
//           <textarea
//             {...register("recipe", { required: true })}
//             defaultValue={item.recipe}  // Set defaultValue to actual value
//             className="textarea textarea-bordered h-24"
//             placeholder=""
//           ></textarea>
//         </label>

//         <label className="form-control w-full ">
//           <div className="label">
//             <span className="label-text">Item Image</span>
//           </div>
//           <input
//             type="file"
//             {...register("image", { required: true })}
//             className="file-input file-input-bordered w-full"
//           />
//         </label>

//         <input className="btn btn-sm mt-4" type="submit" value="Update Item" />
//       </form>
//     </div>
//   );
// };

// export default EditItem;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import Swal from 'sweetalert2';

const EditItem = () => {
  const { itemId } = useParams();
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [item, setItem] = useState({});

  useEffect(() => {
    // Fetch the details of the item using itemId
    axiosSecure.get(`/menu/${itemId}`)
      .then(res => {
        setItem(res.data.menu);
        // Set form values when data is available
        Object.keys(res.data.menu).forEach(key => {
          setValue(key, res.data.menu[key]);
        });
      })
      .catch(error => {
        console.error('Error fetching item details:', error);
        // Handle error, e.g., redirect to ManageItems page
      });
  }, [axiosSecure, itemId, setValue]);

  const onSubmit = (data) => {
    // Implement logic to update the item details
    const { name, price, category, recipe, image } = data;
    const updatedItem = { name, price: parseFloat(price), category, recipe, image };

    // Perform the update using axiosSecure.put or axiosSecure.patch
    axiosSecure.put(`/menu/${itemId}`, updatedItem)
      .then(response => {
        console.log('Item updated:', response);
        // Handle success, e.g., show success message and redirect
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your Item has been updated',
          showConfirmButton: false,
          timer: 1500,
        });
        // You may want to redirect the user back to the ManageItems page
      })
      .catch(error => {
        console.error('Error updating item:', error);
        // Handle error, e.g., show an error message
      });
  };

  return (
    <div className="w-full px-10">
      <SectionTitle subHeading={"Update Item"} heading={"Edit Item"}></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="form-control w-full mb-4">
          <div className="label">
            <span className="label-text font-bold">Recipe Name*</span>
          </div>
          <input
            type="text"
            {...register("name", { required: true, maxLength: 80 })}
            className="input input-bordered w-full"
          />
        </label>

        <div className="flex gap-4 mb-4">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Category*</span>
            </div>
            <select
              {...register("category", { required: true })}
              className="select select-bordered"
            >
              <option disabled>Pick one</option>
              <option>Appetizer</option>
              <option>Breakfast</option>
              <option>Lunch</option>
              <option>Beverage</option>
              <option>Dessert</option>
              <option>Popular</option>
              <option>Chef's Favorite</option>
            </select>
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold">Price*</span>
            </div>
            <input
              type="number"
              step="0.01"
              {...register("price", { required: true })}
              className="input input-bordered w-full"
            />
          </label>
        </div>

        <label className="form-control mb-4">
          <div className="label">
            <span className="label-text ">Recipe Details</span>
          </div>
          <textarea
            {...register("recipe", { required: true })}
            className="textarea textarea-bordered h-24"
          ></textarea>
        </label>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Item Image</span>
          </div>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full"
          />
        </label>

        <input className="btn btn-sm mt-4" type="submit" value="Update Item" />
      </form>
    </div>
  );
};

export default EditItem;

