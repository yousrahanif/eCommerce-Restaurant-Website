import { useState } from 'react';
import orderImg from '../../../assets/order/order.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';

import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
  const categories =['appetizer', 'breakfast', 'lunch', 'beverage', 'dessert','popular', 'favorite', 'specialty' ]

  const {category} = useParams()
  const intialIndex= categories.indexOf(category)
    const [tabIndx, setTabIndx]=useState(intialIndex);
    
    const [menu]=useMenu();

console.log(category)


    const dessert = menu.filter(item => item.category === 'dessert')
    const appetizer = menu.filter(item => item.category === 'appetizer')
    
   
    const breakfast = menu.filter(item => item.category === 'breakfast')
    const beverage = menu.filter(item => item.category === 'beverage')
  
    const specialty = menu.filter(item => item.category === 'specialty')
    
    const lunch = menu.filter(item => item.category === 'lunch')
    const popular = menu.filter(item => item.category === 'popular')
    const favorite = menu.filter(item => item.category === 'favorite')


    return (
        <div>
          <Helmet>
                <title>Yousra's Delightful Hub | Order</title>

            </Helmet>
            <Cover img={orderImg} title={"Order Food"}></Cover>
            <Tabs defaultIndex={tabIndx} onSelect={(index) => setTabIndx(index)}>
  <TabList className="text-center text-2xl mt-4 mb-4 text-yellow-700 font-serif">
    <Tab>Appetizer</Tab>
    <Tab>Breakfast</Tab>
    <Tab>Lunch</Tab>
    <Tab>Beverage</Tab>
    <Tab>Dessert</Tab>
  
    <Tab>Popular</Tab>
    <Tab>Chef's Favorite</Tab>
    <Tab>Special</Tab>
  </TabList>
  <TabPanel>
   {/* <div className='grid md:grid-cols-3 gap-6'>
   {
    appetizer.map(item=> <FoodCard
    key={item._id}
    item={item}
    ></FoodCard>)
    }
   </div> */}
   <OrderTab items={appetizer}></OrderTab>
   </TabPanel>
  <TabPanel>
    <OrderTab items={breakfast}></OrderTab>
 
  </TabPanel>
  <TabPanel>
  <OrderTab items={lunch}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={beverage}></OrderTab>
  </TabPanel>
  <TabPanel>
  
  <OrderTab items={dessert}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={popular}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={favorite}></OrderTab>
  </TabPanel>
  
  <TabPanel>
  <OrderTab items={specialty}></OrderTab>
  </TabPanel>
</Tabs>
            
        </div>
    );
};

export default Order;