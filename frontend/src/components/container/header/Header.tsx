import React, { FC } from 'react';

type HeaderProps = {
    name:string
}

const Header : FC<HeaderProps>  = (props) => {
    return (
        <div>
            {props.name}
        </div>
    );
}

export default Header;