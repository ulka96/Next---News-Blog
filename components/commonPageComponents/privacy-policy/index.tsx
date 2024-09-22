import React from 'react'
import Image from "next/image";
import { ICommonPage } from "@/types/type";

interface IProps {
  commonInfo: ICommonPage;
}

const PrivacyPolicy = ({ commonInfo }: IProps) => {
  return (
    <section className="w-full h-[500px] relative mt-10 ">
      <div>
        <div className="w-full h-[500px] absolute">
          <div className="w-full h-[500px] relative">
            <Image
              src={commonInfo.cover_image}
              alt="img"
              fill={true}
              className="object-cover object-center absolute !z-0"
            />
          </div>
        </div>
        <div className="p-10">
          <h1 className="relative !z-10 text-[30px] font-bold text-black mb-4">
            {commonInfo.title}
          </h1>
          <h2 className="relative !z-10 text-[20px]">
            {commonInfo.description}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;