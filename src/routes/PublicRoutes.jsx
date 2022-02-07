/*
    Creacion PublicRoutes

    Verificamos si el usuario esta desconectado para que pueda acceder al login
*/


import { Routes , Route } from "react-router";
import LayoutPublic from "../components/layouts/public/LayoutPublic";
import Home from "../components/pages/home/Home";
import Login from "../components/pages/Login/Login";
import ListCards from "../components/pages/cards/ListCards";
import Contact from "../components/pages/contact/Contact";
import GesCard from "../components/pages/create/GesCard";
import ListDecks from "../components/pages/decks/ListDecks";
import DeckBuilder from "../components/pages/builder/DeckBuilder";
import NoMatch from "../components/pages/nomatch/NoMatch";
import ListPacks from "../components/pages/packs/ListPacks";
import TierList from "../components/pages/tier/TierList";
import GesTop from "../components/pages/top/GesTop";
import MenuUser from "../components/pages/user/MenuUser";

const PublicRoutes = () => {

	return (
		<LayoutPublic>
			<Routes >
                <Route path="*">
					<Login />{" "}
				</Route>
				<Route path="/Home">
					<Home />{" "}
				</Route>
				<Route path="/Login">
					<Login />{" "}
				</Route>
				<Route path="/DeckBuilder">
					<DeckBuilder />{" "}
				</Route>
				<Route path="/ListCards">
					<ListCards />{" "}
				</Route>
				<Route path="/Contact">
					<Contact />{" "}
				</Route>
				<Route path="/GesCard">
					<GesCard />{" "}
				</Route>
				<Route path="/ListDecks">
					<ListDecks />{" "}
				</Route>
				<Route path="/NoMatch">
					<NoMatch />{" "}
				</Route>
				<Route path="/ListPacks">
					<ListPacks />{" "}
				</Route>
				<Route path="/TierList">
					<TierList />{" "}
				</Route>
				<Route path="/GesTop">
					<GesTop />{" "}
				</Route>				
				<Route path="/MenuUser">
					<MenuUser />{" "}
				</Route>
			</Routes>
		</LayoutPublic>
    )
};
export default PublicRoutes;
