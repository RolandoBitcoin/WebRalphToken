import React from 'react';
import { connect } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../Assets/images/logo.png';
import { setLocale } from '../../Redux/reducers/Locale';
function ActionBar(props) {
    const { locale, setLocale } = props;
    let location = useLocation();
    return (
        <div id="Header_creative">
            <a href="#!" className="creative-menu-toggle"><i className="icon-menu"></i></a>
            <ul className="social creative-social"></ul>
            <div className="creative-wrapper">
                <div id="Top_bar">
                    <div className="one">
                        <div className="top_bar_left">
                            <div className="logo">
                                <a id="logo" href="#!" title="Save Ralph Token"><img
                                    className="logo-main   scale-with-grid" src={Logo}
                                    alt="Save Ralph Token" /><img className="logo-mobile scale-with-grid"
                                        src={Logo} alt="Save Ralph Token" />
                                </a>
                            </div>
                            <div class="menu_wrapper">
                                <nav id="menu" class="menu-main-menu-container enabled">
                                    <ul id="menu-main-menu" class="menu">
                                        <li class="current-menu-item">
                                            <a href="#Header_wrapper" data-hash="#Header_wrapper"><span>{locale.locale.home}</span></a>
                                        </li>
                                        <li class="">
                                            <a href="#features" data-hash="#features"><span>Save Ralph</span></a>
                                        </li>
                                        <li class="">
                                            <a href="#new" data-hash="#new"><span>Supply & Current Holders</span></a>
                                        </li>
                                        <li class="">
                                            <a href="#how" data-hash="#how"><span>{locale.locale.about}</span></a>
                                        </li>
                                        <li class="">
                                            <a href="#join" data-hash="#join"><span>Carrot</span></a>
                                        </li>
                                        <li class="">
                                            <a href="#carrotPaper" data-hash="#carrotPaper"><span>Carrot Paper</span></a>
                                        </li>
                                        <li class="">
                                            <a href="#LegalDisclaimer" data-hash="#LegalDisclaimer"><span>{locale.locale.LegalDisclaimer}</span></a>
                                        </li>
                                        <li class="last">
                                            <Link
                                                data-hash="#Header_wrapper"
                                                to={{
                                                    pathname: `/buyToken`,
                                                    state: { background: location }
                                                }}
                                            >
                                                <span><span style={{ padding: 0, color: "rgb(231, 214, 0)" }}>{locale.locale.btnby}</span></span>
                                            </Link>
                                        </li>
                                        <li class="">
                                            <a className="animate__animated animate__pulse animate__infinite" href="#risk" data-hash="#join" style={{ color: "red" }}><span>{locale.locale.RiskDisclosure}</span></a>
                                        </li>
                                        <li class="">
                                            <a href="#languaje">
                                                <div class="dropdown">
                                                    <a class="dropbtn">{locale.locale.languaje}</a>
                                                    <div class="dropdown-content">
                                                        <a href="#es" onClick={(e) => { e.preventDefault(); setLocale("es"); }}> {locale.locale.es}</a>
                                                        <a href="#en" onClick={(e) => { e.preventDefault(); setLocale("en"); }}> {locale.locale.en}</a>
                                                        <a href="#ch" onClick={(e) => { e.preventDefault(); setLocale("ch"); }}> {locale.locale.ch}</a>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </nav><a class="responsive-menu-toggle" href="#!"><i class="icon-menu"></i></a>
                            </div>
                        </div>
                        <div className="banner_wrapper"></div>
                    </div>
                </div>
                <div id="Action_bar">
                    <ul className="social"></ul>
                </div>
            </div>
        </div >
    )
}
const MapStateToProps = (state) => {
    return { locale: state.locale }
}
const MapDispacthToProps = dispatch => ({
    setLocale: (in8) => dispatch(setLocale(in8)),
})
export default connect(MapStateToProps, MapDispacthToProps)(ActionBar);