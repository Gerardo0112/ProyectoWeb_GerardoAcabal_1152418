import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const HomeScreen = () => {

    const navegar = useNavigate();

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h1>Bienvenido</h1>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Usuario</label>
                            <input type='text' className="form-control" id='username' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Contraseña</label>
                            <input type='password' className="form-control" id='password' />
                        </div>
                        <button type="submit" className="btn btn-primary" >Ingresar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

