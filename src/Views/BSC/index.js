import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import holders from '../../Assets/images/03.json'
import supply from '../../Assets/images/05.json'
import transfer from '../../Assets/images/11.json'
import logo from '../../Assets/images/logo.svg'
import detectEthereumProvider from '@metamask/detect-provider';
function Bsc(props) {
    const [selectedImage, setSelectedImage] = useState(holders)
    const [metamask, setMetamask] = useState(false)
    const [cuenta, setCuenta] = useState(false)
    const defaultOptions = {
        autoplay: true,
        animationData: selectedImage,
        speed: 0.2,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid meet',
            backgroundColor: "transparent"
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
        MetamaskProvider()
    }, [])

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
                            image: 'https://files-ralph.s3.us-east-2.amazonaws.com/logoralph.svg',
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
    return (
        <section class="section section-5 position-relative overflow-hidden" style={{ backgroundColor: "#774CBE" }}>
            <div class="section-layer">
                <svg class="layer layer-5" width="1920" height="1080" viewBox="0 0 1920 1080" fill="none">
                    <path class="layer-item-1" d="M1115 1H1815L1235 930H534L1115 1Z" fill="white"
                        fill-opacity="0.1"></path>
                    <path class="layer-item-2" d="M271.929 357H561L321.484 741H32L271.929 357Z" fill="white"
                        fill-opacity="0.1"></path>
                    <path class="layer-item-3" d="M691.614 412L277 1081H402.383L814 412H691.614Z" fill="#FFD600">
                    </path>
                    <path class="layer-item-4" d="M333.219 563L46 1025.93H132.858L418 563H333.219Z" fill="#FFD600">
                    </path>
                    <path class="layer-item-5" d="M586.688 207L484 373.033H515.054L617 207H586.688Z" fill="#FFD600">
                    </path>
                    <path class="layer-item-6"
                        d="M637.826 654.669L639.524 655.726L375.304 1080.21L373.607 1079.16L637.826 654.669Z"
                        fill="white"></path>
                    <path class="layer-item-7" opacity="0.4"
                        d="M317.826 654.669L319.524 655.726L55.3047 1080.21L53.6068 1079.16L317.826 654.669Z"
                        fill="white"></path>
                    <path class="layer-item-8" opacity="0.4"
                        d="M327.826 654.669L329.524 655.726L65.3047 1080.21L63.6068 1079.16L327.826 654.669Z"
                        fill="white"></path>
                    <path class="layer-item-9"
                        d="M357.826 372.669L359.524 373.726L248.023 552.859L246.325 551.802L357.826 372.669Z"
                        fill="white"></path>
                    <path class="layer-item-10"
                        d="M367.826 372.669L369.524 373.726L258.023 552.859L256.325 551.802L367.826 372.669Z"
                        fill="white"></path>
                </svg>
            </div>
            <div class="container">
                <div class="row row-30 section-row">
                    <div class="col-xs-8 col-md-6 section-content-2"
                        data-animate='{"in":{"class":"fadeInUpBig","delay":".3s"},"out":{"class":"fadeOutUpBig","delay":".3s"}}'>
                        <h2>Contract in BSC</h2>
                        <div class="owl-carousel owl-style-2"
                            data-owl="{&quot;items&quot;:1,&quot;margin&quot;:30,&quot;dots&quot;:true,&quot;loop&quot;:false,&quot;mouseDrag&quot;:false,&quot;autoplay&quot;:false,&quot;responsive&quot;:{&quot;1200&quot;:{&quot;items&quot;:2}}}">
                            <div class="row row-30 row-xxl-50">
                                <div class="col-6 col-xl-12">
                                    <article class="blurb blurb-morphing">
                                        <div class="blurb-embed" onMouseEnter={() => { setSelectedImage(holders) }}><span class="blurb-icon fas fa-people-carry"></span>
                                            <svg class="blob-morphing blurb-svg" width="120" height="120"
                                                viewBox="0 0 120 120" fill="none">
                                                <path
                                                    d="M37.0096 23.0069C21.3087 29.8865 0.000244141 36.7659 0.000244141 60.8441C0.000244141 84.9223 41.4956 110.147 65.047 107.854C88.5985 105.561 112.15 79.1894 115.514 59.6976C118.879 40.2057 104.299 27.5932 86.3555 18.4206C68.4115 9.24789 52.7106 16.1274 37.0096 23.0069Z"
                                                    fill="#FFD600"></path>
                                            </svg>
                                        </div>
                                        <div class="blurb-title h6">Holders</div>
                                        <div class="blurb-text">3,384</div>
                                    </article>
                                </div>
                                <div class="col-6 col-xl-12">
                                    <article class="blurb blurb-morphing">
                                        <div class="blurb-embed" onMouseEnter={() => { setSelectedImage(supply) }}>
                                            <i class=" blurb-icon fas fa-coins"></i>
                                            <svg class="blob-morphing blurb-svg" width="120" height="120"
                                                viewBox="0 0 120 120" fill="none">
                                                <path
                                                    d="M37.0096 23.0069C21.3087 29.8865 0.000244141 36.7659 0.000244141 60.8441C0.000244141 84.9223 41.4956 110.147 65.047 107.854C88.5985 105.561 112.15 79.1894 115.514 59.6976C118.879 40.2057 104.299 27.5932 86.3555 18.4206C68.4115 9.24789 52.7106 16.1274 37.0096 23.0069Z"
                                                    fill="#FFD600"></path>
                                            </svg>
                                        </div>
                                        <div class="blurb-title h6">Supply</div>
                                        <div class="blurb-text">672,721,482,544,000.496</div>
                                    </article>
                                </div>
                            </div>
                            <div class="row row-30 row-xxl-50">
                                <div class="col-6 col-xl-12">
                                    <article class="blurb blurb-morphing">
                                        <div class="blurb-embed" onMouseEnter={() => { setSelectedImage(transfer) }}><i class=" blurb-icon fas fa-file-contract"></i>
                                            <svg class="blob-morphing blurb-svg" width="120" height="120"
                                                viewBox="0 0 120 120" fill="none">
                                                <path
                                                    d="M37.0096 23.0069C21.3087 29.8865 0.000244141 36.7659 0.000244141 60.8441C0.000244141 84.9223 41.4956 110.147 65.047 107.854C88.5985 105.561 112.15 79.1894 115.514 59.6976C118.879 40.2057 104.299 27.5932 86.3555 18.4206C68.4115 9.24789 52.7106 16.1274 37.0096 23.0069Z"
                                                    fill="#FFD600"></path>
                                            </svg>
                                        </div>
                                        <div class="blurb-title h6">Transfers</div>
                                        <div class="blurb-text">11,460</div>
                                    </article>
                                </div>
                                <div class="col-6 col-xl-12">
                                    <article class="blurb blurb-morphing" style={{ cursor: "pointer" }} onClick={() => { getMetaMask() }}>
                                        <div class="blurb-embed">
                                            <img className="animate__animated animate__flip animate__slower animate__infinite " src={logo} style={{ width: "80%" }} />
                                        </div>
                                        <div class="blurb-title h6">Save Ralph Token</div>
                                        <div class="blurb-text">Add Coin</div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-4 col-md-6 position-static d-flex justify-content-center px-0 section-figure">
                        <div className="section-image" data-animate='{"in":{"class":"slideInLeft","delay":".8s","duration":".7s"},"out":{"class":"slideInLeft","delay":"0s","duration":".4s"}}'>
                            <Lottie options={defaultOptions}
                                width={"100%"}
                                height={"80%"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}
export default Bsc;