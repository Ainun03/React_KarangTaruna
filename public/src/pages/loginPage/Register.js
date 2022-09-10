import React, { Fragment } from "react";

import MyNavbar from "../../components/navbar/Navbar";
import Telp from "../../components/telpon/Telp";
import Footer from "../../components/footer/Footer";
import RegisterResearch from "../../components/loginRes/RegisterResec";
import Register from "../../components/loginRes/FormRegister";

function RegisterPage () {
    return(
        <Fragment>
            <div className="position-relative">
                <div className="fixed-md-top">
                    <Telp/>  
                </div>
                <div className="sticky-top" >
                    <MyNavbar/>
                </div>
                <RegisterResearch/>
                <Register/>
                <Footer/>
            </div>
        </Fragment>
    )
}
export default RegisterPage;