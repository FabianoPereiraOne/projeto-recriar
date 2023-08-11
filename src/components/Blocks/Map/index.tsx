
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet/dist/leaflet.css';
//@ts-ignore
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

const Map = () => {
 return (
  <MapContainer center={[-19.9314774, -44.1683558]} zoom={20} style={{ height: '100%', width: '100%' }}>
   <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
   />
   <Marker position={[-19.9314774, -44.1683558]}>

   </Marker>
  </MapContainer>
 )
}

export default Map