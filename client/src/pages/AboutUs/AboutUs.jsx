import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import restaurant from '../../assets/others/restaurant.jpg'
import CallUs from '../../components/CallUs/CallUs';

const AboutUs = () => {
    return (
        <div className='relative mx-auto px-4 '>

        <Helmet>
            <title>Yousra's Delightful Hub | About Us</title>
        </Helmet>

        <SectionTitle />

        <div className='mx-auto '>
            <img className='mx-auto' src={restaurant} alt="" />
            <h2 className='text-2xl mb-8 mt-4'>
                Welcome to Yousra's Delightful Hub, a halal haven since 1902, where culinary excellence meets heartwarming hospitality. Our restaurant is a celebration of halal flavors, carefully crafted with the finest ingredients. From sizzling kebabs to aromatic biryanis, each dish is a masterpiece of taste and tradition. Join us in a space where love for food and cultural heritage blend seamlessly for a delightful dining experience.
                
            </h2>
            <CallUs></CallUs>
        </div>


        

    </div>
);
};

export default AboutUs;