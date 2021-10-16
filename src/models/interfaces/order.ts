import { OrderCoords } from '@/models/interfaces/order-coords';

export interface Order {
  id: number;
  type: 'delivery' | 'pickup' | string,
  price: number;
  coords: OrderCoords;
  client_id: number;
}

export interface OrderView extends Order {
  clientName: string;
}
