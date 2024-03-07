"use client";
import React from "react";
import Link from "next/link";
import { Tick } from "@/common/icons/tick.svg";
import Image from "next/image";
import { imageResolver } from "@/utils/image-resolver";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const AboutHistory = ({ data }) => {
  return (
    <section className=" pt-[31px]">
      <div className=" grid lg:grid-cols-2 lg:gap-x-[75px] max-w-[1440px]  mx-auto px-4 pl-[60px] lg:pl-0">
        <div
          className=" mb-[50px]  lg:mb-0 bg-no-repeat bg-left-bottom "
          style={{ backgroundImage: `url('/images/Vector.png')` }}
        >
          <div className="mt-[40px] ">
            <ReactPlayer
              url={`https://youtu.be/liDVzSKWogE`}
              width="100%"
              height="450px"
              
            />
          </div>
        </div>
        <div>
          <div>
            <p className="text-[#8F1A1D] font-[400] text-[14px] leading-[16px] uppercase ff-convergence  ">
              {data?.heading?.tagline}
            </p>
            <h2 className=" max-w-[698px] mb-[20px] mt-[12px] font-[400] text-[32px] sm:text-[34px] md:text-[37px] lg:text-[40px] leading-[37px] sm:leading-[42px] md:leading-[47px]  text-[#2C2C2C] ff-convergence ">
              {data?.heading?.title}
            </h2>
            <p className="max-w-[607px] font-[400] text-[16px] leading-[24px] ff-overpass">
              {data?.description}
            </p>
          </div>
          <div className="pt-[20px] pb-[22px]">
            <h3 className="mb-[12px] text-[18px] leading-[24px] text-[#2C2C2C] ff-convergence">
              Our Values:
            </h3>
            <div className="grid sm:grid-cols-3 gap-y-[8px]">
              {data?.values?.map((value, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center gap-x-[13.15px] "
                  >
                    <Tick />
                    <h2 className="text-[16px] leading-[20px] text-[#2C2C2C] ff-overpass">
                      {value.value}
                    </h2>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: data?.description2.substring(0, 324),
            }}
            className="font-[400] text-[16px] leading-[24px] text-[#2C2C2C] ff-overpass"
          ></div>
          <div
            dangerouslySetInnerHTML={{
              __html: data?.description2.substring(324),
            }}
            className="font-[400] text-[16px] leading-[24px] text-[#2C2C2C] ff-overpass pt-[25px] "
          ></div>
        </div>
      </div>
    </section>
  );
};

export default AboutHistory;
