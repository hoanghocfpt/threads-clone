'use client'
import { useRef, useState } from "react";
import Image from "next/image";
import classNames from "classnames";
// https://keen-slider.io/examples vào web này và test nó
const SlideImageGallery = () => {
    const images = [
        'https://instagram.fsgn5-2.fna.fbcdn.net/v/t51.29350-15/455980553_1412084976139565_5554609009511272022_n.jpg?stp=cp6_dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE5MjAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fsgn5-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=__OdMcLqMbsQ7kNvgEjCU_g&edm=AHedtMEBAAAA&ccb=7-5&ig_cache_key=MzQzODgwMjg3NjMxNDE4MjIwNQ%3D%3D.2-ccb7-5&oh=00_AYD5-DagIDtYeNrq1q1ON9tzKI380lLHfFudHWl4ovGjXg&oe=66CA6576&_nc_sid=a3cc6e',
        'https://instagram.fsgn5-2.fna.fbcdn.net/v/t51.29350-15/455980553_1412084976139565_5554609009511272022_n.jpg?stp=cp6_dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE5MjAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fsgn5-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=__OdMcLqMbsQ7kNvgEjCU_g&edm=AHedtMEBAAAA&ccb=7-5&ig_cache_key=MzQzODgwMjg3NjMxNDE4MjIwNQ%3D%3D.2-ccb7-5&oh=00_AYD5-DagIDtYeNrq1q1ON9tzKI380lLHfFudHWl4ovGjXg&oe=66CA6576&_nc_sid=a3cc6e',
        'https://instagram.fsgn5-2.fna.fbcdn.net/v/t51.29350-15/455980553_1412084976139565_5554609009511272022_n.jpg?stp=cp6_dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE5MjAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fsgn5-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=__OdMcLqMbsQ7kNvgEjCU_g&edm=AHedtMEBAAAA&ccb=7-5&ig_cache_key=MzQzODgwMjg3NjMxNDE4MjIwNQ%3D%3D.2-ccb7-5&oh=00_AYD5-DagIDtYeNrq1q1ON9tzKI380lLHfFudHWl4ovGjXg&oe=66CA6576&_nc_sid=a3cc6e'
    ]
  const containerRef = useRef(null);
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleMouseDown = (e) => {
    setIsGrabbing(true);
    containerRef.current.startX = e.pageX - containerRef.current.offsetLeft;
    containerRef.current.scrollLeft = containerRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isGrabbing) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const scrollX = containerRef.current.startX - x;
    containerRef.current.scrollLeft = scrollPosition + scrollX;
  };

  const handleMouseUp = () => {
    setIsGrabbing(false);
    setScrollPosition(containerRef.current.scrollLeft);
  };

  return (
    <div
      className="relative w-full overflow-hidden cursor-grab pt-3"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      
      ref={containerRef}
    >
      <div
        className={classNames("w-full flex items-center no-drag gap-2 pl-[46px] transition-transform duration-2000", {
          "cursor-grabbing": isGrabbing,
        })}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="border rounded-2xl flex-shrink-0 h-[280px] overflow-hidden"
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={500}
              height={500}
              className="object-cover no-drag w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideImageGallery;
