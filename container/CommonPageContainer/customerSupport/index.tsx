import Support from '@/components/commonPageComponents/customer-support'
import { ICommonPage } from '@/types/type';
import React from 'react'

interface IProps {
  commonInfo: ICommonPage;
}

const SupportContainer = ({ commonInfo }: IProps) => {
  return (
    <main>
      <Support commonInfo={commonInfo} />
    </main>
  );
};

export default SupportContainer