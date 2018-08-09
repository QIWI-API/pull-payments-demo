import React, {Component} from 'react';

import './Link.scss';

const OnlyLink = (props) => {
    return (
            <a class={'link ' + props.className} href={props.link}>
                {props.textLogo}
            </a>

    );
};
export default OnlyLink;
