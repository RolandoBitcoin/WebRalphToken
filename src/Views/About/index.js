import React from 'react';
import { connect } from 'react-redux';
import token from '../../Assets/images/token.png';
import mission from '../../Assets/images/mission.png';

function About(props) {
    const { locale } = props;
    return (
        <>
            <div class="section mcb-section" id="how" style={{ paddingTop: 90, paddingBottom: 0 }}>
                <div class="section_wrapper mcb-section-inner">
                    <div class="wrap mcb-wrap one-second  valign-top clearfix" style={{ padding: "0 4% 0 0" }}>
                        <div class="mcb-wrap-inner">
                            <div class="column mcb-column one column_image ">
                                <div class="image_frame image_item no_link scale-with-grid no_border">
                                    <div class="image_wrapper"><img class="scale-with-grid"
                                        src={mission} alt="" width="460"
                                        height="401" /> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="wrap mcb-wrap one-second  valign-top clearfix" style={{ padding: "30px 2% 0" }}>
                        <div class="mcb-wrap-inner">
                            <div class="column mcb-column two-two column_column">
                                <div class="column_attr">
                                    <h3>{locale.locale.mission}</h3>
                                    <p className="big" style={{ textAlign: "justify" }}>{locale.locale.missionTXT}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section mcb-section equal-height-wrap  "
                style={{ paddingTop: 0, paddingBottom: 50 }}>
                <div class="section_wrapper mcb-section-inner">
                    <div class="wrap mcb-wrap one-second  valign-top clearfix" style={{ padding: "30px 2% 0" }}>
                        <div class="mcb-wrap-inner">
                            <div class="column mcb-column two-two column_column">
                                <div class="column_attr">
                                    <h3>{locale.locale.saveRabbit}</h3>
                                    <p style={{ textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: locale.locale.saveRabbitTXT }}></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="wrap mcb-wrap one-second  valign-top clearfix" style={{ padding: "0 0 0 4%" }}>
                        <div class="mcb-wrap-inner">
                            <div class="column mcb-column one column_image ">
                                <div
                                    class="image_frame image_item no_link scale-with-grid alignright no_border">
                                    <div class="image_wrapper"><img class="scale-with-grid"
                                        src="https://img1.wsimg.com/isteam/stock/125688/:/cr=t:0%25,l:12.5%25,w:75%25,h:100%25/rs=w:800,h:800,cg:true" alt="" width="460"
                                        height="401" /> </div>
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