import React, { Component } from 'react';

import './IconsRow.scss';

const IconsRow = (props) => {
    return (
        <div className={props.wrapperClassName}>
            {props.icons.map((icon, index)=>{
                return (<img src={icon} alt="icon" width="20" height="20" key={index} className="icons-block__icon"/>);
            })}
        </div>
    );
};

export default IconsRow;