import chef from '../../assets/home/chef.jpg';
import desc from '../../assets/home/TitleDes.jpg';
import CallUs from '../CallUs/CallUs';
import SectionTitle from '../SectionTitle/SectionTitle';
import './TitleDescription.css'

const TitleDescription = () => {
    return (
        


        <div className="titleDescription-item bg-fixed text-black  font-extrabold pt-8 my-20" >
        <SectionTitle
        subHeading={"Keep Your Eyes On"}
        heading={"Our Restaurant"}
       
       
        
        ></SectionTitle> 
        <div className="md:flex justify-center items-center bg-slate-900 bg-opacity-30 pb-20 pt-12 py-20 px-36  ">

      
        <div className="md:ml-10 h-52 ">
         {/* <p>As of {currentDate}</p> */}
         
         {/* <p className='text-xl font-thin py-6  text-black bg-yellow-50 px-6'>Welcome to <span className='text-2xl font-semibold'>Yousra's Delightful Hub</span>, a culinary oasis in the heart of the city, blending culinary mastery with cultural authenticity. Discover a curated menu of your favorite Halal delights, from sizzling Beef kebabs to the aromatic Chicken Biryani. Each dish, crafted with precision and passion, embodies the rich tapestry of Halal gastronomy. Our commitment transcends taste, offering an immersive dining experience that seamlessly blends tradition with modern innovation. Join us in our warm and inviting ambiance, where every meal is a celebration of culture, community, and the joy of sharing exceptional food.</p> */}
         
         {/* <button className="text-white font-extrabold text-2xl mt-4 btn btn-outline border-0 border-b-0 bg-black">Order Now</button> */}
         
        </div>
        </div>
       
     </div>
    );
};

export default TitleDescription;