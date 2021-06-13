import React, { useEffect } from 'react';
import { appendScript } from '../../Helpers';
import RedSociales from './RedSociales';

function Footer(props) {
    useEffect(() => {
        appendScript()
    }, [])
    return (
        <footer id="Footer" className="clearfix">
            <div className="widgets_wrapper" style={{ padding: "30px 0", height: "100%" }}>
                <div className="container" style={{ height: 123 }}>
                    <div className="column one" style={{ height: 123 }}>
                        <RedSociales />
                    </div>
                </div>
            </div>
            <div className="footer_copy">
                <div className="container">
                    <div className="column one">
                        <a id="back_to_top" className="button button_left button_js" href="#!"><span className="button_icon"><i className="icon-up-open-big"></i></span></a>
                        <div className="copyright">
                            Copyright © 2021 Save Ralph - All rights reserved
                        </div>
                        <ul className="social"></ul>
                    </div>
                </div>
            </div>
        </footer>
    )

}
export default Footer;