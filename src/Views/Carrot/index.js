import React from 'react';
import carrot from '../../Assets/images/carrot.png'
import { connect } from 'react-redux';
function Carrot(props) {
    const { locale } = props;
    return (
        <section class="section section-2 position-relative overflow-hidden" style={{ backgroundColor: "#FFC700" }}>
            <div class="section-layer">
                <svg class="layer layer-2" width="1721" height="1080" viewBox="0 0 1721 1080" fill="none">
                    <path class="layer-item-1" d="M575 0H1275L695 929H-6L575 0Z" fill="white" fill-opacity="0.1">
                    </path>
                    <path class="layer-item-2" d="M709.929 695H999L759.484 1079H470L709.929 695Z" fill="white"
                        fill-opacity="0.1"></path>
                    <path class="layer-item-3" d="M486.5 412L71.5 1080.5H197L609 412H486.5Z" fill="#854424"></path>
                    <path class="layer-item-4" d="M808.079 611L517 1080H605.025L894 611H808.079Z" fill="#854424">
                    </path>
                    <path class="layer-item-5" d="M229.512 360L133 515H162.186L258 360H229.512Z" fill="#854424">
                    </path>
                    <path class="layer-item-6"
                        d="M426.826 722.669L428.524 723.726C384.98 793.682 360.567 832.903 317.023 902.859L315.325 901.802L426.826 722.669Z"
                        fill="white"></path>
                    <path class="layer-item-7"
                        d="M166.826 592.669L168.524 593.726L-95.6953 1018.21L-97.3932 1017.16C5.79077 851.383 63.6419 758.441 166.826 592.669Z"
                        fill="white"></path>
                    <path class="layer-item-8" opacity="0.4"
                        d="M206.826 542.669L208.524 543.726L-55.6953 968.212L-57.3932 967.155C45.7908 801.383 103.642 708.441 206.826 542.669Z"
                        fill="white"></path>
                    <path class="layer-item-9" opacity="0.4"
                        d="M216.826 542.669L218.524 543.726C115.34 709.498 57.4887 802.44 -45.6953 968.212L-47.3932 967.155L216.826 542.669Z"
                        fill="white"></path>
                    <path class="layer-item-10"
                        d="M746.826 192.669L748.524 193.726L637.023 372.859L635.325 371.802C678.869 301.846 703.282 262.625 746.826 192.669Z"
                        fill="white"></path>
                    <path class="layer-item-11"
                        d="M756.826 192.669L758.524 193.726L647.023 372.859L645.325 371.802C688.869 301.846 713.282 262.625 756.826 192.669Z"
                        fill="white"></path>
                    <path class="layer-item-12"
                        d="M271.826 310.669L273.524 311.726L114.992 566.418L113.294 565.361C175.205 465.898 209.916 410.132 271.826 310.669Z"
                        fill="white"></path>
                </svg>
            </div>
            <div class="container-wide">
                <div class="row row-30 section-row">
                    <div class="col-xs-8 col-sm-7 col-md-6 section-content"
                        data-animate='{"in":{"class":"fadeInUpBig","delay":".3s"},"out":{"class":"fadeOutUpBig","delay":".3s"}}'>
                        <h1>{locale.locale.carrot}</h1>
                        <p class="lead" dangerouslySetInnerHTML={{ __html: locale.locale.carrotTXT }}></p>
                        {/* <div class="offset-md group-20 group-md-30"><a
                                    class="btn btn-round btn-lg btn-primary btn-anis" href="#">Buy Ticket</a><a
                                    class="btn btn-outline btn-round btn-lg btn-anis" href="#">Learn More</a></div>  */}
                    </div>
                    <div
                        class="col-xs-4 col-sm-5 col-md-6 position-static d-flex justify-content-center px-0 section-figure">
                        <img class="section-image" src={carrot} style={{ width: "25%" }} alt=""
                            width="719" height="981"
                            data-animate='{"in":{"class":"slideInUp","delay":".8s","duration":".7s"},"out":{"class":"slideOutDown","delay":"0s","duration":".4s"}}' />
                    </div>
                </div>
            </div>
        </section>
    )

}

const MapStateToProps = (state) => {
    return { locale: state.locale }
}
export default connect(MapStateToProps)(Carrot);