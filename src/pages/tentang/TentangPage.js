import React, { Fragment } from "react";

import MyNavbar from "../../components/navbar/Navbar";
import Telp from "../../components/telpon/Telp";
import Footer from "../../components/footer/Footer";
import TentangBread from "../../components/tentang/ContentBread/ContenTentang";

function TentangPage(){
    return(
        <Fragment>
            <div className="position-relative">
                <div className="fixed-md-top">
                    <Telp/>  
                </div>
                <div className="sticky-top" >
                    <MyNavbar/>
                </div>
                <TentangBread/>
                <Footer/>
            </div>
              
        </Fragment>
    )
}
export default TentangPage;