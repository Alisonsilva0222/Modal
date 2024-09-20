import "./components/Style.css"
import { useState } from 'react'
import  './components/Modal'
import Modal from "./components/Modal"
import Alterar from "./components/Alterar"


function App() {
  const [openModal, setOpenModal] = useState(false)
  const [openModal2, setOpenModal2] = useState(false)

  return (
  <div class="p-20">
    <div class= " font-sans text-2xl font-bold" className='App'>
      <div class="flex justify-center" className="coitaner">
      <div class ="flex text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        <button onClick={() => setOpenModal(true)}>Abrir o modal 1</button>
      </div>
      <div class ="flex text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        <button onClick={() => setOpenModal2(true)}>Abrir o modal2</button>
      </div>
    </div>  
      
      <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
      
      </Modal>
      <Alterar isOpen={openModal2} setModalOpen={() => setOpenModal2(!openModal2)} >
      
      </Alterar>

     

    </div>
  </div>    
  )
}

export default App