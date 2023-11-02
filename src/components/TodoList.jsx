import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CompletedTask from './CompletedTask';

function TodoList({ tasks, removeTask, doneTask}) {


  return (
    <div className="container">
      <div className="row">

      <div className="col-lg-6 col-sm-12 my-5 d-flex justify-content-end align-items-center">
          <div className="box container-list my-5 mx-5 rounded-4 slide-in-blurred-left">
            <h1 className="mx-3 py-3 fs-6 text-light">Da fare</h1>
            <div className="box p-1">
              {tasks.length === 0 ? (
                <div className="item rounded-3 my-3 mx-2">
                  <div className="container">
                    <div className="row">
                    <div className="col-12 p-0">
                    <p className="p-3 d-flex justify-content-start align-items-center text-light my-2 ">Nessun Task Presente</p>
                  </div>
                    </div>
                  </div>
                 
                </div>
              ) : (
                tasks.map((task) => (
                  <div className="item rounded-3 my-3 mx-2" key={task.id}>
                    <div className="container">
                      <div className="row">
                        <div className="col-6 p-0">
                          <p className="p-3 d-flex justify-content-start align-items-center text-light my-2 text-break">{task.content}</p>
                        </div>
                        <div className="col-6 d-flex justify-content-end p-0">

                          {/* Checkbox per completare il task */}
                          <Checkbox
                            onChange={() => doneTask(task.id, !task.done)}
                            className='check-box' 
                          />



                          <IconButton onClick={() => removeTask(task.id)}>
                            {/* Icona per eliminare il task */}
                            <DeleteIcon className='button-delete' aria-label='delete' />
                          </IconButton>

                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        

        <div className="col-lg-6 col-sm-12 d-flex justify-content-start align-items-center my-5">
          
          <CompletedTask tasks={tasks} />

        </div> 


      </div>
    </div>
  );
}

export default TodoList;






