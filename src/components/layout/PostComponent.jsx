import Image from 'next/image';
import React from 'react';
import SlideImageGallery from './SlideImageGallery';
import HeartIconLine from '../icons/heart-line';
import RepostIcon from '../icons/repost';
import ChatIcon from '../icons/chat';
import SendIcon from '../icons/send';
import MoreIcon from '../icons/more';

const PostComponent = () => {
    return (
        <div className="pt-5 pb-1 relative px-4 border-b last-of-type:border-none">
            <div className='absolute top-3 right-4 p-[8px] rounded-full hover:bg-[#f1f1f1] cursor-pointer'>
                <MoreIcon className="w-[16px] h-[16px]" fill={'#424242'} />
            </div>
            <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full overflow-hidden">
                    <Image width={200} height={200} src="https://instagram.fsgn5-15.fna.fbcdn.net/v/t51.2885-19/434636673_785855990271047_2913405931320742289_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsgn5-15.fna.fbcdn.net&_nc_cat=111&_nc_ohc=LEpiYXXAN_EQ7kNvgE8gty0&edm=APs17CUBAAAA&ccb=7-5&oh=00_AYBgT_TvOMhnYVYkNHCL9ZkMA3JRjAEgggIYPNkhEPjH9Q&oe=66C9216D&_nc_sid=10d13b" alt="" />
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <span className="text-[15px] font-semibold hover:underline cursor-pointer">dangan2212_._</span>
                        <span className="text-[15px] font-normal text-[#999]">23 giờ</span>
                    </div>
                    <div className="text-[15px]">
                        <p>12 years of friendship💕</p>
                        <p>Finally we all graduated with honors 💃🏻🔥</p>
                        <p>FTU x NEU x ULIS assemble</p>
                    </div>
                </div>
            </div>
            <SlideImageGallery />
            <div className="flex items-center pl-[36px] gap-1 py-3">
                <div className="flex items-center gap-1 hover:bg-[#f1f1f1] cursor-pointer py-2 px-[10px] w-fit rounded-3xl">
                    <HeartIconLine className="w-[19px] h-[19px]" fill={'#424242'} />
                    <span className="text-[13px] text-[#424242]">2,5K</span>
                </div>
                <div className="flex items-center gap-1 hover:bg-[#f1f1f1] cursor-pointer py-2 px-[10px] w-fit rounded-3xl">
                    <ChatIcon className="w-[19px] h-[19px]" stroke={'#424242'} />
                    {/* <span className="text-[13px] text-[#424242]">2</span> */}
                </div>
                <div className="flex items-center gap-1 hover:bg-[#f1f1f1] cursor-pointer py-2 px-[10px] w-fit rounded-3xl">
                    <RepostIcon className="w-[19px] h-[19px]" stroke={'#424242'}/>
                    <span className="text-[13px] text-[#424242]">20</span>
                </div>
                <div className="flex items-center gap-1 hover:bg-[#f1f1f1] cursor-pointer py-2 px-[10px] w-fit rounded-3xl">
                    <SendIcon className="w-[19px] h-[19px]" fill={'#424242'} />
                    <span className="text-[13px] text-[#424242]">200</span>
                </div>
            </div>
        </div>
    );
};

export default PostComponent;