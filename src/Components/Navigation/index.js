import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from "react-router-dom";
import { connect } from 'react-redux';
import Home from '../../Views/Home'
import Header from '../Header';
import { appendScript } from '../../Helpers';
import ActionBar from '../Header/ActionBar';
import About from '../../Views/About';
import Carrot from '../../Views/Carrot';
import Footer from '../Header/Footer';
import Formulario from '../../Views/Form';
function Navigation(props) {
    const { socket, usuario } = props;
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
                                    </>
                                } />

                            </Switch>
                            {background && <Route path="/buyToken" children={<Formulario />} />}
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

