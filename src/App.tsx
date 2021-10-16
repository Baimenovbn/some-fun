import React from 'react';
import style from './style.module.scss';
import OrderList from '@/components/OrderList';
import Map from '@/components/Map';
import { getOrderViews } from '@/helpers';

const orderViews = getOrderViews();

const NeRelog = () => {
  return (
    <div className={style.contentContainer}>
      <OrderList orderViews={orderViews} />
      <Map orderViews={orderViews} />
    </div>
  );
}

export default NeRelog;
