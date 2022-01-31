import { Switch, Route } from "react-router-dom";
import LayoutPublic from "../components/layouts/public/LayoutPublic";

const PublicRoutes = () => {
	return (
		<LayoutPublic>
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
		</LayoutPublic>
};
export default PublicRoutes;
