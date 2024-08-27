
import NavTop from "@/components/layout/NavTop";
import PostComponent from "@/components/layout/PostComponent";

export default function ForYouPage() {
    const navtop = [
        {name: 'Dành cho bạn', link: '/for_you'},
        {name: 'Đang theo dõi', link: '/following'},
        {name: 'Đã thích', link: '/liked'},
        {name: 'Đã lưu', link: '/saved'}
    ]
    return (
        <div>
            <div className="bg-[#FAFAFA] sticky top-0 z-10">
                <NavTop data={navtop} />
            </div>
            <div className='bg-white shadow-sm fixed rounded-3xl border w-[660px] h-dvh mx-auto'></div>
            <div className="overflow-hidden w-[660px]">
                <PostComponent />
                <PostComponent />
                <PostComponent />
                <PostComponent />
            </div>
                    
        </div>
    );
}