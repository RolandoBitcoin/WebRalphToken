import React from 'react';
import { connect } from 'react-redux';
import Logo from '../../Assets/images/logo.png';
function About(props) {
    const { locale } = props;
    return (
        <>
            <div class="section mcb-section" id="how" style={{ paddingTop: 90, paddingBottom: 0 }}>
                <div class="section_wrapper mcb-section-inner">
                    <div class="wrap mcb-wrap one-second  valign-top clearfix" style={{ padding: "0 0 0 4%" }}>
                        <div class="mcb-wrap-inner">
                            <div class="column mcb-column one column_image ">
                                <div
                                    class="image_frame image_item no_link scale-with-grid alignright no_border">
                                    <div class="image_wrapper"><img class="scale-with-grid"
                                        src={Logo} alt="" width="481"
                                        height="440" /> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="wrap mcb-wrap one-second  valign-top clearfix" style={{ padding: "30px 8% 0 4%" }}>
                        <div class="mcb-wrap-inner">
                            <div class="column mcb-column one column_column">
                                <div class="column_attr">
                                    <h2>{locale.locale.mission}</h2>
                                    <hr class="no_line" style={{ margin: "0 auto 30px" }} />
                                    <div
                                        style={{ background: "url(content/app2/images/home_app2_sep3.png) no-repeat left top", paddingLeft: 35, fontStyle: "italic" }}>
                                        <p class="big">We are determined to build the most secure and trusted Decentralized Ecosystem, our goal and mission is to offer a secure place to trade your valuable assets while remaining confidential and decentralized and to give to our community the tools for decentralized decision making processes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section mcb-section equal-height-wrap  "
                style={{ paddingTop: 0, paddingBottom: 50 }}>
                <div class="section_wrapper mcb-section-inner">
                    <div class="wrap mcb-wrap one-second  valign-middle clearfix"
                        style={{ padding: "30px 0 0 0" }}>
                        <div class="mcb-wrap-inner">
                            <div class="column mcb-column one-second column_column" style={{ width: "100%" }}>
                                <div class="column_attr" style={{ padding: "6px 0 0 0" }}>
                                    <h2>{locale.locale.saveRabbit}</h2>
                                    <hr class="no_line" style={{ margin: "0 auto 30px" }} />
                                    <div
                                        style={{ background: "url(content/app2/images/home_app2_sep3.png) no-repeat left top", paddingLeft: 35, fontStyle: "italic" }}>
                                        <p class="big">
                                            Rabbits are adorable and defenseless animals that overtime are been used as basis for both medical and cosmetic experiments threatening their life and their space. That is why Save Ralph have taken the responsibility and commitment of donating part of our token supply in order to support Non-profit Rabbits Rescue Organizations, this contribution will help to rehabilitate, treat, rescue & adopt rabbits across the country  as well as purchasing supplies and veterinary care for our little fluffy friends.
                                        <br />
                                        Rest assure that when you invest  in our project you are a  few clicks away from helping animals in need.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="column mcb-column one column_divider ">
                                <hr class="no_line" />
                            </div>
                        </div>
                    </div>
                    <div class="wrap mcb-wrap one-second  valign-middle clearfix" style={{ padding: "0 2%" }}>
                        <div class="mcb-wrap-inner">
                            <div class="column mcb-column one column_image ">
                                <div
                                    class="image_frame image_item no_link scale-with-grid alignright no_border">
                                    <div class="image_wrapper"><img class="scale-with-grid"
                                        src="https://img1.wsimg.com/isteam/stock/125688/:/cr=t:0%25,l:12.5%25,w:75%25,h:100%25/rs=w:800,h:800,cg:true" alt="" width="449"
                                        height="327" /> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
const MapStateToProps = (state) => {
    return { locale: state.locale }
}
export default connect(MapStateToProps)(About);