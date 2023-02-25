import React from 'react'
import './Navbar.css'
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar2 = () => {
  return (
    <>
    <nav className='main-nav'>
 {/* first part   ...... */}
<div className='logo'>
<img src="../../logo.png" alt="" />
<h1>The Bulls</h1>
</div>
{/* ...... */}

{/* second part... */}
<div className='nav-link'>

    <ul>
        <li>
            <a href="/">Home</a>
        </li>

        <li>
            <a href="/Blogs">Learn</a>
        </li>

        <li> 
            <a href="/Tools">Tools</a>
        </li>

        <li>
            <a href="/About">About</a>
        </li>
    </ul>

{/* hamburger menu */}

<div className='hamburger-menu'> 
<a href="#">
<GiHamburgerMenu/>
 
</a>

</div>

</div>
{/* .... */}




    </nav>
    
    </>
  )
}

export default Navbar2