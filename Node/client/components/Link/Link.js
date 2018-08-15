import React, {Component} from 'react';

import './Link.scss';

const Link = (props) => {
    return (
            <a className={'link ' + props.className} href={props.link}>
                {props.textLogo}
            </a>
    );
};
export default Link;
