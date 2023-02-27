import axios from 'axios'
import React, { useEffect, useState } from 'react'
import uniquid from 'uniqid'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

export const EditarEstudiante = () => {

    const params = useParams()

    //Hooks
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')

    useEffect(() => {
        axios.post('/api/estudiante/obtenerdataestudiante', { idestudiante: params.idestudiante }).then(res => {
            console.log(res.data[0]);
            const dataestudiante = res.data[0]
            setNombre(dataestudiante.nombre)
            setEmail(dataestudiante.email)
            setTelefono(dataestudiante.telefono)
        })
    }, [])

    //Función que actualiza

    function editarEstudiante() {
        //Nuevo objeto para actualizar el estudiante
        const actualizarestudiante = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            idestudiante: params.idestudiante,
        }

        //Hacer la petición usando axios
        axios.post('/api/estudiante/actualizaestudiante', actualizarestudiante)
            .then(res => {
                console.log(res.data);
                // alert(res.data)
                Swal.fire('Felicidades', 'El usuario se actualizó con éxito')
                navegar('/')
            })
            .then(err => { console.log(err); })
    }

    //Para volver atrás al index
    const navegar = useNavigate()

    return (
        <div className='container'>
            <div className='row'>
                <h2 className='mt-4'>Editar estudiante</h2>
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

                    <button onClick={editarEstudiante} className='btn btn-success'>Actualizar Usuario</button>
                </div>
            </div>
        </div>
    )
}
