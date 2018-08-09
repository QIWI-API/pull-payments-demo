import React, {Component} from 'react';

import './LinkWithIcon.scss';

const LinkWithIcon = (props) => {
    return (
        <div class={'LinkButton ' + props.className}>

            <img class="imgLogo" src={props.imgLink}/>

            <a class="text" href={props.link}>
                {props.textLogo}
            </a>
        </div>
    );
};
export default LinkWithIcon;
