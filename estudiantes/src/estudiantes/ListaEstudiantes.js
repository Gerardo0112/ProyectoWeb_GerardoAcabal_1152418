import React, { useEffect, useState } from 'react'
import { EstudianteIndividual } from './EstudianteIndividual'
import axios from 'axios'

export const ListaEstudiantes = () => {

    const [dataestudiantes, setDataestudiantes] = useState([])

    useEffect(() => {
        axios.get('api/estudiante/obtenerestudiantes').then(res => {
            console.log(res.data);
            setDataestudiantes(res.data)
        }).catch(err => {
            console.log(err);
        })
    }, [])

    //Mapear listadeestudiante en objeto estudiante
    const listaestudiantes = dataestudiantes.map(estudiante => {
        return (
            <div>
                <EstudianteIndividual estudiante={estudiante} />
            </div>
        )
    })


    return (
        <div>
            <h2>Lista de estudiantes</h2>
            {listaestudiantes}
        </div>
    )
}
