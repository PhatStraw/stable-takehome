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
import { format } from 'date-fns'
import NullFields from './nullFields'
import '../styles/card.css'

const Card = ({ data }) => {
  console.log(data)
  return (
    <div className="cardContainer">
      {data &&
        data.map((mail) => (
          <div
            style={{
              width: '31%',
              margin: '0 0 30px 0',
              border: '1px solid #d3d3d3',
              borderRadius: '5px',
            }}
          >
            <ReactCard className="cardStyles">
              <div>
                <div
                  style={{
                    width: '100%',
                    height: '115px',
                    borderBottom: '1px solid #d3d3d3',
                  }}
                >
                  <img
                    style={{
                      width: '100%',
                      maxWidth: '90%',
                      maxHeight: '115px',
                      margin: 'auto',
                      display: 'block',
                    }}
                    src={mail.imageUrl}
                    alt="Card image cap"
                  />
                </div>

                <CardBody style={{ padding: '.3rem' }}>
                  <CardTitle tag="h5">{mail.from || ' '}</CardTitle>
                  <CardSubtitle tag="div" className="subTitle">
                    {mail.businessRecipient && (
                      <div
                        style={{
                          width: '100%',
                          height: '30px',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <img
                          className="cardIcon"
                          src="https://s3-us-west-2.amazonaws.com/usestable.com-assets/icons/company.svg"
                        />
                        {mail.businessRecipient}
                      </div>
                    )}
                  </CardSubtitle>
                  <CardSubtitle tag="div" className="subTitle">
                    {mail.individualRecipient && (
                      <div
                        style={{
                          width: '100%',
                          height: '30px',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <img
                          className="cardIcon"
                          src="https://s3-us-west-2.amazonaws.com/usestable.com-assets/icons/recipient.svg"
                        />
                        {mail.individualRecipient}
                      </div>
                    )}
                  </CardSubtitle>
                  <CardSubtitle tag="div" className="subTitle">
                    {mail.forward &&
                      (mail.forward.status === 'completed' ? (
                        <div
                          style={{
                            width: '100%',
                            height: '30px',
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          <img
                            className="cardIcon"
                            src="https://s3-us-west-2.amazonaws.com/usestable.com-assets/icons/forward.svg"
                          />
                          forward
                        </div>
                      ) : (
                        <div
                          style={{
                            width: '100%',
                            height: '30px',
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          <img
                            className="cardIcon"
                            src="https://s3-us-west-2.amazonaws.com/usestable.com-assets/icons/processing.svg"
                          />
                          forward {mail.forward.status}
                        </div>
                      ))}
                  </CardSubtitle>
                  <CardSubtitle tag="div" className="subTitle">
                    {mail.scan &&
                      (mail.scan.status === 'completed' ? (
                        <div
                          style={{
                            width: '100%',
                            height: '30px',
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          <img
                            className="cardIcon"
                            src="https://s3-us-west-2.amazonaws.com/usestable.com-assets/icons/scan.svg"
                          />
                          Scanned
                        </div>
                      ) : (
                        <div
                          style={{
                            width: '100%',
                            height: '30px',
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          <img
                            className="cardIcon"
                            src="https://s3-us-west-2.amazonaws.com/usestable.com-assets/icons/processing.svg"
                          />
                          Scan {mail.scan.status}
                        </div>
                      ))}
                  </CardSubtitle>
                  <CardSubtitle tag="div" className="subTitle">
                    {mail.shred &&
                      (mail.shred.status === 'completed' ? (
                        <div
                          style={{
                            width: '100%',
                            height: '30px',
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          <img
                            className="cardIcon"
                            src="https://s3-us-west-2.amazonaws.com/usestable.com-assets/icons/shred.svg"
                          />
                          Shredded
                        </div>
                      ) : (
                        <div
                          style={{
                            width: '100%',
                            height: '30px',
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          <img
                            className="cardIcon"
                            src="https://s3-us-west-2.amazonaws.com/usestable.com-assets/icons/processing.svg"
                          />
                          Shred {mail.shred.status}
                        </div>
                      ))}
                  </CardSubtitle>
                  <NullFields mail={mail} />
                </CardBody>
              </div>
              <CardFooter className="footer">
                <p
                  style={{
                    padding: 'auto',
                    textAlign: 'end',
                    width: '95%',
                  }}
                >
                  {format(new Date(mail.timestamp), 'MMMM d, yyyy')}
                </p>
              </CardFooter>
            </ReactCard>
          </div>
        ))}
    </div>
  )
}

export default Card
