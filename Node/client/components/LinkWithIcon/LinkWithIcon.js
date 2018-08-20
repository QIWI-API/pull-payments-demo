import React, {Component} from 'react';

import './LinkWithIcon.scss';

const LinkWithIcon = (props) => {
    return (
        <div className={'link-with-icon ' + props.className}>

            <img className="link-with-icon__img-logo" src={props.imgLink}/>

            <a className="link-with-icon__text" href={props.link}>
                {props.textLogo}
            </a>
        </div>
    );
};
export default LinkWithIcon;
