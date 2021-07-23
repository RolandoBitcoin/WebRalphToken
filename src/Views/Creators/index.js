import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../Assets/images/09.json'
function Creators(props) {
    const defaultOptions = {
        autoplay: true,
        animationData: animationData,
        speed: 0.2,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid meet',
            backgroundColor: "transparent"
        }
    };
    return (
        <section class="section section-3 position-relative overflow-hidden" style={{ backgroundColor: "#00BCB1" }}>
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
                    <div class="col-xs-8 col-sm-7 col-md-6 section-content"
                        data-animate='{"in":{"class":"fadeInUpBig","delay":".3s"},"out":{"class":"fadeOutUpBig","delay":".3s"}}'>
                        <h1>Ralph for Creators</h1>
                        <p class="lead">Save Ralph tiene como objetivo utilizar parte de los ingresos para subsidiar la primera transacción de menta (transacción de creación de NFT) para los usuarios, además de otras estrategias comerciales para impulsar el crecimiento de la plataforma. El proyecto Save Ralph Token es una solución a las limitaciones que enfrenta el mercado de la propiedad intelectual, como los desafiantes requisitos de licencias y trámites. En cambio, los NFT representan una alternativa de fácil acceso disponible para cualquier persona con solo unos pocos clics.</p>
                        <div class="offset-md group-20 group-md-30">
                            {/* <a
                                    class="btn btn-round btn-lg btn-primary btn-anis" href="#">Buy Ticket</a><a
                                    class="btn btn-outline btn-round btn-lg btn-anis" href="#">Learn More</a>  */}
                        </div>
                    </div>
                    <div
                        class="col-xs-4 col-sm-5 col-md-4 position-static d-flex align-items-center px-0 section-figure">
                        <div className="section-image creators" data-animate='{"in":{"class":"slideInRight","delay":".8s","duration":".7s"},"out":{"class":"slideOutRight","delay":"0s","duration":".4s"}}'>
                            <Lottie options={defaultOptions}
                                class="section-image"
                                width={"100%"}
                                height={"80%"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}
export default Creators;