import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Bg from '../../Assets/images/bg.jpg';
import { Button, Icon, Position, SpecialZoomLevel, Tooltip, Viewer, Worker, ProgressBar } from '@react-pdf-viewer/core';
import { pageNavigationPlugin, RenderGoToNextPageProps, RenderGoToPreviousPageProps } from '@react-pdf-viewer/page-navigation';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';
// import PDFViewer from 'pdf-viewer-reactjs'
// import PDFViewer from 'mgr-pdf-viewer-react';
// import { Document, Page, pdfjs } from 'react-pdf';
// https://files-ralph.s3.us-east-2.amazonaws.com/Ralph(ESP).pdf
import esp from '../../Assets/whitepaperesp.pdf';
import eng from '../../Assets/whitepapereng.pdf';
import disableScrollPlugin from './disable';

function WhitePaper(props) {
    const { locale } = props;
    const disableScrollPluginInstance = disableScrollPlugin();
    const pageNavigationPluginInstance = pageNavigationPlugin();
    const { GoToNextPage, GoToPreviousPage } = pageNavigationPluginInstance;
    useEffect(() => {
        fetch(esp, {
            headers: {
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
            },
        }).then(response => response.blob())
            .then(blob => {
                console.log(blob)
            });
    }, [])
    return (
        locale && <div class="section mcb-section" id="new" style={{ paddingTop: 50, paddingBottom: 90 }}
            data-parallax="3d"><img class="mfn-parallax"
                src={Bg} alt="parallax background" />
            <div style={{ width: "100%", height: "100%", backgroundColor: "rgb(0, 0, 0,0.5)", position: "absolute", top: 0, bottom: 0, left: 0, right: 0, zIndex: 1 }} />
            <div class="section_wrapper mcb-section-inner">
                <div class="wrap mcb-wrap one  valign-top clearfix">

                    <div class="mcb-wrap-inner text-center pdfView">
                        <h2 style={{ color: "#e7d600" }}>CARROT PAPER</h2>
                        {/* <PDFViewer document={{
                                url: locale.locale.whitePaper,
                            }}
                                // scale={3}
                                scaleStep={11}
                                canvasCss="canvasStyle"
                            /> */}
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
                                                    <Button onClick={props.onClick}>
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
                                    fileUrl={esp}
                                    initialPage={1}
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
                    </div>
                </div>
            </div>

            {/* <iframe title="carrotPaper" src={`${locale.locale.whitePaper}#toolbar=0`} style={{ width: "85vw", height: "80vh" }} /> */}
            {/* <Document
                                file={locale.locale.whitePaper}
                                onLoadSuccess={onDocumentLoadSuccess}
                                options={options}
                            >
                                <Page pageNumber={pageNumber} />
                            </Document>
                            <div>
                                <p>
                                    Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                                </p>
                                <button
                                    type="button"
                                    disabled={pageNumber <= 1}
                                    onClick={previousPage}
                                >
                                    Previous
        </button>
                                <button
                                    type="button"
                                    disabled={pageNumber >= numPages}
                                    onClick={nextPage}
                                >
                                    Next
        </button>
                            </div> */}
        </div>
    )


}
const MapStateToProps = (state) => {
    return { locale: state.locale }
}
export default connect(MapStateToProps)(WhitePaper);