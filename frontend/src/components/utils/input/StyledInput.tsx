import React, { FC } from 'react';
import Input from './Input';
import s from './input.module.css';

type StyledInputProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputContent:string;
    className?:string;
    onKeyDown?: (e:React.KeyboardEvent<HTMLInputElement>)=>void;
}

const StyledInput : FC<StyledInputProps>  = (props) => {
    return (
        <Input onChange={props.onChange}
        inputContent={props.inputContent} 
        className={[s.messageInput, props.className].join(' ')}
        onKeyDown={props.onKeyDown}/>
    );
}

export default StyledInput;