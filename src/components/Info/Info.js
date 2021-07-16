import React from "react";
import "./Info.css";

function Info({ ip, location, isp, timezone, text }) {
	// const { city, country, region } = location;
	return (
		<div className="info">
			<h5>{text}</h5>
			<p>
				{ip
					? ip
					: location
					? `${location.city}, ${location.country}\n${location.postalCode}`
					: isp
					? isp
					: timezone
					? "UTC " + timezone.timezone
					: null}
			</p>
		</div>
	);
}

export default Info;
