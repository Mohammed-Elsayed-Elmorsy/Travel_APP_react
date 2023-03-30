import React from "react";
import './cards.css'
import CardItem from "./CardItem";
import img_1 from "../../images/img-9.jpg";
import img_2 from "../../images/img-2.jpg";
import img_3 from "../../images/img-3.jpg";
import img_4 from "../../images/img-6.jpg";
import SecHead from "../sectionheading/SecHead";
const Cards = () => {
  return (
    <div className='cards container'>
      <SecHead name='Visit This Fictional Places'/>

      <div className='cards_container'>
        <div className='cards_wrapper'>
          <ul className='cards_items'>
            <CardItem
              name='Explore The Hidden Sand'
              src={img_1}
              text=' deep in The Desert'
              path='/services'
              label='Adventure'
            />
            <CardItem
              name='Explore The Hidden WaterFall'
              src={img_2}
              text=' Explore in The See'
              path='/services'
              label='Luxury'
            />
            <CardItem
              name='Explore The Hidden WaterFall'
              src={img_3}
              text=' deep in The Jungle'
              path='/services'
              label='Mystery'
            />
            <CardItem
              name='Explore The Hidden WaterFall'
              src={img_4}
              text=' deep in The See'
              path='/services'
              label='Adventure'
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
