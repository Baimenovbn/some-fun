import { FixedSizeList as List } from 'react-window';
import style from './style.module.scss';
import OrderCard from '@/components/OrderList/OrderCard';
import React from 'react';
import { OrderView } from '@/models/interfaces/order';

function itemKey(index: number, data: OrderView[]) {
  return data[index].id;
}

interface Props {
  orderViews: OrderView[]
}

const OrderList = (props: Props) => {
  return (
    <section className={style.orderContainer}>
      <List
        itemData={props.orderViews}
        itemSize={100}
        itemKey={itemKey}
        itemCount={props.orderViews.length}
        className={style.orders}
        height={500}
        width={'100%'}
      >
        {OrderCard}
      </List>
    </section>
  )
}

export default OrderList;
