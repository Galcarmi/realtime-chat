import React, { FC } from 'react';
const LineCss = require('./line.module.css');

type LineProps = {
    horizontal: boolean;
    color?: string;
}

const Line: FC<LineProps> = (props) => {

    const renderLine = () => {
        if(props.horizontal){
            return (<div className={LineCss.horizontalLine} style={{backgroundColor: props.color}}></div>)
        }
        else{
            return (<div className={LineCss.verticalLine}></div>)
        }
    }

    return (
        <>
            {renderLine()}
        </>
    );
}

export default Line;