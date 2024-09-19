import TermsAndConditions from "@/components/commonPageComponents/terms-conditions";
import { ICommonPage } from "@/types/type";
import React from "react";

interface IProps {
  termsInfo: ICommonPage;
}

const TermsAndConditionsContainer = ({ termsInfo }: IProps) => {
  return (
    <main>
      <TermsAndConditions termsInfo= {termsInfo}/>
    </main>
  );
};

export default TermsAndConditionsContainer;
