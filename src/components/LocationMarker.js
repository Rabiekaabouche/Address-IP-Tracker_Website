import React, { useState } from "react";
import { Marker, Popup, useMap, useMapEvents } from "react-leaflet";
import L from "leaflet";

function LocationMarker(props) {
	const [position, setPosition] = useState(null);
	const pos = L.latLng(props.position);
	const map = useMapEvents({
		locationfound(e) {
			setPosition(e.pos);
			map.flyTo(e.pos, map.getZoom());
		},
	});

	return position === null ? null : (
		<Marker position={position}>
			<Popup>You are here</Popup>
		</Marker>
	);
}

export default LocationMarker;
