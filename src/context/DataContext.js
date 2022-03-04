import { createContext, useState } from 'react'

export const DataContext = createContext()

const DataContextProvider = (props) => {
  const [fetch, setFetch] = useState('dataFromMock')
  const toggleFetch = () => {
    setFetch(fetch == 'dataFromApi' ? 'dataFromMock' : 'dataFromApi')
  }

  return (
    <DataContext.Provider value={(fetch, toggleFetch)}>
      {props.children}
    </DataContext.Provider>
  )
}
export default DataContextProvider
