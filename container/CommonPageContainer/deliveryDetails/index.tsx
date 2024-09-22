import Delivery from '@/components/commonPageComponents/delivery-details';
import { ICommonPage } from '@/types/type';
import React from 'react'

interface IProps {
  commonInfo: ICommonPage;
}

const DeliveryDetailsContainer = ({ commonInfo }: IProps) => {
  return (
    <main>
      <Delivery commonInfo={commonInfo} />
    </main>
  );
};

export default DeliveryDetailsContainer;