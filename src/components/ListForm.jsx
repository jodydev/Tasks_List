import React, { useState } from 'react';

function ListForm({ addTask }) {
  
  const [task, setTask] = useState('');

  const formSubmitted = (event) => {
    event.preventDefault();
    if (task.trim() !== '') {
      addTask(task);
      setTask('');
    }
  }

  const getContentTask = (event) => {
    setTask(event.currentTarget.value);
  }

  
  return (
    <div className="container p-0 p-lg-5">
      <div className="row my-5">
        <div className="col-12 d-flex justify-content-center aling-items-center">
          <div className="row">
            <form onSubmit={formSubmitted} className='slide-in-blurred-top'>
              <input
                type="text"
                name="text"
                id="newTask"
                onChange={getContentTask}
                value={task}
                placeholder="Aggiungi un task..."
                className="input"
              />
              <button type="submit" className="button" disabled={task.trim() === ''}>
                <span><i className="fa-solid fa-plus"></i></span>
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default ListForm;
