import React, {Component} from 'react';

import './LinkWithIcon.scss';

const LinkWithIcon = (props) => {
    return (
        <div class={'link-with-icon ' + props.className}>

            <img class="link-with-icon__img-logo" src={props.imgLink}/>

            <a class="link-with-icon__text" href={props.link}>
                {props.textLogo}
            </a>
        </div>
    );
};
export default LinkWithIcon;
