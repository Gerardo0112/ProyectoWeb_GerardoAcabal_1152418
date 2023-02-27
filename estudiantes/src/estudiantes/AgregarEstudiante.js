import React, { useState } from 'react'
import uniquid from 'uniqid'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

export const AgregarEstudiante = () => {

    //Hooks
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')

    const navegar = useNavigate();

    function agregarEstudiante() {
        var estudiante = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            idestudiante: uniquid(),
        }
        console.log(estudiante);

        axios.post('/api/estudiante/agregarestudiante', estudiante)
            .then(res => {
                // alert(res.data)
                Swal.fire('Felicidades', 'El usuario se creó con éxito')
                navegar('/')
            })
            .then(err => { console.log(err); })
    }

    return (
        <div className='container'>
            <div className='row'>
                <h2 className='mt-4'>Crear un nuevo estudiante</h2>
            </div>

            <div className='row'>
                <div className='col-sm-6 offset-3'>
                    <div className='mb-3'>
                        <label htmlFor="nombre" className='form-label'>Nombre</label>
                        <input type="text" className='form-control' value={nombre} onChange={(e) => { setNombre(e.target.value) }}></input>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="email" className='form-label'>Email</label>
                        <input type="email" className='form-control' value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
                    </div>


                    <div className='mb-3'>
                        <label htmlFor="telefono" className='form-label'>Teléfono</label>
                        <input type="email" className='form-control' value={telefono} onChange={(e) => { setTelefono(e.target.value) }}></input>
                    </div>

                    <button onClick={agregarEstudiante} className='btn btn-success'>Guardar Usuario</button>
                </div>
            </div>
        </div>
    )
}
