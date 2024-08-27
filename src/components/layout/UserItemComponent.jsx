import Image from 'next/image';
import React from 'react';

const UserItemComponent = () => {
    return (
        <div className="pt-5 pb-4 flex items-center border-b last-of-type:border-none justify-between px-6">
            <div className="flex gap-3">
                <div className="w-9 h-9 rounded-full overflow-hidden">
                    <Image width={200} height={200} src="https://instagram.fsgn5-15.fna.fbcdn.net/v/t51.2885-19/434636673_785855990271047_2913405931320742289_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsgn5-15.fna.fbcdn.net&_nc_cat=111&_nc_ohc=LEpiYXXAN_EQ7kNvgE8gty0&edm=APs17CUBAAAA&ccb=7-5&oh=00_AYBgT_TvOMhnYVYkNHCL9ZkMA3JRjAEgggIYPNkhEPjH9Q&oe=66C9216D&_nc_sid=10d13b" alt="" />
                </div>
                <div className="flex flex-col">
                    <span className="text-[15px] font-semibold hover:underline cursor-pointer">dangan2212_._</span>
                    <span className="text-[15px] font-normal text-[#999]">Dang Ngan</span>
                    <span>240K người theo dõi</span>
                </div>
            </div>
            <div>
                <div className="border rounded-xl pt-1 pb-[6px] cursor-pointer px-4">
                    <span className="text-[15px] font-semibold">Theo dõi</span>
                </div>
            </div>
        </div>
    );
};

export default UserItemComponent;