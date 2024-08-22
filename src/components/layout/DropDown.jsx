'use client'
import React, {useEffect, useState} from 'react';
import DownIcon from '../icons/down';
import Link from 'next/link';
import TickIcon from '../icons/tick';

const DropDown = ({data}) => {
    const [param, setParam] = useState('');
    useEffect(() => {
        setParam(window.location.pathname);
    }, [param]);
    const [open, setOpen] = useState(false);
    return (
        <div onClick={()=>setOpen(!open)} className='relative select-none'>
            <div onClick={()=>setOpen(!open)} className="bg-white cursor-pointer border justify-center items-center flex w-6 h-6 flex-shrink-0 rounded-full shadow-md">
                <DownIcon className="w-4 h-4" />
            </div>
            {open && (
                <div className="absolute p-2 border z-20 top-8 -right-24 w-60 bg-white shadow-md rounded-xl">
                    {data.map((item, index) => (
                        <Link href={item.link} key={index} className="py-3 flex justify-between items-center text-[15px] rounded-md px-4 hover:bg-[#f1f1f1] font-medium cursor-pointer">
                            <span>{item.name}</span>
                            {param === item.link && <TickIcon className="w-4 h-4" />}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DropDown;