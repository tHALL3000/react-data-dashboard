class Api {
	_checkResReturnJson(res) {
		if (
			res.ok
		) {
			return res.json();
		}
		return Promise.reject(
			`Error: ${res.status}`
		);
	}

	getChartDataApi() {
		return fetch(
			"http://localhost:5601/api/saved_objects/visualization/90943e30-9a47-11e8-b64d-95841ca0b247",
			{
				method: "GET",
				// headers: "Content-Type": "application/json",
			}
		).then(
			(
				res
			) =>
				this._checkResReturnJson(
					res
				)
		);
	}
}
export default Api;
