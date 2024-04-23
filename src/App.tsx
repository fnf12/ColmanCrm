import ClientList from './components/ClientList'

function App (): JSX.Element {
  return (
    <>
    <div className='flex flex-col items-center p-4 bg-tremor-background h-screen'>
      <ClientList/>
    </div>
    </>
  )
}

export default App
