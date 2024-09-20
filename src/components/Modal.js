import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {userValidationSchema} from "../validations/userValidation"
 
import './Style.css'

var icon = <svg xmlns="http://www.w3.org/2000/svg" width="45
" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
<path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
</svg>

const BACKGROUND_STYLE = {
    
  position: 'fixed',
  width:'55%',
  top: '0',
  left: '400px',
  backgroundColor: '#fff',
  zIndex: '1000'
}


export default function Modal({ isOpen, setModalOpen, children, props }) {
  const { register, handleSubmit, formState: {errors} } = useForm ({
    resolver: yupResolver(userValidationSchema)
  })

  function handleFilterProducts(data) {
    console.log(data)
  }
  console.log(errors)

  if (isOpen) {
    return (
    <div style={BACKGROUND_STYLE}>

<form onSubmit={handleSubmit(handleFilterProducts)} class=' relative font-sans'>         
    <div class="mt-4 text-base leading-5 border-s-blue-fit border-8 border-s-8 rounded-xl" >
        <p id="close-up" class="close" onClick={setModalOpen}>&times;</p>
        <h1 class="flex p-4 font-sans text-4xl text-blue-fit">Criar Tarefa {icon}</h1>    
        <div class="absolute h-96 border border-black right-2/4">
        </div>
        <div class="">
        <div class=" p-4 fixed w-2/4 translate-x-full right-2/4" id="rigth">
            <div>
                <h1>Comentário:</h1>
            </div>
            <div className="coment" class=" mt-8">
                <label class="flex text-blue-fit" for="defina-coment">
                Entrar em contato com o cliente as 19:00
                </label>
                <input 
                class="w-80 mt-3.5 border-b-black border-b-2 outline-none" 
                type="text" 
                id="usuario" 
                autocomplete="off" 
                {...register("cliente")} ></input>
                <div>{errors?.cliente?.message}</div>
                <label class="mt-3.5 flex text-blue-fit" for="defina-coment">
                Realize 9x tentativas de contato!
                </label>
                <input 
                class="w-80 mt-3.5 bg-transparent border-b-black border-b-2 outline-none  " 
                type="text" 
                id="usuario" 
                autocomplete="off" 
                {...register("tentatives")}></input>
                <div>{errors?.tentatives?.message}</div>
            </div>
        </div>
        
        <div class="p-4" >
            <div>
              <p class="flex font-sans font-bold text-blue-fit">Defina como prioridade:</p>
            </div>
            <div class="flex mt-3">
              <input id="inline-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <label for="html" class="w-20 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Normal</label>
              <input 
              id="inline-2-radio" 
              type="radio" 
              value="" 
              name="inline-radio-group" 
              class="w-4 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/> 
              <label for="inline-2-radio" class="w-20 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Importante</label>
              <input 
              checked id="inline-checked-radio" 
              type="radio" 
              value="" 
              name="inline-radio-group" 
              class="w-4 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <label for="inline-checked-radio" class="w-20 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Critico</label>
            </div>
        </div>
    </div>
            <div id= "set-the-id" class="flex p-4 text-sm">
                <div class= "w-52 mt-3">
                    <label class="tracking-wide font-sans font-bold mb-2 text-blue-fit " for="defina-o-id">
                    Defina o ID:
                    </label>
                    <input 
                    class="w-44 bg-gray text-gray border-2 border-black rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 " 
                    id="please-camp" 
                    type="text" 
                    placeholder="Escreva aqui o ID" 
                    required autocomplete="off"  
                    {...register ("id")}
                    />
                </div>   
                <div class="mt-3 ">
                    <label class="tracking-wide font-sans font-bold mb-2 text-blue-fit" for="defina-date" type="text" placeholder="date">
                    Defina uma data de entrega:
                    </label>
                    <input 
                    class="flex w-60 bg-gray text-gray border-2 border-black rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    name="date"
                    type="date" 
                    placeholder="date"
                    {...register("date")}
                    /> 
                    <div>{errors?.date?.message}</div>
                    
                </div>
            </div>
                <div className="coitainer-check" class="flex p-4 text-sm">
                    <div class="w-52 mt-3 ">
                        <label for="countries" class="tracking-wide font-sans font-bold mb-2 text-blue-fit" placeholder="selecione">Defina o assunto:</label>
                        <select 
                        {...register("subject")}  
                        id="countries" 
                        class="bg-gray text-gray border-2 border-black rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ">
                        <option class="text-grey " value="" disabled selected hidden>selecione assunto</option>
                        <option value="0">teste1</option>
                        <option value="1">teste2</option>
                        <option value="2">teste3</option>
                        
                        </select>
                        <div>{errors?.subject?.message}</div>
                        
                    </div>
                    <div class="w-52 mt-3" >
                        <label for="countries" class="tracking-wide font-sans font-bold mb-2 text-blue-fit" placeholder="selecione">Defina o colaborador:</label>
                        <select 
                        {...register("collaborator")}
                        id="countries" 
                        class=" bg-gray text-gray border-2 border-black rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                        <option class="text-black-500" value="" disabled selected hidden>Selecione o colaborador</option>
                        <option value="0">teste4</option>
                        <option value="1">teste5</option>
                        <option value="2">teste6</option>
                        </select>
                        <div>{errors?.collaborator?.message}</div>
                    </div>
                </div>  
                <div class="mt-3 p-4 text-sm">
                    <label class="tracking-wide font-sans font-bold mb-2 text-blue-fit" for="defina-coment">
                    Defina um comentario: (opcional)
                    </label>
                    <input 
                    class=" flex w-96 bg-gray text-gray-700 border-2 border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                    type="text" 
                    placeholder="Escreva um comentario" 
                    {...register("coment")} 
                    />
                    <div>{errors?.coment?.message}</div>
                </div>
                <div class=" flex p-4 ">
                   <button class="w-36 text-white bg-gradient-to-r from-blue-fit via-blue-fit to-blue-fit hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Cadastrar</button>                  
                </div>
     </div>
     
</form>
    </div>
    
    
        
    )
  }

  return null
}

