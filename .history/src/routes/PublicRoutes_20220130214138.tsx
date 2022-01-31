import { Switch, Route } from "react-router-dom";
import LayoutPrivate from "../components/layouts/public/LayoutPublic";

const PublicRoutes = () => {
	return (
		<LayoutPrivate>
			<Switch>
				<Route strict path="/home">
					<Home />{" "}
				</Route>
				<Route strict path="/List">
					<List />{" "}
				</Route>
				<Route strict path="/Usuarios">
					<Usuarios />{" "}
				</Route>
			</Switch>
		</LayoutPrivate>
};
export default PublicRoutes;
