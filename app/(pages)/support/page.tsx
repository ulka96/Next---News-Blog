import { getCommonPage } from '@/api/service';
import SupportContainer from '@/container/CommonPageContainer/customerSupport';
import React from 'react'

const SupportPage = async() => {

      const commonPromise = await getCommonPage("5");

      const [commonInfo] = await Promise.all([commonPromise]);

  return <SupportContainer commonInfo={commonInfo} />;
}

export default SupportPage;