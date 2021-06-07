import React, { useEffect } from 'react';
import Logo from '../../Assets/images/logo.png';
import Bg from '../../Assets/images/bg.jpg';
import transfers from '../../Assets/images/transfer.png';
import holders from '../../Assets/images/holders.png';
import supply from '../../Assets/images/supply.png';
import { connect } from 'react-redux';
function Home(props) {
    const { locale } = props;
    return (
        <>
            <div class="section mcb-section" id="features"
                style={{ paddingTop: 70, paddingBottom: 50, backgroundImage: "url(content/app2/images/home_app2_sep.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center top" }}>
                <div class="section_wrapper mcb-section-inner">
                    <div class="wrap mcb-wrap one  valign-top clearfix">
                        <div class="mcb-wrap-inner">
                            <div class="column mcb-column one column_column">
                                <div class="column_attr align_center">
                                    <h2>{locale.locale.welcome}</h2>
                                </div>
                            </div>
                            <div class="column mcb-column one column_divider ">
                                <hr class="no_line" style={{ margin: "0 auto 30px" }} />
                            </div>
                        </div>
                    </div>
                    <div class="wrap mcb-wrap one-second  valign-top clearfix" style={{ padding: "30px 2% 0" }}>
                        <div class="mcb-wrap-inner">
                            <div class="column mcb-column two-two column_column">
                                <div class="column_attr">
                                    <h3>{locale.locale.creator}</h3>
                                    <p style={{ textAlign: "justify" }}>{locale.locale.creatorTXT}</p>
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
                                        src={Logo} alt="" width="460"
                                        height="401" /> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="wrap mcb-wrap divider  valign-top clearfix">
                        <div class="mcb-wrap-inner"></div>
                    </div>
                    <div class="wrap mcb-wrap one-second  valign-top clearfix" style={{ padding: "0 4% 0 0" }}>
                        <div class="mcb-wrap-inner">
                            <div class="column mcb-column one column_image ">
                                <div class="image_frame image_item no_link scale-with-grid no_border">
                                    <div class="image_wrapper"><img class="scale-with-grid"
                                        src="https://img1.wsimg.com/isteam/ip/fe3a6801-4252-4a60-ac21-2964f3b7f4cd/20210526_145041_0000.png" alt="" width="460"
                                        height="401" /> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="wrap mcb-wrap one-second  valign-top clearfix" style={{ padding: "30px 2% 0" }}>
                        <div class="mcb-wrap-inner">
                            <div class="column mcb-column two-two column_column">
                                <div class="column_attr">
                                    <h3>{locale.locale.swap}</h3>
                                    <p style={{textAlign:"justify"}}>{locale.locale.swapTXT}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section mcb-section" id="new" style={{ paddingTop: 90, paddingBottom: 50 }}
                data-parallax="3d"><img class="mfn-parallax"
                    src={Bg} alt="parallax background" />
                <div class="section_wrapper mcb-section-inner">
                    <div class="wrap mcb-wrap one  valign-top clearfix">
                        <div class="mcb-wrap-inner">
                            <div class="column mcb-column one column_column">
                                <div class="column_attr align_center">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="wrap mcb-wrap one  valign-top clearfix">
                        <div class="mcb-wrap-inner">
                            <div class="column mcb-column one-third column_column">
                                <div class="column_attr align_center"
                                    style={{ backgroundColor: "#161616", backgroundImage: "url(content/app2/images/home_app2_box_border.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center top", padding: "10px 5% 30px" }}>
                                    <div class="image_frame image_item scale-with-grid alignnone no_border">
                                        <div class="image_wrapper">
                                            <a href="#">
                                                <div class="mask"></div><img class="scale-with-grid"
                                                    src={holders} alt=""
                                                    style={{ width: 290, height: 300 }} />
                                            </a>
                                            <div class="image_links ">
                                                <a href="#" class="link"><i class="icon-link"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <hr class="no_line" style={{ margin: "0 auto 20px" }} />
                                    <h4 style={{ color: "#fff" }}>{locale.locale.holders}</h4>
                                    <h5 style={{ color: "#fff" }}>987654</h5>
                                </div>
                            </div>
                            <div class="column mcb-column one-third column_column">
                                <div class="column_attr align_center"
                                    style={{ backgroundColor: "#161616", backgroundImage: "url(content/app2/images/home_app2_box_border.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center top", padding: "10px 5% 30px" }}>
                                    <div class="image_frame image_item scale-with-grid alignnone no_border">
                                        <div class="image_wrapper">
                                            <a href="#">
                                                <div class="mask"></div><img class="scale-with-grid"
                                                    src={supply} alt=""
                                                    style={{ width: 290, height: 300 }} />
                                            </a>
                                            <div class="image_links ">
                                                <a href="#" class="link"><i class="icon-link"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <hr class="no_line" style={{ margin: "0 auto 20px" }} />
                                    <h4 style={{ color: "#fff" }}>{locale.locale.supply}</h4>
                                    <h5 style={{ color: "#fff" }}>56645465645645</h5>
                                </div>
                            </div>
                            <div class="column mcb-column one-third column_column">
                                <div class="column_attr align_center"
                                    style={{
                                        backgroundColor: "#161616", backgroundImage: "url(content/app2/images/home_app2_box_border.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center top", padding: "10px 5% 30px"
                                    }}>
                                    <div class="image_frame image_item scale-with-grid alignnone no_border">
                                        <div class="image_wrapper">
                                            <a href="#">
                                                <div class="mask"></div><img class="scale-with-grid"
                                                    src={transfers} alt=""
                                                    style={{ width: 290, height: 300 }} />
                                            </a>
                                            <div class="image_links ">
                                                <a href="#" class="link"><i class="icon-link"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <hr class="no_line" style={{ margin: "0 auto 20px" }} />
                                    <h4 style={{ color: "#fff" }}>{locale.locale.transfers}</h4>
                                    <h5 style={{ color: "#fff" }}>987654</h5>
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
export default connect(MapStateToProps)(Home);