import React from 'react';
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';
// import InstagramEmbed from 'react-instagram-embed';
import Card from 'react-bootstrap/Card';
import "./bloglandingpage.css"


export default function Bloglandingpage(){

  return(
   <div style={{margin : "80px"} }>
    <CardGroup className='my-2 '>
      <Card className='mx-2'>
      <iframe  height={400} src="https://youtube.com/embed/-N03iQUBNTk?feature=share" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <Card.Body className='Learn_card'>
          <Card.Title> Budget 2023..!!</Card.Title>
          {/* <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text> */}
        </Card.Body>
      </Card>
      <Card className='mx-2'>
      <iframe  height={400} src="https://youtube.com/embed/ski_icC3uOQ?feature=share" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     <Card.Body className='Learn_card'>
          <Card.Title>Government Unlimited Paisa Kyu Print Nhi Karti ?</Card.Title>
          {/* <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text> */}
        </Card.Body>
   </Card>
      <Card className='mx-2' >
      <iframe  height={400} src="https://youtube.com/embed/b9ckDX1XhUU?feature=share" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     <Card.Body className='Learn_card'>
          <Card.Title>Why Adani Group Share Are Falling</Card.Title>
          {/* <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text> */}
        </Card.Body>
</Card>
    </CardGroup>
    <CardGroup className='my-4' >
      <Card className='mx-2'>
      <iframe  height={400} src="https://youtube.com/embed/u1S9pPpeVCM?feature=share" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <Card.Body className='Learn_card'>
          <Card.Title> 5 Tax Saving Schemes...!</Card.Title>
          {/* <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text> */}
        </Card.Body>
      </Card>
      <Card className='mx-2'>
      <iframe  height={400} src="https://youtube.com/embed/D8zfIEBEbMI?feature=share" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     <Card.Body className='Learn_card'>
          <Card.Title>How Rich Avoid Paying Taxes ?</Card.Title>
          {/* <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text> */}
        </Card.Body>
   </Card>
      <Card className='mx-2'>
      <iframe  height={400} src="https://youtube.com/embed/ClTAcaAT2qg?feature=share" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     <Card.Body className='Learn_card'>
          <Card.Title>SIP VS LUMPSUM</Card.Title> 
          {/* <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text> */}
        </Card.Body>
</Card>
    </CardGroup>
    </div>
  )


}
