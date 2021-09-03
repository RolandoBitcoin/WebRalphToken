import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { connect } from 'react-redux';
import Header from '../../Views/Header';
import Home from '../../Views/Home';
import Footer from '../../Views/Footer';
import Carrot from '../../Views/Carrot';
import Creators from '../../Views/Creators';
import Swap from '../../Views/Swap';
import About from '../../Views/About';
import Bsc from '../../Views/BSC';
import RoadMap from '../../Views/RoadMap';
import CarrotPaper from '../..;
import BuyRalph from '../../Views/BuyRalph';
import usdt from '../../Assets/images/usdt.png';
import bnb from '../../Assets/images/bnb.png';
import btc from '../../Assets/images/btc.png';
import eth from '../../Assets/images/eth.png';
import busd from '../../Assets/images/busd.svg';
import walletUsdt from '../../Assets/images/walletusdt.png'
import walletbnb from '../../Assets/images/walletbnb.png'
import walletbtc from '../../Assets/images/walletbtc.png'
import walletbusd from '../../Assets/images/walletbusd.png'
import walleteth from '../../Assets/images/walleteth.png'
import walletRalph from '../../Assets/images/walletRalph.png'
import Announcement from '../../Views/Announcement';

function Navigation(props) {
    let location = useLocation();
    let background = location.state && location.state.background;
    const [walletSelected, setWalletSelected] = useState(walletRalph)
    function HideAndShow(event) {
        var paneldonation = document.getElementById("donation");
        if (paneldonation.classList.contains('donation-close')) {
            window.setTimeout(function () {
                paneldonation.classList.remove('donation-close');
            }, 350);
            return;
        }
        paneldonation.classList.add('donation-close');
    }

    return (
        <div className="page">
            <Switch location={background || location}>
                <Route exact path="/" children={
                    <>
                        <Header />
                        <div className="fullpage">
                            <Home />
                            <Carrot />
                            <Creators />
                            <Swap />
                            <About />
                            <Bsc />
                            <RoadMap />
                            <CarrotPaper />
                            <Announcement />
                            <BuyRalph />
                        </div>
                    </>
                } />
                <Route path="*" >
                    <Redirect to="/" />
                </Route>
            </Switch>
            <Footer />
            <div class="donation donation-close" id="donation">
                <a onClick={(e) => HideAndShow(e)} style={{ position: "relative", left: "92%", color: "#000", right: 0, fontSize: "2rem" }} className="toggle" href="#example-slow">x</a>
                <div className="form-control text-center">
                    <h1 style={{ color: "#000", fontSize: 25 }}>For Donations</h1>
                    <img src={walletSelected} style={{ width: "100%", marginTop: 0 }} />
                    <div className="row" style={{ color: "#000" }}>
                        <div className="col-4" onMouseEnter={() => { setWalletSelected(walletUsdt) }}>
                            <img src={usdt} style={{ width: "60%" }} />
                            <p style={{ marginTop: 0 }}>ERC20</p>
                        </div>
                        <div className="col-4" onMouseEnter={() => { setWalletSelected(walletbusd) }}>
                            <img src={busd} style={{ width: "60%" }} />
                            <p style={{ marginTop: 0 }}>BEP20</p>
                        </div>
                        <div className="col-4">
                            <img src={bnb} style={{ width: "60%" }} onMouseEnter={() => { setWalletSelected(walletbnb) }} />
                            <p style={{ marginTop: 0 }}>BEP20</p>
                        </div>
                    </div>
                    <div className="row" style={{ color: "#000", marginTop: "5%" }}>
                        <div className="col-4">
                            <img src={eth} style={{ width: "60%" }} onMouseEnter={() => { setWalletSelected(walleteth) }} />
                            <p style={{ marginTop: 0 }}>ERC20</p>
                        </div>
                        <div className="col-4">
                            <img src={btc} style={{ width: "60%" }} onMouseEnter={() => { setWalletSelected(walletbtc) }} />
                            <p style={{ marginTop: 0 }}> </p>
                        </div>
                        <div className="col-4">
                            <img src="/logo512.png" style={{ width: "60%" }} onMouseEnter={() => { setWalletSelected(walletRalph) }} />
                            <p style={{ marginTop: 0 }}>BEP20</p>
                        </div>
                    </div>
                </div>
            </div>
            <a onClick={(e) => HideAndShow(e)} class="kc_fab_main_btn toggle text-center" href="#example-slow"><i style={{ fontSize: 20 }} class="fas fa-wallet"></i></a>
        </div>
        // {/* {background &&
        //     <>
        //         <Route path="/buyToken" children={<Formulario />} />
        //         <Route path="/Terms" children={<Terms background={background} />} />
        //     </>
        // } */}
    )

}
const MapStateToProps = (state) => {
    return {}
}
export default Navigation;

