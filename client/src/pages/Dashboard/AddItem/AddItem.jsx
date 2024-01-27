import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token=import.meta.env.VITE_Image_Upload_token;

const AddItem = () => {
    const [axiosSecure]=useAxiosSecure()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const img_hosting_url=`https://api.imgbb.com/1/upload?key=${img_hosting_token}`
  const onSubmit = data => {
    
    // console.log(data)
    const formData= new FormData();
    formData.append('image', data.image[0])
    fetch(img_hosting_url,{
        method: 'POST',
        body: formData


    })
    .then(res=>res.json())
    .then(imgRespone=>{
       if(imgRespone.success){
        const imgUrl=imgRespone.data.display_url;
        const {name, price, category, recipe}=data;
        const newItem={name,price: parseFloat(price),category,recipe,image:imgUrl}
        console.log(newItem)
        axiosSecure.post('/menu',newItem)
        .then(data=>{
            console.log('after adding new item', data)
            if(data.data.insertedId){
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Item has been added",
                    showConfirmButton: false,
                    timer: 1500
                  });

            }
        })

       }

    })


  };
//   console.log(img_hosting_token)
  console.log(errors);
    return (
        <div className="w-full px-10 ">
        <SectionTitle
        subHeading={"Whats's New"}
        heading={"Add a new Item"}
        ></SectionTitle>
        <form onSubmit={handleSubmit(onSubmit)}> 


        <label className="form-control w-full mb-4">
  <div className="label">
    <span className="label-text font-bold">Recipe Name*</span>
  </div>
  <input type="text" placeholder="Recipe Name"
  {...register("name", {required: true, maxLength: 80})} 
  className="input input-bordered w-full " />
  
</label>

<div className="flex gap-4 mb-4 ">
<label className="form-control w-full ">
  <div className="label">
    <span className="label-text">Category*</span>
  </div>
  <select defaultValue="Pick One" {...register("category", {required: true})}  className="select select-bordered">
    <option disabled >Pick one</option>
    <option>Appetizer</option>
    <option>Breakfast</option>
    <option>Lunch</option>
    <option>Beverage</option>
    <option>Dessert</option>
    <option>Popular</option>
    <option>Chef's Favorite</option>
  </select>


  
</label>

<label className="form-control w-full ">
  <div className="label">
    <span className="label-text font-bold">Price*</span>
  </div>
  <input type="number" 
  step="0.01"
  placeholder="Price" 
   {...register("price", {required: true})}  
  className="input input-bordered w-full " />
  
</label>

</div>


<label className="form-control mb-4">
  <div className="label">
    <span className="label-text ">Recipe Details</span>
    
  </div>
  <textarea
   {...register("recipe", {required: true})}  
  className="textarea textarea-bordered h-24" placeholder=""></textarea>
 
</label>
<label className="form-control w-full ">
  <div className="label">
    <span className="label-text">Item Image</span>
    
  </div>
  <input type="file" {...register("image", {required: true})} className="file-input file-input-bordered w-full " />

</label>
<input className="btn btn-sm mt-4" type="submit" value="Add Item" />
        </form>
            
        </div>
    );
};

export default AddItem;