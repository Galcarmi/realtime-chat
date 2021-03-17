import React, { FC } from 'react';

type HeaderProps = {
    name:string;
    height:number;
}

const Header : FC<HeaderProps>  = (props) => {
    return (
        <div style={{height:props.height}}>
            {props.name}
        </div>
    );
}

export default Header;