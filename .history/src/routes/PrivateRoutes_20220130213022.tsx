import { Switch, Route } from "react-router-dom";

const RoutesPublic = () => {
	return (
		<Switch>
			<Route exact path="/view/:id">
				<DataViewer />
			</Route>
			<Route exact path="/">
				<Login />
			</Route>

			<Route path="*">
				<Login />
			</Route>
		</Switch>
	);
};
export default RoutesPublic;
