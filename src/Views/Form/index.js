import React, { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router';
import { CostPerCripto, CriptoMax, CriptoMin, formatMoney, Validation } from '../../Helpers';
import detectEthereumProvider from '@metamask/detect-provider';
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import MetaMask from '../../Assets/images/metamask.png';
import WC from '../../Assets/images/walletconnect.png';
import { connect } from 'react-redux';
import swal from 'sweetalert2';
import ErrorImg from '../../Assets/images/error.gif';
import SuccessImg from '../../Assets/images/success.gif';
import Loading from '../../Assets/images/loading.gif';
import Countdown from "react-countdown";
import moment from 'moment-timezone';
import RedSociales from '../../Components/Header/RedSociales';
function Formulario(props) {
    const { locale, socket, location, prices } = props;
    let history = useHistory();
    const [costPerUSD] = useState(240000000)
    const [round] = useState(13)
    const [metamask, setMetamask] = useState(false)
    const [FormType, setFormType] = useState("bsc")
    const [cuenta, setCuenta] = useState(false)
    const [utc] = useState(moment.tz({ year: 2021, month: 5, day: 21, hour: 18 }, "Atlantic/Azores").valueOf())
    const [day] = useState(moment(utc).add(3, 'days').valueOf())
    const [data, setData] = useState({
        amount: 0,
        email: "",
        referal: "",
        comment: "",
        round: round,
        cost: costPerUSD,
        ip: { ip: location.IPv4, country: location.country_name }
    })
    const [dataCoin, setDataCoin] = useState({
        symbol: prices[0]?.symbol,
        costSymbol: prices[0]?.amount,
        amount: 0,
        cripto: 0,
        referal: "",
        comment: "",
        email: "",
        round: round,
        cost: costPerUSD,
        ip: { ip: location.IPv4, country: location.country_name }
    })
    let back = e => {
        e.stopPropagation();
        history.go(-2);
    };
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <span>You are good to go!</span>;
        } else {
            return <div class="count">
                <h1 id="headline" style={{ color: "#fff" }}>{locale.locale.countDownTXT} # {round}:</h1>
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

    useEffect(() => {
        async function MetamaskProvider() {

            const provider = await detectEthereumProvider();
            if (provider) {
                if (!provider.isMetaMask) {
                    setMetamask(false)
                    return;
                }
                setMetamask(true)
                if (provider.selectedAddress) {
                    setCuenta({ cuenta: provider.selectedAddress, type: "MetaMask" });
                }


            } else {
                console.log('Please install MetaMask!');
            }
        }
        // if (!prices) {
        MetamaskProvider()
        // } else {
        //     setDataCoin({ ...dataCoin, amount: 0 })
        // }
        // openCity()
        return () => {
            setCuenta(false)
        }
    }, [])
    if (!prices) { return <Redirect to="/" /> }
    function openCity(evt, cityName) {
        var i, x, tablinks;
        x = document.getElementsByClassName("city");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < x.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" activeTab", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " activeTab";
    }



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
            <div className="section_wrapper mcb-section-inner"
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
                <p id="closeBtn" style={{ width: 10, height: 10, position: "absolute", top: 0, bottom: 0, right: 0, left: "98%", paddingTop: 3, paddingRight: 10, fontSize: 25, cursor: "pointer" }} onClick={back}>x</p>
                <div className="mcb-section-inner" style={{ padding: 10 }}>
                    <h1 style={{ color: "#e7d600" }}>{locale.locale.formtitle}</h1>
                    <div className="wrap mcb-wrap one  valign-top clearfix">
                        <div className="column mcb-column one-two column_column" style={{ marginBottom: 0 }}>
                            {/* <div style={{ paddingRight: 25 }}>
                                {locale.locale.formBigText.map((text, index) => {
                                    return <p key={index} dangerouslySetInnerHTML={{ __html: text.replace("{round}", round).replace("{amount}", formatMoney(costPerUSD)) }}></p>
                                })}
                            </div> */}
                            <Countdown date={utc + (day - utc)} renderer={renderer} />
                        </div>
                        <div class="column mcb-column one-two column_column" style={{ padding: 0, width: "100%" }}>
                            <div className="shadowForm">
                                <p>(*) {locale.locale.required}</p>
                                <div class="w3-bar w3-black">
                                    <a style={{ cursor: "pointer" }} class="w3-bar-item tablink activeTab" onClick={(e) => { openCity(e, 'bsc'); setFormType("bsc") }}>Binance p2p</a>
                                    <a style={{ cursor: "pointer" }} class="w3-bar-item tablink" onClick={(e) => { openCity(e, 'coinpay'); setFormType("coinpay") }}>CoinPayments</a>
                                </div>

                                <div id="bsc" class="city" style={{ minWidth: 800, minHeight: 800 }}>
                                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeIMMFZ7ZRg3BnO2anDbkFOk9Qrod0pdrD1yLExxQA2gO-7GQ/viewform" style={{ width: "100%", height: 800 }} />
                                </div>


                                <div id="coinpay" class="city" style={{ display: "none" }}>
                                    <div className="row flex-column" style={{ flexWrap: "nowrap", margin: 0, }}>
                                        <div class="col-md-12">
                                            <label for="buyRalph">{locale.locale.step1Crypto} (*)</label>
                                            <select className="form-control" onChange={(e) => { setDataCoin({ ...dataCoin, symbol: prices[e.target.value].symbol, costSymbol: prices[e.target.value].amount, amount: 0 }) }}>
                                                {prices && prices.map((price, index) => <option key={price._id} value={index}>{price.symbol} ${formatMoney(price.amount, "", 2)}</option>)}
                                            </select>
                                        </div>
                                        <div class="col-md-12">
                                            <label for="buyRalph">{locale.locale.step2Crypto} (*)</label>
                                            <label for="inp" class="inp" style={{ width: "100%" }}>
                                                <input type="text" id="inp" placeholder="Email" onChange={(e) => Validation("email", e) ? setDataCoin({ ...dataCoin, email: e.target.value }) : setDataCoin({ ...dataCoin, email: "" })} required />
                                                <svg style={{ width: "100%" }} height="18px" viewBox="0 0 280 18" class="border">
                                                    <path d="M0,12 L223.166144,12 C217.241379,12 217.899687,12 225.141066,12 C236.003135,12 241.9279,12 249.827586,12 C257.727273,12 264.639498,12 274.514107,12 C281.097179,12 281.755486,12 276.489028,12"></path>
                                                </svg>
                                                <svg width="14px" height="12px" viewBox="0 0 14 12" class="check">
                                                    <path d="M1 7 5.5 11 L13 1"></path>
                                                </svg>
                                            </label>
                                        </div>
                                        <div class="col-md-12" style={{ width: "100%", marginBottom: 15 }}>
                                            <label for="buyRalph">{locale.locale.step3Crypto.replace("{crypto}", dataCoin.symbol).replace("{min}", CriptoMin(dataCoin.costSymbol, dataCoin.symbol)).replace("{max}", CriptoMax(dataCoin.costSymbol, dataCoin.symbol))} {dataCoin.symbol} (*)</label>
                                            <label for="inp" class="inp">
                                                <input type="text" id="inp" placeholder="amount" onChange={(e) => Validation("CryptoCurrencie", e, dataCoin.costSymbol) ? setDataCoin({ ...dataCoin, amount: parseFloat(e.target.value) }) : setDataCoin({ ...dataCoin, amount: 0 })} required />
                                                <svg style={{ width: "100%" }} height="18px" viewBox="0 0 280 18" class="border">
                                                    <path d="M0,12 L223.166144,12 C217.241379,12 217.899687,12 225.141066,12 C236.003135,12 241.9279,12 249.827586,12 C257.727273,12 264.639498,12 274.514107,12 C281.097179,12 281.755486,12 276.489028,12"></path>
                                                </svg>
                                                <svg width="14px" height="12px" viewBox="0 0 14 12" class="check">
                                                    <path d="M1 7 5.5 11 L13 1"></path>
                                                </svg>
                                            </label>
                                            {parseFloat(dataCoin.amount) > 0.00000000 && CostPerCripto(dataCoin.amount, dataCoin.costSymbol) > 9 &&
                                                <div class="valid-feedback">
                                                    <p>You will receive {formatMoney((dataCoin.amount * dataCoin.costSymbol) * costPerUSD + (data.referal ? ((dataCoin.amount * dataCoin.costSymbol) * costPerUSD) * 0.05 : 0), "RALPH")}</p>
                                                    <p>{formatMoney(((dataCoin.amount * dataCoin.costSymbol) * costPerUSD) / dataCoin.amount)} RALPH per {dataCoin.symbol}</p>
                                                </div>
                                            }
                                        </div>
                                        <div class="col-md-12">
                                            <label for="btcAddress">{locale.locale.step3} (*)</label>
                                            {
                                                cuenta
                                                    ? <p style={{ wordBreak: "break-all" }}>{`Address: ${cuenta.cuenta} import to ${cuenta.type}`}</p>
                                                    : <div class="dropdown">
                                                        <button class="dropbtn">Connect your wallet</button>
                                                        <div class="dropdown-content wallets">
                                                            <a href="#!" onClick={(e) => { e.preventDefault(); getMetaMask() }}><img src={MetaMask} style={{ width: 20, height: 20, top: "-2%" }} /> MetaMask</a>
                                                            <a href="#!" onClick={(e) => { e.preventDefault(); GetTrust() }}> <img src={WC} style={{ width: 20, height: 20, top: "-2%" }} /> Wallet Connect</a>
                                                        </div>
                                                    </div>
                                            }
                                        </div>
                                        <div class="col-md-12" style={{ marginBottom: 15 }}>
                                            <label for="Referal" style={{ wordBreak: "break-all" }}>{locale.locale.step4.replace("{percent}", formatMoney(costPerUSD * 0.05))} <a href="#!" onClick={(e) => { e.preventDefault(); document.getElementById("Referal").value = "0xe1D9A84dFb1C13916caf64300b6EA42EF3eA72c8"; setData({ ...data, referal: "0xe1D9A84dFb1C13916caf64300b6EA42EF3eA72c8" }) }}>0xe1D9A84dFb1C13916caf64300b6EA42EF3eA72c8</a></label>
                                            <label for="Referal" class="inp" style={{ width: "100%", maxWidth: 500 }}>
                                                <input type="text" id="Referal" defaultValue={data.referal} placeholder="Referal" onKeyUp={(e) => Validation("wallet", e) ? setData({ ...data, referal: e.target.value }) : setData({ ...data, referal: "" })} required />
                                                <svg style={{ width: "100%" }} height="18px" viewBox="0 0 500 18" class="border">
                                                    <path d="M0,12 L223.166144,12 C217.241379,12 217.899687,12 225.141066,12 C236.003135,12 241.9279,12 249.827586,12 C257.727273,12 264.639498,12 274.514107,12 C281.097179,12 281.755486,12 500.489028,12"></path>
                                                </svg>
                                                <svg width="14px" height="12px" viewBox="0 0 14 12" class="check">
                                                    <path d="M1 7 5.5 11 L13 1"></path>
                                                </svg>
                                            </label>
                                            {data.amount > 0 && data.amount > 9 && data.referal && <div class="valid-feedback">Your referral will receive {formatMoney((data.amount * costPerUSD) * 0.05, "RALPH")}</div>}

                                        </div>

                                        <div class="col-md-12" style={{ marginBottom: 15 }}>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>SubTotal:</td>
                                                        <td>{formatMoney(parseFloat(dataCoin.amount), "", dataCoin.symbol !== "DOGE" && dataCoin.symbol !== "USDT.ERC20" ? 8 : 2)} {dataCoin.symbol}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Fee 5%:</td>
                                                        <td>{formatMoney(parseFloat(dataCoin.amount * 0.05), "", dataCoin.symbol !== "DOGE" && dataCoin.symbol !== "USDT.ERC20" ? 8 : 2)} {dataCoin.symbol}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Total to Pay:</td>
                                                        <td>{formatMoney(parseFloat(dataCoin.amount * 0.05) + parseFloat(dataCoin.amount), "", dataCoin.symbol !== "DOGE" && dataCoin.symbol !== "USDT.ERC20" ? 8 : 2)} {dataCoin.symbol}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {FormType === "coinpay" && <div style={{ textAlign: "center", paddingTop: 25 }}>
                    <button onClick={() => FormType === "bsc" ? SendToken() : SendCoinPayment()}>{locale.locale.btnSend}</button>
                </div>}
                <RedSociales />
            </div>

        </div>
    )

    function SendCoinPayment() {
        swal.fire({
            title: locale.locale.TitleLoading,
            text: locale.locale.TxtLoading,
            imageUrl: Loading,
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: 'Custom image',
            showConfirmButton: false,
            backdrop: false
        })
        if (dataCoin.amount > 0 && cuenta && dataCoin.email) {
            let send = { ...dataCoin, wallet: cuenta.cuenta }
            socket.emit("sendTransactionCoinPayment", send, (res) => {
                if (!res.error) {
                    swal.fire({
                        title: locale.locale.TitleSuccess,
                        text: locale.locale.TxtSuccessCoin,
                        imageUrl: SuccessImg,
                        imageWidth: 300,
                        imageHeight: 300,
                        imageAlt: 'Custom image',
                        backdrop: false
                    })
                    setTimeout(() => {
                        window.location.href = res.success.checkout_url
                    }, 5000);
                    document.getElementById("closeBtn").click()
                } else {
                    swal.fire({
                        title: locale.locale.TitleError,
                        text: '(mensaje de error)',
                        imageUrl: ErrorImg,
                        imageWidth: 300,
                        imageHeight: 300,
                        imageAlt: 'Custom image',
                        showConfirmButton: true,
                        backdrop: false
                    })
                }
            })
        } else {
            swal.fire({
                title: locale.locale.TitleError,
                text: locale.locale.TxtError,
                imageUrl: ErrorImg,
                imageWidth: 300,
                imageHeight: 300,
                imageAlt: 'Custom image',
                showConfirmButton: true,
                backdrop: false
            })
            return
        }
    }

    function SendToken() {
        swal.fire({
            title: locale.locale.TitleLoading,
            text: locale.locale.TxtLoading,
            imageUrl: Loading,
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: 'Custom image',
            showConfirmButton: false,
            backdrop: false
        })
        if (data.email && data.amount > 0 && cuenta) {
            let send = { ...data, wallet: cuenta.cuenta }

            socket.emit("sendTransaction", send, (res) => {
                if (!res.error) {
                    swal.fire({
                        title: locale.locale.TitleSuccess,
                        text: locale.locale.TxtSuccess,
                        imageUrl: SuccessImg,
                        imageWidth: 300,
                        imageHeight: 300,
                        imageAlt: 'Custom image',
                        showConfirmButton: true,
                        backdrop: false
                    })
                    document.getElementById("closeBtn").click()
                } else {
                    swal.fire({
                        title: locale.locale.TitleError,
                        text: '(mensaje de error)',
                        imageUrl: ErrorImg,
                        imageWidth: 300,
                        imageHeight: 300,
                        imageAlt: 'Custom image',
                        showConfirmButton: true,
                        backdrop: false
                    })
                }
            })
        } else {
            swal.fire({
                title: locale.locale.TitleError,
                text: locale.locale.TxtError,
                imageUrl: ErrorImg,
                imageWidth: 300,
                imageHeight: 300,
                imageAlt: 'Custom image',
                showConfirmButton: true,
                backdrop: false
            })
            return
        }
    }


    async function getMetaMask() {
        if (metamask) {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
            setCuenta({ cuenta: account, type: "MetaMask" });


            window.ethereum
                .request({
                    method: 'wallet_watchAsset',
                    params: {
                        type: 'ERC20',
                        options: {
                            address: '0x02618C556d075D2C5ACA9021Be2773764969bb51',
                            symbol: 'Ralph',
                            decimals: 18,
                            image: 'https://www.saveralphtoken.com/static/media/logo.37a165e9.png',
                        },
                    },
                })
                .then((success) => {
                    if (success) {
                        console.log('FOO successfully added to wallet!')
                    } else {
                        throw new Error('Something went wrong.')
                    }
                })
                .catch(console.error)


            window.ethereum.on('accountsChanged', function (accounts) {
                setCuenta({ cuenta: accounts[0], type: "MetaMask" });
                // Time to reload your interface with accounts[0]!
            });
        }
    }

    async function GetTrust() {
        const connector = new WalletConnect({
            bridge: "https://bridge.walletconnect.org", // Required
            qrcodeModal: QRCodeModal,
        });

        // Check if connection is already established
        if (!connector.connected) {
            // create new session
            connector.createSession();
        }

        // Subscribe to connection events
        connector.on("connect", (error, payload) => {
            if (error) {
                throw error;
            }

            // Get provided accounts and chainId
            const { accounts, chainId } = payload.params[0];
            setCuenta({ cuenta: accounts[0], type: "Wallet Connect" });
        });

        connector.on("session_update", (error, payload) => {
            if (error) {
                throw error;
            }

            // Get updated accounts and chainId
            const { accounts, chainId } = payload.params[0];
            setCuenta({ cuenta: accounts[0], type: "Wallet Connect" });
        });

        connector.on("disconnect", (error, payload) => {
            if (error) {
                throw error;
            }
            setCuenta(false)
            // Delete connector
        });
    }


}
const MapStateToProps = (state) => {
    return { locale: state.locale, socket: state.socket, location: state.location, prices: state.prices }
}
export default connect(MapStateToProps)(Formulario);
