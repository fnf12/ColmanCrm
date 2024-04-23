import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
export type ClienteId = string

const DEFAULT_STATE = [
  {
    id: 'CL213',
    nombre: 'Eduardo',
    apellido: 'Roca',
    email: 'correo@gmail.com',
    telefono: '12345674',
    estado: 'Contactado',
    asignado: 'Juan',
    fechaC: '22/01/2024'
  },
  {
    id: 'CL216',
    nombre: 'Alvaro',
    apellido: 'Altamirano',
    email: 'correo2@correo.com',
    telefono: '4123525436',
    estado: 'Contactado',
    asignado: 'Pedro',
    fechaC: '28/01/2023'
  },
  {
    id: 'CL219',
    nombre: 'Lucas',
    apellido: 'Estrada',
    email: 'correo1312@gmail.com',
    telefono: '138979999',
    estado: 'No Contactado',
    asignado: 'Juan',
    fechaC: '12/02/2023'
  },
  {
    id: 'CL221',
    nombre: 'Carlos',
    apellido: 'Gutierrez',
    email: 'correo@outlook.com',
    telefono: '456664321',
    estado: 'Contactado',
    asignado: 'Pepe',
    fechaC: '23/02/2024'
  },
  {
    id: 'CL225',
    nombre: 'Alicia',
    apellido: 'Paredes',
    email: 'elcorreo2@gmail.com',
    telefono: '844432221',
    estado: 'No Contactado',
    asignado: 'Ricardo',
    fechaC: '27/02/2024'
  },
  {
    id: 'CL230',
    nombre: 'David',
    apellido: 'Correa',
    email: 'dav_correo@gmail.com',
    telefono: '5348741323',
    estado: 'No Contactado',
    asignado: 'Sin Asignar',
    fechaC: '01/03/2024'
  }
]
export interface Cliente {
  nombre: string
  apellido: string
  telefono: string
  email: string
  estado: string
  asignado: string
  fechaC: string
}

export interface ClienteWithId extends Cliente {
  id: ClienteId
}

const initialState: ClienteWithId[] = (() => {
  const persistedState = localStorage.getItem('__redux__state__')
  if (persistedState != null) {
    return JSON.parse(persistedState).clientes
  }
  return DEFAULT_STATE
})()

export const clientesSlice = createSlice({
  name: 'clientes',
  initialState,
  reducers: {
    addNewCliente: (state, action: PayloadAction<Cliente>) => {
      const lastId = state[state.length - 1].id.slice(2)
      const id = 'CL' + (parseInt(lastId) + 1)
      return [...state, { id, ...action.payload }]
    },
    editACliente: (state, action: PayloadAction<ClienteWithId>) => {
      const cliente = action.payload
      return state.map(item => item.id === cliente.id ? cliente : item)
    },
    deleteClientesById: (state, action: PayloadAction<ClienteId>) => {
      const id = action.payload
      return state.filter(cliente => cliente.id !== id)
    }
  }
})

export default clientesSlice.reducer

export const { addNewCliente, editACliente, deleteClientesById } = clientesSlice.actions
