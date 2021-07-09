import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { formatMoney } from '../../Helpers';

function Terms(props) {
    const { locale, background } = props;
    let history = useHistory();
    const [costPerUSD] = useState(210000000)
    const [round] = useState(19)
    let back = e => {
        e.stopPropagation();
        history.goBack();
    };
    return (
        <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                background: "rgba(0, 0, 0, 0.70)",
                zIndex: 999
            }}
        >
            <div className="section_wrapper mcb-section-inner animate__animated animate__zoomInDown"
                style={{
                    position: "absolute",
                    background: "#161616",
                    top: 25,
                    left: "8%",
                    right: "8%",
                    padding: 15,
                    border: "2px solid #444"
                }}
            >
                <p style={{ width: 10, height: 10, position: "absolute", top: 0, bottom: 0, right: 0, left: "98%", paddingTop: 3, paddingRight: 10, fontSize: 25, cursor: "pointer" }} onClick={back}>x</p>
                <div className="mcb-section-inner" style={{ padding: 10 }}>
                    <h1 style={{ color: "#e7d600" }}>{locale.locale.formtitle}</h1>
                    <div className="wrap mcb-wrap one  valign-top clearfix">
                        <div className="column mcb-column one-two column_column">
                            <div style={{ paddingRight: 25, wordBreak: "break-all" }}>
                                {locale.locale.formBigText.map((text, index) => {
                                    return <p key={index} dangerouslySetInnerHTML={{ __html: text.replace("{round}", round).replace("{amount}", formatMoney(costPerUSD)) }}></p>
                                })}
                            </div>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <Link
                                className="mfnrs_app2_button"
                                style={{ zIndex: 10, fontSize: 20, borderRadius: 10, whiteSpace: "nowrap", cursor: "pointer", color: "#000", backgroundColor: "rgb(231, 214, 0)", borderColor: "rgb(231, 214, 0)" }}
                                to={{
                                    pathname: `/buyToken`,
                                    state: { background: background }
                                }}
                            >
                                {locale.locale.iagree}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
const MapStateToProps = (state) => {
    return { locale: state.locale, socket: state.socket, location: state.location, prices: state.prices }
}
export default connect(MapStateToProps)(Terms);