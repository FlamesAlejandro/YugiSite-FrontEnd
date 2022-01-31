import { Switch, Route } from "react-router-dom";
import LayoutPublic from "../components/layouts/public/LayoutPublic";

const PublicRoutes = () => {
	return (
		<LayoutPublic>
			<Switch>
            <Route strict path="/home">
					<Home />{" "}
				</Route>
			</Switch>
		</LayoutPublic>
    )
};
export default PublicRoutes;
