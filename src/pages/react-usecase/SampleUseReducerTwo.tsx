import React, { useState, useReducer } from "react";

import AddTask from "@components/react-sample/sample-reducer/AddTask";
import TaskList from "@components/react-sample/sample-reducer/TaskList";
import { TaskType } from "@/components/react-sample/sample-reducer/sample";

// export default function SampleUseReducerTwo() {
//   const [tasks, setTasks] = useState(initialTasks);

//   function handleAddTask(text: string) {
//     setTasks([
//       ...tasks,
//       {
//         id: nextId++,
//         text: text,
//         done: false,
//       },
//     ]);
//   }

//   function handleChangeTask(task: TaskType) {
//     setTasks(
//       tasks.map((t) => {
//         if (t.id === task.id) {
//           return task;
//         } else {
//           return t;
//         }
//       })
//     );
//   }

//   function handleDeleteTask(taskId: number) {
//     setTasks(tasks.filter((t) => t.id !== taskId));
//   }

//   return (
//     <>
//       <h1>Prague itinerary</h1>
//       <AddTask onAddTask={handleAddTask} />
//       <TaskList
//         tasks={tasks}
//         onChangeTask={handleChangeTask}
//         onDeleteTask={handleDeleteTask}
//       />
//     </>
//   );
// }

export enum TaskActionType {
  ADD_TASK = "ADD_TASK",
  CHANGE_TASK = "CHANGE_TASK",
  DELETE_TASK = "DELETE_TASK",
}
interface AddedAction {
  type: TaskActionType.ADD_TASK;
  payload: {
    id: number;
    text: string;
  };
}
interface ChangedAction {
  type: TaskActionType.CHANGE_TASK;
  payload: {
    task: TaskType;
  };
}
interface DeletedAction {
  type: TaskActionType.DELETE_TASK;
  payload: {
    id: number;
  };
}

export type TasksAction = AddedAction | ChangedAction | DeletedAction;

function tasksReducer(tasks: TaskType[], action: TasksAction) {
  switch (action.type) {
    case TaskActionType.ADD_TASK: {
      return [
        ...tasks,
        {
          id: action.payload.id,
          text: action.payload.text,
          done: false,
        },
      ];
    }
    case TaskActionType.CHANGE_TASK: {
      return tasks.map((t) => {
        if (t.id === action.payload.task.id) {
          return action.payload.task;
        } else {
          return t;
        }
      });
    }
    case TaskActionType.DELETE_TASK: {
      return tasks.filter((t) => t.id !== action.payload.id);
    }
    default: {
      throw Error("Unknown action");
    }
  }
}

export default function SampleUseReducerTwo() {
  // const [tasks, setTasks] = useState(initialTasks);
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text: string) {
    /* 
  dispatch({ // action 이라고 함})
  
  */
    dispatch({
      type: TaskActionType.ADD_TASK,
      payload: {
        id: nextId++,
        text: text,
      },
    });
  }

  function handleChangeTask(task: TaskType) {
    dispatch({
      type: TaskActionType.CHANGE_TASK,
      payload: {
        task: task,
      },
    });
  }

  function handleDeleteTask(taskId: number) {
    dispatch({
      type: TaskActionType.DELETE_TASK,
      payload: {
        id: taskId,
      },
    });
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

let nextId = 3;
const initialTasks: TaskType[] = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];
