"use client";
import React from "react";
import Image from "next/image";
import { imageResolver } from "@/utils/image-resolver";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });


export const MuslimCommunitySuicide = ({ data }) => {
  return (
    <section>
      <div className="max-w-[1440px] mx-auto px-4 grid md:grid-cols-2 items-center gap-x-[20px] sm:mb-[75px]">
        <div className="md:max-w-[578px] pl-[45px] 2xl:pl-0">
          {/* <div>{data?.logo}</div> */}
          <img src={imageResolver(data?.logo)?.path} alt="berkeley logo" />
          {/* <Image src={imageResolver(data?.logo)?.path} /> */}
          <h2 className="text-[32px] mb-[32px] sm:text-[35px] md:text-[38px] lg:text-[40px] leading-[38px] sm:leading-[42px] md:leading-[46px] ff-convergence text-[#2C2C2C]">
            {data?.headline}
          </h2>

          <p className="text-[#3B3731] leading-[20px] ff-convergence opacity-[0.8]">
            {data?.description}
          </p>
        </div>
        {data?.url ? (
          <div>
            <ReactPlayer url={data?.url} width={585} height={404} />
          </div>
        ) : (
          <div className="mt-[40px] md:mt-0">
            <Image
              src={imageResolver(data?.img)?.path}
              loader={() => imageResolver(data?.img)?.path}
              alt={data?.img?.data?.attributes?.alternativeText}
              className="w-full h-full object-cover"
              width={585}
              height={404}
            />
          </div>
        )}
      </div>
    </section>
  );
};
