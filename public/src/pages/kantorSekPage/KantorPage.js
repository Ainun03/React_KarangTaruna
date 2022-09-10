import React, { Fragment } from "react";

import MyNavbar from "../../components/navbar/Navbar";
import Telp from "../../components/telpon/Telp";
import Footer from "../../components/footer/Footer";
import ContentKantor from "../../components/kantorSek/ContenKantor";
import KantorComp from "../../components/kantorSek/KantorComp";

function KantorPage() {
    return(
        <Fragment>
             <div className="position-relative">
                <div className="fixed-md-top">
                    <Telp/>  
                </div>
                <div className="sticky-top" >
                    <MyNavbar/>
                </div>
                <ContentKantor/>
                <KantorComp/>
                <Footer/>
            </div>
        </Fragment>
    )
}
export default KantorPage;