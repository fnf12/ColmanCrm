import { RiDeleteBinLine } from '@remixicon/react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Title
} from '@tremor/react'
import { useAppSelector } from '../hooks/store'
import { useClientesActions } from './../hooks/useClientesActions'
import { ClientCreate } from './ClientCreate'
import { ClientShow } from './ClientShow'
import { ClientEdit } from './ClientEdit'

export default function ClientList (): JSX.Element {
  const clientes = useAppSelector(state => state.clientes)
  const { removeCliente } = useClientesActions()
  return (
      <>
      <div className='container bg-tremor-background-muted'>
            <div className="sm:flex sm:items-center sm:justify-between sm:space-x-10 p-2">
                <div>
                    <Title className="font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    Clientes
                    </Title>
                    <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
                    Administra tus Clientes
                    </p>
                </div>
                <ClientCreate/>
            </div>
            <Table className="mt-8 border-t-2">
            <TableHead>
                <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
                <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    Id Cliente
                </TableHeaderCell>
                <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    Fecha Creación
                </TableHeaderCell>
                <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    Nombre
                </TableHeaderCell>
                <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    Apellido
                </TableHeaderCell>
                <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    Estado
                </TableHeaderCell>
                <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    Asignado
                </TableHeaderCell>
                <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                </TableHeaderCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {clientes.map((item) => (
                <TableRow key={item.id}>
                    <TableCell className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    {item.id}
                    </TableCell>
                    <TableCell>{item.fechaC}</TableCell>
                    <TableCell>{item.nombre}</TableCell>
                    <TableCell>{item.apellido}</TableCell>
                    <TableCell className={`${item.estado === 'Contactado' ? 'text-green-600' : 'text-red-600'}`}>{item.estado}</TableCell>
                    <TableCell className=' font-bold'>{item.asignado}</TableCell>
                    <TableCell className="flex flex-row gap-2">
                        <ClientEdit cliente = {item}></ClientEdit>
                        <ClientShow cliente = {item}></ClientShow>
                        <button onClick={() => { removeCliente(item.id) }}>
                            <RiDeleteBinLine aria-label='Remove element'></RiDeleteBinLine>
                        </button>
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
      </div>
      </>
  )
}
