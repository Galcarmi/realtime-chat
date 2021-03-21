import React, { FC, useState } from 'react';
import Button from '../button/Button';
import StyledInput from '../input/StyledInput';
import Modal from './Modal';
import s from './nameInputModal.module.css';
import { socketUtil } from '../../../utils/socket-utils';

type NameInputModalProps = {
    setNameCallback:Function;
}

const NameInputModal: FC<NameInputModalProps> = (props) => {
    const [inputContent, setInputContent] = useState('');
    const [isError, setIsError] = useState(false);
    const [showModal, setShowModal] = useState(true);

    const handleClick = () => {
        if (inputContent) {
            socketUtil.setUsername(inputContent);
            props.setNameCallback();
            setShowModal(false);
        }
        else {
            setIsError(true);
        }
    };
    return (
        <>
            {showModal && <Modal>
                <div className={s.layout}>
                    <div className={s.title}>Enter your name</div>
                    <StyledInput inputContent={inputContent} onChange={e => { setInputContent(e.target.value) }} className={s.nameInput} ></StyledInput>
                    <Button handleClick={handleClick} className={s.btn} label="Lets GO!" />
                    {isError && <div className={s.errorTXTStyle}> username is empty!</div>}
                </div>
            </Modal>}
        </>
    );
}

export default NameInputModal;