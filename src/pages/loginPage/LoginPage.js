import React, { Fragment } from "react";

import MyNavbar from "../../components/navbar/Navbar";
import Telp from "../../components/telpon/Telp";
import Footer from "../../components/footer/Footer";
import Research from "../../components/loginRes/Research";
import FormLogin from "../../components/loginRes/FormLogin";

function LoginPage () {
    return(
        <Fragment>
            <div className="position-relative">
                <div className="fixed-md-top">
                    <Telp/>  
                </div>
                <div className="sticky-top" >
                    <MyNavbar/>
                </div>
                <Research/>
                <FormLogin/>
                <Footer/>
            </div>
        </Fragment>
    )
}
export default LoginPage;