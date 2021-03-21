import React, { FC } from 'react';


type InputProps = {
    className: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputContent:string;
    onKeyDown?: (e:React.KeyboardEvent<HTMLInputElement>)=>void;
}

const Input : FC<InputProps>  = (props) => {
    return (
        <input type="text"  value = {props.inputContent} className={props.className} onChange={props.onChange} onKeyDown={props.onKeyDown}></input>
    );
}

export default Input;