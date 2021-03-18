import React, { FC } from 'react';
import s from './button.module.css';

type ButtonProps = {
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    label: string;
}

const Button : FC<ButtonProps>  = (props) => {

    return (
        <button className={[s.sendButton, props.className].join(' ')} onClick={props.handleClick}>{props.label}</button>
    );
}

export default Button;