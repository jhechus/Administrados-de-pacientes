
function Paciente({paciente}) {

    const { nombre, propietario, email, fecha, sintomas } = paciente

  return (
    <div className=" m-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className=" font-bold mb-3 text-gray-700 uppercase"> Nombre: {''}
        <span className=" font-normal normal-case"> 
            {nombre}
        </span>
        </p>

        <p className=" font-bold mb-3 text-gray-700 uppercase"> Dueño: {''}
        <span className=" font-normal normal-case"> 
            {propietario}
        </span>
        </p>

        <p className=" font-bold mb-3 text-gray-700 uppercase"> Email: {''}
        <span className=" font-normal normal-case"> 
            {email}
        </span>
        </p>

        <p className=" font-bold mb-3 text-gray-700 uppercase">Fecha de alta: {''}
        <span className=" font-normal normal-case"> 
            {fecha}
        </span>
        </p>

        <p className=" font-bold mb-3 text-gray-700 uppercase"> Sintomas: {''}
        <span className=" font-normal normal-case"> 
            {sintomas}
        </span>
        </p>

        <div className=" flex justify-between mt-5">
            <button type="button"
                    className=" py-2 px-10 bg-indigo-600 text-white hover:bg-black ease-in duration-500 font-bold uppercase rounded-lg">
                Editar
            </button>

            <button type="button"
                    className=" py-2 px-10 bg-red-600 text-white hover:bg-black ease-in duration-500 font-bold uppercase rounded-lg">
                Eliminar
            </button>
        </div>
    </div>
  )
}

export default Paciente
