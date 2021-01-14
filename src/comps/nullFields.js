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
import '../styles/header.css'


const NullFields = ({mail}) => {
  return (
    <div>
      <CardSubtitle>
                      {!mail.scan &&(
                        <div>&nbsp;</div>
                      )}
                  </CardSubtitle>
                  <CardSubtitle>
                      {!mail.shred &&(
                        <div>&nbsp;</div>
                      )}
                  </CardSubtitle>
                  <CardSubtitle>
                      {!mail.forward &&(
                        <div>&nbsp;</div>
                      )}
                  </CardSubtitle>
                  <CardSubtitle>
                      {!mail.businessRecipient &&(
                        <div>&nbsp;</div>
                      )}
                  </CardSubtitle>
                  <CardSubtitle>
                      {!mail.individualRecipient &&(
                        <div>&nbsp;</div>
                      )}
                  </CardSubtitle>
    </div>
  );
}

export default NullFields;
