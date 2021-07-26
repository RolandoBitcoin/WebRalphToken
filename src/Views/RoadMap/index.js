import React from 'react';
// import Video from '../../Assets/images/SaveRalph.mp4';
import RoadMapPng from '../../Assets/images/roadMap.png';
function RoadMap() {
    const DisplayAndPlay = (e) => {
        let video = document.getElementById("video");
        video.style.display = "initial";
        e.target.style.display = "none";
        setTimeout(() => {
            video.volume = 0.1;
            video.play();
        }, 500);
    }
    const PauseAndHide = () => {
        let video = document.getElementById("video");
        let btn = document.getElementById("btn");
        video.paused();
        video.style.display = "none";
        btn.display = "initial";
    }
    // PauseAndHide()
    return (
        <section class="section section-6 position-relative overflow-hidden" style={{ backgroundColor: "#DB5151" }}>
            <div class="section-layer">
                <svg class="layer layer-6" width="1920" height="1080" viewBox="0 0 1920 1080" fill="none">
                    <path class="layer-item-1" d="M1579 -743H2279L1699 186H998L1579 -743Z" fill="white"
                        fill-opacity="0.1"></path>
                    <path class="layer-item-2" d="M1695.93 114H1985L1745.48 498H1456L1695.93 114Z" fill="white"
                        fill-opacity="0.1"></path>
                    <path class="layer-item-3" d="M1251.61 991L837 1660H962.383L1374 991H1251.61Z" fill="#FFD600">
                    </path>
                    <path class="layer-item-4" d="M378.358 891L95 1348H180.69L462 891H378.358Z" fill="#FFD600">
                    </path>
                    <path class="layer-item-5" d="M102.688 589L0 754H31.054L133 589H102.688Z" fill="#FFD600"></path>
                    <path class="layer-item-6" d="M1827.5 385L1829.2 386.057L1717.7 565.19L1716 564.133L1827.5 385Z"
                        fill="white"></path>
                    <path class="layer-item-7"
                        d="M986.219 83L987.917 84.0569L723.698 508.543L722 507.486C825.184 341.714 883.035 248.772 986.219 83Z"
                        fill="white"></path>
                    <path class="layer-item-8"
                        d="M830.219 -4L831.917 -2.94312L720.416 176.19L718.719 175.133L830.219 -4Z" fill="white">
                    </path>
                    <path class="layer-item-9" d="M800.5 59L802.198 60.0569L690.698 239.19L689 238.133L800.5 59Z"
                        fill="white"></path>
                </svg>
            </div>
            <div class="container-wide text-center" style={{ maxWidth: "none" }}
                data-animate='{"in":{"class":"fadeInUp","delay":".7s","duration":".7s"},"out":{"class":"fadeOutUp","delay":"0s","duration":".4s"}}'>
                <h2>Road Map</h2>
                {/* <img src={RoadMapPng} style={{ width: "70%", height: "70%" }} /> */}
                <button id="btn" className="btn btn-round btn-primary btn-anis navbar-action-button" onClick={(e) => DisplayAndPlay(e)}>View RoadMap</button>
                <video id="video" style={{ width: "80%", display: "none" }}>
                    <source src="https://files-ralph.s3.us-east-2.amazonaws.com/roapMap.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    )
}
export default RoadMap;