import React, { Fragment } from "react";

import MyNavbar from "../../components/navbar/Navbar";
import Telp from "../../components/telpon/Telp";
import Footer from "../../components/footer/Footer";
import ContentKontak from "../../components/kontakComp/ContentKontak";
import KontakComp from "../../components/kontakComp/KontakComp";
function KontakPage() {
    return(
        <Fragment>
             <div className="position-relative">
                <div className="fixed-md-top">
                    <Telp/>  
                </div>
                <div className="sticky-top" >
                    <MyNavbar/>
                </div>
                <ContentKontak/>
                <KontakComp/>
                <Footer/>
            </div>

        </Fragment>
    )
}
export default KontakPage;