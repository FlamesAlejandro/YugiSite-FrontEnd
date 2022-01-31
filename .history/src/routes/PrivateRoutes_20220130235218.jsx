import { Routes , Route } from "react-router-dom";
import LayoutPrivate from "../components/layouts/private/LayoutPrivate";
import Home from "../components/pages/home/home";

const PrivateRoutes = () => {
	return (
		<LayoutPrivate>
			<Routes >
                <Route path="/Home">
					<Home />{" "}
				</Route>
			</Routes>
		</LayoutPrivate>
	);
};

export default PrivateRoutes;