import { Helmet, HelmetProvider } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuBackground from '../../../assets/menu/menu-back.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import appetizerImg from '../../../assets/menu/appetizer_back.jpg'
import lunchImg from '../../../assets/menu/lunch_back.jpg'

import dessertImg from '../../../assets/menu/dessert_back.jpg'
import breakfastImg from '../../../assets/menu/breakfast_back.jpg'
import beverageImg from '../../../assets/menu/beverage_back.jpg'
import popularImg from '../../../assets/menu/popular_back.jpg'
import favoriteImg from '../../../assets/menu/favorite_back.jpg'
import specialImg from '../../../assets/menu/specialty_back.jpg'


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const appetizer = menu.filter(item => item.category === 'appetizer')

    const specialty = menu.filter(item => item.category === 'specialty')

    const breakfast = menu.filter(item => item.category === 'breakfast')
    const beverage = menu.filter(item => item.category === 'beverage')
    const popular = menu.filter(item => item.category === 'popular')
    const favorite = menu.filter(item => item.category === 'favorite')



    const lunch = menu.filter(item => item.category === 'lunch')

    return (
        <div>
            <Helmet>
                <title>Yousra's Delightful Hub | Menu</title>

            </Helmet>
            <Cover
                img={menuBackground}
                title="Dish Catalog"
            ></Cover>
            <SectionTitle
                subHeading={"Too Good"}
                heading={"Today's Special"}
            ></SectionTitle>
            {/* special items */}
            <MenuCategory
                items={specialty}
                title={"specialty"}
                img={specialImg}

            ></MenuCategory>

            <MenuCategory
                items={dessert}
                title={"dessert"}
                img={dessertImg}
            ></MenuCategory>

            <MenuCategory


                items={breakfast}
                title={"breakfast"}
                img={breakfastImg}



            ></MenuCategory>

            <MenuCategory


                items={lunch}
                title={"lunch"}
                img={lunchImg}



            ></MenuCategory>

            <MenuCategory


                items={beverage}
                title={"beverage"}
                img={beverageImg}



            ></MenuCategory>
            <MenuCategory


                items={appetizer}
                title={"appetizer"}
                img={appetizerImg}



            ></MenuCategory>
             <MenuCategory


items={popular}
title={"popular"}
img={popularImg}



></MenuCategory>
<MenuCategory


items={favorite}
title={"favorite"}
img={favoriteImg}



></MenuCategory>

        </div>
    );
};

export default Menu;