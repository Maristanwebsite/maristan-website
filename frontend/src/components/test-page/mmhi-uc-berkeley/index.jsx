"use client";
import { ArrowBox } from "@/common/icons/arrowbox";
import { PhoenRed } from "@/common/icons/phonered";
import { imageResolver } from "@/utils/image-resolver";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const MMHIUCBerkeley = ({ data }) => {
  if (data?.description) {
    return (
        <section className="cus-background py-[75px] relative">
          <div className="max-w-[1440px] mx-auto px-4 grid md:grid-cols-2 items-center gap-x-[40px] lg:gap-x-[75px]">
            <div className="max-w-[100%] pl-[50px] xl:pl-[65px] 2xl:pl-0">
              <h4 className="text-[#8F1A1D] text-[14px] leading-[16px] font-[400] ff-convergence uppercase">
                {data?.tagline}
              </h4>

              <h2 className="text-[32px] sm:text-[38px] md:text-[42px] lg:text-[48px] leading-[40px] md:leading-[48px] lg:leading-[56px] ff-convergence text-[#2C2C2C] mt-[8px]">
                {data?.title}
              </h2>

              <p className="text-[#000000] ff-overpass mt-[12px]">
                {data?.description}
              </p>

              <div className="lg:flex gap-x-[12px] mt-[40px] w-[100%] ">
                <Link legacyBehavior href={`${data?.cta?.[0]?.link}`}>
                  <a target="_blank" rel="noopener noreferrer">
                    <div className="bg-[#8F1A1D] hover:bg-[#79210d] rounded-[8px] transition-all duration-300">
                      <button className=" flex gap-[16px] py-[16px] px-[29px] font-[600] ff-overpass uppercase text-[#ffff]">
                        <h4 className="text-[14px]">
                          {data?.cta?.[0]?.name}
                        </h4>
                        <ArrowBox />
                      </button>
                    </div>
                  </a>
                </Link>

                <Link legacyBehavior href={`${data?.cta?.[1]?.link}`}>
                  <a target="_blank" rel="noopener noreferrer">
                    <div className="border-[1px] opacity-[0.8] border-[#8F1A1D] rounded-[8px] mt-[12px] lg:mt-0">
                      <button className=" flex gap-[16px] py-[16px] px-[30px] font-[600] ff-overpass uppercase text-[#8F1A1D]">
                        <PhoenRed />
                        <h4 className="text-[14px]">
                          {data?.cta?.[1]?.name}
                        </h4>
                      </button>
                    </div>
                  </a>
                </Link>
              </div>
            </div>

            <div className="z-10 mt-[40px]">
              <Image
                  src={imageResolver(data?.img)?.path}
                  loader={() => imageResolver(data?.img)?.path}
                  width={607}
                  height={0}
                  className="object-contain w-full h-[173px] sm:h-[308px]"
                  alt={data?.img?.data?.attributes?.alternativeText}
              />
            </div>
          </div>

          <div>
            <Image
                className="hidden xl:absolute right-0 top-0 z-0"
                src={"/images/Layer19.png"}
                height={761}
                width={762}
                alt="Layer19"
            />
          </div>

          <div className="hidden xl:block">
            <Image
                src="/images/about-us/Vector1.png"
                width={205}
                height={112}
                alt="Vector1"
                className="absolute top-[130px] left-[-145px]"
            />
          </div>
        </section>
    );
  }

};
