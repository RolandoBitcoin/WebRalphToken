import React from 'react';
import Hotbit from '../../Assets/images/hotbit.png';
import PancakeSwap from '../../Assets/images/pancakeswap.png';
import RalphElegant from '../../Assets/images/RalphElegant.png';
import QR from '../../Assets/images/qr.jpg';
function BuyRalph() {
    return (
        <section class="section section-7 position-relative overflow-hidden" style={{ backgroundColor: "#415ADE" }}>
            <div class="section-layer">
                <svg class="layer layer-7" width="1920" height="1080" viewBox="0 0 1920 1080" fill="none">
                    <path class="layer-item-1" d="M1114 1H1814L1234 930H533L1114 1Z" fill="white"
                        fill-opacity="0.1"></path>
                    <path class="layer-item-2" d="M270.929 696H560L320.484 1080H31L270.929 696Z" fill="white"
                        fill-opacity="0.1"></path>
                    <path class="layer-item-3" d="M283.358 623L0 1080H85.6902L367 623H283.358Z" fill="#FFD600">
                    </path>
                    <path class="layer-item-4" d="M1183.69 729L1081 894H1112.05L1214 729H1183.69Z" fill="#FFD600">
                    </path>
                    <path class="layer-item-5" d="M1772.61 412L1358 1081H1483.38L1895 412H1772.61Z" fill="#FFD600">
                    </path>
                    <path class="layer-item-6"
                        d="M636.826 654.669L638.524 655.726L374.304 1080.21L372.607 1079.16L636.826 654.669Z"
                        fill="white"></path>
                    <path class="layer-item-7" opacity="0.4"
                        d="M1413.83 654.669L1415.52 655.726L1151.3 1080.21L1149.61 1079.16L1413.83 654.669Z"
                        fill="white"></path>
                    <path class="layer-item-8" opacity="0.4"
                        d="M1423.83 654.669L1425.52 655.726L1161.3 1080.21L1159.61 1079.16L1423.83 654.669Z"
                        fill="white"></path>
                    <path class="layer-item-9"
                        d="M336.826 632.669L338.524 633.726L227.023 812.859L225.325 811.802C268.869 741.846 293.282 702.625 336.826 632.669Z"
                        fill="white"></path>
                    <path class="layer-item-10"
                        d="M346.826 632.669L348.524 633.726L237.023 812.859L235.325 811.802L346.826 632.669Z"
                        fill="white"></path>
                </svg>
            </div>
            <div class="container-wide">
                <div class="row justify-content-center">
                    <div class="col-xs-8 col-sm-7 col-md-9 col-lg-10 col-xl-9 col-xxl-7 offset-xxl-2 section-content-3"
                        data-animate='{"in":{"class":"fadeInUpBig","delay":".7s","duration":".7s"},"out":{"class":"fadeOutUpBig","delay":"0s","duration":".4s"}}'>
                        <h2 class="text-center d-mobile-landscape-none">Buy Ralph Token</h2>
                        <div class="owl-carousel owl-style-1" data-owl="{&quot;items&quot;:1,&quot;margin&quot;:30,&quot;loop&quot;:false,&quot;mouseDrag&quot;:false,&quot;nav&quot;:true,&quot;autoplay&quot;:false,&quot;responsive&quot;:{&quot;768&quot;:{&quot;items&quot;:2},&quot;992&quot;:{&quot;items&quot;:2}}}">
                            <article class="price">
                                <div class="price-title h3">Hotbit</div>
                                <img src={Hotbit} style={{ width: "100%", height: "100%" }} />
                                <a class="btn btn-outline btn-block btn-round price-btn" href="https://www.hotbit.io/exchange?symbol=RALPH_USDT" target="__blank">Buy Ralph</a>
                            </article>
                            <article class="price">
                                <div class="price-title h3">PancakeSwap</div>
                                <img src={PancakeSwap} style={{ width: "100%", height: "100%" }} />
                                <a class="btn btn-outline btn-block btn-round price-btn" href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x923101173d6a7DEc73435adc465fB800aFa880da" target="__blank">Buy Ralph</a>
                            </article>
                        </div>

                    </div>
                    <div
                        class="col-xs-4 col-sm-3 col-md-2 position-static d-flex align-items-center px-0 section-figure">
                        <img class="section-image" src={RalphElegant} alt="" style={{ width: "20%" }}
                            data-animate='{"in":{"class":"slideInRight","delay":".7s","duration":".7s"},"out":{"class":"slideOutRight","delay":"0s","duration":".4s"}}' />
                    </div>
                </div>
            </div>
        </section>
    )


}
export default BuyRalph;
