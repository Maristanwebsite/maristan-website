"use client";
import { Minus } from "@/common/icons/minus";
import { Plus } from "@/common/icons/plus";
import React, { useState } from "react";



export const FaqCards = ({ data }) => {
  const [open, setOpen] = useState(false);
  return (
    <section  className="" onClick={() => setOpen(!open)}>
      <div >
        <div className="pl-[10px] 2xl:pl-0">
          <div className="flex justify-between items-center ">
            <h2
              className={`${
                open ? "text-[#8F1A1D]" : "text-[#2C2C2C]"
              } transition-all duration-300 text-[20px] leading-[24px] ff-convergence`}
            >
              {data?.title}
            </h2>{" "}
            <div>
              <button
                className="flex flex-col justify-center"
                onClick={() => setOpen(!open)}
              >
                {open ? <Minus /> : <Plus />}
              </button>
            </div>
          </div>
          <p
            className={`text-[18px] text-[#625F5A] leading-[24px] transition-all duration-300 ff-overpass ${
              open ? "mt-[12px]" : ""
            }`}
          >
            {open && data?.description}
          </p>
        </div>
      </div>
    </section>
  );
};
