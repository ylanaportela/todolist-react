import { useState } from 'react'
import { FiPlus, FiTrash2 } from 'react-icons/fi'
import Header from '../../components/Header/Header'
import Menu from "../../components/Menu/Menu"
import Footer from '../../components/Footer/Footer'
import ImageTask from '../../assets/image-task.svg'
import './list.style.css'

const List = () => {
  const [list, setList] = useState([])
  const [newTask, setNewTask] = useState('')

  function handleCreateNewTask() {
    const task = {
      id: Math.random(),
      title: newTask,
      isComplete: false
    }

    if(task.title === '') {
      return
    }

    setList([...list, task])
    setNewTask('')
  }

  function handleToggleTakCompletion(id){
    const newTasks = list.map(task => task.id === id ?{
      ...task,
      isComplete: !task.isComplete
    }: task)

    setList(newTasks)
  }

  function handleRemoveTask(id) {
    const tasksFiltered = list.filter(task => task.id !== id)
    setList(tasksFiltered)
  }

  return(
    <>
    <Menu />
    <Header />
     <section className='list'>
      <header>
        <h2>Tarefas a fazer:</h2>
        <div className='input-container'>
          <input 
            type='text'
            placeholder='Adicionar nova tarefa'
            onChange={(e) => {setNewTask(e.target.value)}}
            value={newTask}
          />
          <button 
            type='submit' 
            className='add-task' 
            data-testid='add-task'
            onClick={handleCreateNewTask}
          >
           <FiPlus size={16} color='#fff'/> 
          </button>
        </div>
      </header>
      <div className='image-task'>
      <img src={ImageTask} alt='Ilustration about list'/>
      </div>
      
      <main>
        <ul>
          {list.map(task => (
            <li key={task.id}>
              <div className={task.isComplete ? 'completed' : ''} data-testid="task" >
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    checked={task.isComplete}
                    onClick={() => handleToggleTakCompletion(task.id)}
                    readOnly
                  />
                  <span className="checkmark"></span>
                </label>
                <p>{task.title}</p>
              </div>
              <button 
                className="remove-task"
                type="button" 
                data-testid="remove-task" 
                onClick={() => handleRemoveTask(task.id)}
              >
                <FiTrash2 size={16}/>
              </button>
            </li>
          ))}
          
        </ul>
      </main>
    </section> 
    <Footer />
    </>
  )
}

export default List
