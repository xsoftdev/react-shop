import React from 'react';
import s from './index.module.scss';

const Container = ({ id, children, className }) => {
    return (
        <section
            className={`${s.container} ${className}`}
            id={id}
        >
            {children}
        </section>
    );
};

export default Container;
