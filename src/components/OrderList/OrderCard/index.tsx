import React, { CSSProperties } from 'react';
import { OrderView } from '@/models/interfaces/order';
import style from './style.module.scss';

interface Props {
  index: number;
  data: OrderView[];
  style: CSSProperties;
}

const OrderCard = (props: Props) => {
  const order = props.data[props.index];
  return (
    <li className={style.orderCard} style={props.style}>
      <p className={style.orderCard__name}>Client Name: { order.clientName }</p>
      <p className={style.orderCard__price}>Price: { order.price }</p>
      <p className={style.orderCard__type}>Order Type: { order.type }</p>
    </li>
  )
}

export default OrderCard;
