import React from 'react';
import style from './style.module.scss';
import OrderCard from '@/components/OrderCard';
import { getOrderViews } from '@/helpers';
import { OrderView } from '@/models/interfaces/order';
import { FixedSizeList as List } from 'react-window';

// const orderViews = useMemo<OrderView[]>(() => getOrderViews(), []);
const orderViews = getOrderViews();
// { orderViews.map((item: OrderView) => <OrderCard key={item.id} {...item} />) }

function itemKey(index: number, data: OrderView[]) {
  return data[index].id;
}

const NeRelog = () => {
  return (
    <div className={style.contentContainer}>
      <section className={style.orderContainer}>
        <List
          itemData={orderViews}
          itemSize={100}
          itemKey={itemKey}
          itemCount={orderViews.length}
          className={style.orders}
          height={500}
          width={'100%'}
        >
          {OrderCard}
        </List>
      </section>
      <section>
        Map
      </section>
    </div>
  );
}

export default NeRelog;
