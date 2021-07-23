import React, { useEffect } from 'react';
import { appendScript } from '../../Helpers';

function Footer(props) {
useEffect(()=>{
    appendScript()
},[])
    return (
        <section class="section fixed-bottom text-center py-3 d-none d-xl-block">
            <div class="container">
                <p class="rights"><span>&copy; 2021&nbsp;</span><span>Save Ralph Token</span><span>. All rights
                    reserved</span></p>
            </div>
        </section>
    )

}

export default Footer;