import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { formatMoney, Validation } from '../../Helpers';
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
function Formulario(props) {
    const { locale, socket } = props;
    let history = useHistory();
    const [costPerUSD] = useState(280000000)
    const [metamask, setMetamask] = useState(false)
    const [cuenta, setCuenta] = useState(false)
    const [data, setData] = useState({
        amount: 0,
        email: "",
        referal: "",
        comment: ""
    })
    let back = e => {
        e.stopPropagation();
        history.goBack();
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
        MetamaskProvider()
        return () => {
            setCuenta(false)
        }
    }, [])

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
            <div className="modal animate__animated animate__zoomInDown"
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
                <div style={{ padding: 10 }}>
                    <h1 style={{ color: "#e7d600" }}>{locale.locale.formtitle}</h1>
                    <div className="row" style={{ flexWrap: "nowrap" }}>
                        <div className="col-md-6">
                            <div style={{ paddingRight: 25 }}>
                                {locale.locale.formBigText.map((text, index) => {
                                    return <p key={index} dangerouslySetInnerHTML={{ __html: text }}></p>
                                })}
                            </div>
                        </div>
                        <div class="col-md-6" style={{ padding: 0, paddingRight: 25 }}>
                            <div className="shadowForm">
                                <p>(*) Campo Requeridos</p>
                                <div className="row flex-column" style={{ flexWrap: "nowrap", margin: 0, }}>
                                    <div class="col-md-12">
                                        <label for="buyRalph">{locale.locale.step1} (*)</label>
                                        <label for="inp" class="inp">
                                            <input type="text" id="inp" placeholder="Email" onChange={(e) => Validation("email", e) ? setData({ ...data, email: e.target.value }) : setData({ ...data, email: "" })} required />
                                            <svg width="280px" height="18px" viewBox="0 0 280 18" class="border">
                                                <path d="M0,12 L223.166144,12 C217.241379,12 217.899687,12 225.141066,12 C236.003135,12 241.9279,12 249.827586,12 C257.727273,12 264.639498,12 274.514107,12 C281.097179,12 281.755486,12 276.489028,12"></path>
                                            </svg>
                                            <svg width="14px" height="12px" viewBox="0 0 14 12" class="check">
                                                <path d="M1 7 5.5 11 L13 1"></path>
                                            </svg>
                                        </label>
                                    </div>
                                    <div class="col-md-12" style={{ marginBottom: 15 }}>
                                        <label for="buyRalph">{locale.locale.step2} (*)</label>
                                        <label for="inp" class="inp">
                                            <input type="text" id="inp" placeholder="amount" onChange={(e) => Validation("amount", e) ? setData({ ...data, amount: e.target.value }) : setData({ ...data, amount: 0 })} required />
                                            <svg width="280px" height="18px" viewBox="0 0 280 18" class="border">
                                                <path d="M0,12 L223.166144,12 C217.241379,12 217.899687,12 225.141066,12 C236.003135,12 241.9279,12 249.827586,12 C257.727273,12 264.639498,12 274.514107,12 C281.097179,12 281.755486,12 276.489028,12"></path>
                                            </svg>
                                            <svg width="14px" height="12px" viewBox="0 0 14 12" class="check">
                                                <path d="M1 7 5.5 11 L13 1"></path>
                                            </svg>
                                        </label>
                                        {data.amount > 0 && data.amount > 9 && <div class="valid-feedback">You will receive {formatMoney(data.amount * costPerUSD + (data.referal ? (data.amount * costPerUSD) * 0.05 : 0), "RALPH")}</div>}
                                    </div>
                                    <div class="col-md-12">
                                        <label for="btcAddress">{locale.locale.step3} (*)</label>
                                        {
                                            cuenta
                                                ? <p>{`Address: ${cuenta.cuenta} import to ${cuenta.type}`}</p>
                                                : <div class="dropdown">
                                                    <button class="dropbtn">Connect your wallet</button>
                                                    <div class="dropdown-content">
                                                        <a href="#!" onClick={(e) => { e.preventDefault(); getMetaMask() }}><img src={MetaMask} style={{ width: 20, height: 20, top: "-2%" }} /> MetaMask</a>
                                                        <a href="#!" onClick={(e) => { e.preventDefault(); GetTrust() }}> <img src={WC} style={{ width: 20, height: 20, top: "-2%" }} /> Wallet Connect</a>
                                                    </div>
                                                </div>
                                        }
                                    </div>
                                    <div class="col-md-12" style={{ marginBottom: 15 }}>
                                        <label for="Referal">{locale.locale.step4} <a href="#!" onClick={(e) => { e.preventDefault(); document.getElementById("Referal").value = "0xF237eC922A478dAbf28a9474D205A4f49d604ee3"; setData({ ...data, referal: "0xF237eC922A478dAbf28a9474D205A4f49d604ee3" }) }}>0xF237eC922A478dAbf28a9474D205A4f49d604ee3</a></label>
                                        <label for="Referal" class="inp" style={{ width: 500, maxWidth: 500 }}>
                                            <input type="text" id="Referal" defaultValue={data.referal} placeholder="Referal" onKeyUp={(e) => Validation("wallet", e) ? setData({ ...data, referal: e.target.value }) : setData({ ...data, referal: "" })} required />
                                            <svg width="500px" height="18px" viewBox="0 0 500 18" class="border">
                                                <path d="M0,12 L223.166144,12 C217.241379,12 217.899687,12 225.141066,12 C236.003135,12 241.9279,12 249.827586,12 C257.727273,12 264.639498,12 274.514107,12 C281.097179,12 281.755486,12 500.489028,12"></path>
                                            </svg>
                                            <svg width="14px" height="12px" viewBox="0 0 14 12" class="check">
                                                <path d="M1 7 5.5 11 L13 1"></path>
                                            </svg>
                                        </label>
                                        {data.amount > 0 && data.amount > 9 && data.referal && <div class="valid-feedback">Your referral will receive {formatMoney((data.amount * costPerUSD) * 0.05, "RALPH")}</div>}

                                    </div>
                                    <div class="col-md-12">
                                        <label for="comment">{locale.locale.step5} <a href="https://t.me/Saveralphtoken" target="__blank">https://t.me/Saveralphtoken</a></label>
                                        <textarea style={{ width: "100%" }} onChange={(e) => setData({ ...data, comment: e.target.value })} rows="5" class="form-control is-valid"></textarea>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div style={{ textAlign: "center", paddingTop: 25 }}>
                    <button onClick={() => SendToken()}>{locale.locale.btnSend}</button>
                </div>
            </div>

        </div>
    )

    function SendToken() {
        swal.fire({
            title: 'Enviando Formulario!',
            text: 'Por favor espere, estamos procesando los datos.',
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
                console.log(res)
                if (!res.error) {
                    // 'hemos procesado tu formulario, recibirás un correo electrónico con una copia, recuerda que la entrega de tus tokens puede de morar 24 a 72h',
                    swal.fire({
                        title: 'Datos recibidos por el servidor',
                        text: JSON.stringify(res),
                        imageUrl: SuccessImg,
                        imageWidth: 300,
                        imageHeight: 300,
                        imageAlt: 'Custom image',
                        showConfirmButton: true,
                        backdrop: false
                    })
                } else {
                    swal.fire({
                        title: '¡Ocurrio un error!',
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
                title: '¡Ocurrio un error!',
                text: 'Debes llenar los campos requeridos',
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
    return { locale: state.locale, socket: state.socket }
}
export default connect(MapStateToProps)(Formulario);
