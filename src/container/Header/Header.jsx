import { tab } from '@testing-library/user-event/dist/tab';
import React from 'react';
import { MdTabUnselected } from 'react-icons/md';
import { SubHeading } from '../../components';
import { data, images } from '../../constants';
import './Header.css';


const Header = () => (
  <div className='app__header app__wrapper section__padding' id="aboutUs">
    <div className='app__wrapper_info'>
      <SubHeading title="ABOUT US" />
      <p className='p__opensans' style={{ margin: '2 0rem' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis ullamcorper diam, vitae dapibus purus posuere in. Nam venenatis tempus erat ut volutpat. Ut eu bibendum lacus. Aenean fermentum magna nec elit elementum consequat ut ut massa. Pellentesque non ex nec augue accumsan placerat. Duis quis pharetra augue. Mauris tempor congue faucibus.
      </p>
    </div>
    <div className='app__wrapper_img' >
      <img src={images.welcome} />
    </div>
  </div >
);

export default Header;
