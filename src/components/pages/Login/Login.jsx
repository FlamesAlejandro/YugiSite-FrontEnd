import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import {ApiAuth} from "../../../api/data/Auth";
import {AuthContext} from "../../../api/auth/AuthContext";
import { useForm } from "../../../hooks/useForm";
import {types} from "../../../types/types";
import "./Resource/Login.css"

const Login = () => {

    // Devolver al usuario a la ultima pestaña
    // const navigate = useNavigate();
    
    // Trabajar con el estado del usuario (login/logged...)
    const {dispatch} = useContext(AuthContext);

    // Trabajar el formulario
    const [formValues, handleInputChange, reset] = useForm({
        userText: '',
        passText: ''
    });

    // Desestructurar el formValues
    const {userText, passText} = formValues;

    // Evento de submit del form
    const handleSubmit = (e) => {
        e.preventDefault();

        // Asignamos la data a enviar
        const data = {
            correo: userText,
            password: passText,
        }
        
        console.log(data);
        // Enviamos al backend para comprobar el usuario
        ApiAuth.PostLogin(data).then((resp) => {
            console.log(resp);
            if ( resp.data.success ) {
                
                // La respuesta contiene más data, como el rol y el token
                const authData = {
                    ...resp.data
                }

                // Enviar al reducer
                const action = {
                    type: types.login,
                    payload: {authData}
                };

                // Modificamos el estado de sesion
                dispatch(action);

                reset();
        
                // // Obtenemos la ultima pagina visitada del usuario
                // const lastPath = localStorage.getItem('lastPath') || '/';
        
                // // Movemos al usuario a la ultima pagina
                // navigate(lastPath, {replace:true});

            }
            else {
                // alerta
        }
        })
            
    
            



    }

    return (
        <>
            <div className="container">
                <div className="screen">
                    <div className="screen__content">
                        <form className="login" onSubmit={handleSubmit}>
                            <div className="login__field">
                                <i className="login__icon fas fa-user"></i>
                                <input
                                    type='text'
                                    placeholder='User name / Email'
                                    className='login__input'
                                    name='userText'
                                    autoComplete='off'
                                    value={userText}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-lock"></i>
                                <input
                                    type='password'
                                    placeholder='Password'
                                    className='login__input'
                                    name='passText'
                                    autoComplete='off'
                                    value={passText}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <button className="button login__submit">
                                <span className="button__text">Log In Now</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button>				
                        </form>
                        <div className="social-login">
                            <h3>log in via</h3>
                            <div className="social-icons">
                                {/* <a href="#" className="social-login__icon fab fa-instagram"></a>
                                <a href="#" className="social-login__icon fab fa-facebook"></a>
                                <a href="#" className="social-login__icon fab fa-twitter"></a> */}
                            </div>
                        </div>
                    </div>
                    <div className="screen__background">
                        <span className="screen__background__shape screen__background__shape4"></span>
                        <span className="screen__background__shape screen__background__shape3"></span>		
                        <span className="screen__background__shape screen__background__shape2"></span>
                        <span className="screen__background__shape screen__background__shape1"></span>
                    </div>		
                </div>
            </div>
        </>

    );
};

export default Login;