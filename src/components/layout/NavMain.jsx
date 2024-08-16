'use client'
import Image from "next/image";
import HomeIconFill from "../icons/home-fill";
import Logo from "../logo/Logo";
import UserIconLine from "../icons/user-line";
import HeartIconLine from "../icons/heart-line";
import SearchIcon from "../icons/search";
import PinIconLine from "../icons/pin-line";
import BarIcon from "../icons/bar";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import HeartIconFill from "../icons/heart-fill";
import HomeIconLine from "../icons/home-line";
import UserIconFill from "../icons/user-fill";
export default function NavMainComponent() {
    const pathname = usePathname();
    return (
        <div className="px-2 py-2 fixed left-0 h-dvh flex flex-col justify-between">
            <div className="py-2 px-4">
                <Logo className={'w-8 h-8'}/>
            </div>
            <div className="flex flex-col gap-3">
                <Link href={'/'} className="hover:bg-[#f1f1f1] cursor-pointer py-3 px-5 w-fit rounded-xl">
                    {pathname === '/' ? <HomeIconFill className={'w-7 h-7'} fill={'#000'} /> : <HomeIconLine className={'w-7 h-7'} fill={'#b8b8b8'} />}
                </Link>
                <Link href={'/search'} className="hover:bg-[#f1f1f1] cursor-pointer py-3 px-5 w-fit rounded-xl">
                    {pathname === '/search' ? <SearchIcon className={'w-7 h-7'} fill={'#000'} /> : <SearchIcon className={'w-7 h-7'} fill={'#b8b8b8'} />}
                </Link>
                <Link href={'/activity'} className="hover:bg-[#f1f1f1] cursor-pointer py-3 px-5 w-fit rounded-xl">
                    {pathname === '/activity' ? <HeartIconFill className={'w-7 h-7'} fill={'#000'} /> : <HeartIconLine className={'w-7 h-7'} fill={'#b8b8b8'} />}
                </Link>
                <Link href={'/@phamvanhoang'} className="hover:bg-[#f1f1f1] cursor-pointer py-3 px-5 w-fit rounded-xl">
                    {pathname === '/@phamvanhoang' ? <UserIconFill className={'w-7 h-7'} fill={'#000'} /> : <UserIconLine className={'w-7 h-7'} fill={'#b8b8b8'} />}
                </Link>
            </div>
            <div>
                <div className="cursor-pointer py-3 px-5 w-fit rounded-xl">
                    <PinIconLine className={'w-7 h-7'} fill={'#b8b8b8'} />
                </div>
                <div className="group cursor-pointer py-3 px-5 w-fit rounded-xl">
                    <BarIcon className={'w-7 h-7 stroke-[#b8b8b8] group-hover:stroke-black'} />
                </div>
            </div>
        </div>
    );
}