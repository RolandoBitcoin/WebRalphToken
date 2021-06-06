import React from 'react';
import { connect } from 'react-redux';

function VideoFrame(props) {
    const { locale } = props;
    return (
        <div class="section mcb-section" id="video" style={{ paddingTop: 90, paddingBottom: 0 }}>
            <div class="section_wrapper mcb-section-inner">
                <div class="wrap mcb-wrap one  valign-top clearfix">
                    <div class="mcb-wrap-inner">
                        <div class="column mcb-column one column_column">
                            <div class="column_attr align_center">
                                <h2>{locale.locale.titleVideo}</h2>
                                <iframe style={{ width: "100%", height: 600 }} src={`https://www.youtube.com/embed/${locale.locale.urlVideo}?controls=0`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}
const MapStateToProps = (state) => {
    return { locale: state.locale }
}
export default connect(MapStateToProps)(VideoFrame);