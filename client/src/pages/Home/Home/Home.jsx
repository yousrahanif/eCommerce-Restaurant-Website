import { Helmet } from 'react-helmet-async';
import CallUs from '../../../components/CallUs/CallUs';
import TitleDescription from '../../../components/TitleDescription/TitleDescription';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import ChefFavorite from '../ChefFavorite/ChefFavorite';
import Featured from '../Featured/Featured';
import PopularMenu from '../PopularMenu/PopularMenu';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Yousra's Delightful Hub | Home</title>
       
      </Helmet>
            <Banner></Banner>
            <Category></Category>
            <TitleDescription></TitleDescription>
            <PopularMenu></PopularMenu>
            {/* <Featured></Featured> */}
            <Testimonials></Testimonials>
            <CallUs></CallUs>
            
            {/* <ChefFavorite></ChefFavorite> */}
        </div>
    );
};

export default Home;