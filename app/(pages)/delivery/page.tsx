import { getCommonPage } from '@/api/service'
import DeliveryDetailsContainer from "@/container/CommonPageContainer/deliveryDetails"
import React from 'react'

const DeliveryPage = async() => {


  const commonPromise = await getCommonPage("4");

  const [commonInfo] = await Promise.all([commonPromise]);


  return <DeliveryDetailsContainer commonInfo={commonInfo} />;
}

export default DeliveryPage