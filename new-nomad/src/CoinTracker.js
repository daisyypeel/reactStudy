import { useEffect, useState } from "react";

function CoinTracker() {
	const [loading, setLoading] = useState(true);
	const [coins, setCoins] = useState([]);
	const [asset, setAsset] = useState("");
	const [exchange, setExchange] = useState(0);

	const onChange = (event) => setAsset(event.target.value);
	const onSubmit = (event) => {
		event.preventDefault();
		
		setAsset("");
		setExchange((currentAsset) => (asset));
	}

	console.log(asset)
	console.log(exchange)

	useEffect(() => {
		fetch("https://api.coinpaprika.com/v1/tickers")
			.then((response) => response
			.json()).then((json) => {
				setCoins(json);
				setLoading(false);
			});
	}, [])
	return (
		<div>
			<h1>The Coins! {loading ? "" : `(${coins.length})`} </h1>
			{loading ? (<strong>Loading...</strong>) : (
				<select>
					{coins.map((coin) => <option key={coin.id}>{coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD</option>)}
				</select>
			)}

			<br/><br/>
			<form onSubmit={onSubmit}>
				<input onChange={onChange} value={asset} type="number" placeholder="write your asset" /> USD
				<hr/>
			</form>
		</div>
	);
}

export default CoinTracker;