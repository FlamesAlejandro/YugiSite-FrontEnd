import { Routes , Route } from "react-router";
import LayoutPublic from "../components/layouts/public/LayoutPublic";
import Home from "../components/pages/home/Home";

const PublicRoutes = () => {
	return (
		<LayoutPublic>
			<Routes >
                <Route path="Home">
					<Home />{" "}
				</Route>
			</Routes>
		</LayoutPublic>
    )
};
export default PublicRoutes;
