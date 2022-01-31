import { Routes , Route } from "react-router-dom";
import LayoutPrivate from "../components/layouts/private/LayoutPrivate";

const PrivateRoutes = () => {
	return (
		<LayoutPrivate>
			<Routes >
				<Route strict path="/home">
					<Home />{" "}
				</Route>
				<Route strict path="/List">
					<List />{" "}
				</Route>
				<Route strict path="/Usuarios">
					<Usuarios />{" "}
				</Route>
			</Routes>
		</LayoutPrivate>
	);
};

export default PrivateRoutes;