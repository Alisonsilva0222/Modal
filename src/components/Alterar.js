import React from 'react'
import './Style.css'
import { useForm } from 'react-hook-form'
import Modal from './Modal'

var icon = <svg xmlns="http://www.w3.org/2000/svg" width="45
" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
<path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
</svg>

const BACKGROUND_STYLE = {
  position: 'fixed',
  top: '0',
  left: '500px',
  backgroundColor: '#fff',
  zIndex: '1000'
}


  

export default function Alterar({ isOpen, setModalOpen, children, props  }) {
  const { register, handleSubmit } = useForm ()

  function handleFilterProducts(data) {
    console.log(data)
  }

  if (isOpen) {
    return (
      <div style={BACKGROUND_STYLE}>
        <div className='coitainer' class="mt-52 text-blue-fit border-s-blue-fit border-8 border-s-8 rounded-xl" >

<div onSubmit={handleSubmit(handleFilterProducts)}>
  <p id="close-up" className="close" onClick={setModalOpen}>&times;</p> 
    </div>  
    <div className='title'>
      <h1 class="flex justify-center p-4 font-sans text-4xl">Deseja Excluir essa Tarefa Ativa? {icon}</h1>  
    </div>
    <p className="p-5 text-gray-500 text-xl ">Resumo do Card</p>
    <div className='p-5 '>
      <p>ID- Frascisca</p>
      <p>Assunto:Cliente</p>
      <p>Colaborador: Alison da Silva</p>
      <p>Data:02/08/204 - 23:99:00</p>
    </div> 
      

    <div class=" mt-8">
      <div class="p-2 flex justify-center">
          <button type="submit" class=" w-36 text-white bg-gradient-to-r from-blue-fit via-blue-fit to-blue-fit hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sim!</button>
          <button type="submit" class=" w-32 text-white bg-gradient-to-r from-blue-500 via-blue-fit-600 to-bluew-36 text-white bg-gradient-to-r from-blue-fit via-blue-fit to-blue-fit hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Não!</button>
      </div>
    </div>
  </div>
</div>

          

    )
  }

  return null
}
