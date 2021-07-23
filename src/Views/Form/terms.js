import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import RedSociales from '../../Components/Header/RedSociales';
import { formatMoney } from '../../Helpers';
import Countdown from "react-countdown";
import moment from 'moment-timezone';
function Terms(props) {
    const { locale, background } = props;
    let history = useHistory();
    const [utc] = useState(moment.tz({ year: 2021, month: 6, day: 23, hour: 23 }, "Atlantic/Azores").valueOf())
    const [day] = useState(moment(utc).add(55, 'minutes').valueOf())
    const [costPerUSD] = useState(205000000)
    const [round] = useState(20)
    let back = e => {
        e.stopPropagation();
        history.goBack();
    };
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            window.location.reload();
            return
        } else {
            return <div class="count">
                <h1 id="headline" style={{ color: "#fff" }}>Cuenta Regresiva Nueva Pagina Web</h1>
                <div id="countdown">
                    <ul>
                        <li><span id="days">{days}</span><p style={{ paddingTop: 20 }}>{locale.locale.days}</p></li>
                        <li><span id="hours">{hours}</span><p style={{ paddingTop: 20 }}>{locale.locale.hours}</p></li>
                        <li><span id="minutes">{minutes}</span><p style={{ paddingTop: 20 }}>{locale.locale.minutes}</p></li>
                        <li><span id="seconds">{seconds}</span><p style={{ paddingTop: 20 }}>{locale.locale.seconds}</p></li>
                    </ul>
                </div>
            </div>;
        }
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
                {/* <p style={{ width: 10, height: 10, position: "absolute", top: 0, bottom: 0, right: 0, left: "98%", paddingTop: 3, paddingRight: 10, fontSize: 25, cursor: "pointer" }} onClick={back}>x</p> */}
                <div className="mcb-section-inner" style={{ padding: 10 }}>
                    <h1 style={{ color: "#e7d600" }}>{locale.locale.formtitle}</h1>
                    <div className="wrap mcb-wrap one  valign-top clearfix">
                        <div className="column mcb-column one-two column_column">
                            <Countdown date={utc + (day - utc)} renderer={renderer} />
                        </div>
                        <RedSociales />
                        {/* <div style={{ textAlign: "center" }}>
                            <button
                                className="mfnrs_app2_button"
                                style={{ zIndex: 10, fontSize: 20, borderRadius: 10, whiteSpace: "nowrap", cursor: "pointer", color: "#000", backgroundColor: "rgb(231, 214, 0)", borderColor: "rgb(231, 214, 0)" }}
                                onClick={back}
                            >
                                Cerrar
                            </button>
                        </div> */}
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