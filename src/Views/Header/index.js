import React from 'react';
import { connect } from 'react-redux';
import LogoSvg from '../../Assets/images/logo-default-253x50.svg'
import { setLocale } from '../../Redux/reducers/Locale';
function Header(props) {
    const { locale, setLocale } = props;
    return (
        <header class="section rd-navbar-wrap">
            <nav class="rd-navbar">
                <div class="navbar-container">
                    <div class="navbar-cell">
                        <div class="navbar-panel">
                            <button class="navbar-switch"
                                data-multi-switch='{"targets":".rd-navbar","scope":".rd-navbar","isolate":"[data-multi-switch]"}'><i class="fas fa-bars"></i></button>
                            <div class="navbar-logo"><a class="navbar-logo-link" href="#home"><img
                                class="navbar-logo-default" src={LogoSvg}
                                alt="Bonobomb Zoo" width="253" height="50" /></a></div>
                        </div>
                    </div>
                    <div class="navbar-cell navbar-sidebar">
                        <ul class="navbar-navigation rd-navbar-nav fullpage-navigation">
                            <li class="navbar-navigation-root-item" data-menuanchor="carrot"><a
                                class="navbar-navigation-root-link" href="#carrot">Carrot</a>
                            </li>
                            {/* <li class="navbar-navigation-root-item active" data-menuanchor="home-3"><a
                                class="navbar-navigation-root-link" href="#home-3">{locale.locale.home}</a>
                            </li> */}
                            <li class="navbar-navigation-root-item" data-menuanchor="creators"><a
                                class="navbar-navigation-root-link" href="#creators">Creatorsx</a>
                            </li>
                            <li class="navbar-navigation-root-item" data-menuanchor="swap"><a
                                class="navbar-navigation-root-link" href="#swap">Swap</a>
                            </li>
                            <li class="navbar-navigation-root-item" data-menuanchor="about"><a
                                class="navbar-navigation-root-link" href="#about">About</a>
                            </li>
                            <li class="navbar-navigation-root-item" data-menuanchor="roadMap"><a
                                class="navbar-navigation-root-link" href="#roadMap">Road Map</a>
                            </li>

                            <li class="navbar-navigation-root-item active" data-menuanchor="home"><a
                                class="navbar-navigation-root-link" href="#home">Home</a>
                            </li>
                        </ul>

                        <p class="rights navbar-rights py-3 d-block d-xl-none"><span>&copy;
                            2021&nbsp;</span><span>Save Ralph Token</span><span>. All rights reserved</span></p>
                    </div>
                    <div class="navbar-cell">
                        <div class="navbar-subpanel">
                            <div class="navbar-subpanel-item">
                                <button class="navbar-button"
                                    data-multi-switch='{"targets":".rd-navbar","scope":".rd-navbar","class":"navbar-info-active","isolate":"[data-multi-switch]"}'>
                                    <i class="fas fa-ellipsis-v"></i>
                                </button>
                                <div class="navbar-info">
                                    <a style={{ fontSize: "1.2rem" }} class="btn btn-round btn-primary btn-anis navbar-action-button animate__animated animate__pulse animate__delay-2s animate__infinite" data-menuanchor="BuyRalph"
                                        href="#BuyRalph">{locale.locale.btnby}</a>
                                    <a class="navbar-info-link" href="#!">
                                        <span class="navbar-info-icon">{locale.locale.languaje}</span>
                                        <span class="navbar-info-text rd-navbar-languaje">
                                            <span onClick={(e) => { e.preventDefault(); setLocale("es"); }}> {locale.locale.es}</span>
                                            <span onClick={(e) => { e.preventDefault(); setLocale("en"); }}> {locale.locale.en}</span>
                                            <span onClick={(e) => { e.preventDefault(); setLocale("ch"); }}> {locale.locale.ch}</span>
                                        </span>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )

}
const MapStateToProps = (state) => {
    return { locale: state.locale }
}
const MapDispacthToProps = dispatch => ({
    setLocale: (in8) => dispatch(setLocale(in8)),
})
export default connect(MapStateToProps, MapDispacthToProps)(Header);
