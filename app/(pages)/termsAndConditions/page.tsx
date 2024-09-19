import { getCommonPage } from "@/api/service";
import TermsAndConditionsContainer from "@/container/CommonPageContainer/termsAndConditions";
import React from "react";

interface IParams {
  params: { id: string };
}

const TermsAndConditionsPage = async () => {
  const termsPromise = await getCommonPage("2");

  const [termsInfo] = await Promise.all([termsPromise]);

  return <TermsAndConditionsContainer termsInfo={termsInfo} />;
};

export default TermsAndConditionsPage;
