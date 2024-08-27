import SearchIcon from "@/components/icons/search";
import NavTop from "@/components/layout/NavTop";
import PostComponent from "@/components/layout/PostComponent";
import UserItemComponent from "@/components/layout/UserItemComponent";
import Image from "next/image";

export default function SearchPage() {
    const navtop = [
        {name: 'Tìm kiếm', link: '/search'}
    ]
    return (
        <div>
            <div className="bg-[#FAFAFA] sticky top-0 z-10">
                <NavTop data={navtop} />
            </div>
            <div className='bg-white shadow-sm fixed rounded-3xl border w-[660px] h-dvh mx-auto'></div>
            <div className="overflow-hidden relative w-[660px]">
                <div className="pt-5 px-6">
                    <div className="border-[.9px] border-[#9995] focus-within:border-[#999] focus-within:shadow-sm hover:border-[#999] hover:shadow-sm bg-[#FAFAFA] rounded-2xl flex items-center gap-2 py-3 px-6">
                        <SearchIcon className="w-[19px] h-[19px]" fill={'#b8b8b8'} />
                        <input type="text" className="border-none bg-transparent text-[15px] w-full outline-none" placeholder="Tìm kiếm" />
                    </div>
                </div>
                <div>
                    <UserItemComponent />
                    <UserItemComponent />
                    <UserItemComponent />
                    <UserItemComponent />
                    <UserItemComponent />
                    <UserItemComponent />
                    <UserItemComponent />
                    <UserItemComponent />
                    <UserItemComponent />
                    <UserItemComponent />
                    <UserItemComponent />
                    <UserItemComponent />
                </div>
            </div>
                    
        </div>
    );
}