import React, { Fragment,useState,useEffect } from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import {BsFillTelephoneFill} from 'react-icons/bs'
import {HiMail} from 'react-icons/hi'

function Telp () {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)
    const [navbar, setNavbar] = useState(true)
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true);
        }
    };
    useEffect(() => {
        showButton();
    }, []);
    
    window.addEventListener('resize',showButton);

    const changeBg = () =>{
       if (window.scrollY >= 80){
           setNavbar(true)
       }else{
           setNavbar(false)
       }
    }
    window.addEventListener('scroll',changeBg);

    return(
        <Fragment>
            <div className="bg-primary" variant="dark" >
                <Container>
                    <Nav className="d-flex flex-row text-warning">
                        <Nav.Item style={{marginTop:"3px"}} className="pt-1"> 
                            <BsFillTelephoneFill/>
                        </Nav.Item>
                        <Nav.Link className="px-2 text-dark" href="/">08210400</Nav.Link>
                         <p className="pt-1 mx-3" style={{marginTop:"3px"}}>|</p> 
                         <Nav.Item style={{marginTop:"3px"}} className="pt-1 ms-1"> 
                            <HiMail size={20}/>
                        </Nav.Item>
                        <Nav.Link className="px-2 text-dark" href="/">karang@ymail.com</Nav.Link>             
                    </Nav> 
                </Container>
            </div>   
                    
        </Fragment>
    )

}
export default Telp;