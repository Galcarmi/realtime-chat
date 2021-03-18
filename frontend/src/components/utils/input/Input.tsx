import React, { FC } from 'react';


type InputProps = {
    className: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputContent:string;
}

const Input : FC<InputProps>  = (props) => {
    return (
        <input type="text"  value = {props.inputContent} className={props.className} onChange={props.onChange}></input>
    );
}

export default Input;