import { useState } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import Listadopacientes from "./components/Listadopacientes"


function App() {

  const [Pacientes, setPacientes] = useState([]);

  return (
    <div className="container mx-auto mt-20">
      <Header 
      />

      <div className=" mt-12 md:flex">
        <Formulario 
          Pacientes = {Pacientes}
          setPacientes = {setPacientes}   
        />
        <Listadopacientes 
          Pacientes = {Pacientes}
        />
      </div>

    </div>
  )
}

export default App
