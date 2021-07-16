import React from "react";
import "./Bar.css";
import Info from "../Info/Info";

function Bar({ data }) {
	const { ip, location, isp } = data;
	// const { timezone } = location;
	return (
		<div className="bar">
			<Info ip={ip} text="IP ADDRESS" />
			<Info location={location} text="LOCATION" />
			<Info timezone={location} text="TIMEZONE" />
			<Info isp={isp} text="ISP" />
		</div>
	);
}

export default Bar;
