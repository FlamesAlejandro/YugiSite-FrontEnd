import { Routes , Route } from "react-router";
import LayoutPublic from "../components/layouts/public/LayoutPublic";
import Home from "../components/pages/home/home";

const PublicRoutes = () => {
	return (
		<LayoutPublic>
			<Routes >
            <Route path="*">
					<Home />{" "}
				</Route>
			</Routes>
		</LayoutPublic>
    )
};
export default PublicRoutes;
