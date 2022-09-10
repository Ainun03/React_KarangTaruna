import React, { Fragment } from "react";

import MyNavbar from "../../components/navbar/Navbar";
import Telp from "../../components/telpon/Telp";
import AgendaComp from "../../components/agendaComp/Agenda";
import Footer from "../../components/footer/Footer";

function EventPage() {
    return(
        <Fragment>
            
            <div className="position-relative">
                <div className="fixed-md-top">
                    <Telp/>  
                </div>
                <div className="sticky-top" >
                    <MyNavbar/>
                </div>
                <AgendaComp/>
                <Footer/>
            </div>

        </Fragment>
    )
}
export default EventPage;