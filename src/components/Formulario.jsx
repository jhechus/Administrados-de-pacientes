import {useState, useEffect} from 'react';
import Error from './Error';

function Formulario({ Pacientes, setPacientes, Paciente, setPaciente }) {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState (false)

  useEffect(() => {
    if(Object.keys(Paciente).length > 0) {
      setNombre(Paciente.nombre)
      setPropietario(Paciente.propietario)
      setEmail(Paciente.email)
      setFecha(Paciente.fecha)
      setSintomas(Paciente.sintomas)
    } 
  }, [Paciente])


  

  const hanleSubmit = (e) => {
    e.preventDefault();


    // validacion del formulario
    if([nombre, propietario, email, fecha, sintomas].includes('')) {
      console.log('Hay un campo vacio');

      setError(true)
      return;
    } 

    setError(false)

    // Generando un ID
    const generarId = () => {
      const random = Math.random().toString(36).substring(2);
      const fecha = Date.now().toString(36)

      return random + fecha
    }

    //Objeto de paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    }

    if(Paciente.id){
      //Editando registro
      objetoPaciente.id = Paciente.id

      const pacientesActualizados = Pacientes.map( PacienteState => PacienteState.id === Paciente.id ? objetoPaciente : PacienteState )

      setPacientes(pacientesActualizados)
      setPaciente({})

    } else {
      //Nuevo registro
      objetoPaciente.id = generarId();
      setPacientes([...Pacientes, objetoPaciente]);
    }

    //Reiniciar el formulario
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')

  }

  return (
    <div className=" md:w-1/2 lg:w-2/5 mx-5">
      <h2 className=" font-black text-3xl text-center"> 
        Seguimiento 
      </h2>
      <p className="text-lg mt-5 text-center mb-10  ">
        Añade Pacientes y
        <span className=" text-indigo-600 font-bold "> Administralos </span>
      </p>

{/* formulario */}
      <form action="" onSubmit={hanleSubmit} className=" bg-white shadow-md rounded-lg py-10 px-5">
        {error && (<Error><p>Favor de llenar todos los espacios</p></Error>)}

        <div className=" mb-5">
            <label htmlFor="mascota" className=" block text-gray-700 font-bold uppercase">
                Nombre Mascota
            </label>

            <input 
                id="mascota" 
                type="text" 
                placeholder="Nombre de la Mascota" 
                className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                value={nombre}
                onChange={ (e) => setNombre(e.target.value) }
            /> 
        </div>

        <div className=" mb-5">
            <label htmlFor="Propietario" className=" block text-gray-700 font-bold uppercase">
                Nombre Propietario
            </label>

            <input 
                id="Propietario" 
                type="text" 
                placeholder="Nombre del Propietario" 
                className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                value={propietario}
                onChange={ (e) => setPropietario(e.target.value) }
            /> 
        </div>

        <div className=" mb-5">
            <label htmlFor="email" className=" block text-gray-700 font-bold uppercase">
                e-mail
            </label>

            <input 
                id="email" 
                type="email" 
                placeholder="email" 
                className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                value={email}
                onChange={ (e) => setEmail(e.target.value) }
            /> 
        </div>

        <div className=" mb-5">
            <label htmlFor="alta" className=" block text-gray-700 font-bold uppercase">
                Alta
            </label>

            <input 
                id="alta" 
                type="date" 
                className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                value={fecha}
                onChange={ (e) => setFecha(e.target.value) }
            /> 
        </div>

        <div className=" mb-5">
            <label htmlFor="sintomas" className=" block text-gray-700 font-bold uppercase">
                Sintomas
            </label>

            <textarea name="" id="sintomas"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={ (e) => setSintomas(e.target.value) }>
            </textarea>
        </div>

        <input 
          type="submit"
          className=" bg-indigo-600 w-full p-3 text-white uppercase font-bold cursor-pointer hover:bg-black hover:ease-in duration-500" 
          value={Paciente.id ? 'Guardar cambios' : 'Agregar Paciente'}
        />

      </form>
    </div>
  )
}

export default Formulario
