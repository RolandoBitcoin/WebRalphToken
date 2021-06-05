import React from 'react';
import Bg from '../../Assets/images/bg.jpg';
import Logo from '../../Assets/images/logo.png';
import Part1 from '../../Assets/images/home_app2_slider_particles1.png';
import Part2 from '../../Assets/images/home_app2_slider_particles2.png';
import Glow from '../../Assets/images/home_app2_slider_glow.png';
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

function Header(props) {
    const { locale } = props;
    let location = useLocation();
    return (
        <div id="Header_wrapper">
            <header id="Header">
                <div className="mfn-main-slider" id="mfn-rev-slider">
                    <div id="rev_slider_1_2_wrapper" className="rev_slider_wrapper fullwidthbanner-container"
                        style={{ margin: "0px auto", backgroundColor: "transparent", padding: 0, marginTop: 0, marginBottom: 0, height: 780 }}>
                        <div id="rev_slider_1_2" className="rev_slider fullwidthabanner" style={{ display: "none" }} data-version="5.1.6">
                            <ul>
                                <li data-index="rs-1" data-transition="fade" data-slotamount="default"
                                    data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default"
                                    data-easeout="default" data-masterspeed="300" data-rotate="0"
                                    data-saveperformance="off" data-title="Slide" data-param1="" data-param2=""
                                    data-param3="" data-param4="" data-param5="" data-param6="" data-param7=""
                                    data-param8="" data-param9="" data-param10="" data-description="">
                                    <div style={{ height: "100%", width: "100%", backgroundColor: "rgb(0, 0, 0,0.5)", position: "absolute", top: 0, right: 0, left: 0, bottom: 0, zIndex: 8 }} />
                                    <img src={Bg} alt="" width="1920"
                                        height="900" data-bgposition="center center" data-kenburns="on"
                                        data-duration="10000" data-ease="Linear.easeNone" data-scalestart="120"
                                        data-scaleend="100" data-rotatestart="0" data-rotateend="0"
                                        data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax="15"
                                        className="rev-slidebg" data-no-retina />

                                    <div className="tp-caption   tp-resizeme rs-parallaxlevel-8" id="slide-1-layer-6"
                                        data-x="center" data-hoffset="707" data-y="center" data-voffset="-291"
                                        data-width="['none','none','none','none']"
                                        data-height="['none','none','none','none']" data-transform_idle="o:1;"
                                        data-transform_in="opacity:0;s:900;e:Power2.easeInOut;"
                                        data-transform_out="opacity:0;s:300;s:300;" data-start="800"
                                        data-responsive_offset="on" style={{ zIndex: 5 }}>
                                        <img
                                            src={Glow} alt="" width="2057"
                                            height="2057" data-ww="2057px" data-hh="2057px" data-no-retina />
                                    </div>

                                    <div className="tp-caption   tp-resizeme rs-parallaxlevel-6" id="slide-1-layer-7"
                                        data-x="center" data-hoffset="-467" data-y="center" data-voffset="16"
                                        data-width="['none','none','none','none']"
                                        data-height="['none','none','none','none']" data-transform_idle="o:1;"
                                        data-transform_in="opacity:0;s:900;e:Power2.easeInOut;"
                                        data-transform_out="opacity:0;s:300;s:300;" data-start="800"
                                        data-responsive_offset="on" style={{ zIndex: 6 }}>

                                        <img src={Part1} alt=""
                                            width="1478" height="654" data-ww="1478px" data-hh="654px" data-no-retina />
                                    </div>
                                    <div className="tp-caption   tp-resizeme rs-parallaxlevel-11" id="slide-1-layer-8"
                                        data-x="center" data-hoffset="65" data-y="center" data-voffset="-30"
                                        data-width="['none','none','none','none']"
                                        data-height="['none','none','none','none']" data-transform_idle="o:1;"
                                        data-transform_in="opacity:0;s:900;e:Power2.easeInOut;"
                                        data-transform_out="opacity:0;s:300;s:300;" data-start="800"
                                        data-responsive_offset="on" style={{ zIndex: 7 }}>
                                        <img src={Part2} alt=""
                                            width="1293" height="781" data-ww="1293px" data-hh="781px" data-no-retina />
                                    </div>
                                    <div className="tp-caption   tp-resizeme rs-parallaxlevel-1" id="slide-1-layer-1"
                                        data-x="center" data-hoffset="" data-y="center" data-voffset="-60"
                                        data-width="['none','none','none','none']"
                                        data-height="['none','none','none','none']" data-transform_idle="o:1;"
                                        data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.8;sY:0.8;skX:0;skY:0;opacity:0;s:1500;e:Power4.easeOut;"
                                        data-transform_out="opacity:0;s:300;s:300;" data-start="500"
                                        data-responsive_offset="on" style={{ zIndex: 8 }}>
                                        <img src={Logo} alt="" width="422"
                                            height="438" data-ww="422px" data-hh="438px" data-no-retina />
                                    </div>
                                    <div className="tp-caption mfnrs_app2_large_light   tp-resizeme rs-parallaxlevel-2"
                                        id="slide-1-layer-5" data-x="center" data-hoffset="-130" data-y="bottom"
                                        data-voffset="105" data-width="['auto']" data-height="['auto']"
                                        data-transform_idle="o:1;"
                                        data-transform_in="opacity:0;s:900;e:Power2.easeInOut;"
                                        data-transform_out="opacity:0;s:300;s:300;" data-start="800" data-splitin="none"
                                        data-splitout="none" data-responsive_offset="on"
                                        style={{ zIndex: 9, whiteSpace: "nowrap", color: "#e7d600" }}>
                                        Save Ralph Token </div>
                                    <Link
                                        className="tp-caption mfnrs_app2_button tp-resizeme rs-parallaxlevel-2"
                                        id="slide-1-layer-3" data-x="center" data-hoffset="220" data-y="bottom"
                                        data-voffset="100" data-width="['auto']" data-height="['auto']"

                                        style={{ zIndex: 10, fontSize: 20, borderRadius: 20, whiteSpace: "nowrap", cursor: "pointer", color: "#000", backgroundColor: "rgb(231, 214, 0)", borderColor: "rgb(231, 214, 0)" }}
                                        to={{
                                            pathname: `/buyToken`,
                                            state: { background: location }
                                        }}
                                    >
                                        {locale.locale.btnby}
                                    </Link>
                                </li>
                            </ul>
                            <div className="tp-bannertimer tp-bottom" style={{ visibility: "hidden !important" }}></div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )

}
const MapStateToProps = (state) => {
    return { locale: state.locale }
}
export default connect(MapStateToProps)(Header);