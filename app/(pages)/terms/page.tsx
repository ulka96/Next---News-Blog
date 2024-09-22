import { getCommonPage } from "@/api/service";
import TermsAndConditionsContainer from "@/container/CommonPageContainer/termsAndConditions";
import React from "react";


const TermsAndConditionsPage = async () => {

  const termsPromise = await getCommonPage("2");

  const [termsInfo] = await Promise.all([termsPromise]);

  console.log(termsInfo);
  

  return <TermsAndConditionsContainer termsInfo={termsInfo} />;
};

export default TermsAndConditionsPage;
