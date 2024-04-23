import { configureStore } from '@reduxjs/toolkit'
import clientesReducer from './clientes/slice'

const persistanceLocalStorageMiddleware = (store: any) => (next: any) => (action: any) => {
  next(action)
  localStorage.setItem('__redux__state__', JSON.stringify(store.getState()))
}

export const store = configureStore({
  reducer: {
    clientes: clientesReducer
  },
  middleware: (gDM) => gDM().concat(persistanceLocalStorageMiddleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
