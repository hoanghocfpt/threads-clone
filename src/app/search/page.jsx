import NavTop from "@/components/layout/NavTop";
import PostComponent from "@/components/layout/PostComponent";

export default function SearchPage() {
    const navtop = [
        {name: 'Tìm kiếm', link: '/search'}
    ]
    return (
        <div>
            <div className="bg-[#FAFAFA] sticky top-0 z-10">
                <NavTop data={navtop} />
            </div>
            <div className='bg-white shadow-sm fixed rounded-2xl border w-[660px] h-dvh mx-auto'></div>
            <div className="overflow-hidden w-[660px]">
                <PostComponent />
                <PostComponent />
                <PostComponent />
                <PostComponent />
            </div>
                    
        </div>
    );
}