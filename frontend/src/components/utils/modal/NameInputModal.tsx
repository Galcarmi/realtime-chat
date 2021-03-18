import React, { FC, useState } from 'react';
import StyledInput from '../input/StyledInput';
import Modal from './Modal';
import s from './nameInputModal.module.css';

type NameInputModalProps = {}

const NameInputModal: FC<NameInputModalProps> = (props) => {
    const [inputContent, setInputContent] = useState('');
    return (
        <Modal>
            <div className={s.layout}>
                <div className={s.title}>Enter your name</div>
                <StyledInput inputContent={inputContent} onChange={e=>{setInputContent(e.target.value)}} className={s.nameInput} ></StyledInput>
                <button>asdsad</button>
            </div>
        </Modal>
    );
}

export default NameInputModal;