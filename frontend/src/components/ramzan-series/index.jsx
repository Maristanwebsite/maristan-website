"use client";
import { Arrow } from "@/common/icons/arrow.svg";
import React from "react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
// const ReactPlayer from "react-player";

const RamzanSeries = () => {
  const cardData = [
    {
      img: "/images/image21.png",
      tagline: "Episode 9: Prophet Yusuf's Shirt-Complex Trials",
      desc: "The story of Prophet Yusuf's shirt holds great significance in the Quran, appearing three times throughout his trials and tribulations. From being thrown into a well by jealous brothers to false accusations and ultimately becoming ruler, Yusuf's unwavering faith in Allah and resilience in the face of adversity is a lesson in never giving up hope. The tear on the back of his shirt proved his innocence and ultimately led to his triumph.",
      btn: "watch video",
      url: "https://youtu.be/liDVzSKWogE",
    },
    {
      img: "/images/image21.png",
      tagline: "Episode 9: Prophet Yusuf's Shirt-Complex Trials",
      desc: "The story of Prophet Yusuf's shirt holds great significance in the Quran, appearing three times throughout his trials and tribulations. From being thrown into a well by jealous brothers to false accusations and ultimately becoming ruler, Yusuf's unwavering faith in Allah and resilience in the face of adversity is a lesson in never giving up hope. The tear on the back of his shirt proved his innocence and ultimately led to his triumph.",
      btn: "watch video",
      url: "https://youtu.be/HjniOs8yL_M?t=7",
    },
  ];
  const str =
    "This special series was broadcasted throughout the month of Ramadan and will explore the stories of resilience and strength from the Quran. Dr. Rania Awaad will delve into the challenges faced by the prophets and companions of the Prophet (peace be upon him) and how they overcame their struggles with unwavering faith and determination. In this series, you will learn valuable lessons about how to embrace resilience in the face of adversity and how to find comfort and strength in the teachings of the Quran. We invite you to tune in and be inspired by these timeless stories of perseverance and courage.";
  return (
    <section
      style={{
        backgroundImage: "url(/images/design1.png)",
      }}
      className="max-w-[1440px] mx-auto pb-[30px] px-[24px] bg-no-repeat   "
    >
      <div>
        <p className="font-[500] max-w-[402px] mx-auto  text-center	text-[14px] text-[#8F1A1D] tracking-[0.28px] uppercase pl-[32px] md:pl-[0] mb-[6px]">
          Discover Strength and Resilience from the Quran
        </p>
        <h1 className=" font-[500] leading-normal max-w-[518px] mx-auto text-center text-[#1D121C] xl:text-[48px]  ">
          Embracing Resilience Ramadan Series
        </h1>
        <div className="max-w-[864px] mx-auto  text-[#2C2C2C] text-center pl-[32px] lg:pl-[0]">
          <p className="leading-[24px] mt-[20px]">{str.substring(0, 337)}</p>
          <p className="leading-[24px] mt-[20px] ">{str.substring(337)}</p>
        </div>
      </div>
      <div className="flex gap-[45px] mt-[48px] w-[full] md:flex-nowrap flex-wrap pl-[32px] xl:pl-[0]">
        {cardData?.map((item, index) => {
          return (
            <div key={index}>
              <ReactPlayer url={item?.url} width="100%" height="311px" className={`rounded-2xl`} controls={true} />
              <h4 className="mt-[24px] text-[#2E2B26] font-semibold text-[20px] leading-[28px] tracking-[-0.28px] ">
                {item?.tagline}
              </h4>

              <p className="text-[#2E2B26] text-[16px] font-[400] leading-[24px] mt-[10px]">
                {item?.desc.substring(0, 165)}...
              </p>
              <a href="#" target="_blank">
                <button className="gap-[7px] font-semibold items-center mt-[24px] flex text-[#8F1A1D] py-[14px] px-[32px] uppercase   border border-[#8F1A1D] rounded-[8px] ">
                  {item?.btn} <Arrow />{" "}
                </button>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RamzanSeries;
