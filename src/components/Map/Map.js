import React from "react";
import "./Map.css";
import "leaflet/dist/leaflet.css";
import Leaflet from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import LocationMarker from "../LocationMarker";

// Leaflet.Icon.Default.imagePath =
// 	"//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/";

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
	iconRetinaUrl: iconRetina,
	iconUrl: icon,
	shadowUrl: iconShadow,
});

function Map({ dataApi }) {
	const { location } = dataApi;

	console.log(location);

	const position = [location && location.lat, location && location.lng];

	return (
		<MapContainer center={position} zoom={4} scrollWheelZoom={true}>
			<LocationMarker position={position} />
			<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={position}>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker>
			<LocationMarker />
		</MapContainer>
	);
}

export default Map;
