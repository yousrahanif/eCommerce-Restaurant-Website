import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import topPick from '../../../assets/home/topPick.jpg'

import './Featured.css'
import { Link } from "react-router-dom";


const Featured = () => {
    // const date =moment();
    // const currentDate = date.format('MM/DD/YYYY')
    return (
        <div className="featured-item bg-fixed text-white font-bold pt-8 my-20" >
           <SectionTitle
          
           subHeading="Browse"
           heading="Top Pick"
           ></SectionTitle> 
           <div className="md:flex justify-center items-center bg-slate-900 bg-opacity-30 pb-20 pt-12 py-20 px-36  ">

           <div >
            <img src={topPick} alt="" />
           </div>
           <div className="md:ml-10">
            {/* <p>As of {currentDate}</p> */}
            <p className="uppercase">Why So Special?</p>
            <p>Savor the essence of our renowned Tandoori Chicken – a culinary masterpiece that captures the rich flavors of traditional Indian spices and the smoky allure of our tandoor. Meticulously crafted by our skilled chefs, each succulent bite is a harmonious blend of authenticity and innovation. A true favorite among our patrons, our Tandoori Chicken invites you to experience the heart and soul of our culinary expertise</p>
            <Link to="/menu">
            
            <button className="text-white font-extrabold text-2xl mt-4 btn btn-outline border-0 border-b-8">Order Now</button>
            </Link>
           </div>
           </div>
          
        </div>
    );
};

export default Featured;