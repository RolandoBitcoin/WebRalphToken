import React from 'react';
// import { Button, Icon, Position, SpecialZoomLevel, Tooltip, Viewer, Worker, ProgressBar } from '@react-pdf-viewer/core';
// import { pageNavigationPlugin, RenderGoToNextPageProps, RenderGoToPreviousPageProps } from '@react-pdf-viewer/page-navigation';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/page-navigation/lib/styles/index.css';
// import disableScrollPlugin from './disable';
function CarrotPaper() {
    // const disableScrollPluginInstance = disableScrollPlugin();
    // const pageNavigationPluginInstance = pageNavigationPlugin();
    // const { GoToNextPage, GoToPreviousPage } = pageNavigationPluginInstance;
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
            {/* <div class="container-wide pdfView" style={{ maxWidth: "none" }}
                data-animate='{"in":{"class":"fadeInUp","delay":".7s","duration":".7s"},"out":{"class":"fadeOutUp","delay":"0s","duration":".4s"}}'>
                <h2 style={{ textAlign: "center" }}>Carrot Paper</h2>
                <div
                    class="mcb-column one-third column_column"
                    style={{
                        height: '100%',
                        position: 'relative',
                    }}
                >
                    <div
                        style={{
                            left: 0,
                            position: 'absolute',
                            top: '50%',
                            transform: 'translate(24px, -50%)',
                            zIndex: 1,
                        }}
                    >
                        <GoToPreviousPage>
                            {
                                (props) => (
                                    <Tooltip
                                        position={Position.BottomCenter}
                                        target={
                                            <Button onClick={props.onClick}>
                                                <Icon size={16}>
                                                    <path d='M18.4.5,5.825,11.626a.5.5,0,0,0,0,.748L18.4,23.5' />
                                                </Icon>
                                            </Button>
                                        }
                                        content={() => 'Previous page'}
                                        offset={{ left: 0, top: 8 }}
                                    />
                                )
                            }
                        </GoToPreviousPage>
                    </div>

                    <div
                        style={{
                            position: 'absolute',
                            right: 0,
                            top: '50%',
                            transform: 'translate(-24px, -50%)',
                            zIndex: 1,
                        }}
                    >
                        <GoToNextPage>
                            {
                                (props) => (
                                    <Tooltip
                                        position={Position.BottomCenter}
                                        target={
                                            <Button onClick={props.onClick} style={{ backgroundColor: "#fff" }}>
                                                <Icon size={16}>
                                                    <path d='M5.651,23.5,18.227,12.374a.5.5,0,0,0,0-.748L5.651.5' />
                                                </Icon>
                                            </Button>
                                        }
                                        content={() => 'Next page'}
                                        offset={{ left: 0, top: 8 }}
                                    />
                                )
                            }
                        </GoToNextPage>
                    </div>
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                        <Viewer
                            fileUrl={`https://files-ralph.s3.us-east-2.amazonaws.com/Ralph(ING).pdf`}
                            initialPage={0}
                            options={{
                                httpHeaders: {
                                    'Content-Type': 'application/json',
                                    Accept: 'application/pdf',
                                },
                                mode: "cors"
                            }}

                            renderLoader={(percentages) => (
                                <div style={{ width: '240px' }}>
                                    <ProgressBar progress={Math.round(percentages)} />
                                </div>
                            )}
                            plugins={[
                                disableScrollPluginInstance,
                                pageNavigationPluginInstance,

                            ]}
                            defaultScale={SpecialZoomLevel.PageFit}
                        />
                    </Worker>
                </div>
            </div> */}
        </section>
    )

}
export default CarrotPaper;