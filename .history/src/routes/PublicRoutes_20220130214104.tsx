import { Switch, Route } from "react-router-dom";
import LayoutPrivate from "../components/layouts/public/LayoutPublic";

const PublicRoutes = () => {
	return (
		<Switch>
			<Route exact path="/view/:id">
				
			</Route>
			<Route exact path="/">
				
			</Route>

			<Route path="*">
				
			</Route>
		</Switch>
	);
};
export default PublicRoutes;
