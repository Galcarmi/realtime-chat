import React, { FC } from 'react';
import Input from './Input';
import s from './input.module.css';

type StyledInputProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputContent:string;
    className?:string;
}

const StyledInput : FC<StyledInputProps>  = (props) => {
    return (
        <div className={props.className}>
            <Input onChange={props.onChange} inputContent={props.inputContent} className={s.messageInput}></Input>
        </div>
    );
}

export default StyledInput;