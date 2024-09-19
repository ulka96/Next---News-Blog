import React from "react";
import Image from "next/image";
import { ICommonPage } from "@/types/type";

interface IProps {
  aboutInfo: ICommonPage;
}

const TermsAndConditions = ({ aboutInfo }: IProps) => {
  return (
    <section className="w-full h-[500px] relative mt-10 ">
      <div>
        <div className="w-full h-[500px] absolute">
          <div className="w-full h-[500px] relative">
            <Image
              src={aboutInfo.coverImage}
              alt="img"
              fill={true}
              className="object-cover object-center absolute !z-0"
            />
          </div>
        </div>
        <div className="p-10">
          <h1 className="relative !z-10 text-[30px] font-bold text-white mb-4">
            {aboutInfo.title}
          </h1>
          <h2 className="relative !z-10 text-[20px]">
            {aboutInfo.description}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
