import React from 'react';
import '../resource/navbar.css';

import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";

import {AuthContext} from "../../../../api/auth/AuthContext";
import {types} from "../../../../types/types";


const LayoutPublicNavbar = () => {
    
    // const dispatch = useDispatch();
    // const { name } = useSelector( state => state.auth );

    // const handleLogout = () => {
    //     dispatch( startLogout() );
    // }

    //  Ocultar el navbar modo acordion
    const [toggleMenu, setToggleMenu] = useState(false);

    //  Redireccionar
    const navigate = useNavigate();

    //  Obtener el estado de la sesion
    const {user, dispatch} = useContext(AuthContext);

    //  Presionar desconectar
    const handleLogout = () =>{
        //  Cambiar el estado de la sesion
        dispatch({
            type: types.logout
        });

        //  Redireccionar
        navigate('/',{replace:true});
    };

    return (
        
        <nav className="app__navbar">

            <div className="app__navbar-logo">
                <img src="algo.jpg" alt="app__logo" />
            </div>

            <ul className="app__navbar-links">
                <NavLink
                    className={ ({isActive}) => "p__opensans" + (isActive ? " active" : "")}
                    to="/"
                >
                    Home
                </NavLink>
                <NavLink
                    className={ ({isActive}) => "p__opensans" + (isActive ? " active" : "")}
                    to="/tier-list"
                >
                    Tier List
                </NavLink>
                <NavLink
                    className={ ({isActive}) => "p__opensans" + (isActive ? " active" : "")}
                    to="/list-decks"
                >
                    List Decks
                </NavLink>
                <NavLink
                    className={ ({isActive}) => "p__opensans" + (isActive ? " active" : "")}
                    to="/list-cards"
                >
                    List Cards
                </NavLink>
                <NavLink
                    className={ ({isActive}) => "p__opensans" + (isActive ? " active" : "")}
                    to="/list-paks"
                >
                    List Packs
                </NavLink>
                <NavLink
                    className={ ({isActive}) => "p__opensans" + (isActive ? " active" : "")}
                    to="/deck-builder"
                >
                    Deck Builder
                </NavLink>

                {
                    (user.rol === "1") &&
                        (
                            <>
                                <NavLink
                                className={ ({isActive}) => "p__opensans" + (isActive ? " active" : "")}
                                to="/menu-card"
                                >
                                    Menu Card
                                </NavLink>
                                <NavLink
                                className={ ({isActive}) => "p__opensans" + (isActive ? " active" : "")}
                                to="/menu-top"
                                >
                                    Menu Top
                                </NavLink>
                                <NavLink
                                className={ ({isActive}) => "p__opensans" + (isActive ? " active" : "")}
                                to="/menu-user"
                                >
                                    Menu User
                                </NavLink>
                            </>
                        )
                }
                
                <NavLink
                    className={ ({isActive}) => "p__opensans" + (isActive ? " active" : "")}
                    to="/contact"
                >
                    Contacto
                </NavLink>
            </ul>

            <div className="app__navbar-login">
                
                {
                    (user.logged)
                    ? <Link to="/" onClick={handleLogout}> Desconectar </Link>
                    : <><Link to="/login" > Iniciar Sesión </Link> <div /> <Link to="/register" > Registrarse </Link></>
                }

            </div>

            <div className="app__navbar-smallscreen">
                <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />

                {toggleMenu && (
                    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                        <MdOutlineClose fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
                        <ul className="app__navbar-smallscreen_links">
                            <li><NavLink
                                className={ ({isActive}) => isActive && " active"}
                                onClick={() => setToggleMenu(false)}
                                to="/"
                            >
                                Home
                            </NavLink></li>
                            <li><NavLink
                                className={ ({isActive}) => isActive && " active"}
                                onClick={() => setToggleMenu(false)}
                                to="/tier-list"
                            >
                                Tier List
                            </NavLink></li>
                            <li><NavLink
                                className={ ({isActive}) => isActive && " active"}
                                onClick={() => setToggleMenu(false)}
                                to="/list-decks"
                            >
                                List Decks
                            </NavLink></li>
                            <li><NavLink
                                className={ ({isActive}) => isActive && " active"}
                                onClick={() => setToggleMenu(false)}
                                to="/list-cards"
                            >
                                List Cards
                            </NavLink></li>
                            <li><NavLink
                                className={ ({isActive}) => isActive && " active"}
                                onClick={() => setToggleMenu(false)}
                                to="/list-paks"
                            >
                                List Packs
                            </NavLink></li>
                            <li><NavLink
                                className={ ({isActive}) => isActive && " active"}
                                onClick={() => setToggleMenu(false)}
                                to="/deck-builder"
                            >
                                Deck Builder
                            </NavLink></li>
                            <li><NavLink
                                className={ ({isActive}) => isActive && " active"}
                                onClick={() => setToggleMenu(false)}
                                to="/contact"
                            >
                                Contacto
                            </NavLink></li>

                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default LayoutPublicNavbar;
