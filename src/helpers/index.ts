import mainClients from '../../data/main/NeRelog_clients.json';
import { Client } from '@/models/interfaces/client';
import { Order, OrderView } from '@/models/interfaces/order';
import mainOrders from '@/../data/main/NeRelog_apps.json'

export function getOrderViews(): OrderView[] {
  let clientNames = new Map<number, string>();
  mainClients.forEach((client: Client) => {
    clientNames.set(client.id, client.name);
  })

  return mainOrders.map((order: Order) => ({
    ...order,
    clientName: clientNames.get(order.client_id) || 'This order has no name'
  }))
}
