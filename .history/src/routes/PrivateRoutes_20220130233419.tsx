import { Routes , Route } from "react-router-dom";
import LayoutPrivate from "../components/layouts/private/LayoutPrivate";

const PrivateRoutes = () => {
	return (
		<LayoutPrivate>
			<Routes >
                <Route path="/home">
					<Home />{" "}
				</Route>
			</Routes>
		</LayoutPrivate>
	);
};

export default PrivateRoutes;