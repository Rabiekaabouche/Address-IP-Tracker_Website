import React, { useEffect, useState } from "react";
import "./Container.css";
import Header from "../Header/Header";
import Loading from "../Loading/Loading";
import Map from "../Map/Map";
import axios from "axios";

const KEY_API = process.env.REACT_APP_ID_API_KEY;

function Container() {
	const [dataApi, setDataApi] = useState({});
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		axios
			.get(`https://geo.ipify.org/api/v1?apiKey=${KEY_API}&ipAddress=8.8.8.8`)
			.then((data) => {
				setDataApi(data.data);
				setLoading(false);
			});
	}, []);

	const fetchApi = (data) => {
		axios
			.get(
				`https://geo.ipify.org/api/v1?apiKey=${KEY_API}&ipAddress=${data}&domain=${data}`
			)
			.then((res) => {
				const data = res.data;
				setDataApi(data);
			});
	};
	return (
		<div className="container">
			{loading ? (
				<Loading />
			) : (
				<>
					<Header fetchApi={fetchApi} dataApi={dataApi} />
					<Map dataApi={dataApi} />
				</>
			)}
		</div>
	);
}

export default Container;
