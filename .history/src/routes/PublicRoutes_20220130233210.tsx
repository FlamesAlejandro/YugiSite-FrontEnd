import { Switch, Route } from "react-router-dom";
import LayoutPublic from "../components/layouts/public/LayoutPublic";
import Home from "../components/pages/home/home";

const PublicRoutes = () => {
	return (
		<LayoutPublic>
			<Switch>
                <Route path="/home">
					<Home />{" "}
				</Route>
			</Switch>
		</LayoutPublic>
    )
};
export default PublicRoutes;
