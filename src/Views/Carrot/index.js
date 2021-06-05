import React from 'react';
import { connect } from 'react-redux';
import Bg from '../../Assets/images/bg.jpg';
function Carrot(props) {
    const { locale } = props;
    return (
        <div class="section mcb-section" id="join" style={{ paddingTop: 40, paddingBottom: 0, backgroundColor: "#1c112f", backgroundImage: `url(${Bg})`, backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}>
            <div style={{ width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.5)", position: "absolute", top: 0, bottom: 0, left: 0, right: 0, zIndex: 1 }} />
            <div class="section_wrapper mcb-section-inner">
                <div class="wrap mcb-wrap one-second  valign-top clearfix" style={{ padding: "60px 0 0 0" }}>
                    <div class="mcb-wrap-inner">
                        <div class="column mcb-column one column_column">
                            <div class="column_attr">
                                <h2 style={{ color: "#e7d600" }}>{locale.locale.carrot}</h2>
                                <hr class="no_line" style={{ margin: "0 auto 35px" }} />
                                <span class="button_label" style={{ color: "#fff" }}>Will  be used for transaction fees in the Save RalphSwap and It will be used for governance in the decision making process by the community in the ecosystem.</span><br />
                                <span class="button_label" style={{ color: "#fff" }}>The Save Ralph platform and protocol aim to be an autonomous ecosystem that will be governed by Carrot Token holders, who will be tasked with voting on governance proposals, in time Save Ralph and Carrot tokens intends to transition to a fully decentralized structure.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="wrap mcb-wrap one-second  valign-top clearfix">
                    <div class="mcb-wrap-inner">
                        <div class="column mcb-column one column_image ">
                            <div class="image_frame image_item no_link scale-with-grid no_border">
                                <div class="image_wrapper"><img class="scale-with-grid"
                                    src="https://img1.wsimg.com/isteam/ip/fe3a6801-4252-4a60-ac21-2964f3b7f4cd/6-carrot-superhero.png" alt="" width="494"
                                    height="594" /> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )


}
const MapStateToProps = (state) => {
    return { locale: state.locale }
}
export default connect(MapStateToProps)(Carrot);