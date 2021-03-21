import React, { FC, useState } from 'react';
import Button from '../button/Button';
import StyledInput from '../input/StyledInput';
import Modal from './Modal';
import s from './nameInputModal.module.css';
import { socketUtil } from '../../../utils/socket-utils';

type NameInputModalProps = {
    setNameCallback: Function;
}

const NameInputModal: FC<NameInputModalProps> = (props) => {
    const [inputContent, setInputContent] = useState('');
    const [isError, setIsError] = useState(false);

    const handleClick = () => {
        if (inputContent) {
            socketUtil.setUsername(inputContent);
            props.setNameCallback();
        }
        else {
            setIsError(true);
        }
    };

    const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleClick();
        }
    }

    return (
        <Modal>
            <div className={s.layout}>
                <div className={s.title}>Enter your name</div>
                <StyledInput inputContent={inputContent}
                    onChange={e => { setInputContent(e.target.value) }}
                    className={s.nameInput}
                    onKeyDown={handleEnterPress} />
                <Button handleClick={handleClick}
                    className={s.btn}
                    label="Lets GO!" />
                {isError && <div className={s.errorTXTStyle}> username is empty!</div>}
            </div>
        </Modal>
    );
}

export default NameInputModal;