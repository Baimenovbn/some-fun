import React from 'react';

import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster';
import 'react-leaflet-markercluster/dist/styles.min.css';

import CreateClusterIcon from '@/components/Map/CreateClusterIcon';
import style from './style.module.scss';
import { OrderView } from '@/models/interfaces/order';
import { ALMATY_LATITUDE, ALMATY_LONGITUDE } from '@/constants/map-constants';

interface Props {
  orderViews: OrderView[]
}

export const Map = (props: Props) => {
  return (
    <MapContainer className={style.mapContainer} center={[ALMATY_LATITUDE, ALMATY_LONGITUDE]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup
        iconCreateFunction={CreateClusterIcon}
        spiderLegPolylineOptions={{
          weight: 0,
          opacity: 0,
        }}
      >
        { props.orderViews.map((order) => (
          <Marker key={order.id} position={[order.coords.lat, order.coords.long]}>
            <Tooltip className={style.tooltip}>
              <h2>ID: {order.id}</h2>
              <p>Client Name: {order.clientName}</p>
              <p>Price: {order.price}</p>
            </Tooltip>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  )
}

export default Map;
