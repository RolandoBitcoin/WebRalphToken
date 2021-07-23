import React from 'react';
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { connect } from 'react-redux';
import Home from '../../Views/Home'
import Header from '../Header';
import ActionBar from '../Header/ActionBar';
import About from '../../Views/About';
import Carrot from '../../Views/Carrot';
import Footer from '../Header/Footer';
import Formulario from '../../Views/Form';
import VideoFrame from '../../Views/Video';
import RiskDisclosure from '../../Views/RiskDisclosure';
import LegalDisclaimer from '../../Views/LegalDisclaimer';
import Terms from '../../Views/Form/terms';
import WhitePaper from '../../Views/WhitePaper';
function Navigation(props) {
    let location = useLocation();
    let background = location.state && location.state.background;
    return (
        <>
            <ActionBar />
            <div id="Wrapper">
                <Header />
                <div id="Content">
                    <div className="content_wrapper clearfix">
                        <div className="sections_group">
                            <div className="entry-content" itemprop="mainContentOfPage"></div>
                            <Switch location={background || location}>
                                <Route exact path="/" children={
                                    <>
                                        <Home />
                                        <About />
                                        <Carrot />
                                        <VideoFrame />
                                        {/* <WhitePaper /> */}
                                        <RiskDisclosure />
                                        <LegalDisclaimer />
                                    </>
                                } />
                                <Route path="*" >
                                    <Redirect to="/" />
                                </Route>
                            </Switch>
                            {background &&
                                <>
                                    {/* <Route path="/buyToken" children={<Formulario />} /> */}
                                    <Route path="/Thanks" children={<Terms background={background} />} />
                                </>
                            }

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )

}
const MapStateToProps = (state) => {
    return {}
}
export default connect(MapStateToProps)(Navigation);

