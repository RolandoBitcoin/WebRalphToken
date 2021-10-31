import React, { useEffect, useState } from 'react';
import ing from '../../Assets/images/ing.png'
import Lottie from 'react-lottie';
import animationData from '../../Assets/images/01.json'
import medium from '../../Assets/images/medium.png';
import carrot_preventa from '../../Assets/images/carrot_preventa.png';
import { connect } from 'react-redux';
import axios from 'axios';
import AnimatedNumber from "animated-number-react";
function Home1(props) {
    const { locale } = props;
    const [price, setPrice] = useState(0)
    const defaultOptions = {
        autoplay: true,
        animationData: animationData,
        speed: 0.2,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid meet',
            backgroundColor: "transparent",
            className: "tested"
        }
    };

    function UpdatePrice() {
        axios.get("https://api.pancakeswap.info/api/v2/tokens/0x923101173d6a7dec73435adc465fb800afa880da").then((r) => { setPrice(parseFloat(r.data.data.price).toFixed(12));})
    }
    const formatValue = (value) => value.toFixed(12);
    useEffect(() => {
        UpdatePrice()
        setInterval(() => {
            UpdatePrice()
        }, 30000);
    }, [])
    return (
        <section class="section section-1 position-relative overflow-hidden" style={{ backgroundColor: "#72B805" }}>
            <div class="section-layer">
                <svg class="layer layer-1" width="1487" height="1032" viewBox="0 0 1487 1032" fill="none">
                    <path class="layer-item-1" d="M581 0H1281L701 929H0L581 0Z" fill="white" fill-opacity="0.1">
                    </path>
                    <path class="layer-item-2" d="M685.929 648H975L735.484 1032H446L685.929 648Z" fill="white"
                        fill-opacity="0.1"></path>
                    <path class="layer-item-3" d="M1364.5 0L949.5 668.5H1075L1487 0H1364.5Z" fill="#FFD600"></path>
                    <path class="layer-item-4" d="M720.763 386L432 852H519.325L806 386H720.763Z" fill="#FFD600">
                    </path>
                    <path class="layer-item-5" d="M1184.5 124L1071 308H1105.32L1218 124H1184.5Z" fill="#FFD600">
                    </path>
                    <path class="layer-item-6"
                        d="M713.826 552.669L715.524 553.726L604.023 732.859L602.325 731.802L713.826 552.669Z"
                        fill="white"></path>
                    <path class="layer-item-7"
                        d="M883.826 552.669L885.524 553.726L621.304 978.212L619.607 977.155C722.791 811.383 780.642 718.441 883.826 552.669Z"
                        fill="white"></path>
                    <path class="layer-item-8" opacity="0.4"
                        d="M923.826 502.669L925.524 503.726C822.34 669.498 764.488 762.44 661.304 928.212L659.607 927.155L923.826 502.669Z"
                        fill="white"></path>
                    <path class="layer-item-9" opacity="0.4"
                        d="M933.826 502.669L935.524 503.726C832.34 669.498 774.488 762.44 671.304 928.212L669.607 927.155L933.826 502.669Z"
                        fill="white"></path>
                    <path class="layer-item-10"
                        d="M1413.83 132.669L1415.52 133.726L1304.02 312.859L1302.33 311.802C1345.87 241.846 1370.28 202.625 1413.83 132.669Z"
                        fill="white"></path>
                    <path class="layer-item-11"
                        d="M1423.83 132.669L1425.52 133.726C1381.98 203.682 1357.57 242.903 1314.02 312.859L1312.33 311.802L1423.83 132.669Z"
                        fill="white"></path>
                    <path class="layer-item-12"
                        d="M1233.83 69.6693L1235.52 70.7261L1076.99 325.418L1075.29 324.361C1137.2 224.898 1171.92 169.132 1233.83 69.6693Z"
                        fill="white"></path>
                </svg>
            </div>
            <div class="container-wide">
                <div class="row row-30 section-row">
                    <div class="col-xs-10 col-sm-7 col-md-7 section-content"
                        data-animate='{"in":{"class":"fadeInUpBig","delay":".3s"},"out":{"class":"fadeOutUpBig","delay":".3s"}}'>
                        <p style="display:none;" className="lead">
                            Ralph Price: <AnimatedNumber
                                value={price}
                                formatValue={formatValue}
                            /> $</p>

                        <a href="https://carrotgov.com" target="_blank"><img src={carrot_preventa} style={{ width: "200px" }} /></a>

                        <h1 style={{ fontFamily: '"Nunito", cursive', fontWeight: 900, textShadow: "-11px 1px 12px black" }}> Welcome to Save Ralph Ecosystem</h1>
                        <div>

                            <a class="btn btnSocial btn-outline btn-round btn-lg btn-anis" style={{ backgroundColor: "rgb(34, 123, 196)" }} href={locale.locale.in8 == "Español" ? "https://t.me/Saveralphtoken" : "https://t.me/ralphtoken"} target="__blank"><i
                                class="fab fa-telegram-plane" style={{ fontSize: 25, padding: "10px" }}></i></a>
                            <a class="btn btnSocial btn-outline btn-round btn-lg btn-anis" style={{ backgroundImage: `url(${ing})`, backgroundPosition: "center", backgroundSize: "100px,cover" }} href="https://www.instagram.com/saveralphtoken/" target="__blank">
                                <i style={{ fontSize: 25, padding: "10px" }} class="fab fa-instagram"></i></a>
                            <a class="btn btnSocial btn-outline btn-round btn-lg btn-anis" href="https://www.reddit.com/user/saveralphtoken/" target="__blank" style={{ backgroundColor: "rgb(255, 69, 0)" }}><i
                                class="fab fa-reddit-alien" style={{ fontSize: 25, padding: "10px" }}></i></a>
                            <a class="btn btnSocial btn-outline btn-round btn-lg btn-anis" href="https://twitter.com/RalphToken" target="__blank" style={{ backgroundColor: "rgb(56, 168, 224)" }}><i
                                className="fab fa-twitter" style={{ fontSize: 25, padding: "10px" }}></i></a>
                            <a class="btn btnSocial btn-outline btn-round btn-lg btn-anis" href="https://saveralphtoken.medium.com/" target="__blank" style={{ backgroundColor: "rgb(0, 0, 0)", margin: "0px 2px 0px 3px !important", top: " 14px" }}>
                                <img src={medium} style={{ width: "50px", height: "50px", padding: "10px" }} />
                                {/* <i className="fab fa-medium-m" style={{ fontSize: 25, padding: "10px" }}></i> */}
                            </a>
                            <a class="btn btnSocial btn-outline btn-round btn-lg btn-anis" href="https://discord.gg/fyvMRU4j5n" target="__blank" style={{ backgroundColor: "rgb(114, 137, 218)" }}><i
                                className="fab fa-discord" style={{ fontSize: 25, padding: "10px" }}></i></a>

                        </div>
                    </div>
                    <div class="col-xs-4 col-sm-5 col-md-4 position-static d-flex align-items-center px-0 section-figure">
                        <div className="section-image lottie" data-animate='{"in":{"class":"slideInRight","delay":".8s","duration":".7s"},"out":{"class":"slideOutRight","delay":"0s","duration":".4s"}}'>

                            <Lottie options={defaultOptions}
                                class="section-image"
                                width={"100%"}
                                height={"80%"}
                            />
                        </div>
                        {/* <img class="section-image" style={{ width: "30%" }} src={Rabbit} alt=""
                            width="1049" height="897"
                            data-animate='{"in":{"class":"slideInRight","delay":".8s","duration":".7s"},"out":{"class":"slideOutRight","delay":"0s","duration":".4s"}}' /> */}
                    </div>
                </div>
            </div>
        </section>
    )

}
const MapStateToProps = (state) => {
    return { locale: state.locale }
}
export default connect(MapStateToProps)(Home1);
