'use client'
import React, { useEffect, useState } from 'react';
import DownIcon from '../icons/down';
import DropDown from './DropDown';
import Link from 'next/link';

const NavTop = ({data}) => {
    const navtop = data;
    const [param, setParam] = useState('');
    const [title, setTitle] = useState('');
    useEffect(() => {
        setParam(window.location.pathname);
        navtop.map((item) => {
            if (item.link === param) {
                setTitle(item.name);
            }else {
                setTitle('Dành cho bạn');
            }
        })
    }, [param]);
    return (
        <div className="py-5 flex justify-center items-center gap-3">
            <span className="text-[15px] font-semibold">{title}</span>
            {navtop.length > 1 && (
                <DropDown data={navtop}/>
            )}
        </div>
    );
};

export default NavTop;