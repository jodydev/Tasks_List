import React from 'react';


function CompletedTask({ tasks }) {

  const completedTasks = tasks.filter((task) => task.done);

  return (
    <div className="box container-list my-5 mx-5 rounded-4 slide-in-blurred-right">
      <h1 className="mx-3 py-3 fs-6 text-light">Completati</h1>
      <div className="box p-1">
        {completedTasks.length === 0 ? (
          <div className="item rounded-3 my-3 mx-2">
            <div className="container">
              <div className="row">
                <div className="col-12 p-0">
                  <p className="p-3 d-flex justify-content-start align-items-center text-light my-2 ">
                    Nessun task completato
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          completedTasks.map((task-2) => (
            <div className="item rounded-3 my-3 mx-2" key={task.id}>
              <div className="container">
                <div className="row">
                  <div className="col-12 p-0">
                    <p className="p-3 d-flex justify-content-start align-items-center text-light my-2 text-break">
                      {task.content}  ✅
                    </p>
                  </div>
                  
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CompletedTask;
