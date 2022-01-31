import React from 'react';
import '../resource/navbar.css';

export const LayoutPrivateNavbar = () => {
    
    // const dispatch = useDispatch();
    // const { name } = useSelector( state => state.auth );

    // const handleLogout = () => {
    //     dispatch( startLogout() );
    // }

    return (
        <header>
            <img className='logo' src='../resource/logo.png' alt='logo' />
            <nav>
                <ul className='nav__links'>
                    <li><a href='/'>Top Decks</a></li>
                    <li><a href='/'>Deck Builder</a></li>
                    <li><a href='/'>Decks Populares</a></li>
                    <li><a href='/'>Contacto</a></li>
                </ul>
            </nav>
            <a className='boton-navbar' href='/'>button>Ingresar</button></a>
        </header>
    )
};
