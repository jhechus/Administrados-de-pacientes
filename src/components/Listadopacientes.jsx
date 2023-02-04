import Paciente from "./Paciente"

function Listadopacientes({Pacientes, setPaciente, eliminarPaciente}) {


  return (
    <div className=" md:w-1/2 lg:w-3/5 ">

      {Pacientes && Pacientes.length ? (
        <>
          <h2 className=" font-black text-3xl text-center">
            Listado Pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra Tus {''}
            <span className=" text-indigo-600 font-bold"> 
              Pacientes y Tus citas
            </span>
          </p>

        { Pacientes.map( (paciente) => (
            <Paciente
              key = {paciente.id}
              paciente = {paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className=" font-black text-3xl text-center">
            No hay pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Agrega un {''}
            <span className=" text-indigo-600 font-bold"> 
              Paciente
            </span>
          </p>
        </>
      )}

      

      
 
    </div>
  )
}

export default Listadopacientes
