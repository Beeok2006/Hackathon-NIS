import { MapContainer, Marker, Popup, TileLayer, LayerGroup, Circle, FeatureGroup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import location from '../../assets/free-icon-location-pin-5836255.png'


const fillRedOptions = { fillColor: 'red' };
const purpleOptions = { color: 'purple' };

const FullScreenMap = () => {  
  return (
    <MapContainer style={{height: '900px'}} center={[46.777, 60.007]} zoom={7} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LayerGroup>
        
        <Circle center={[46.777, 60.007]} pathOptions={fillRedOptions} radius={89000} stroke={false} />
        
      </LayerGroup>
      <FeatureGroup pathOptions={purpleOptions}>
        <Popup>Popup in FeatureGroup</Popup>       
        
      </FeatureGroup>
      <Marker position={[46.777, 60.007]}>
        <Popup >
        <span className='font-bold'>аварийная зона  5км </span>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default FullScreenMap;
