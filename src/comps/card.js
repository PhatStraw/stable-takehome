import React, { useState } from 'react'
import {
  Card as ReactCard,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardFooter,
  CardSubtitle,
  Button,
} from 'reactstrap'
import '../styles/card.css'

const Card = ({ data }) => {
  console.log(data)
  return (
    <div className='cardContainer'>
      {data &&
        data.map((mail) => (
          <div style={{width: '31%', margin: '0 0 30px 0', border: '1px solid grey'}}>
            <ReactCard className='cardStyles' >
            <div style={{width: '100%', height: '80px', borderBottom: '1px solid grey'}}>
              <img
              style={{width: '100%', maxWidth: '90%', maxHeight: '75px', margin: 'auto'}}
              src={mail.imageUrl}
              alt="Card image cap"
              />
            </div>
            
            <CardBody>
              <CardTitle tag="h5">{mail.businessRecipient || " "}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>

              <CardFooter className="text-muted">Footer</CardFooter>
            </CardBody>
          </ReactCard>
          </div>
          
        ))}
    </div>
  )
}

export default Card
