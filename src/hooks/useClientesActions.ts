import { type ClienteId, deleteClientesById, addNewCliente, type Cliente, type ClienteWithId, editACliente } from '../store/clientes/slice'
import { useAppDispatch } from './store'

export const useClientesActions = (): any => {
  const dispatch = useAppDispatch()

  const addCliente = ({ nombre, apellido, telefono, email }: Cliente): void => {
    const estado = 'No contactado'
    const asignado = 'Sin Asignar'
    const fechaC = (new Date()).toLocaleDateString()
    dispatch(addNewCliente({ nombre, apellido, telefono, email, estado, asignado, fechaC }))
  }
  const editCliente = (cliente: ClienteWithId): void => {
    dispatch(editACliente(cliente))
  }
  const removeCliente = (id: ClienteId): void => {
    dispatch(deleteClientesById(id))
  }

  return { addCliente, editCliente, removeCliente }
}
