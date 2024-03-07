"use client";
import React from "react";
import { Tick } from "@/common/icons/tick.svg";
import Link from "next/link";
import { Heart } from "@/common/icons/heart";
import { imageResolver } from "@/utils/image-resolver";
import Image from "next/image";

const DiscoverStory = ({ order, data }) => {
  return (
    <>
      {data ? (
        <section
          className=" py-[75px] mb-[75px] bg-no-repeat bg-cover "
          style={{
            backgroundImage: 'url("/images/empowering-minds.png" )',
          }}
        >
          <div className=" grid lg:grid-cols-2 lg:gap-x-[75px] max-w-[1440px] mx-auto px-4">
            <div className=" mb-[40px]  lg:mb-0 max-w-[666px] mx-auto">
              <Image
                src={imageResolver(data?.image)?.path}
                loader={() => imageResolver(data?.image)?.path}
                width={585}
                height={570}
                loading="lazy"
                alt={data?.image?.data?.attributes?.alternativeText}
              />
            </div>
            <div className="pl-[45px] lg:pl-0">
              <div>
                <div>
                  {" "}
                  <p className="text-[#2C2C2C] font-[400] text-[14px] leading-[16px] uppercase ff-convergence text-center sm:text-start">
                    {data?.heading?.tagline}
                  </p>
                  <h2 className=" max-w-[698px] mb-[20px] mt-[12px] font-[400] text-[32px] sm:text-[34px] md:text-[42px] lg:text-[48px] leading-[37px] sm:leading-[56px] text-[#2C2C2C] ff-convergence text-center sm:text-start">
                    {data?.heading?.title}
                  </h2>
                </div>
                <h1 className="max-w-[607px] font-[500] text-[18px] leading-[21px] ff-overpass mdt-[20px]">
                  Our Mission
                </h1>
                <div className="mt-[12px] text-[16px] leading-[24px] font-[400] mb-[20px]">
                  <p>
                    Grounded in Islamic traditions, Maristan aims to lead
                    professional clinical care, education, and research in
                    advancing holistic, mental, and spiritual wellness.
                  </p>
                </div>
                <h1 className="max-w-[607px] font-[500] text-[18px] leading-[21px] ff-overpass mdt-[20px]">
                  Our Vision
                </h1>
                <div className="mt-[12px] text-[16px] leading-[24px] font-[400] mb-[20px]">
                  <p>
                    Maristan strives to revive the Islamic legacy of research
                    and education that informs holistic healing and provides
                    culturally and spiritually congruent, professional,
                    accessible, and affordable mental health care for all.
                  </p>
                </div>
                <h1 className="max-w-[607px] font-[500] text-[18px] leading-[21px] ff-overpass mdt-[20px]">
                  Maristan Today
                </h1>
                <div className="mt-[12px] text-[16px] leading-[24px] font-[400] mb-[20px]">
                  <p>
                    Our online clinical, educational, and research-based
                    Maristan initiative was inspired by the historical function
                    of traditional Maristans. Our goal is to revive the Islamic
                    traditional function of Maristans with research and
                    education, stemming from the work of the Stanford Muslim
                    Mental Health & Islamic Psychology Lab, to inform holistic
                    healing for our clients and provide culturally and
                    spiritually congruent, professional, accessible, affordable
                    mental health care for all.
                  </p>
                </div>
              </div>

              {order ? (
                <button className="w-full sm:w-auto shadow-md py-[14px] px-[32px] rounded-[10px] border border-1px bg-[#802A22] ff-overpass hover:bg-[#a1261b] duration-200 transition-all ">
                  <div className="flex items-center justify-center font-[600] text-[16px] text-[#FFFFFF] leading-[20px] gap-x-[13px] uppercase ">
                    <Heart stroke="white" />
                    <p>Donate</p>
                  </div>
                </button>
              ) : (
                <Link href={`${data?.learnMore?.link}`}>
                  <button className="w-full sm:w-auto shadow-md py-[14px]  px-[32px] font-[600] text-[16px] text-[#8F1A1D] leading-[20px] uppercase rounded-[10px] border border-1px border-[#8F1A1D] ff-overpass hover:bg-[#e5dad1] duration-300 transition-all">
                    <p className="text-center"> {data?.learnMore?.name}</p>
                  </button>
                </Link>
              )}
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default DiscoverStory;
