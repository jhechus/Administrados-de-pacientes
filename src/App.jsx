import { useState } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import Listadopacientes from "./components/Listadopacientes"


function App() {

  const [Pacientes, setPacientes] = useState([]);
  const [Paciente, setPaciente] = useState({});

  const eliminarPaciente = (id) => {
    const pacientesActualizados = Pacientes.filter( Paciente => Paciente.id !== id);
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header 
      />

      <div className=" mt-12 md:flex">
        <Formulario 
          Pacientes = {Pacientes}
          setPacientes = {setPacientes}
          Paciente = {Paciente}
          setPaciente = {setPaciente}
        />
        <Listadopacientes 
          Pacientes = {Pacientes}
          setPaciente = {setPaciente}
          eliminarPaciente = {eliminarPaciente}
        />
      </div>

    </div>
  )
}

export default App
