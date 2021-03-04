import React, { FC } from 'react';
const ContainerCss = require('./container.module.css');

type ContainerProps = {}

const Container : FC<ContainerProps>  = (props) => {
    return (
        <div className={ContainerCss.root}>
            {props.children}
        </div>
    );
}

export default Container;