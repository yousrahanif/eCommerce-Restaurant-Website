import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


import slide1 from '../../../assets/home/s1.jpg'
import slide2 from '../../../assets/home/s2.jpg'
import slide3 from '../../../assets/home/s3.jpg'
import slide4 from '../../../assets/home/s4.jpg'
import slide5 from '../../../assets/home/s5.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import Marquee from 'react-fast-marquee';
const Category = () => {
    return (
        <section>
          
          <SectionTitle
      subHeading={
        <Marquee>
            Always open, always ready 24/7!&nbsp;
        </Marquee>
    }
     
          heading={"Order Online"}

          ></SectionTitle>
        {/* <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mb-24"
        > */}
         <Swiper
         slidesPerView={2}
         spaceBetween={10}  // Adjust this value to reduce the gap
        //  centeredSlides={true}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
            
          <SwiperSlide>
            <img src={slide1} alt="" />
            <h3 className='text-4xl uppercase text-center mt-10 text-red-800'>Beef</h3>
          </SwiperSlide>
          <SwiperSlide>
          <img src={slide2} alt=""  />
          <h3 className='text-4xl uppercase text-center mt-10  text-red-800'>Burger</h3>
            </SwiperSlide>
          <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className='text-4xl uppercase text-center mt-10  text-red-800'>Cake</h3>
            </SwiperSlide>
          <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className='text-4xl uppercase text-center mt-10  text-red-800'>Rice</h3>
            </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" />
            <h3 className='text-4xl uppercase text-center mt-10  text-red-800'>CHicken</h3>
            </SwiperSlide>
         
        </Swiper>
      </section>
    );
};

export default Category;