import { getCommonPage } from '@/api/service';
import PrivacyPolicyContainer from '@/container/CommonPageContainer/privacyPolicy';
import React from 'react'

const PrivacyPolicyPage = async() => {
  
  const commonPromise = await getCommonPage("3");

  const [commonInfo] = await Promise.all([commonPromise]);

  return <PrivacyPolicyContainer commonInfo={commonInfo} />;
}

export default PrivacyPolicyPage