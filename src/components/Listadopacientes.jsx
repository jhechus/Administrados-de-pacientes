import Paciente from "./Paciente"

function Listadopacientes() {
  return (
    <div className=" md:w-1/2 lg:w-3/5 ">
      <h2 className=" font-black text-3xl text-center">
        Listado Pacientes
      </h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra Tus {''}
        <span className=" text-indigo-600 font-bold"> 
          Pacientes y Tus citas
        </span>
      </p>

      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
 
    </div>
  )
}

export default Listadopacientes
