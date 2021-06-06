import React, { useEffect } from 'react';
import { appendScript } from '../../Helpers';

function Footer(props) {
    useEffect(() => {
        appendScript()
    }, [])
    return (
        <footer id="Footer" className="clearfix">
            <div className="widgets_wrapper" style={{ padding: "30px 0", height: 60 }}>
                <div className="container" style={{ height: 123 }}>
                    <div className="column one" style={{ height: 123 }}>
                        <aside className="widget widget_text">
                            <div className="textwidget">
                                <p style={{ fontSize: 32, lineHeight: 3, margin: 0, textAlign: "center" }}>
                                    <a style={{ padding: "0px 10px 0px 10px" }} href="https://t.me/Saveralphtoken" target="__blank"><i className="fab fa-telegram-plane"></i></a>
                                    <a style={{ padding: "0px 10px 0px 10px" }} href="https://www.instagram.com/saveralphtoken/" target="__blank"><i className="fab fa-instagram"></i></a>
                                    <a style={{ padding: "0px 10px 0px 10px" }} href="https://www.reddit.com/user/saveralphtoken/" target="__blank"><i className="fab fa-reddit-alien"></i></a>
                                    <a style={{ padding: "0px 10px 0px 10px" }} href="https://twitter.com/RalphToken" target="__blank"><i className="fab fa-twitter"></i></a>
                                    <a style={{ padding: "0px 10px 0px 10px" }} href="https://saveralphtoken.medium.com/" target="__blank"><i className="fab fa-medium-m"></i></a>
                                </p>
                            </div>
                        </aside>
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