import { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import ChefFavoriteCard from './ChefFavoriteCard';

const ChefFavorite = () => {
    const [chefFavs, setChefFavs]=useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{

            const chefFavorite = data.filter(item=>item.category==='favorite')
            setChefFavs(chefFavorite)
        })
    },[])
    return (
        <section className='mb-8'>
            <SectionTitle
            subHeading={"Don't Miss Out"}
            heading={"Chef's Special"}
            ></SectionTitle>
            <div className='flex flex-col lg:flex-row md:flex-row  justify-between ml-4 '>
                {chefFavs.map(chefFav=> <ChefFavoriteCard
                key={chefFav._id}
                chefFav={chefFav}
                ></ChefFavoriteCard>)}
            </div>
        </section>
    );
};

export default ChefFavorite;