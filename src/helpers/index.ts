import mainClients from '../data/main/NeRelog_clients.json';
import { Client } from '@/models/interfaces/client';
import { Order, OrderView } from '@/models/interfaces/order';
import mainOrders from '@/./data/main/NeRelog_apps.json';
import additionalOrders from '@/./data/additional/NeRelog_apps.json';
import additionalClients from '@/./data/additional/NeRelog_clients.json';

export function getOrderViews(): OrderView[] {
  let clientNames = new Map<number, string>();
  additionalClients.forEach((client: Client) => {
    clientNames.set(client.id, client.name);
  })

  return additionalOrders.map((order: Order) => ({
    ...order,
    clientName: clientNames.get(order.client_id) || 'This order has no client name'
  }))
}
