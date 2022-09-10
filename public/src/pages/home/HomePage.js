import React, { Fragment } from "react";

import MyNavbar from "../../components/navbar/Navbar";
import FadeCarousel from "../../components/homePage/carousol/Carousol";
import Content from "../../components/homePage/content/Content";
import Publikasi from "../../components/homePage/publikasi/Publikasi";
import Foto from "../../components/homePage/foto_Keg/Foto";
import Event from "../../components/homePage/event/Event";
import Footer from "../../components/footer/Footer";

function HomePage () {
    return(
        <Fragment>
            <div className="fixed-top">
            <MyNavbar/>
            </div>
            <div className="pt-5">
                <FadeCarousel/>
                <Content/>
                <Publikasi/>
                <Foto/>
                <Event/>
                <Footer/>
            </div>
        </Fragment>

    )
}
export default HomePage;