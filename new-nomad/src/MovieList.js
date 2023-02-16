import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";

import Home from "./routes/Home";
import Detail from "./routes/Detail";

function MovieList() {
	return (
		<Router>
			<Routes basename={process.env.PUBLIC_URL}>
				<Route path={`${process.env.PUBLIC_URL}/movie/:id`} element={<Detail />} />
				<Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
			</Routes>
		</Router>
	);
}


export default MovieList;