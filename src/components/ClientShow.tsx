import { Dialog, DialogPanel, Title } from '@tremor/react'
import { RiCloseLine, RiEyeLine } from '@remixicon/react'
import { useState } from 'react'

export function ClientShow ({ cliente }: any): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <div>
        <button
            type="button"
            className="flex items-center mt-4 w-full whitespace-nowrap rounded-tremor-small px-2 py-1 text-tremor-default font-medium shadow-tremor-input dark:shadow-dark-tremor-input sm:mt-0 sm:w-fit"
            onClick={() => {
              setIsOpen(true)
            }}
        >
            <RiEyeLine/>
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
                <Title className='mb-2'> Info Cliente </Title>
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-row'>
                        <label className='mr-2'> Nombre y Apellido:</label>
                        <p>{cliente.nombre} {cliente.apellido}</p>
                    </div>
                    <div className='flex flex-row'>
                        <label className='mr-2'> Telefono:</label>
                        <p>{cliente.telefono}</p>
                    </div>
                    <div className='flex flex-row'>
                        <label className='mr-2'> Email:</label>
                        <p>{cliente.email}</p>
                    </div>
                    <div className='flex flex-row'>
                        <label className='mr-2'> Fecha de Creación:</label>
                        <p>{cliente.fechaC}</p>
                    </div>
                    <div className='flex flex-row'>
                        <label className='mr-2'> Estado:</label>
                        <p className={`${cliente.estado === 'Contactado' ? 'text-green-600' : 'text-red-600'}`}>{cliente.estado}</p>
                    </div>
                    <div className='flex flex-row'>
                        <label className='mr-2'> Asignado a:</label>
                        <p className=' font-bold'>{cliente.asignado}</p>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    </>
  )
}
