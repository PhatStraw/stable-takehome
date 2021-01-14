import React from 'react';

import Card from './card'
import '../styles/body.css'


const Body = (props) => {
  return (
    <div className='bodyContainer'>
      <div className='bodyStyles'>
        <h1>All Mail</h1>
        <p>Here are all of the pieces of mail youve recieved at your stable address</p>
        <Card data={props.data} />
      </div>
    </div>
  );
}

export default Body;
