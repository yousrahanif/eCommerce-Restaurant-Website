import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import pic1 from '../../../assets/home/img1.jpg'
import pic2 from '../../../assets/home/img2.jpg'
import pic3 from '../../../assets/home/img3.jpg'
import pic4 from '../../../assets/home/img4.jpg'
import pic6 from '../../../assets/home/img6.jpg'
import pic7 from '../../../assets/home/img7.jpg'
import pic8 from '../../../assets/home/img8.jpg'



const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={pic1} className=""/>

            </div>
            <div>
            <img src={pic2} className=""/>
               

            </div>
            <div>
            <img src={pic3} className=""/>
            </div>
            <div>
            <img src={pic4} className=""/>
               
            </div>
           
            <div>
            <img src={pic6} className=""/>
            </div>
            <div>
            <img src={pic7} className=""/>
              
            </div>
            <div>
            <img src={pic8} className=""/>
               
            </div>
        </Carousel>
    );
};

export default Banner;