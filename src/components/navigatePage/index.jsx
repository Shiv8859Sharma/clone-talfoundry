import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const NavigatePage = ({ id = '', url = '', children, className = '', type = 'navigate', dispatchFun = () => { }, }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        if (type === 'dispachAction') {
            dispatch(dispatchFun);
        } else if (url) {
            navigate(url);
        }
    };


    return (
        <div onClick={handleClick} id={id} data-url={url} className={`cursor-pointer ${className}`} >
            {children}
        </div>
    );
};

export default NavigatePage;
