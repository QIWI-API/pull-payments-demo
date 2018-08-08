import React, {Component} from 'react';

import './LinkLogo.scss';
import Button from "../Button/Button";

const LinkLogo = (props) => {
    return (
        <div class={'LinkButton ' + props.className}>

            <img id="pic" src="assets/qiwi_sign_rgb.png"/>

            <a id="text" href="https://corp.qiwi.com/business/connect/logotype.action">
                Выбрать логотип QIWI
            </a>
        </div>
    );
};
LinkLogo.defaultProps = {
    classNames: '',
};
export default LinkLogo;
