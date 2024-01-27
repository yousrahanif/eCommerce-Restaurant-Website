import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '@smastrom/react-rating/style.css'


import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
    const [reviews, setReviews]=useState([])
    useEffect(()=>{
        fetch('https://restaurant-server-kappa.vercel.app/reviews')
        .then(res=>res.json())
        .then(data=>{
            setReviews(data)
        })
    },[])
    return (
        <section className="my-10">
            <SectionTitle
            subHeading="Client's Delightful Experiences"
            heading={'Reviews'}
            ></SectionTitle>

<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
        
        {
            reviews.map(review=><SwiperSlide
            key={review._id}
            ><div className="flex flex-col items-center my-10 mx-24">
                 <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
 <FontAwesomeIcon icon={faQuoteLeft}  size="4x"  className="mt-4"/>

  
                <p className="py-4">{review.details}</p>
                <p className="text-2xl text-yellow-800">{review.name}</p>
                
                </div></SwiperSlide>)
        }
      </Swiper>
        </section>
        


    );
};

export default Testimonials;