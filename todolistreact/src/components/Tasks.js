import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Tasks = () => {

  const [taskStuff, setTaskStuff] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3001/taskLists', {
        headers: {
          "JWT-Token": localStorage.jwtToken
        }
      });
      console.log(response);
      setTaskStuff(response.data.taskLists);
    }
    fetchData();
  }, [])

  return (
    <div>
      {taskStuff?.map((taskList, index) => {
        return (
          <div>
            <h3>{taskList.name}</h3>
            {
              taskList?.tasks?.map((task, index) => {
                return(
                  <div>
                    title: {task.title}
                    <br/>
                    content: {task.content}
                    <br/>
                    completed: {String(task.completed)}
                    <br/>
                  </div>
                )
              })
            }
          </div>
        )
      })}
    </div>
  )
}

export default Tasks