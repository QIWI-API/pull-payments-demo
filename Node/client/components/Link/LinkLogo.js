import React, {Component} from 'react';

import './LinkLogo.scss';

const LinkLogo = (props) => {
    return (
        <div
            /*type={props.type ? props.type : 'button'}
            className={`main-action ${props.classNames}`}
            disabled={props.disabled}
            onClick={props.onClick}>
            {props.buttonText}
            */

            class="LinkButton">

            <div id="pic" className="img">
                <img src="assets/qiwi_sign_rgb.png" width="50" height="50"/>
            </div>
            <a id="text" class="LinkCSS" href="https://corp.qiwi.com/business/connect/logotype.action">
                Выбрать логотип QIWI
            </a>

        </div>

    );
};


export default LinkLogo;
