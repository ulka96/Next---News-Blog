import PrivacyPolicy from '@/components/commonPageComponents/privacy-policy'
import { ICommonPage } from '@/types/type';
import React from 'react'

interface IProps {
  commonInfo: ICommonPage;
}

const PrivacyPolicyContainer = ({ commonInfo }: IProps) => {
  return (
    <main>
      <PrivacyPolicy commonInfo={commonInfo} />
    </main>
  );
};

export default PrivacyPolicyContainer