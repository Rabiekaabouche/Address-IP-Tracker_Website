import React, { useState, useEffect } from "react";
import Bar from "../Bar/Bar";
import "./Header.css";

function Header({ fetchApi, dataApi }) {
	const [formData, setFormData] = useState("");

	useEffect(() => {
		console.log(formData);
	}, [formData]);

	const handleChange = (e) => {
		setFormData(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		fetchApi(formData);
		setFormData("");
	};

	return (
		<div className="header">
			<h2>IP Address Tracker</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Search for any IP address or domain"
					value={formData}
					onChange={handleChange}
				/>
				<button type="submit">&gt;</button>
			</form>
			<Bar data={dataApi} />
		</div>
	);
}

export default Header;
