import React from 'react'
import { useState } from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
import './section4.css'
import Alert from 'react-bootstrap/Alert';
// import Button from 'react-bootstrap/Button';
import {FaTelegram,FaInstagram,FaLinkedin,FaYoutube} from 'react-icons/fa';
 


const Section4 = () => {
  // const [show, setShow] = useState(true);
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;
  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };
  const handleClose = () => {
    setState({ ...state, open: false });
  };
  

    const buttons = (

      <React.Fragment>
        <Button
         color="success"
         variant='contained'

          onClick={handleClick({
            vertical: 'top',
            horizontal: 'center',
          })}
        >
          Submit
        </Button>
        </React.Fragment>
        );

  return (
    <div className='Section4'>

    

<div className="head">
  <h1 className='head_main'>Trusted By Users.</h1>
  <p className='head_lines'>Definitely We are leading the conversations on all social media. Here are some of them.</p>
</div>
<div className="card_section">

<div className="cards-wrapper">
        <div className="card">
          <img src="../../card/Akash.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Akash Yadav</h5>
            <p className="card-text">"I trust your judgment completely when it comes to financial matters. You have always steered me in the right direction."</p>
            
          </div>
        </div>
        <div className="card">
          <img src="../../card/Anshuman.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Anshuman</h5>
            <p className="card-text">"Your knowledge of tax laws and regulations is impressive and has saved me a lot of money over the years."</p>
           
          </div>
        </div>
        <div className="card">
          <img src="../../card/Chetan.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Chetan</h5>
            <p className="card-text">"I'm grateful for your guidance and support in achieving my financial goals. Thank you for always being there to help."</p>
           
          </div>
        </div>
        <div className="card">
          <img src="../../card/Riyansh.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Riyansh</h5>
            <p className="card-text">"Your financial advice has been invaluable to me and has helped me make smart decisions with my money."</p>
            
          </div>
        </div>
      </div>
      
</div>


<div className='Footer'>


<div className="contact_form">

        {/* <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me y'all!
          </Button>
        </div>
      </Alert> */}
<div class="contactForm">
            <h3>Contact Us</h3>
            <div class="inputBox">
                <input type="text" placeholder="Name"></input>
            </div>
            <div class="inputBox">
                <input type="text" placeholder="Email"></input>
            </div>
            <div class="inputBox">
                <textarea placeholder="Write something....."></textarea>
            </div>
            <div class="buttons">
                
            {buttons}
<Snackbar
  anchorOrigin={{ vertical, horizontal }}
  open={open}
  onClose={handleClose}
  message="Thankyou for your valuable feedback..!"
  key={vertical + horizontal}
/>
            </div>
            </div>
</div>
<div class="footer-col">
                    <h4>Company</h4>
                    <ul>
                      <li><a href="/">Home</a></li>
                      <li><a href="/blogs">Learn</a></li>
                      <li><a href="/tools">Tools</a></li>
                      <li><a href="/about">About</a></li>
                    </ul>
                    
                  </div>

                    <div class="social-links">
                    <h4>Follow Us</h4>
                      <a href="https://t.me/+mABxijuFbBVjZjE1"><i className="fab-telegram"><FaTelegram></FaTelegram></i></a>
                      <a href="https://youtube.com/@lokeshrajput9999"><i className="fab-youtube"><FaYoutube></FaYoutube></i></a>
                      <a href="https://instagram.com/official_lokeshrajput?igshid=YmMyMTA2M2Y="><i className="fab-instagram"><FaInstagram></FaInstagram></i></a>
                      <a href="https://www.linkedin.com/in/lokesh-singh-9283101bb"><i className="fab-linkdin-in"><FaLinkedin></FaLinkedin></i></a>
                      </div>
</div>




    </div>
  )
}

export default Section4

