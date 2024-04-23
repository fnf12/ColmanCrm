import { Dialog, DialogPanel, TextInput, Title } from '@tremor/react'
import { useClientesActions } from '../hooks/useClientesActions'
import { RiCloseLine, RiPencilLine } from '@remixicon/react'
import { useState } from 'react'

export function ClientEdit ({ cliente }: any): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const { editCliente } = useClientesActions()
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    const formData = new FormData(form)

    const id = cliente.id
    const fechaC = cliente.fechaC
    const nombre = formData.get('nombre') as string
    const apellido = formData.get('apellido') as string
    const telefono = formData.get('telefono') as string
    const email = formData.get('email') as string
    const estado = formData.get('selectEstado') as string
    const asignado = formData.get('selectAsignado') as string
    // console.log(nombre, apellido, telefono, email, estado, asignado)
    editCliente({ id, nombre, apellido, telefono, email, estado, asignado, fechaC })
    setIsOpen(false)
  }

  return (
    <>
    <div>
        <button
            type="button"
            className="flex items-center mt-4 w-full whitespace-nowrap rounded-tremor-small py-1 text-tremor-default font-medium shadow-tremor-input dark:shadow-dark-tremor-input sm:mt-0 sm:w-fit"
            onClick={() => {
              setIsOpen(true)
            }}
        >
            <RiPencilLine></RiPencilLine>
        </button>
        </div>
        <Dialog
        open={isOpen}
        onClose={() => {
          setIsOpen(false)
        }}
        static={true}
        className="z-[100]"
        >
            <DialogPanel className="sm:max-w-md">
                <div className="absolute right-0 top-0 pr-3 pt-3">
                <button
                    type="button"
                    className="rounded-tremor-small p-2 text-tremor-content-subtle hover:bg-tremor-background-subtle hover:text-tremor-content dark:text-dark-tremor-content-subtle hover:dark:bg-dark-tremor-background-subtle hover:dark:text-tremor-content"
                    onClick={() => {
                      setIsOpen(false)
                    }}
                    aria-label="Close"
                >
                    <RiCloseLine
                    className="h-5 w-5 shrink-0"
                    aria-hidden={true}
                    />
                </button>
                </div>
                <Title className='mb-2'> Nuevo Cliente </Title>
                <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
                    <TextInput
                        name='nombre'
                        placeholder='Nombre'
                        defaultValue={cliente.nombre}
                    />
                    <TextInput
                        name='apellido'
                        placeholder='Apellido'
                        defaultValue={cliente.apellido}
                    />
                    <TextInput
                        name='telefono'
                        placeholder='Telefono'
                        defaultValue={cliente.telefono}
                    />
                    <TextInput
                        name='email'
                        placeholder='Email'
                        defaultValue={cliente.email}
                    />
                    <div className='flex flex-row'>
                        <select defaultValue={cliente.estado} className="bg-tremor-background text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="selectEstado">
                            <option value="Contactado">Contactado</option>
                            <option value="No Contactado">No Contactado</option>
                        </select>
                    </div>
                    <div className='flex flex-row'>
                        <select defaultValue={cliente.asignado} className="bg-tremor-background text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="selectAsignado">
                            <option value="Juan">Juan</option>
                            <option value="Pedro">Pedro</option>
                            <option value="Ricardo">Ricardo</option>
                            <option value="Pepe">Pepe</option>
                            <option value="Sin Asignar">Sin Asignar</option>
                        </select>
                    </div>

                    <div className='mt-2'>
                        <button
                        className='flex items-center w-full whitespace-nowrap rounded-tremor-small bg-tremor-brand px-2 py-1 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis sm:mt-0 sm:w-fit'
                        type="submit"
                        >
                        Guardar
                        </button>
                    </div>
                </form>
            </DialogPanel>
        </Dialog>
    </>
  )
}
