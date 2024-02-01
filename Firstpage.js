import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'

import Logo from '../images/logos.png';
import { useEffect } from 'react';
import { setOwnerId } from '../slices/shopOwnerLoginSlice';
import { useDispatch,useSelector } from 'react-redux';
import axios from 'axios';
import "../FrontPage/firstpage.css"
export default function Home(){
  
    return(
        <>  
        <div className='bg'>
          <div className='backgroundhmge'>
            <Navbar >
            <Navbar.Brand href="#"><img src={Logo} alt='logo' width={90} id="logo"/></Navbar.Brand>
            </Navbar>
            <div className='buttonone'>
            <NavDropdown title="Sign In" id="nav-dropdown">
          <NavDropdown.Item onClick={()=>navigate("/ShopOwnerLogin")}>shop owner</NavDropdown.Item>
          <NavDropdown.Item onClick={()=>navigate("/superadminlogin")}>admin</NavDropdown.Item>
        </NavDropdown>
            </div>
            <div className='buttonsecond'>
          <NavDropdown.Item onClick={()=>navigate("/")}>About</NavDropdown.Item>
            </div>
                   
           
            <div className='quotes'>
              <h1 className='quote'>He who is quick</h1>
              <h1 className='quote'>To borrow</h1>
              <h1 className='quote'>is slow to pay</h1> 
                <div className='letter'>
                   <h6>Not registered yet? click here</h6>
                </div>
                <div className='buttonthird'>
                  <button className='btn btn-primary' onClick={()=>navigate("/shopownerregister")}>Get started</button>
                </div>
            </div>
           
            
        </div>
    </div>
      </>
    )
}