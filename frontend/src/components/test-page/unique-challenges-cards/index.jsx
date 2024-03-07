"use client";
import React from "react";
import Image from "next/image";
import { imageResolver } from "@/utils/image-resolver";
import Link from "next/link";

export const UniqueChallengesCards = ({ data, projectsData }) => {
  
  return (
    <section className="py-[70px] lg:py-[96px] bg-[#F4EEEA] pl-[45px] 2xl:pl-0">
      <div className="max-w-[1440px] mx-auto px-4 lg:flex lg:items-center">
        <div>
        <p className="text-[14px] leading-[16px] text-[#8F1A1D] uppercase ff-convergence">
          {data?.tagline}
        </p>
        <h2 className="mt-[8px] text-[#2C2C2C] text-[40px] leading-[47px] ff-convergence">
          {data?.title}
        </h2>
        </div>
        <div className="mt-[40px] grid sm:grid-cols-2 lg:grid-cols-2 gap-[24px] lg:mt-0 lg:ml-5">
          {projectsData?.data?.slice(0, 4)?.map((item, index) => {
            return (
              <Link key={index}  href={`/projects/${item?.attributes?.slug}`}>
                <div className="bg-[#ffff] rounded-[16px] p-[16px]">
                  <div className="bg-[#F7F3F0] rounded-[16px] w-[80px] h-[80px] flex justify-center items-center">
                    <Image
                      src={imageResolver(item?.attributes?.img)?.path}
                      loader={() => imageResolver(item?.attributes?.img)?.path}
                      alt={item?.attributes?.img?.data?.attributes?.alternativeText}
                      width={40}
                      height={40}
                    />
                  </div>
                  <h2 className="text-[18px] text-[#2E2B26] leading-[21px] tracking-[-0.014em] min-h-[42px] ff-convergence mt-[16px]">
                    {item?.attributes?.title}
                  </h2>
                  <p className="leading-[20px] text-[#3B3731] opacity-[0.8] mt-[12px] min-h-[70px] ff-overpass">
                    {item?.attributes?.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
