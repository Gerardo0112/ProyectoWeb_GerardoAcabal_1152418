import axios from 'axios'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Swal from 'sweetalert2'

export const EstudianteIndividual = ({ estudiante }) => {

    const navegar = useNavigate()

    //Para animación de scroll al bajar
    useEffect(() => {
        AOS.init()
    }, [])


    //Funcion para borrar estudiante
    function borrarestudiante(idestudiante) {
        axios.post('/api/estudiante/borrarestudiante', { idestudiante: idestudiante }).then(res => {
            console.log(res.data);
            // alert(res.data)
            Swal.fire('Felicidades', 'El usuario se eliminó con éxito')
            navegar(0)
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div className='container'>
            <div className='row'>

                <div className='col-sm-6 offset-3' data-aos="flip-right">
                    <ul className='list-group'>
                        <li className='list-group-item'>{estudiante.idestudiante}</li>
                        <li className='list-group-item'>{estudiante.nombre}</li>
                        <li className='list-group-item'>{estudiante.email}</li>
                        <li className='list-group-item'>{estudiante.telefono}</li>
                    </ul>
                    <Link to={`/editarestudiante/${estudiante.idestudiante}`}><li className='btn btn-success'>Editar</li></Link>
                    &nbsp;
                    <button className='btn btn-danger' onClick={() => { borrarestudiante(estudiante.idestudiante) }}>Borrar</button>
                    <hr className='mt-4'></hr>
                </div>
            </div>
        </div>
    )
}
