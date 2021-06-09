import React from 'react';
import { connect } from 'react-redux';
import divulgacion from '../../Assets/images/divulgacion.png'
function RiskDisclosure(props) {
    const { locale } = props;
    return (<div class="section mcb-section" id="risk" style={{ paddingTop: 90, paddingBottom: 0 }}>
        <div class="section_wrapper mcb-section-inner">
            <div class="wrap mcb-wrap one-second  valign-top clearfix" style={{ padding: "0 4% 0 0" }}>
                <div class="mcb-wrap-inner">
                    <div class="column mcb-column one column_image ">
                        <div class="image_frame image_item no_link scale-with-grid no_border">
                            <div class="image_wrapper"><img class="scale-with-grid"
                                src={divulgacion} alt="" width="460"
                                height="401" /> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="wrap mcb-wrap one-second  valign-top clearfix" style={{ padding: "30px 2% 0" }}>
                <div class="mcb-wrap-inner">
                    <div class="column mcb-column two-two column_column">
                        <div class="column_attr">
                            <h3>{locale.locale.RiskDisclosure}</h3>
                            <p style={{ textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: locale.locale.RiskDisclosureTXT }}></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)

}
const MapStateToProps = (state) => {
    return { locale: state.locale }
}
export default connect(MapStateToProps)(RiskDisclosure);