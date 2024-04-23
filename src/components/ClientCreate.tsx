import { Dialog, DialogPanel, TextInput, Title } from '@tremor/react'
import { useClientesActions } from '../hooks/useClientesActions'
import { RiAddLine, RiCloseLine } from '@remixicon/react'
import { useState } from 'react'

export function ClientCreate (): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const { addCliente } = useClientesActions()
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    const formData = new FormData(form)

    const nombre = formData.get('nombre') as string
    const apellido = formData.get('apellido') as string
    const telefono = formData.get('telefono') as string
    const email = formData.get('email') as string

    console.log(nombre, apellido, telefono, email)
    addCliente({ nombre, apellido, telefono, email })
    setIsOpen(false)
  }

  return (
    <>
    <div>
        <button
            type="button"
            className="flex items-center mt-4 w-full whitespace-nowrap rounded-tremor-small bg-tremor-brand px-2 py-1 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis sm:mt-0 sm:w-fit"
            onClick={() => {
              setIsOpen(true)
            }}
        >
            <RiAddLine></RiAddLine>
            Añadir Cliente
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
                    />
                    <TextInput
                        name='apellido'
                        placeholder='Apellido'
                    />
                    <TextInput
                        name='telefono'
                        placeholder='Telefono'
                    />
                    <TextInput
                        name='email'
                        placeholder='Email'
                    />
                    <div className='mt-2'>
                        <button
                        className='flex items-center w-full whitespace-nowrap rounded-tremor-small bg-tremor-brand px-2 py-1 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis sm:mt-0 sm:w-fit'
                        type="submit"
                        >
                        Registrar Cliente
                        </button>
                    </div>
                </form>
            </DialogPanel>
        </Dialog>
    </>
  )
}
