import React, { FC } from 'react';
import s from './modal.module.css';

type ModalProps = {}

const Modal: FC<ModalProps> = (props) => {
    return (
        <>
            <div className={s.modal}></div>
            <div className={s.content}>
                {props.children}
            </div>
        </>
    );
}

export default Modal;