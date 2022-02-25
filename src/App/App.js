import React from "react"
import { Routes, Route } from "react-router-dom"
import './App.css';
import DataContextProvider from "../context/DataContext"
import Dashboard from '../containers/dashboard/Dashboard'
import Home from "../containers/home/Home"
import Error404 from '../components/error404/Error404'


const App = () => {

  return (
    <div className="App" >
      <DataContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard/:id" element={<Dashboard />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </DataContextProvider>
    </div>
  )
}

export default App;