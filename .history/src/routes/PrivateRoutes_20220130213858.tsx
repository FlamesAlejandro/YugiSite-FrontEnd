import { Switch, Route } from "react-router-dom";

const RoutesPrivate = () => {
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
				<Route strict path="/Carros">
					<Carros />{" "}
				</Route>
				<Route strict path="/Camionero">
					<Camionero />{" "}
				</Route>
				<Route strict path="/EmpresaCamion">
					<EmpresaCamion />{" "}
				</Route>
				<Route strict path="/Marca">
					<Marca />{" "}
				</Route>
				<Route strict path="/Modelo">
					<Modelo />{" "}
				</Route>

				<Route path="*">
					<Home />{" "}
				</Route>
			</Switch>
		</LayoutPrivate>
	);
};